import React, { useEffect } from "react";
import { Link } from "gatsby";

// sample data for testing purposes
const data = {
  '1': { name: "Welcome Session", description: "Description of Session 1" },
  '2': { name: "Intro to the speakers", description: "Description of Session 2" },
  '3': { name: "Session #3", description: "Description of Session 3" },
  '4': { name: "Session #4", description: "Description of Session 4" },
  '5': { name: "Session #5", description: "Description of Session 5" }
};

const Detail = ({ id }) => {
  return (
    <div className="global-wrapper py-10">
      <Link to="/program/home" className="font-medium hover:underline py-2 pr-2">
        &lsaquo;&nbsp;Back
      </Link>
      <h1 className="text-4xl mt-6 mb-6 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">{data[id].name}</h1>
      <p>{data[id].description}</p>
    </div>
  );
};

export default Detail;
