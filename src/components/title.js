import React, { useEffect, useState } from 'react';
// import sample from '../images/GC_lowres.mp4';
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Title() {
  const [count, setCount] = useState("\u00A0");

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

    return () => {
      mounted = false;
      clearInterval(x);
    };
  });

  return (
    <div>
      <div className="relative hidden md:block" style={{ height: "calc(100vw * 9 / 16)"}}>
        {/* title video */}
        <video className='w-full top-0 left-0 videoTag m-0' style={{ maxHeight: "1080px" }} autoPlay muted loop playsInline>
          <source src="https://mmasia2021.uqcloud.net/wp-content/uploads/GC.mp4" type='video/mp4' crossOrigin="anonymous" />
          <source src="https://mmasia2021.uqcloud.net/wp-content/uploads/GC.mp4" type="video/ogg" crossOrigin="anonymous" />
        </video>

        {/* fallback image */}
        <StaticImage className="m-0 w-full top-0" placeholder="blurred"
          style={{ position: "absolute", maxWidth: "1920px", maxHeight: "1080px", zIndex: "-9999", left: "50%", transform: "translate(-50%, 0)" }}
          src="../images/GC.png" alt="Gold Coast" />

        <div className="px-12 py-8" style={{ position: "absolute", top: "0%", right: "20%", backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
          <h1 className="mb-2 font-extrabold tracking-wide text-titleBig leading-titleBig">
            <span className="text-mainPurple">ACM</span> <br />Multimedia <br />Asia 2021</h1>
          <p className="mb-4 font-semibold text-titleSmall" >Gold Coast, Australia</p>
          <p className="mb-1 font-bold text-mainPurple text-titleMedium">1 - 3 December, 2021</p>
          <p className="w-full mb-8 font-semibold text-titleSmall">{count}</p>
          <AnchorLink className="font-semibold text-titleSmall hover:underline" to="/#welcome" title="Learn More.." />
        </div>
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
