import React, { Fragment } from "react";
import { Link } from "gatsby";

// sample data for testing purposes
const data = [
  { id: "1", start: 9, end: 11, day: 1, name: "Session #1" },
  { id: "2", start: 11, end: 14, day: 1, name: "Session #2" },
  { id: "3", start: 16, end: 17, day: 1, name: "Session #3" },
  { id: "4", start: 10, end: 12, day: 2, name: "Session #4" },
  { id: "5", start: 9, end: 10, day: 3, name: "Session #5" },
];

const Dashboard = () => {
  const timeOffset = 10;
  const scale = 2;

  const Session = ({ id, start, end, day, name }) => {
    const startRow = (start - (timeOffset - 1)) * scale + 1;
    const endRow = startRow + (end - start) * scale;

    return (
      <Link to={`/program/session/${id}`}
        className="bg-gray-600 hover:bg-gray-500 duration-100 rounded-md font-semibold text-sm text-gray-100 p-1"
        style={{
          "gridRowStart": startRow,
          "gridRowEnd": endRow,
          "gridColumnStart": day + 1
        }}>
        <span className="">
          {name}
        </span>
      </Link>
    );
  };

  return (
    <div className="global-wrapper py-10">
      <h1 className="text-4xl mb-10 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">Program</h1>
      <h2 className="text-xl mb-6 font-bold font-headingStyle">Announcement</h2>
      <h2 className="text-xl mb-6 font-bold font-headingStyle">Event Schedule</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="grid gap-8 grid-rows-1 mb-2 place-items-center font-semibold"
          style={{ "gridTemplateColumns": "50px auto auto auto" }}>
          <div className="col-start-2">Wed 1 Dec</div>
          <div className="">Thu 2 Dec</div>
          <div className="">Fri 3 Dec</div>
        </div>

        <div className="h-96 grid grid-flow-col gap-x-8 gap-y-1"
          style={{
            "gridTemplateColumns": "50px auto auto auto",
            "gridTemplateRows": `repeat(${scale * 9}, minmax(0, 1fr))`
          }}>
          {[...Array(9).keys()].map((num, index) => (
            <div key={index} className="row-span-2 flex justify-end font-semibold">
              {num + timeOffset - 1}:00
            </div>))}
          {data.map((session, index) => (
            <Fragment key={index}>
              <Session id={session.id} start={session.start} end={session.end} day={session.day} name={session.name} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
