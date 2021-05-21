import React, { useEffect, useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Title() {
  const [count, setCount] = useState("\u00A0");
  const [allowVideo, setAllowVideo] = useState(false);
  const [playVideo, setPlayVideo] = useState(true);

  // calculate countdown time
  useEffect(() => {
    let mounted = true;
    let countDownDate = new Date("Dec 1, 2021 00:00:00").getTime();

    let x = setInterval(function tick() {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (mounted) {
        setCount(days + "d " + hours + "h "
          + minutes + "m " + seconds + "s");

        if (distance < 0) {
          clearInterval(x);
          setCount("Event Closed");
        }
      }
      return tick;
    }(), 1000);

    setAllowVideo(true);

    return () => {
      mounted = false;
      clearInterval(x);
    };
  }, []);

  return (
    <div>
      <div className="relative hidden md:block" style={{ height: "calc(100vw * 9 / 16)" }}>
        {allowVideo && (
          /* title video */
          <video className='w-full top-0 left-0 videoTag m-0' autoPlay muted loop playsInline id="video">
            <source src="https://mmasia2021.uqcloud.net/uploads/GC.mp4" type='video/mp4' crossOrigin="anonymous" />
            <source src="https://mmasia2021.uqcloud.net/uploads/GC.mp4" type="video/ogg" crossOrigin="anonymous" />
          </video>
        )}

        {/* fallback image */}
        <StaticImage className="m-0 w-full top-0" placeholder="blurred"
          style={{ position: "absolute", zIndex: "-9999", left: "50%", transform: "translate(-50%, 0)" }}
          src="../images/GC.png" alt="Gold Coast" />

        <div className="px-12 py-8" style={{ position: "absolute", top: "0%", right: "20%", backgroundColor: "rgba(236, 231, 241, 0.85)" }}>
          <h1 className="mb-2 font-extrabold tracking-wide text-titleBig leading-titleBig">
            <span className="text-mainPurple">ACM</span> <br />Multimedia <br />Asia 2021</h1>
          <p className="mb-4 font-semibold text-titleSmall" >Gold Coast, Australia</p>
          <p className="mb-1 font-bold text-mainPurple text-titleMedium">1 - 3 December, 2021</p>
          <p className="w-full mb-8 font-semibold text-titleSmall">{count}</p>
          <AnchorLink className="font-semibold text-titleSmall hover:underline" to="/#welcome" title="Learn More.." />
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
                l290.981-198.087c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"/></svg>
          )}</p>
        </button>
        )}
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <div className="global-wrapper bg-purple-50">
          <div className="flex flex-col items-center">
            <h1 className="mb-2 font-extrabold tracking-wide text-titleBig leading-titleBig text-center">
              <span className="text-mainPurple">ACM</span> <br />Multimedia <br />Asia 2021</h1>
            <p className="mb-4 font-semibold text-titleSmall" >Gold Coast, Australia</p>
            <p className="mb-1 font-bold text-mainPurple text-titleMedium">1 - 3 December, 2021</p>
            <p className="w-full font-semibold text-titleSmall text-center">{count}</p>
          </div>
        </div>
        <StaticImage className="h-50 m-0 w-full top-0 left-0" placeholder="blurred" src="../images/GC.png" alt="Gold Coast" />
      </div>
    </div>
  );
}
