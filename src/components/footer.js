import React from 'react';
import ACMLogo from "../images/footer/acm-logo.svg";
import SIGMMLogo from "../images/footer/sigmm-logo.svg";
import UQLogo from "../images/footer/uq-logo.svg";
import GriffithLogo from "../images/footer/griffith-logo.svg";
import MonashLogo from "../images/footer/monash-logo.svg";

export default function Footer({ activePage }) {
  return (<>
    {activePage !== "/sponsors" ? (
      <footer className="bg-gray-100 mt-auto bottom-0 border-t shadow-inner">
        <div className="global-wrapper flex sm:block flex-col items-center md:items-start">
          <div className="mb-4 lg:mb-8 flex flex-col space-y-5 ">
            <div className="flex flex-wrap justify-around lg:justify-between items-center justify-items-center">
              <a style={{ width: "150px" }} className="mb-5 lg:mb-0 flex justify-center items-center" href="https://www.acm.org/" target="_blank" rel="noreferrer">
                <img style={{ height: "55px", width: "150px" }} src={ACMLogo} alt="ACM Logo" />
              </a>
              <a style={{ width: "150px" }} className="mb-5 lg:mb-0 flex justify-center items-center" href="http://www.sigmm.org/" target="_blank" rel="noreferrer">
                <img style={{ height: "30px", width: "116.36px" }} src={SIGMMLogo} alt="SIGMM Logo" />
              </a>
              <a style={{ width: "150px" }} className="mb-5 lg:mb-0 flex justify-center items-center" href="https://www.uq.edu.au/" target="_blank" rel="noreferrer">
                <img style={{ height: "38px", width: "137.52px" }} src={UQLogo} alt="UQ Logo" />
              </a>
              <a style={{ width: "130px" }} className="mb-5 lg:mb-0 flex justify-center justify-center items-center" href="https://www.griffith.edu.au/" target="_blank" rel="noreferrer">
                <img style={{ height: "42px", width: "109.81px" }} src={GriffithLogo} alt="Griffith Logo" />
              </a>
              <a style={{ width: "170px" }} className="mb-5 lg:mb-0 flex justify-center items-center" href="https://www.monash.edu/" target="_blank" rel="noreferrer">
                <img style={{ height: "40px", width: "170px" }} src={MonashLogo} alt="Monash Logo" />
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-around md:justify-between">
            <small className="text-center">© 2021 <a className="hover:underline" href="https://www.acmmmasia.org/" target="_blank" rel="noreferrer">ACM Multimedia Asia Conference</a>. All Rights Reserved.</small>
            <small className="text-center mb-3 md:mb-0"><a className="hover:underline" href="https://www.acm.org/about-acm/policy-against-harassment" target="_blank" rel="noreferrer">Code of Conduct</a></small>
          </div>
        </div>
      </footer>
    ) : (
      <footer className="bottom-0">
        <div className="global-wrapper-wide flex sm:block flex-col items-center md:items-start">
          <div className="px-8 flex flex-col-reverse md:flex-row justify-around md:justify-between">
            <small className="text-center">© 2021 <a className="hover:underline" href="https://www.acmmmasia.org/" target="_blank" rel="noreferrer">ACM Multimedia Asia Conference</a>. All Rights Reserved.</small>
            <small className="text-center mb-3 md:mb-0"><a className="hover:underline" href="https://www.acm.org/about-acm/policy-against-harassment" target="_blank" rel="noreferrer">Code of Conduct</a></small>
          </div>
        </div>
      </footer>
    )}
  </>);
}
