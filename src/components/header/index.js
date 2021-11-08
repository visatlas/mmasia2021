import React, { useState, Fragment } from "react";
import { Link } from "gatsby";
import Logo from "./logo";
import Divider from "./divider";
import NavLink from "./nav-link";
import MobileNavLink from "./mobile-nav-link";
import MobileMenuButton from "./mobile-menu-button";
import PreviewMode from "./preview-mode";
import DropDownMenu from "./dropdown-menu";
import { isLoggedIn } from "../../services/auth";

export default function Header({ activePage, themed }) {
  // A separator will be inserted between each array
  const calls = [[
    { name: "Demo Papers", link: "/call-for-demo-papers", closed: false },
    { name: "Short Papers", link: "/call-for-short-papers", closed: false },
    { name: "Workshop Papers", link: "/call-for-workshop-papers", closed: false },
    { name: "Brave New Ideas", link: "/call-for-brave-new-ideas", closed: false },
    { name: "Applied Research Track Papers", link: "/call-for-applied-research-track-papers", closed: false },
    { name: "Grand Challenge Submissions", link: "/call-for-grand-challenge-submissions", closed: false },
    { name: "Regular Papers", link: "/call-for-papers", closed: true },
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
  const [showMobileProgram, setShowMobileProgram] = useState(["/program/home"].includes(activePage));
  const mobileBaseStyle = "font-semibold text-left pl-8 pr-4 py-2 w-full text-white block rounded-md text-base font-headingStyle inline-flex items-center";
  const mobileCallsStyle = `${mobileBaseStyle} ${showMobileCalls ? "bg-menuHover" : ""}`;
  const mobileAttendStyle = `${mobileBaseStyle} ${showMobileAttend ? "bg-menuHover" : ""}`;
  const mobileProgramStyle = `${mobileBaseStyle} ${showMobileProgram ? "bg-menuHover" : ""}`;

  const linkStyle = `font-headingStyle hover:bg-gray-100 py-1.5 px-4 block whitespace-no-wrap text-orgSmall`;
  const linkStyleMedium = `${linkStyle} font-medium`;
  const linkStyleWide = `${linkStyleMedium} tracking-semiWide`;
  const linkStylePurple = `${linkStyleMedium} text-mainPurple`;
  const navStyle = `overflow-y-auto md:overflow-visible bg-mainPurple fixed top-0 z-50 w-full ${themed ? "md:bg-gray-800" : "md:bg-uqStyle"}`;

  return (
    <header>
      <nav className={navStyle} style={{ maxHeight: "100vh" }}>
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
                    {calls.map((group, index) => (<Fragment key={index}>
                      <Divider />
                      {group.map((call, indexCall) => {
                        const title = `Call for ${call.name}${call.closed ? " (closed)" : ""}`;
                        return (<Fragment key={indexCall}>
                          <Link key={indexCall} to={call.link} className={linkStyle} title={title}>
                            Call for <span className="font-medium">{call.name}</span>
                            {call.closed && " (closed)"}</Link>
                        </Fragment>);
                      })}
                    </Fragment>)
                    )}
                  </DropDownMenu>
                  {/* <NavLink to="/program/home" selected={activePage === "/program/home"} title="Program" themed>Program</NavLink> */}
                  <DropDownMenu selected={["/conference-keynotes"].includes(activePage)} name="Program" widthStyle="w-60">
                    <Link to="/program/home" className={linkStylePurple} title="Program Home">
                      Program Home
                      {!isLoggedIn() && (<span className="font-headingStyle text-gray-400 block whitespace-no-wrap text-xs font-normal cursor-pointer">
                        Sign in required
                      </span>)}
                    </Link>
                    <Divider />
                    <Link to="/conference-keynotes" className={linkStyleMedium} title="Conference Keynotes">Conference Keynotes</Link>
                  </DropDownMenu>
                  <DropDownMenu selected={["/registration", "/student-travel-grants", "/carer-award"].includes(activePage)} name="Attend" widthStyle="w-60">
                    <Link to="/registration" className={linkStylePurple} title="Registration">Registration</Link>
                    <Divider />
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
            </div>)}

            <button className={mobileProgramStyle} onClick={() => { setShowMobileProgram(!showMobileProgram) }}>
              <span className="mr-1">Program</span>
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            {showMobileProgram && (<div>
              <MobileNavLink to="/program/home" title="Program Home" selected={activePage === "/program/home"} nested>Program Home</MobileNavLink>
              <MobileNavLink to="/conference-keynotes" title="Conference Keynotes" selected={activePage === "/conference-keynotes"} nested>Conference Keynotes</MobileNavLink>
            </div>)}
            {/* <MobileNavLink to="/program/home" title="Program" selected={activePage === "/program/home"}>Program</MobileNavLink> */}
            <button className={mobileAttendStyle} onClick={() => { setShowMobileAttend(!showMobileAttend); }}>
              <span className="mr-1">Attend</span>
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </button>
            {showMobileAttend && (<div>
              <MobileNavLink to="/registration" title="Registration" selected={activePage === "/registration"} nested>Registration</MobileNavLink>
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
