import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import { getUser } from "../../services/auth";
import Seo from "../seo";

const Detail = ({ id, template=null }) => {
  const [sessionData, setSessionData] = useState({});

  // fetch session details
  useEffect(() => {
    fetch(`https://mmasia2021.uqcloud.net/api/sessions/${id}`, {
      method: 'GET',
      headers: { "Authorization": `Bearer ${getUser().token}` }
    }).then(res => res.json())
      .then(data => {
        setSessionData(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (<>
    <Seo pageMeta={{ title: sessionData.title || "Session" }} />
    <div className="max-w-7xl px-8 lg:px-24 py-10 mx-auto">
      <Link to="/program/home" className="font-medium hover:underline py-2 pr-2">
        &lsaquo;&nbsp;Back
      </Link>
      <h1 className="text-2xl mt-6 mb-6 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">{sessionData?.name}</h1>
      <div className="max-h-96 overflow-auto border mt-8 text-sm">
        <p className="whitespace-pre-wrap font-mono">
          From {`https://mmasia2021.uqcloud.net/api/sessions/${id}`}<br/>
          {JSON.stringify(sessionData, null, 2)}
        </p>
      </div>
    </div>
  </>);
};

export default Detail;
