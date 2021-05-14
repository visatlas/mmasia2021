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
    <div className="" style={{ position: "relative" }}>
      {/* title video */}
      <video style={{ width: "100%", maxHeight: "1080px", top: 0, left: 0 }} className='videoTag m-0' autoPlay muted loop playsInline>
        <source src="https://mmasia2021.uqcloud.net/wp-content/uploads/GC.mp4" type='video/mp4' crossOrigin="anonymous" />
        <source src="https://mmasia2021.uqcloud.net/wp-content/uploads/GC.mp4" type="video/ogg" crossOrigin="anonymous" />
      </video>
      {/* fallback image */}
      <StaticImage style={{
        position: "absolute",
        width: "100%",
        maxWidth: "1920px",
        maxHeight: "1080px",
        top: 0,
        left: 0,
        zIndex: "-9999"
      }} src="../images/GC.png" alt="Gold Coast" className="m-0" />
      <div className="px-12 py-8 d-flex flex-column justify-content-center align-items-start" style={{
        position: "absolute",
        top: "0%",
        right: "20%",
        // transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255, 255, 255, 0.9)"
      }}>
        <h1 className="mb-2" style={{ fontWeight: 800, fontSize: "2.4em", lineHeight: "2.8rem", letterSpacing: "1px" }}>
          <span style={{ color: "#51247a" }}>ACM</span> <br />Multimedia <br />Asia 2021</h1>
        <p className="mb-4" style={{ fontSize: "1.1em", fontWeight: "600" }}>Gold Coast, Australia</p>
        <p className="mb-1" style={{ fontSize: "1.5em", fontWeight: "700", color: "#51247a" }}>1 - 3 December, 2021</p>
        <p className="" style={{ fontWeight: "600", fontSize: "1.1em" }} id="demo">{count}</p>
        <p className="mt-8" style={{ fontSize: "1.1em", fontWeight: "600" }}>Learn More</p>
      </div>
    </div>
  )
}
