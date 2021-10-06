import React from 'react';
import ACMLogo from "../images/footer/acm-logo.svg";
import SIGMMLogo from "../images/footer/sigmm-logo.svg";
import UQLogo from "../images/footer/uq-logo.svg";
import GriffithLogo from "../images/footer/griffith-logo.svg";
import MonashDSAI from '../images/footer/monash-dsai.svg';
import MonashDFI from '../images/footer/monash-dfi.svg';

export default function Footer() {
  return (<>
    <footer className="bg-gray-100 mt-auto bottom-0 border-t shadow-inner overflow-x-hidden">
      <div className="global-wrapper flex sm:block flex-col items-center md:items-start">
        <div className="flex flex-col py-2 px-6 lg:px-0">
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4 mb-4 md:mb-8">
            <div>
              <p className="mb-5 font-semibold font-headingStyle tracking-semiWide">Sliver Sponsor</p>
              <div className="flex flex-wrap gap-x-12">
                <a style={{ width: "150px" }} className="mb-5 lg:mb-0 flex items-center" href="https://www.uq.edu.au/" target="_blank" rel="noreferrer">
                  <img style={{ height: "38px", width: "137.52px" }} src={UQLogo} alt="UQ Logo" />
                </a>
              </div>
            </div>
            <div>
              <p className="mb-5 font-semibold font-headingStyle tracking-semiWide">Bronze Sponsors</p>
              <div className="flex flex-wrap gap-x-12">
                <a style={{ width: "170px" }} className="mb-5 lg:mb-0 flex items-center" href="https://www.monash.edu/" target="_blank" rel="noreferrer">
                  <img style={{ height: "40px", width: "170px" }} src={MonashDSAI} alt="Monash DSAI Logo" />
                </a>
                <a style={{ width: "170px" }} className="mb-5 lg:mb-0 flex items-center" href="https://www.monash.edu/" target="_blank" rel="noreferrer">
                  <img style={{ height: "40px", width: "170px" }} src={MonashDFI} alt="Monash DFI Logo" />
                </a>
              </div>
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <p className="mb-3 font-semibold font-headingStyle tracking-semiWide">Supported by</p>
            <div className="flex flex-wrap items-center gap-x-12">
              <a style={{ width: "150px" }} className="mb-5 lg:mb-0 flex items-center" href="https://www.acm.org/" target="_blank" rel="noreferrer">
                <img style={{ height: "55px", width: "150px" }} src={ACMLogo} alt="ACM Logo" />
              </a>
              <a style={{ width: "116.36px" }} className="mb-5 lg:mb-0 flex items-center" href="http://www.sigmm.org/" target="_blank" rel="noreferrer">
                <img style={{ height: "30px", width: "116.36px" }} src={SIGMMLogo} alt="SIGMM Logo" />
              </a>
              <a style={{ width: "130px" }} className="mb-5 lg:mb-0 flex items-center" href="https://www.griffith.edu.au/" target="_blank" rel="noreferrer">
                <img style={{ height: "42px", width: "109.81px" }} src={GriffithLogo} alt="Griffith Logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row px-6 lg:px-0 items-start justify-between w-full">
          <small className="">&copy; 2021 <a className="hover:underline" href="https://www.acmmmasia.org/" target="_blank" rel="noreferrer">ACM Multimedia Asia Conference</a>. <br className="block sm:hidden" />All Rights Reserved.</small>
          <small className="mb-3 md:mb-0"><a className="hover:underline" href="https://www.acm.org/about-acm/policy-against-harassment" target="_blank" rel="noreferrer">Code of Conduct</a></small>
        </div>
      </div>
    </footer>
    {/* <footer className="bottom-0">
        <div className="global-wrapper-wide flex sm:block flex-col items-center md:items-start">
          <div className="px-8 flex flex-col-reverse md:flex-row justify-around md:justify-between">
            <small className="text-center">&copy; 2021 <a className="hover:underline" href="https://www.acmmmasia.org/" target="_blank" rel="noreferrer">ACM Multimedia Asia Conference</a>. All Rights Reserved.</small>
            <small className="text-center mb-3 md:mb-0"><a className="hover:underline" href="https://www.acm.org/about-acm/policy-against-harassment" target="_blank" rel="noreferrer">Code of Conduct</a></small>
          </div>
        </div>
      </footer> */}
  </>);
}
