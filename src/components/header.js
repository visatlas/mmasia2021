import { Link } from "gatsby";
import React, { useState } from 'react';
import logo from "../images/Logo.png";

const NavLink = ({ to, children, title = "Link", selected = false, disabled = false }) => {
  if (disabled) {
    return (<span className="text-white hover:bg-gray-500 text-base px-3 py-2 rounded-md text-sm font-medium font-headingStyle cursor-default">{children}</span>);
  }
  const textColor = selected ? "text-black" : "text-white";
  const bgColor = selected ? "bg-gray-100" : "";
  const style = `${textColor} ${bgColor} text-base hover:bg-purple-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium font-headingStyle`
  return (
    <Link className="flex item-center" to={to} title={title}>
      <span className={style} >{children}</span>
    </Link>
  );
}

const MobileNavLink = ({ to, children, title = "Link", selected = false, disabled = false }) => {
  if (disabled) {
    return (<span className="pl-8 pr-4 py-2 flex item-center w-full text-gray-600 block rounded-md text-base font-semibold font-headingStyle cursor-default">{children}</span>);
  }
  const textColor = selected ? "text-black" : "text-white";
  const bgColor = selected ? "bg-gray-100" : "";
  const style = `pl-8 pr-4 py-2 w-full ${textColor} ${bgColor} hover:bg-purple-300 hover:text-black block rounded-md text-base font-semibold font-headingStyle`;
  return (
    <Link className="flex item-center w-full" to={to} title={title}>
      <span className={style}>{children}</span>
    </Link>
  );
}

export default function Header({ activePage }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header>
      <nav className="bg-mainPurple fixed top-0 z-50 w-full lg:px-10 md:bg-uqStyle">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* <!-- Mobile menu button--> */}
              <button type="button" className="py-2 pl-3 pr-3 ml-4 inline-flex items-center justify-center rounded-md text-gray-50 hover:text-black hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                onClick={() => {
                  showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
                }}>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg className={`${showMobileMenu ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Icon when menu is open */}
                <svg className={`${showMobileMenu ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">

              <Link to="/">
                <div className="flex-shrink-0 items-center lg:ml-8 flex md:hidden bp3:flex">
                  {/* <img className="block lg:hidden" src={logo} alt="Logo" width="120" />
                  <img className="hidden lg:block" src={logo} alt="Logo" width="160" /> */}
                  <img className="h-14" src={logo} alt="Logo" />
                </div>
              </Link>

              <div className="hidden md:flex sm:ml-8 items-center">
                <div className="flex space-x-4">
                  <NavLink to="/dates" title="Key Dates" selected={activePage === "/dates"}>Key Dates</NavLink>
                  <NavLink to="/" title="Program" selected={activePage === "/program"} disabled>Program</NavLink>
                  <NavLink to="/" title="Attend" selected={activePage === "/attend"} disabled>Attend</NavLink>
                  <NavLink to="/calls" title="Calls" selected={activePage === "/calls"}>Calls</NavLink>
                  <NavLink to="/organisation" title="Organisation" selected={activePage === "/organisation"}>Organisation</NavLink>
                  <NavLink to="/" title="Sponsors" selected={activePage === "/sponsors"} disabled>Sponsors</NavLink>
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className={showMobileMenu ? "md:hidden" : "hidden"} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" title="Home" selected={activePage === "/"}>Home</MobileNavLink>
            <MobileNavLink to="/dates" title="Key Dates" selected={activePage === "/dates"}>Key Dates</MobileNavLink>
            <MobileNavLink to="/" title="Program" selected={activePage === "/program"} disabled>Program</MobileNavLink>
            <MobileNavLink to="/" title="Attend" selected={activePage === "/attend"} disabled>Attend</MobileNavLink>
            <MobileNavLink to="/calls" title="Calls" selected={activePage === "/calls"}>Calls</MobileNavLink>
            <MobileNavLink to="/organisation" title="Organisation" selected={activePage === "/organisation"}>Organisation</MobileNavLink>
            <MobileNavLink to="/" title="Sponsors" selected={activePage === "/sponsors"} disabled>Sponsors</MobileNavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
