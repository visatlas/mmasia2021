import React, { useEffect, useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Title({ allowVideo }) {
  const [playVideo, setPlayVideo] = useState(true);
  const [time, setTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(function tick() {
      // calculate countdown time
      const distance = new Date("2021-12-01T10:00:00+10:00").getTime() - new Date().getTime();
      let days = Math.floor(distance / 86400000);  // 1000 * 60 * 60 * 24
      let hours = Math.floor((distance % 86400000) / 3600000);  // 1000 * 60 * 60
      let minutes = Math.floor((distance % 3600000) / 60000);  // 1000 * 60
      let seconds = Math.floor((distance % 60000) / 1000);

      if (distance < 0) return () => clearInterval(timer);
      setTime({ days, hours, mins: minutes, secs: seconds });

      return tick;
    }(), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="hidden md:block"
        style={{ position: "relative", minHeight: "min(calc(100vw * 9 / 16), 100vh)", maxHeight: "100vh", overflow: "hidden" }}>
        {allowVideo && (
          // title video
          <video style={{
            position: "absolute", zIndex: "-1", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            minWidth: "100%", minHeight: "100%", width: "auto", height: "auto"
          }} autoPlay muted loop playsInline id="video">
            <source src="https://mmasia2021.uqcloud.net/uploads/gold-coast-drone.mp4" type="video/mp4" crossOrigin="anonymous" />
            {/* <source src="https://mmasia2021.uqcloud.net/uploads/gold-coast-drone.webm" type='video/webm' crossOrigin="anonymous" /> */}
          </video>
        )}

        {/* fallback image */}
        <StaticImage style={{
          position: "absolute", zIndex: "-2", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          minWidth: "100%", minHeight: "100%", width: "auto", height: "auto"
        }} placeholder="blurred" src="../images/gold-coast.jpg" alt="Gold Coast" loading="eager" layout="fullWidth" />

        <div className="pl-11 pr-4 py-8 rounded-b-xl shadow-lg w-87" style={{
          position: "absolute", top: "0%", right: "20%",
          backgroundColor: "rgba(236, 231, 241, 0.85)"
        }}>
          <h1 className="mb-2 font-titleFont text-black font-extrabold tracking-wide text-titleBig leading-titleBig">
            <span className="text-mainPurple">ACM</span> <br />Multimedia <br />Asia 2021<sup className="mb-4 font-regular text-lg">Hybrid</sup></h1>
          <p className="mb-4 font-semibold text-titleSmall">Gold Coast, Australia</p>
          <p className="mb-1 font-bold text-mainPurple text-titleMedium tracking-semiWide">1 - 3 December, 2021</p>
          <div className="flex space-x-2 w-full mb-7 h-7">
            {time && ["days", "hours", "mins", "secs"].map((item, key) => (
              <div className="flex items-baseline space-x-1" key={key}>
                <span className="font-semibold text-lg font-titleFont">{time[item]}</span>
                <span className="font-semibold text-xs">{time[item] !== 1 ? item : item.slice(0, -1)}</span>
              </div>
            ))}
          </div>
          <AnchorLink className="font-semibold text-titleSmall hover:underline text-mainPurple" to="/#welcome" title="Learn More &#8594;" />
        </div>

        {/* play/pause button */}
        {allowVideo && (<button type="button" className="p-4 mr-2 mt-2"
          style={{ position: "absolute", right: "0%", top: "0%" }} onClick={() => {
            playVideo ? document.getElementById("video").pause() : document.getElementById("video").play();
            setPlayVideo(!playVideo);
          }}>
          <span className="sr-only">Play/Pause Video</span>
          <p className="text-white font-bold">{playVideo ? (
            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="rgba(255, 255, 255, 0.5)"
              viewBox="0 0 47.607 47.607">
              <path d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
                C4.729,2.969,7.698,0,11.36,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
              <path d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
                C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/></svg>
          ) : (
            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="rgba(255, 255, 255, 0.5)"
              viewBox="0 0 460.114 460.114">
              <path d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,
                16.413-17.022,28.26v396.173c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832
                l290.981-198.087c8.746-5.954,13.98-15.848,13.98-26.428
                C407.519,219.477,402.285,209.582,393.538,203.629z"/></svg>
          )}</p>
        </button>
        )}
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <div className="global-wrapper pt-9 bg-purple-50">
          <div className="flex flex-col items-center">
            <h1 className="mb-2 font-titleFont text-black font-extrabold tracking-wide text-titleBig leading-titleBig text-center">
              <span className="text-mainPurple">ACM</span> <br />Multimedia <br />Asia 2021</h1>
            <p className="mb-4 font-semibold text-titleSmall" >Gold Coast, Australia</p>
            <p className="mb-1 font-bold text-mainPurple text-titleMedium tracking-semiWide">1 - 3 December, 2021</p>
            <div className="flex space-x-2 mb-7 h-7">
              {time && ["days", "hours", "mins", "secs"].map((item, key) => (
                <div className="flex items-baseline space-x-1" key={key}>
                  <span className="font-semibold text-lg font-titleFont">{time[item]}</span>
                  <span className="font-semibold text-xs">{time[item] !== 1 ? item : item.slice(0, -1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <StaticImage className="h-50 m-0 w-full top-0 left-0" placeholder="blurred"
          src="../images/gold-coast.jpg" alt="Gold Coast" loading="eager" />
      </div>
    </div>
  );
}
