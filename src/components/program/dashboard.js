import React, { Fragment, useEffect, useState } from "react";
import { Link } from "gatsby";
import { getUser } from "../../services/auth";
import TimezoneSelect from './timezone';
import { getTimezonePref, setTimezonePref } from "../../services/preferences";

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);  // Fetched sessions data from API
  const [timezone, setTimezone] = useState({ value: Intl.DateTimeFormat().resolvedOptions().timeZone });
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
      setTimezone({ value: timezonePref });
    }
  }, []);

  const convertTZ = (date, tzString) => {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
  };
  
  useEffect(() => {
    // Group sessions by day
    setGroupedSessions(sessions.reduce((r, a) => {
      const startTimestamp = convertTZ(a.start, timezone.value);
      const startDay = startTimestamp.toLocaleDateString('default', { weekday: 'long' });
      const startDate = startTimestamp.getDate();
      const startMonth = startTimestamp.toLocaleString('default', { month: 'long' });
      a.startLocalTime = startTimestamp.toLocaleString('default', { hour: 'numeric', minute: 'numeric', hourCycle: 'h12' });
      const endTimestamp = convertTZ(a.end, timezone.value);
      a.endLocalTime = endTimestamp.toLocaleString('default', { hour: 'numeric', minute: 'numeric', hourCycle: 'h12' });
      r[`${startDay}, ${startDate} ${startMonth}`] = [...r[`${startDay}, ${startDate} ${startMonth}`] || [], a];
      return r;
    }, {}));
  }, [timezone, sessions]);

  useEffect(() => {
    // Remember user choice of timezone
    setTimezonePref(timezone.value);
  }, [timezone]);

  // const timeOffset = 10;
  // const scale = 2;

  // const Session = ({ id, start, end, day, name }) => {
  //   const startRow = (start - (timeOffset - 1)) * scale + 1;
  //   const endRow = startRow + (end - start) * scale;

  //   return (
  //     <Link to={`/program/session/${id}`}
  //       className="bg-gray-600 hover:bg-gray-500 duration-100 rounded-md font-semibold text-sm text-gray-100 p-1"
  //       style={{
  //         "gridRowStart": startRow,
  //         "gridRowEnd": endRow,
  //         "gridColumnStart": day + 1
  //       }}>
  //       <span className="">
  //         {name}
  //       </span>
  //     </Link>
  //   );
  // };

  return (
    <div className="global-wrapper py-10">
      <h1 className="text-4xl mb-10 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">Program</h1>
      <h2 className="text-2xl mb-6 font-bold font-headingStyle text-mainPurple">Announcement</h2>
      <p className="mb-10">
        The program will be updated soon.
      </p>
      <h2 className="text-2xl mb-6 font-bold font-headingStyle text-mainPurple">Event Schedule</h2>
      <div className="mb-6">
        <TimezoneSelect labelStyle="abbrev" value={timezone} onChange={setTimezone} />
      </div>

      {groupedSessions.length === 0 && (<p>Loading...</p>)}

      {Object.keys(groupedSessions).map((key, index) => {
        return (<Fragment key={index}>
          <h3 className="text-lg mb-3 mt-6 font-bold font-headingStyle">{key}</h3>
          {groupedSessions[key].map((session, index) => {
            return (<Fragment key={index}>
              <Link to={`/program/session/${session.id}`}>
                <div className="mb-3 border px-3 py-3 rounded-md bg-gray-50">
                  <p className="mb-0 text-sm font-semibold text-mainPurple">{session.startLocalTime} - {session.endLocalTime}</p>
                  <p className="mb-0">{session.name}</p>
                </div>
              </Link>
            </Fragment>);
          })}
        </Fragment>);
      })}

      {/* <div className="bg-gray-100 p-4 rounded-lg">
        <div className="grid gap-8 grid-rows-1 mb-2 place-items-center font-semibold"
          style={{ "gridTemplateColumns": "50px auto auto auto" }}>
          <div className="col-start-2">Wed 1 Dec</div>
          <div className="">Thu 2 Dec</div>
          <div className="">Fri 3 Dec</div>
        </div>

        <div className="relative h-96 grid grid-flow-col gap-x-8 gap-y-1"
          style={{
            "gridTemplateColumns": "50px auto auto auto",
            "gridTemplateRows": `repeat(${scale * 9}, minmax(0, 1fr))`
          }}>
          {[...Array(9).keys()].map((num, index) => (
            <div key={index} className="row-span-2 flex justify-end font-semibold">
              {num + timeOffset - 1}:00
            </div>))}

          {sessions.length ? sessions.map((session, index) => (
            <Fragment key={index}>
              <Session id={session.id} start={session.start} end={session.end} day={session.day} name={session.name} />
            </Fragment>
          )) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            z-50 font-semibold text-xl text-gray-400">Loading...</div>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
