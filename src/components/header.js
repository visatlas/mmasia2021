import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "./header-logo";
import { NavLink, MobileNavLink } from "./header-links";

export default function Header({ activePage }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileCalls, setShowMobileCalls] = useState(["/call-for-papers", "/call-for-workshops", "/call-for-demo-papers", "/call-for-short-papers", "/call-for-phd-school-participants"].includes(activePage));
  const [showMobileAttend, setShowMobileAttend] = useState(["/student-travel-grants", "/carer-award"].includes(activePage));
  const mobileCallsBackground = showMobileCalls ? "bg-menuHover" : "";
  const mobileCallsStyle = `font-semibold text-left pl-8 pr-4 py-2 w-full text-white ${mobileCallsBackground} hover:bg-menuHover block rounded-md text-base font-headingStyle inline-flex items-center`;
  const mobileAttendBackground = showMobileAttend ? "bg-menuHover" : "";
  const mobileAttendStyle = `font-semibold text-left pl-8 pr-4 py-2 w-full text-white ${mobileAttendBackground} hover:bg-menuHover block rounded-md text-base font-headingStyle inline-flex items-center`;

  return (
    <header>
      <nav className="overflow-y-auto md:overflow-visible bg-mainPurple fixed top-0 z-50 w-full md:bg-uqStyle" style={{ maxHeight: "100vh" }}>
        {process.env.GATSBY_PREVIEW_MODE === "true" && (
          <div className="bg-blue-300 flex justify-center items-center h-6">
            <small className="font-medium text-center">You are currently in preview mode. <a className="underline" href="https://mmasia2021.uqcloud.net" target="_blank" rel="noreferrer">Visit the main page.</a></small>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-16">
          <div className="relative flex items-center justify-between h-16">
            {/* <!-- Mobile menu button--> */}
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button type="button" className="py-2 pl-3 pr-3 ml-4 inline-flex items-center justify-center rounded-md 
              text-gray-50 hover:text-black hover:bg-purple-300 focus:outline-none focus:ring-1 focus:ring-inset 
              focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => { showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true); }}>
                <span className="sr-only">Open main menu</span>
                <svg className={`${showMobileMenu ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${showMobileMenu ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
              <Logo />
              {/* Desktop menu */}
              <div className="hidden md:flex sm:ml-8 items-center">
                <div className="flex space-x-4">
                  <NavLink to="/" selected={false} title="Home">Home</NavLink>
                  <Calls selected={["/call-for-papers", "/call-for-workshops", "/call-for-demo-papers", "/call-for-short-papers", "/call-for-phd-school-participants", "/important-dates"].includes(activePage)} />
                  <NavLink to="/" selected={activePage === "/program"} title="Program" disabled>Program</NavLink>
                  <Attend selected={["/student-travel-grants", "/carer-award"].includes(activePage)} />
                  <NavLink to="/organisation" selected={activePage === "/organisation"} title="Organisation">Organisation</NavLink>
                  <NavLink to="/sponsors" selected={activePage === "/sponsors"} title="Sponsors">Sponsors</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={showMobileMenu ? "md:hidden" : "hidden"} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" title="Home" selected={activePage === "/"}>Home</MobileNavLink>
            <MobileNavLink to="/important-dates" title="Important Dates" selected={activePage === "/important-dates"}>Important Dates</MobileNavLink>
            <MobileNavLink to="/reviewer-guidelines" title="Reviewer Guidelines" selected={activePage === "/reviewer-guidelines"}>Reviewer Guidelines</MobileNavLink>
            <button className={mobileCallsStyle} onClick={() => { setShowMobileCalls(!showMobileCalls); }}>
              <span className="mr-1">Calls</span>
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            {showMobileCalls && (<div>
              <MobileNavLink to="/call-for-papers" title="Call for Regular Papers" selected={activePage === "/call-for-papers"} nested>Call for Regular Papers</MobileNavLink>
              <MobileNavLink to="/call-for-workshops" title="Call for Workshops" selected={activePage === "/call-for-workshops"} nested>Call for Workshops</MobileNavLink>
              <MobileNavLink to="/call-for-demo-papers" title="Call for Demo Papers" selected={activePage === "/call-for-demo-papers"} nested>Call for Demo Papers</MobileNavLink>
              <MobileNavLink to="/call-for-short-papers" title="Call for Short Papers" selected={activePage === "/call-for-short-papers"} nested>Call for Short Papers</MobileNavLink>
              <MobileNavLink to="/call-for-phd-school-participants" title="Call for PhD School Participants" selected={activePage === "/call-for-phd-school-participants"} nested>Call for PhD School Participants</MobileNavLink>
              <span className="pl-16 pr-4 py-2 w-full text-textDisabled cursor-default block rounded-md font-medium text-sm font-headingStyle">More to be announced..</span>
            </div>)}
            <MobileNavLink to="/" title="Program" selected={activePage === "/program"} disabled>Program</MobileNavLink>
            <button className={mobileAttendStyle} onClick={() => { setShowMobileAttend(!showMobileAttend); }}>
              <span className="mr-1">Attend</span>
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            {showMobileAttend && (<div>
              <MobileNavLink to="/student-travel-grants" title="Student Travel Grants" selected={activePage === "/student-travel-grants"} nested>Student Travel Grants</MobileNavLink>
              <MobileNavLink to="/carer-award" title="Carer Awards" selected={activePage === "/carer-award"} nested>Carer Awards</MobileNavLink>
            </div>)}
            <MobileNavLink to="/organisation" title="Organisation" selected={activePage === "/organisation"}>Organisation</MobileNavLink>
            <MobileNavLink to="/sponsors" title="Sponsors" selected={activePage === "/sponsors"}>Sponsors</MobileNavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

const Calls = ({ selected }) => {
  const bgColor = selected ? "bg-menuSelected" : "";
  const style = `${bgColor} text-white text-base group-hover:bg-menuHover pl-3 pr-2 py-2 
  rounded-md text-sm font-medium font-headingStyle inline-flex items-center`;

  return (
    <div className="group dropdown inline-block relative">
      <button className={style}>
        <span className="mr-1">Calls &amp; Dates</span>
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </button>
      <div className="dropdown-menu absolute hidden text-gray-800 pt-1 w-60"> {/* hidden */}
        <div className="rounded shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
          <Link to="/important-dates" className="font-headingStyle hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap text-orgSmall font-semibold tracking-semiWide" title="Important Dates">Important Dates</Link>
          <Link to="/reviewer-guidelines" className="font-headingStyle hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap text-orgSmall font-semibold tracking-semiWide" title="Reviewer Guidelines">Reviewer Guidelines</Link>
          <div className="w-full py-1"><div className="w-full bg-gray-200" style={{ height: "1px" }} /></div>
          <Link to="/call-for-papers" className="font-headingStyle hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap text-orgSmall" title="Call for Regular Papers">Call for <span className="font-medium">Regular Papers</span></Link>
          <Link to="/call-for-workshops" className="font-headingStyle hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap text-orgSmall" title="Call for Workshops">Call for <span className="font-medium">Workshops</span></Link>
          <Link to="/call-for-demo-papers" className="font-headingStyle hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap text-orgSmall" title="Call for Demo Papers">Call for <span className="font-medium">Demo Papers</span></Link>
          <Link to="/call-for-short-papers" className="font-headingStyle hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap text-orgSmall" title="Call for Short Papers">Call for <span className="font-medium">Short Papers</span></Link>
          <Link to="/call-for-phd-school-participants" className="font-headingStyle hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap text-orgSmall" title="Call for PhD School Participants">Call for <span className="font-medium">PhD School Participants</span></Link>
          <div className="w-full py-1"><div className="w-full bg-gray-200" style={{ height: "1px" }} /></div>
          <span className="font-headingStyle cursor-default text-gray-400 py-2 px-4 block whitespace-no-wrap text-sm">More to be announced..</span>
        </div>
      </div>
    </div>
  );
};

const Attend = ({ selected }) => {
  const bgColor = selected ? "bg-menuSelected" : "";
  const style = `${bgColor} text-white text-base group-hover:bg-menuHover pl-3 pr-2 py-2 
  rounded-md text-sm font-medium font-headingStyle inline-flex items-center`;

  return (
    <div className="group dropdown inline-block relative">
      <button className={style}>
        <span className="mr-1">Attend</span>
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </button>
      <div className="dropdown-menu absolute hidden text-gray-800 pt-1 w-60">
        <div className="rounded shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
          <Link to="/student-travel-grants" className="font-headingStyle hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap text-orgSmall font-medium" title="Student Travel Grants">Student Travel Grants</Link>
          <Link to="/carer-award" className="font-headingStyle hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap text-orgSmall font-medium" title="Carer Awards">Carer Awards</Link>
        </div>
      </div>
    </div>
  );
};
