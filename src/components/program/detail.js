import React, { Fragment, useEffect, useState } from "react";
import { Link, navigate } from "gatsby";
import spacetime from "spacetime";
import { getTimezonePref } from "../../services/preferences";

import { getUser } from "../../services/auth";
import Seo from "../seo";

const Detail = ({ id }) => {
  const [sessionData, setSessionData] = useState({});
  const [paperData, setPaperData] = useState({});
  const [useYouTube, setUseYouTube] = useState(true);

  const [timezone, setTimezone] = useState({
    value: Intl.DateTimeFormat().resolvedOptions().timeZone,
    offset: spacetime.now(Intl.DateTimeFormat().resolvedOptions().timeZone).timezone().current.offset
  });
  const [resolvedTime, setResolvedTime] = useState({});
  const convertTimezone = (date, offset) => {
    return new Date((typeof date === "string" ? new Date(date) : date).getTime() + offset * 60 * 60 * 1000);
  };

  useEffect(() => {
    // Get timezone preference
    const timezonePref = getTimezonePref();
    if (timezonePref) {
      setTimezone({
        value: timezonePref,
        offset: spacetime.now(timezonePref).timezone().current.offset
      });
    }
  }, []);

  useEffect(() => {
    if (!sessionData || Object.keys(sessionData).length <= 0 || !timezone) return;
    const startTimestamp = convertTimezone(sessionData.start, timezone.offset);
    const startDate = startTimestamp.toLocaleString('en-AU',
      { day: 'numeric', timeZone: "UTC" }
    );
    const startMonth = startTimestamp.toLocaleString('en-AU',
      { month: 'long', timeZone: "UTC" }
    );
    let startLocalTime = startTimestamp.toLocaleString('en-AU',
      { hour: 'numeric', minute: 'numeric', hourCycle: 'h12', timeZone: "UTC" }
    );
    const endTimestamp = convertTimezone(sessionData.end, timezone.offset);
    let endLocalTime = endTimestamp.toLocaleString('en-AU',
      { hour: 'numeric', minute: 'numeric', hourCycle: 'h12', timeZone: "UTC" }
    );
    setResolvedTime({ startDate, startMonth, startLocalTime, endLocalTime });
  }, [sessionData, timezone]);

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
      <div className="bg-gray-100 px-3 rounded-lg block lg:flex">
        {useYouTube ? (paper.youtube_link_embed && (
          <div className="my-2 rounded-lg flex-shrink-0 flex-grow-0 w-full player:w-96" key={`youtube-${paper.title}`}>
            <div className="bg-black rounded-lg shadow-md"
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
          <div className="player:pb-0 rounded-lg my-2 flex-shrink-0 flex-grow-0 w-full lg:w-160" key={`bilibili-${paper.title}`}>
            <div className="bg-black rounded-lg"
              style={{ position: "relative", padding: "29% 45%", marginBottom: "0px" }}>
              <iframe
                style={{ borderRadius: "0.5em", position: "absolute", width: "100%", height: "100%", left: 0, top: 0 }}
                src={`${paper.bilibili_link_embed}&as_wide=1&high_quality=1&danmaku=0`}
                title={paper.title}
                frameBorder="no"
                scrolling="no"
                border="0"
                allowFullScreen>
              </iframe>
              {/* <div className="hidden player:block bg-gray-100 w-full"
                style={{ position: "absolute", padding: "0 50%", height: "38px", bottom: 0, left: 0 }} /> */}
            </div>
          </div>
        ))}
        <div className="pl-0 pt-0 player:pl-3 player:pt-1">
          <h2 className="px-2 pt-4 text-lg mb-2 font-bold leading-6">{paper.title}</h2>
          <ul className="px-2 list-disc list-inside block mb-4">
            {paper["Author Names"].split("; ").map((author, index) => (
              <li className="text-sm leading-5 text-gray-700" key={index}>{author}</li>
            ))}
          </ul>
          <a className="px-2 pb-4 text-mainPurple font-semibold flex items-center hover:underline" href={useYouTube ? paper.youtube_link : paper.bilibili_link} target="_blank" rel="noreferrer">
            {useYouTube ? "Watch on YouTube" : "Watch on Bilibili"}
            <svg className="h-4 w-4 ml-1 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
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
        <h1 className="text-2xl mt-6 mb-3 font-bold font-headingStyle tracking-semiWide text-semiBlack">
          {Object.keys(sessionData).length <= 0 ? "Loading..." : sessionData?.name}
        </h1>
        {sessionData?.papers && (
          <button className="bg-gray-100 px-4 py-2 rounded-md font-medium" onClick={() => setUseYouTube(!useYouTube)}>
            {useYouTube ? "Use Bilibili Sources" : "Use YouTube Sources"}
          </button>
        )}
      </div>
      <p>{sessionData?.subtitle}</p>

      <h2 className="text-lg mt-10 mb-4 font-bold font-headingStyle text-mainPurple tracking-semiWide pl-3 
        border-l-4 rounded-sm border-mainPurple">
        Session Detail
      </h2>
      <p className="">
        <span className="font-semibold">Time:&nbsp;&nbsp;</span>
        {Object.keys(resolvedTime).length <= 0 ? "Loading..." : (
          <span>{resolvedTime?.startDate} {resolvedTime?.startMonth}, {resolvedTime?.startLocalTime} - {resolvedTime?.endLocalTime} (UTC{timezone?.offset >= 0 ? `+${timezone?.offset}` : timezone?.offset})</span>
        )}
      </p>

      {paperData?.videos && (<>
        <h2 className="text-lg mt-10 mb-0 font-bold font-headingStyle text-mainPurple tracking-semiWide pl-3 
          border-l-4 rounded-sm border-mainPurple">
          Presentations
        </h2>
        <div className={`list-inside list-disc mt-5 grid grid-cols-1 gap-y-4`}>
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
        <div className={`list-inside list-disc mt-5 grid grid-cols-1 gap-y-4`}>
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
        <div className={`list-inside list-disc mt-5 grid grid-cols-1 gap-y-4`}>
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
        <div className="list-inside list-disc mt-5 grid grid-cols-1 gap-y-4">
          {paperData["Short Papers"].map((paper, index) => {
            return (
              <Fragment key={index}>
                <Card paper={paper} />
                {/* <div className="bg-gray-100 px-3 rounded-lg">
                  <h2 className="px-2 pt-4 text-lg mb-2 font-bold leading-6">{paper.title}</h2>
                  <ul className="px-2 list-disc list-inside block mb-4">
                    {paper["Author Names"].split("; ").map(author => (
                      <li className="text-sm leading-5 text-gray-700">{author}</li>
                    ))}
                  </ul>
                  {useYouTube ? (
                    <a className="px-2 block mb-4 text-mainPurple font-semibold" href={paper.youtube_link} target="_blank" rel="noreferrer">
                      Watch on YouTube<br />
                      <span className="text-sm">({paper.youtube_link})</span></a>
                  ) : (
                    <a className="px-2 block mb-4 text-mainPurple font-semibold" href={paper.bilibili_link} target="_blank" rel="noreferrer">
                      Watch on Bilibili at {paper.bilibili_link}</a>
                  )}
                </div> */}
              </Fragment>
            );
          })}
        </div>
      </>)}

      {sessionData?.papers ? (
        <button className="mt-10" onClick={() => navigate("/")}>
          Videos not loading? Click here to reload.
        </button>
      ) : (
        <p>Please use the conference main entry links to access.</p>
      )}
    </div>
  </>);
};

export default Detail;
