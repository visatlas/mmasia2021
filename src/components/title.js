import React, { useEffect, useState } from 'react'
// import sample from '../images/GC_low.mp4';
import { StaticImage } from "gatsby-plugin-image"

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
    <div className="relative">
      {/* title video */}
      <video className='w-full top-0 left-0 videoTag m-0' style={{ maxHeight: "1080px" }} autoPlay muted loop playsInline>
        <source src="https://mmasia2021.uqcloud.net/wp-content/uploads/GC.mp4" type='video/mp4' crossOrigin="anonymous" />
        <source src="https://mmasia2021.uqcloud.net/wp-content/uploads/GC.mp4" type="video/ogg" crossOrigin="anonymous" />
      </video>

      {/* fallback image */}
      <StaticImage className="m-0 w-full top-0 left-0" placeholder="blurred" 
        style={{ position: "absolute", maxWidth: "1920px", maxHeight: "1080px", zIndex: "-9999" }}
        src="../images/GC.png" alt="Gold Coast" />

      <div className="px-12 py-8 d-flex flex-column justify-content-center align-items-start"
        style={{ position: "absolute", top: "0%", right: "20%", backgroundColor: "rgba(255, 255, 255, 0.9)" }}> {/* transform: "translate(-50%, -50%)" */}
        <h1 className="mb-2 font-extrabold tracking-wide text-titleBig leading-titleBig">
          <span className="text-mainPurple">ACM</span> <br />Multimedia <br />Asia 2021</h1>
        <p className="mb-4 font-semibold text-titleSmall" >Gold Coast, Australia</p>
        <p className="mb-1 font-bold text-mainPurple text-titleMedium">1 - 3 December, 2021</p>
        <p className="font-semibold text-titleSmall">{count}</p>
        <p className="mt-8 font-semibold text-titleSmall">Learn More</p>
      </div>
    </div>
  )
}
