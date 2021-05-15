import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto bottom-0">
      <div className="global-wrapper py-0 flex sm:block flex-col items-center md:items-start">
        <div className="mb-4 flex flex-wrap justify-around md:justify-start md:space-x-10">
          <StaticImage className="mb-4 md:mb-0" src="../images/footer/ACM Logo.png" alt="ACM Logo" height={50} placeholder="blurred" />
          <StaticImage className="mb-4 md:mb-0" src="../images/footer/SIGMM Logo.png" alt="SIGMM Logo" height={50} placeholder="blurred" />
          <StaticImage className="mb-4 md:mb-0" src="../images/footer/UQ Logo.png" alt="UQ Logo" height={50} placeholder="blurred" />
          <StaticImage className="mb-4 md:mb-0" src="../images/footer/Griffith Logo.png" alt="Griffith Logo" height={50} placeholder="blurred" />
        </div>
        <small>© 1993-{new Date().getFullYear()} ACM Multimedia. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
