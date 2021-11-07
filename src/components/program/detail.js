import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import { getUser } from "../../services/auth";
import Seo from "../seo";

const Detail = ({ id }) => {
  const [sessionData, setSessionData] = useState({});

  // fetch session details
  useEffect(() => {
    fetch(`https://mmasia2021.uqcloud.net/api/sessions/${id}`, {
      method: 'GET',
      headers: { "Authorization": `Bearer ${getUser().token}` }
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        setSessionData(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (<>
    <Seo pageMeta={{ title: sessionData.title || "Session" }} />
    <div className="global-wrapper py-10">
      <Link to="/program/home" className="font-medium hover:underline py-2 pr-2">
        &lsaquo;&nbsp;Back
      </Link>
      {(sessionData && Object.keys(sessionData).length === 0 && Object.getPrototypeOf(sessionData) === Object.prototype) ? (<>
        <h3 className="text-xl mt-6 mb-2 font-bold text-semiBlack">Session details not available.</h3>
        <p>Please try again later.</p>
      </>) : (<>
        <h1 className="text-4xl mt-6 mb-6 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">{sessionData?.title}</h1>
        <p>{sessionData?.start} - {sessionData?.end}</p>
      </>)}
    </div>
  </>);
};

export default Detail;
