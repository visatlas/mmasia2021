import React, { Fragment, useEffect, useState } from "react";
import { Link } from "gatsby";

import { getUser } from "../../services/auth";
import Seo from "../seo";

const Detail = ({ id }) => {
  const [sessionData, setSessionData] = useState({});
  const [paperData, setPaperData] = useState({});
  const [useYouTube, setUseYouTube] = useState(true);

  // fetch session and paper details
  useEffect(() => {
    fetch(`https://mmasia2021.uqcloud.net/api/sessions/${id}`, {
      method: "GET",
      headers: { "Authorization": `Bearer ${getUser().token}` }
    }).then(res => res.json())
      .then(data => {
        setSessionData(data);
        return data;
      })
      .then(data => {
        let papers = {};
        let resolvedPapers = {};
        if (!data.papers) return;
        if (Array.isArray(data.papers)) {
          papers["videos"] = data.papers.map(paper => paper.id);
        } else {
          Object.keys(data.papers).forEach(key => {
            papers[key] = data.papers[key];
          });
        }
        Object.keys(papers).forEach(key => {
          fetch(`https://mmasia2021.uqcloud.net/api/papers/`, {
            method: 'POST',
            headers: { "Authorization": `Bearer ${getUser().token}`, 'Content-Type': 'application/json', },
            body: JSON.stringify({ ids: papers[key] })
          })
            .then(res => res.json())
            .then(data => {
              resolvedPapers[key] = data;
              if (Object.keys(resolvedPapers).length === Object.keys(papers).length) {
                setPaperData(resolvedPapers);
              }
            })
            .catch(err => console.log(err));
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  const Card = ({ paper }) => {
    return (
      <div className="bg-gray-100 px-3 rounded-lg">
        {useYouTube ? (paper.youtube_link_embed && (
          <div className="my-2 rounded-lg" key={`youtube-${paper.title}`}>
            <div className="bg-white rounded-lg shadow-md"
              style={{ position: "relative", padding: "28.1% 45%" }}>
              <iframe
                style={{ borderRadius: "0.5em", position: "absolute", width: "100%", height: "100%", left: 0, top: 0 }}
                src={paper.youtube_link_embed}
                title={paper.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        )) : (paper.bilibili_link_embed && (
          <div className="player:pb-0 mt-2 rounded-lg" key={`bilibili-${paper.title}`}>
            <div className="bg-white rounded-lg"
              style={{ position: "relative", padding: "29% 45%", marginBottom: "0px" }}>
              <iframe
                style={{ borderRadius: "0.5em", position: "absolute", width: "100%", height: "100%", left: 0, top: 0 }}
                src={`${paper.bilibili_link_embed}&as_wide=1&high_quality=1&danmaku=0`}
                title={paper.title}
                frameBorder="no"
                scrolling="no"
                // border="0"
                allowFullScreen>
              </iframe>
              {/* <div className="hidden player:block bg-white w-full"
                style={{ position: "absolute", padding: "0 50%", height: "38px", bottom: 0, left: 0 }} /> */}
            </div>
          </div>
        ))}
        <h2 className="px-2 pt-4 text-lg mb-2 font-bold leading-6">{paper.title}</h2>
        <ul className="px-2 list-disc list-inside block mb-4">
          {paper["Author Names"].split("; ").map((author, index) => (
            <li className="text-sm leading-5 text-gray-700" key={index}>{author}</li>
          ))}
        </ul>
        {/* <a className="px-2 pb-4 block" href={paper.youtube_link} target="_blank" rel="noreferrer">View on YouTube</a> */}
      </div>
    );
  };

  return (<>
    <Seo pageMeta={{ title: sessionData.name }} />
    <div className="max-w-7xl px-8 lg:px-24 py-10 mx-auto">
      <Link to="/program/home" className="font-medium hover:underline py-2 pr-2">
        &lsaquo;&nbsp;Back
      </Link>
      <div className="flex w-full justify-between items-center">
        <h1 className="text-2xl mt-6 mb-3 font-bold font-headingStyle tracking-semiWide text-semiBlack">{sessionData?.name}</h1>
        <button onClick={() => setUseYouTube(!useYouTube)}>
          {useYouTube ? "View on Bilibili" : "View on YouTube"}
        </button>
      </div>
      <p>{sessionData?.subtitle}</p>
      {/* <p>{sessionData?.start} - {sessionData?.end}</p> */}

      {paperData?.videos && (<>
        <h2 className="text-lg mt-10 mb-0 font-bold font-headingStyle text-mainPurple tracking-semiWide pl-3 
          border-l-4 rounded-sm border-mainPurple">
          Presentations
        </h2>
        {/* <p>If videos are not loading, please click here.</p> */}
        <div className={`list-inside list-disc mt-5 grid gap-y-8 grid-cols-1 ${useYouTube && "md:grid-cols-2 lg:grid-cols-3"} gap-4`}>
          {paperData?.videos.map((paper, index) => {
            return (
              <Fragment key={`video-${paper.title}`}>
                <Card paper={paper} />
              </Fragment>
            );
          })}
        </div>
      </>)}

      {paperData["Brave New Idea Papers"] && (<>
        <h2 className="text-lg mt-10 mb-0 font-bold font-headingStyle text-mainPurple tracking-semiWide pl-3 
          border-l-4 rounded-sm border-mainPurple">
          Brave New Ideas
        </h2>
        <div className={`list-inside list-disc mt-5 grid gap-y-8 grid-cols-1 ${useYouTube && "md:grid-cols-2 lg:grid-cols-3"} gap-4`}>
          {paperData["Brave New Idea Papers"].map((paper, index) => {
            return (
              <Fragment key={index}>
                <Card paper={paper} />
              </Fragment>
            );
          })}
        </div>
      </>)}

      {paperData["Demo Papers"] && (<>
        <h2 className="text-lg mt-10 mb-0 font-bold font-headingStyle text-mainPurple tracking-semiWide pl-3 
          border-l-4 rounded-sm border-mainPurple">
          Demo Papers
        </h2>
        <div className={`list-inside list-disc mt-5 grid gap-y-8 grid-cols-1 ${useYouTube && "md:grid-cols-2 lg:grid-cols-3"} gap-4`}>
          {paperData["Demo Papers"].map((paper, index) => {
            return (
              <Fragment key={index}>
                <Card paper={paper} />
              </Fragment>
            );
          })}
        </div>
      </>)}

      {paperData["Short Papers"] && (<>
        <h2 className="text-lg mt-10 mb-0 font-bold font-headingStyle text-mainPurple tracking-semiWide pl-3 
          border-l-4 rounded-sm border-mainPurple">
          Short Papers
        </h2>
        <div className="list-inside list-disc mt-5 grid gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {paperData["Short Papers"].map((paper, index) => {
            return (
              <Fragment key={index}>
                <div className="bg-gray-100 px-3 rounded-lg">
                  <h2 className="px-2 pt-4 text-lg mb-2 font-bold leading-6">{paper.title}</h2>
                  <ul className="px-2 list-disc list-inside block mb-4">
                    {paper["Author Names"].split("; ").map(author => (
                      <li className="text-sm leading-5 text-gray-700">{author}</li>
                    ))}
                  </ul>
                  {useYouTube ? (
                    <a className="px-2 block mb-4 text-mainPurple font-semibold" href={paper.youtube_link} target="_blank" rel="noreferrer">{paper.youtube_link}</a>
                  ) : (
                    <a className="px-2 block mb-4 text-mainPurple font-semibold" href={paper.bilibili_link} target="_blank" rel="noreferrer">{paper.bilibili_link}</a>
                  )}

                </div>
              </Fragment>
            );
          })}
        </div>
      </>)}

      {/* <button onClick={() => navigate("/")}>Video not working?</button> */}
    </div>
  </>);
};

export default Detail;
