import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import Logo from "./logo";
import Divider from "./divider";
import NavLink from "./nav-link";
import MobileNavLink from "./mobile-nav-link";
import MobileMenuButton from "./mobile-menu-button";
import PreviewMode from "./preview-mode";
import DropDownMenu from "./dropdown-menu";

export default function Header({ activePage }) {
  // A separator will be inserted between each array
  const calls = [[
    { name: "Regular Papers", link: "/call-for-papers", closed: true },
    { name: "Demo Papers", link: "/call-for-demo-papers", closed: false },
    { name: "Short Papers", link: "/call-for-short-papers", closed: false },
    { name: "Workshop Papers", link: "/call-for-workshop-papers", closed: false },
    { name: "Brave New Ideas", link: "/call-for-brave-new-ideas", closed: false },
    { name: "Applied Research Track Papers", link: "/call-for-applied-research-track-papers", closed: false},
    { name: "Grand Challenge Submissions", link: "/call-for-grand-challenge-submissions", closed: false },
  ], [
    { name: "Tutorials", link: "/call-for-tutorials", closed: false },
    { name: "PhD School Participants", link: "/call-for-phd-school-participants", closed: false },
    { name: "Workshops", link: "/call-for-workshops", closed: true },
    { name: "Grand Challenge Proposals", link: "/call-for-grand-challenge-proposals", closed: true },
  ]];
  const mergedCalls = [].concat.apply([], calls);
  const callLinks = mergedCalls.map(call => call.link);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileCalls, setShowMobileCalls] = useState(callLinks.includes(activePage));
  const [showMobileAttend, setShowMobileAttend] = useState(["/student-travel-grants", "/carer-award"].includes(activePage));
  const mobileBaseStyle = "font-semibold text-left pl-8 pr-4 py-2 w-full text-white block rounded-md text-base font-headingStyle inline-flex items-center";
  const mobileCallsStyle = `${mobileBaseStyle} ${showMobileCalls ? "bg-menuHover" : ""}`;
  const mobileAttendStyle = `${mobileBaseStyle} ${showMobileAttend ? "bg-menuHover" : ""}`;

  const linkStyle = `font-headingStyle hover:bg-gray-100 py-1.5 px-4 block whitespace-no-wrap text-orgSmall`;
  const linkStyleMedium = `${linkStyle} font-medium`;
  const linkStyleWide = `${linkStyleMedium} tracking-semiWide`;

  return (
    <header>
      <nav className="overflow-y-auto md:overflow-visible bg-mainPurple fixed top-0 z-50 w-full md:bg-uqStyle" style={{ maxHeight: "100vh" }}>
        {process.env.GATSBY_PREVIEW_MODE === "true" && (<PreviewMode />)}
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-16">
          <div className="relative flex items-center justify-between h-16">
            <MobileMenuButton showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
              <Logo />

              {/* Desktop menu */}
              <div className="hidden md:flex sm:ml-8 items-center">
                <div className="flex space-x-4">
                  <NavLink to="/" selected={false} title="Home">Home</NavLink>
                  <DropDownMenu selected={["/important-dates", "/reviewer-guidelines"].concat(callLinks).includes(activePage)}
                    name="Calls &amp; Dates" widthStyle="w-80">
                    <Link to="/important-dates" className={linkStyleWide} title="Important Dates">Important Dates</Link>
                    <Link to="/reviewer-guidelines" className={linkStyleWide} title="Reviewer Guidelines">Reviewer Guidelines</Link>
                    {calls.map((group, index) => {
                      return (<Fragment key={index}>
                        <Divider />
                        {group.map((call, indexCall) => {
                          const title = `Call for ${call.name}${call.closed ? " (closed)" : ""}`;
                          return (<Fragment key={indexCall}>
                            <Link key={indexCall} to={call.link} className={linkStyle} title={title}>
                              Call for <span className="font-medium">{call.name}</span>
                              {call.closed && " (closed)"}</Link>
                          </Fragment>);
                        })}
                      </Fragment>);
                    })}
                    <Divider />
                    <span className="font-headingStyle cursor-default text-gray-400 py-1.5 px-4 block whitespace-no-wrap text-sm">More to be announced..</span>
                  </DropDownMenu>
                  <NavLink to="/" selected={activePage === "/program"} title="Program" disabled>Program</NavLink>
                  <DropDownMenu selected={["/student-travel-grants", "/carer-award"].includes(activePage)} name="Attend" widthStyle="w-60">
                    <Link to="/student-travel-grants" className={linkStyleMedium} title="Student Travel Grants">Student Travel Grants</Link>
                    <Link to="/carer-award" className={linkStyleMedium} title="Carer Awards">Carer Awards</Link>
                  </DropDownMenu>
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
              {mergedCalls.map((call, indexCall) => {
                const title = `Call for ${call.name}${call.closed ? " (closed)" : ""}`;
                return (<Fragment key={indexCall}>
                  <MobileNavLink to={call.link} title={title}
                    selected={activePage === call.link} nested>
                    Call for {call.name}{call.closed && " (closed)"}
                  </MobileNavLink>
                </Fragment>);
              })}
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
