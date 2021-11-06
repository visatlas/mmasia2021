import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import spacetime from "spacetime";
import { getUser } from "../../services/auth";
import TimezoneSelect from './timezone';
import { getTimezonePref, setTimezonePref } from "../../services/preferences";
import Seo from "../../components/seo";

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);  // Fetched sessions data from API
  const [timezone, setTimezone] = useState({
    value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    offset: spacetime.now(Intl.DateTimeFormat().resolvedOptions().timeZone).timezone().current.offset
  });
  const [groupedSessions, setGroupedSessions] = useState([]);  // Processed sessions data with local timezone

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
    // Group sessions by day
    setGroupedSessions(sessions.reduce((r, a) => {
      const startTimestamp = convertTimezone(a.start, timezone.offset);
      const startDay = startTimestamp.toLocaleString('default',
        { weekday: 'short', timeZone: "UTC" }
      );
      const startDate = startTimestamp.toLocaleString('default',
        { day: 'numeric', timeZone: "UTC" }
      );
      const startMonth = startTimestamp.toLocaleString('default',
        { month: 'long', timeZone: "UTC" }
      );
      a.startLocalTime = startTimestamp.toLocaleString('default',
        { hour: 'numeric', minute: 'numeric', hourCycle: 'h12', timeZone: "UTC" }
      );
      const endTimestamp = convertTimezone(a.end, timezone.offset);
      a.endLocalTime = endTimestamp.toLocaleString('default',
        { hour: 'numeric', minute: 'numeric', hourCycle: 'h12', timeZone: "UTC" }
      );
      r[`${startDay}, ${startDate} ${startMonth}`] = [...r[`${startDay}, ${startDate} ${startMonth}`] || [], a];
      return r;
    }, {}));
  }, [timezone, sessions]);

  useEffect(() => {
    // Remember user choice of timezone
    setTimezonePref(timezone.value);
  }, [timezone]);

  return (<>
    <Seo pageMeta={{ title: "Program" }} />
    <div className="max-w-7xl mx-auto py-10 px-5 lg:px-21">
      <h1 className="text-4xl mb-10 px-3 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">
        Program
      </h1>
      <h2 className="text-2xl mb-6 px-3 font-bold font-headingStyle text-mainPurple">Announcement</h2>
      <p className="mb-10 px-3">
        The program will be updated soon.
      </p>
      <h2 className="text-2xl mb-6 px-3 font-bold font-headingStyle text-mainPurple">Event Schedule</h2>
      <div className="mb-0 lg:mb-6">
        <p className="px-3 mb-2 font-bold font-headingStyle tracking-semiWide">Please make sure the timezone matches your region:</p>
        <TimezoneSelect labelStyle="abbrev" value={timezone} onChange={setTimezone}
          styles={{
            option: (provided) => ({
              ...provided,
              cursor: 'pointer',
            }),
            control: (provided) => ({
              ...provided,
              borderColor: '#eaeaea',
              cursor: 'pointer',
            })
          }}
        />
      </div>

      {groupedSessions.length === 0 && (<p className="px-3 font-medium">Loading...</p>)}
      <div className="flex flex-col lg:flex-row gap-x-5">
        {Object.keys(groupedSessions).map((key, index) => {
          return (<div className="flex-1" key={index}>
            <h3 className="pl-3 text-lg mb-3 mt-6 lg:mt-0 font-bold font-headingStyle">{key}</h3>
            <div className="program-list border rounded-md divide-y divide-gray-200">
              {groupedSessions[key].map((session, index) => {
                let bgStyle = "";
                switch (session.type) {
                  case "red": bgStyle = 'bg-pink-50 hover:bg-pink-100'; break;
                  case "blue": bgStyle = "bg-sky-50 hover:bg-sky-100"; break;
                  case "yellow": bgStyle = "bg-yellow-50 hover:bg-yellow-100"; break;
                  default: bgStyle = "bg-gray-50 hover:bg-gray-200";
                }
                const style = `${bgStyle} duration-100`;
                return (<div className={style} key={index}>
                  <Link className="" to={`/program/session/${session.id}`}>
                    <div className="px-3 py-3">
                      <p className="mb-1 text-sm font-semibold text-mainPurple font-headingStyle tracking-semiWide">
                        {session.startLocalTime} - {session.endLocalTime}
                      </p>
                      {session.subtitle && <small className="font-bold">{session.subtitle}</small>}
                      <p className="mb-0 leading-5">{session.name}</p>
                    </div>
                  </Link>
                </div>);
              })}
            </div>
          </div>);
        })}
      </div>
    </div>
  </>);
};

export default Dashboard;
