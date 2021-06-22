import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import ACMLogo from "../images/footer/acm-logo.svg";
import UQLogo from "../images/footer/uq-logo.svg";
import GriffithLogo from "../images/footer/griffith-logo.svg";
import MonashLogo from "../images/footer/monash-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto bottom-0 border-t shadow-inner">
      <div className="global-wrapper flex sm:block flex-col items-center md:items-start">
        <div className="mb-4 flex flex-col space-y-5">
          <div className="flex flex-wrap justify-around lg:justify-between items-center justify-items-center">
            <a style={{ width: "150px" }} className="mb-5 lg:mb-0 flex justify-center items-center" href="https://www.acm.org/" target="_blank" rel="noreferrer">
              <img style={{ height: "55px" }} src={ACMLogo} alt="ACM Logo" />
            </a>
            <a style={{ width: "150px" }} className="mb-5 lg:mb-0 flex justify-center items-center" href="http://www.sigmm.org/" target="_blank" rel="noreferrer">
              <StaticImage src="../images/footer/sigmm-logo.png" alt="SIGMM Logo" height={38} placeholder="tracedSVG" />
            </a>
            <a style={{ width: "150px" }} className="mb-5 lg:mb-0 flex justify-center items-center" href="https://www.uq.edu.au/" target="_blank" rel="noreferrer">
              <img style={{ height: "38px" }} src={UQLogo} alt="UQ Logo" />
            </a>
            <a style={{ width: "130px" }} className="mb-5 lg:mb-0 flex justify-center justify-center items-center" href="https://www.griffith.edu.au/" target="_blank" rel="noreferrer">
              <img style={{ height: "42px" }} src={GriffithLogo} alt="Griffith Logo" />
            </a>
            <a style={{ width: "170px" }} className="mb-5 lg:mb-0 flex justify-center items-center" href="" target="_blank" rel="noreferrer">
              <img style={{ height: "40px" }} src={MonashLogo} alt="Monash Logo" />
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-around md:justify-between lg:mt-5">
          <small className="text-center">© 2021 <a className="hover:underline" href="https://www.acmmmasia.org/" target="_blank" rel="noreferrer">ACM Multimedia Asia Conference</a>. All Rights Reserved.</small>
          <small className="text-center mb-3 md:mb-0"><a className="hover:underline" href="https://www.acm.org/about-acm/policy-against-harassment" target="_blank" rel="noreferrer">Code of Conduct</a></small>
        </div>
      </div>
    </footer>
  );
}
