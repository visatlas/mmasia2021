import React from "react";

const Program = () => {
  const timeOffset = 10;
  const scale = 2;

  const Session = ({ start, end, day, names }) => {
    const startRow = (start - (timeOffset - 1)) * scale + 1;
    const endRow = startRow + (end - start) * scale;

    return (
      <div className="bg-gray-600 rounded-md font-semibold text-sm text-gray-100 p-1" style={{
        "gridRowStart": startRow,
        "gridRowEnd": endRow,
        "gridColumnStart": day + 1
      }}>
        <span className="">{names}</span>
      </div>
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
          {[...Array(9).keys()].map(index => (<div className="row-span-2 flex justify-end font-semibold"
          // style={{ marginTop: "-5px" }}
          >
            {index + timeOffset - 1}:00
          </div>))}

          <Session start={9} end={11} day={1} names="Session 1" />
          <Session start={11} end={14} day={1} names="Session 2" />
          <Session start={16} end={17} day={1} names="Session 3" />
          <Session start={10} end={12} day={2} names="Session 4" />
          <Session start={9} end={10} day={3} names="Session 5" />
        </div>
      </div>
    </div>
  );
};

export default Program;
