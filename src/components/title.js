import React, { useEffect, useState } from 'react'
import sample from '../images/GC_low.mp4';
import { StaticImage } from "gatsby-plugin-image"

export default function Title() {
  const [count, setCount] = useState("\u00A0");

  // calculate countdown time
  useEffect(() => {
    let countDownDate = new Date("Dec 1, 2021 00:00:00").getTime();
    let x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCount(days + "d " + hours + "h "
        + minutes + "m " + seconds + "s left");

      if (distance < 0) {
        clearInterval(x);
        setCount("Event Closed");
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  });

  return (
    <div style={{ position: "relative" }}>
      {/* title video */}
      <video style={{ width: "100%", top:0, left:0 }} className='videoTag m-0' muted autoPlay loop playsInline>
        <source src={sample} type='video/mp4' />
      </video>
      {/* fallback image */}
      <StaticImage style={{
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: "-9999"
      }} src="../images/GC.png" alt="Gold Coast" className="m-0" />
      <div className="px-5 py-4 d-flex flex-column justify-content-center align-items-start" style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(255, 255, 255, 0.9)"
      }}>
        <h1 className="mb-2" style={{ fontWeight: 800, fontSize: "2.4em", letterSpacing: "1px" }}>
          <span style={{ color: "#51247a" }}>ACM</span> <br />Multimedia <br />Asia 2021</h1>
        <p className="mb-3" style={{ fontSize: "1.1em", fontWeight: "600" }}>Gold Coast, Australia</p>
        <p className="mb-2" style={{ fontSize: "1.5em", fontWeight: "700", color: "#51247a" }}>1 - 3 December, 2021</p>
        <p className="mb-4" style={{ fontWeight: "600", fontSize: "1.1em", marginBottom: "0" }} id="demo">{count}</p>
        <p className="mb-0" style={{ fontSize: "1.1em", fontWeight: "600" }}>Learn More</p>
      </div>
    </div>
  )
}
