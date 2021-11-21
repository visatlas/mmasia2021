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
      <h1 className="text-2xl mt-6 mb-3 font-bold font-headingStyle tracking-semiWide text-semiBlack">{sessionData?.name}</h1>
      <p>{sessionData?.subtitle}</p>
      <p>{sessionData?.start} - {sessionData?.end}</p>
      <h2 className="text-xl my-6 font-bold font-headingStyle tracking-semiWide text-semiBlack">Type</h2>
      <p>{sessionData?.type}</p>

      {sessionData.papers && sessionData.papers.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold font-headingStyle tracking-semiWide text-semiBlack">Papers List</h2>
          <ul className="list-inside list-disc mt-5">
            {sessionData.papers.map((paper, index) => (
              <li className="mb-0 font-medium" key={index}>
                <span>{paper.title}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6">Links will be available once we have received all submissions.</p>
        </div>
      )}

      {/* <div className="max-h-96 overflow-auto border mt-8 text-sm">
        <p className="whitespace-pre-wrap font-mono">
          From {`https://mmasia2021.uqcloud.net/api/sessions/${id}`}<br/>
          {JSON.stringify(sessionData, null, 2)}
        </p>
      </div> */}
    </div>
  </>);
};

export default Detail;
