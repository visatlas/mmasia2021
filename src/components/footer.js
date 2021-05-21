import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto bottom-0">
      <div className="global-wrapper py-0 flex sm:block flex-col items-center md:items-start">
        <div className="mb-4 flex flex-wrap justify-around md:justify-start md:space-x-10">
          <a className="mb-4 md:mb-0" href="https://www.acm.org/" target="_blank" rel="noreferrer">
            <StaticImage src="../images/footer/ACM Logo.png" alt="ACM Logo" height={50} placeholder="blurred" />
          </a>
          <a className="mb-4 md:mb-0" href="http://www.sigmm.org/" target="_blank" rel="noreferrer">
            <StaticImage src="../images/footer/SIGMM Logo.png" alt="SIGMM Logo" height={50} placeholder="blurred" />
          </a>
          <a className="mb-4 md:mb-0" href="https://www.uq.edu.au/" target="_blank" rel="noreferrer">
            <StaticImage src="../images/footer/UQ Logo.png" alt="UQ Logo" height={50} placeholder="blurred" />
          </a>
          <a className="mb-4 md:mb-0" href="https://www.griffith.edu.au/" target="_blank" rel="noreferrer">
            <StaticImage src="../images/footer/Griffith Logo.png" alt="Griffith University Logo" height={50} placeholder="blurred" />
          </a>
        </div>
        <small>© 2021 ACM Multimedia Asia Conference. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
