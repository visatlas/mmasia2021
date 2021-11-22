import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import spacetime from "spacetime";
import { getUser } from "../../services/auth";
import TimezoneSelect from './timezone';
import { getTimezonePref, setTimezonePref, getDatePref, setDatePref } from "../../services/preferences";
import Seo from "../../components/seo";

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);  // Fetched sessions data from API
  const [timezone, setTimezone] = useState({
    value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    offset: spacetime.now(Intl.DateTimeFormat().resolvedOptions().timeZone).timezone().current.offset
  });
  const [groupedSessions, setGroupedSessions] = useState([]);  // Processed sessions data with local timezone
  const [viewDay, setViewDay] = useState("");

  useEffect(() => {
    // Fetch sessions data
    fetch(`https://mmasia2021.uqcloud.net/api/sessions`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${getUser().token}` }
    }).then(res => res.json())
      .then(data => {
        setSessions(data);
      })
      .catch(err => console.log(err));

    // Get timezone preference
    const timezonePref = getTimezonePref();
    if (timezonePref) {
      setTimezone({
        value: timezonePref,
        offset: spacetime.now(timezonePref).timezone().current.offset
      });
    }
  }, []);

  // Convert time given offset
  const convertTimezone = (date, offset) => {
    return new Date((typeof date === "string" ? new Date(date) : date).getTime() + offset * 60 * 60 * 1000);
  };

  useEffect(() => {
    if (typeof sessions === 'object' && !Array.isArray(sessions)) return;
    // Group sessions by day
    const sessionGroups = sessions.reduce((r, a) => {
      const startTimestamp = convertTimezone(a.start, timezone.offset);
      const startDay = startTimestamp.toLocaleString('en-AU',
        { weekday: 'short', timeZone: "UTC" }
      );
      const startDate = startTimestamp.toLocaleString('en-AU',
        { day: 'numeric', timeZone: "UTC" }
      );
      const startMonth = startTimestamp.toLocaleString('en-AU',
        { month: 'long', timeZone: "UTC" }
      );
      a.startLocalTime = startTimestamp.toLocaleString('en-AU',
        { hour: 'numeric', minute: 'numeric', hourCycle: 'h12', timeZone: "UTC" }
      );
      const endTimestamp = convertTimezone(a.end, timezone.offset);
      a.endLocalTime = endTimestamp.toLocaleString('en-AU',
        { hour: 'numeric', minute: 'numeric', hourCycle: 'h12', timeZone: "UTC" }
      );
      r[`${startDay}, ${startDate} ${startMonth}`] = [...r[`${startDay}, ${startDate} ${startMonth}`] || [], a];
      return r;
    }, {});
    setGroupedSessions(sessionGroups);
    // Get timezone preference
    const datePref = getDatePref();
    setViewDay(sessionGroups.hasOwnProperty(datePref) ? datePref : Object.keys(sessionGroups)[0]);

  }, [timezone, sessions]);

  useEffect(() => {
    // Remember user choice of timezone and date select
    setTimezonePref(timezone.value);
    setDatePref(viewDay);
  }, [timezone, viewDay]);

  return (<>
    <Seo pageMeta={{ title: "Program" }} />
    <div className="max-w-7xl mx-auto py-10 px-5 lg:px-21">
      <h1 className="text-3xl mb-2 px-3 font-bold font-headingStyle tracking-semiWide text-semiBlack">
        Conference Schedule
      </h1>
      
      <p className="px-3 pt-8 mb-4 font-bold text-mainPurple font-headingStyle tracking-semiWide">
        Common Links
      </p>
      <ul className="px-3 mb-2 list-disc list-inside">
        <li className="font-semibold">Zoom Link:</li>
        <li className="font-semibold">Gather.Town Link:</li>
      </ul>
      <p className="px-3 mb-10">Click on the timetable to see the individual links and more.</p>

      <div className="mb-2">
        <p className="px-3 mb-2 font-bold text-mainPurple font-headingStyle tracking-semiWide">
          Select the desired time zone:
        </p>
        <TimezoneSelect labelStyle="abbrev" value={timezone} onChange={setTimezone}
          styles={{
            option: (provided) => ({
              ...provided,
              cursor: 'pointer',
            }),
            control: (provided) => ({
              ...provided,
              borderColor: '#F3F4F6',
              backgroundColor: '#F3F4F6',
              cursor: 'pointer',
              fontWeight: 600,
            })
          }}
        />
      </div>

      {Object.keys(groupedSessions).length === 0 && (<p className="mt-8 px-3 font-medium">Loading data...</p>)}

      <div className="bg-white pt-4 sticky top-[64px]">
        <div className="flex bg-gray-100 border-b-mainPurple border-b-2 gap-x-0 md:gap-x-6 rounded-tl-md rounded-tr-md">
          {Object.keys(groupedSessions).map((key, index) => {
            // set active style
            const active = key === viewDay ? "bg-mainPurple text-gray-200" : "text-mainPurple hover:bg-menuSelected";
            const style = `${active} hover:text-gray-100 duration-100 px-2 sm:px-4 py-2 
              text-sm sm:text-base lg:mt-0 font-bold font-headingStyle rounded-tl-md rounded-tr-md`;
            return (
              <button className={style} key={index}
                onClick={() => setViewDay(key)}>
                {key}
              </button>
            );
          })}
        </div>
      </div>

      <div className="program-list border-gray-200 bg-gray-100 divide-gray-200 pt-5 border-l-2 
        border-r-2 border-b-2 rounded-bl-md rounded-br-md divide-y ">
        {groupedSessions[viewDay]?.map((session, index) => {
          let bgStyle = "";
          switch (session.type) {
            case "zoom": bgStyle = 'bg-pink-50 hover:bg-pink-100'; break;
            case "video": bgStyle = "bg-sky-50 hover:bg-sky-100"; break;
            case "link": bgStyle = "bg-yellow-50 hover:bg-yellow-100"; break;
            default: bgStyle = "bg-gray-50";
          }
          const style = `${bgStyle} duration-100`;
          return (
            <div className={style} key={index}>
              {session.type !== "break" ? (
                <Link to={`/program/session/${session.id}`}>
                  <div className="px-3 py-3 block md:flex gap-x-8">
                    <p className="w-40 mb-1 md:mb-0 text-sm font-semibold text-mainPurple font-headingStyle tracking-semiWide">
                      {session.startLocalTime} - {session.endLocalTime}
                    </p>
                    <div>
                      <p className="leading-5 font-semibold mb-0">{session.name}</p>
                      {session.subtitle && <p className="mt-1 mb-0 text-sm leading-tight">{session.subtitle}</p>}
                      {Array.isArray(session.papers) && (
                        <ul className="list-inside list-disc mt-1">
                          {session.papers.map((paper, index) => (
                            <li className="mb-0 text-xs font-medium" key={index}>{paper.title}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="px-3 py-3 block md:flex gap-x-8">
                  <p className="w-40 mb-1 md:mb-0 text-sm font-semibold text-mainPurple font-headingStyle tracking-semiWide">
                    {session.startLocalTime} - {session.endLocalTime}
                  </p>
                  <div>
                    <p className="leading-5 font-semibold mb-0">{session.name}</p>
                    {session.subtitle && <p className="mt-1 mb-0 text-sm leading-tight">{session.subtitle}</p>}
                  </div>
                </div>
              )}
            </div>);
        })}
      </div>

      {/* <div className="max-h-148 overflow-auto border mt-8 text-sm font-mono">
        From {`https://mmasia2021.uqcloud.net/api/sessions`}<br />
        <p className="whitespace-pre-wrap">{JSON.stringify(sessions, null, 2)}</p>
      </div> */}
    </div>
  </>);
};

export default Dashboard;
