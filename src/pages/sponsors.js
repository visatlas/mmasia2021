import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";

import ACMLogo from "../images/footer/acm-logo.svg";
import SIGMMLogo from "../images/footer/sigmm-logo.svg";
import UQLogo from "../images/footer/uq-logo.svg";
import GriffithLogo from "../images/footer/griffith-logo.svg";
import MonashDSAI from '../images/footer/monash-dsai.svg';
import MonashDFI from '../images/footer/monash-dfi.svg';

const Sponsors = ({ location }) => {
  const datePublished = "2021-06-23";
  const dateModified = "2021-10-06";
  const dateModifiedFormatted = "6 October, 2021";
  const pageMeta = {
    title: "Sponsors",
    description: "The Organising Committee for the 2021 ACM Multimedia Asia warmly invites you to become a sponsor of the conference to be held at Gold Coast, Australia on December 1st to 3rd 2021.",
    datePublished,
    dateModified,
    pathname: location.pathname
  };

  return (
    <Layout location={location} footer={false}>
      <Seo pageMeta={pageMeta} />
      <div className="flex flex-col items-center sm:mx-auto sm:my-0 pb-10">
        <div className="w-full pt-8 md:pt-4 pb-6 mb-0 md:mb-6 bg-white md:bg-uqStyle flex justify-center items-center">
          <h1 className="text-3xl text-gray-800 md:text-gray-100 font-semibold font-headingStyle tracking-semiWide">Sponsorship</h1>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap w-full global-wrapper-wide overflow-hidden">
          <section className="w-full lg:w-2/3 py-4 pl-4 pr-4 lg:pl-8 lg:pr-12">
            <article className="text-center lg:text-justify flex flex-col">
              <p>The Organising Committee for the 2021 ACM Multimedia Asia warmly invites you to become a sponsor of the conference to be held at Gold Coast, Australia on December 1st to 3rd 2021. This is a unique opportunity to promote your institute or company, gain exposure and advertise your product or research to a variety of influencers and leaders on the vibrant multimedia community.</p>
              <h2 className="w-full text-center mb-6 text-lg text-gray-600 font-semibold">Levels of Sponsorship</h2>
              <div className="mb-6 w-full overflow-x-scroll md:overflow-hidden">
                <table className="mb-0 text-center table-auto overflow-x-scroll md:overflow-hidden">
                  <thead>
                    <tr className="border-t bg-gray-50 text-gray-600 text-sm leading-normal">
                      <th className="py-3 px-6 font-semibold">Levels</th>
                      <th className="py-3 px-6 font-semibold">Full<br />Registrations</th>
                      <th className="py-3 px-6 font-semibold">Student<br />Registrations</th>
                      <th className="py-3 px-6 font-semibold">Logo on the<br />ACM MMAsia'21 Website</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-normal">
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-6"><span className="font-semibold">Gold Level</span><br />(AUD5000)</td>
                      <td className="py-3 px-6">Two (2) Free</td>
                      <td className="py-3 px-6">Two (2) Free</td>
                      <td className="py-3 px-6">Showed under Gold Level</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-6"><span className="font-semibold">Silver Level</span><br />(AUD3000)</td>
                      <td className="py-3 px-6">One (1) Free</td>
                      <td className="py-3 px-6">Two (2) Free</td>
                      <td className="py-3 px-6">Showed under Silver Level</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-6"><span className="font-semibold">Bronze Level</span><br />(AUD1500)</td>
                      <td className="py-3 px-6">One (1) Free</td>
                      <td className="py-3 px-6">One (1) Free</td>
                      <td className="py-3 px-6">Showed under Bronze Level</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 mb-6">ACM Multimedia Asia 2021 Sponsorships Chairs:</p>
              <ul className="list-disc list-outside text-left">
                <li className="mb-2"><strong>Xiaofang Zhou</strong> (<a className="underline" href="mailto:zxf@cse.ust.hk" target="_blank" rel="noreferrer">zxf@cse.ust.hk</a>), Hong Kong University of Science and Technology, China</li>
                <li className="mb-6"><strong>Bing-Kun Bao</strong> (<a className="underline" href="mailto:bingkunbao@njupt.edu.cn" target="_blank" rel="noreferrer">bingkunbao@njupt.edu.cn</a>), Nanjing University of Posts and Telecommunications, China</li>
              </ul>

              <footer className="pb-0">
                <p className="text-xs mt-0 sm:mt-8 text-center sm:text-left">Last updated on {dateModifiedFormatted}.</p>
                <div className="hidden lg:block border-t pt-6">
                  <p className="mb-3"><small><a className="hover:underline" href="https://www.acm.org/about-acm/policy-against-harassment" target="_blank" rel="noreferrer">Code of Conduct</a></small></p>
                  <p><small>&copy; 2021 <a className="hover:underline" href="https://www.acmmmasia.org/" target="_blank" rel="noreferrer">ACM Multimedia Asia Conference</a>. All Rights Reserved.</small></p>
                </div>
              </footer>
            </article>
          </section>

          <aside className="w-full lg:w-1/3 px-8 py-4 bg-gray-50">
            {/* <h2 className="w-full py-1 border-b text-yellow-500 text-center text-xl mb-8 font-semibold font-headingStyle tracking-wide">Gold Sponsors</h2> */}

            <h2 className="w-full py-1 border-b text-gray-500 text-center text-xl mb-8 font-semibold font-headingStyle tracking-wide">Silver Sponsor</h2>
            <div>
              <a className="flex flex-col justify-center items-center" href="https://www.uq.edu.au/" target="_blank" rel="noreferrer">
                <img style={{ height: "40px" }} src={UQLogo} alt="UQ Logo" />
                <small className="font-light text-center mt-4"><span className="font-medium leading-6">The University of Queensland</span><br />School of Information Technology &amp;<br /> Electrical Engineering</small>
              </a>
            </div>

            <h2 className="w-full py-1 border-b text-yellow-700 text-center text-xl mt-10 mb-8 font-semibold font-headingStyle tracking-wide">Bronze Sponsors</h2>
            <div className="space-y-10">
              <a className="flex flex-col justify-center items-center" href="https://www.monash.edu/it/dsai" target="_blank" rel="noreferrer">
                <img style={{ height: "40px" }} src={MonashDSAI} alt="Monash DSAI Logo" />
                <small className="font-light text-center mt-4"><span className="font-medium">Monash University</span><br />Department of Data Science and AI</small>
              </a>
              <a className="flex flex-col justify-center items-center" href="https://www.monash.edu/data-futures-institute" target="_blank" rel="noreferrer">
                <img style={{ height: "40px" }} src={MonashDFI} alt="Monash DFI Logo" />
                <small className="font-light text-center mt-4"><span className="font-medium">Monash University</span><br />Monash Data Futures Institute</small>
              </a>
            </div>

            <h2 className="w-full py-1 border-b text-mainPurple text-center text-xl mt-10 mb-8 font-semibold font-headingStyle tracking-wide">Supporters</h2>
            <div className="flex flex-col space-y-6">
              <a className="flex flex-col justify-center items-center" href="http://www.sigmm.org/" target="_blank" rel="noreferrer">
                <img style={{ height: "30px" }} src={SIGMMLogo} alt="SIGMM Logo" />
              </a>
              <a className="flex flex-col justify-center items-center" href="https://www.acm.org/" target="_blank" rel="noreferrer">
                <img style={{ height: "55px" }} src={ACMLogo} alt="ACM Logo" />
              </a>
              <a className="flex flex-col justify-center items-center" href="https://www.griffith.edu.au/" target="_blank" rel="noreferrer">
                <img style={{ height: "48px" }} src={GriffithLogo} alt="Griffith Logo" />
              </a>
            </div>
          </aside>

          <div className="block lg:hidden pt-8 text-center">
            <p className="mb-3"><small><a className="hover:underline" href="https://www.acm.org/about-acm/policy-against-harassment" target="_blank" rel="noreferrer">Code of Conduct</a></small></p>
            <p className="mb-0"><small>&copy; 2021 <a className="hover:underline" href="https://www.acmmmasia.org/" target="_blank" rel="noreferrer">ACM Multimedia Asia Conference</a>. All Rights Reserved.</small></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sponsors;
