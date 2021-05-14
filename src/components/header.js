import { Link } from "gatsby"
import React from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/Logo.png"

const NavLink = ({ to, children, title = "Link", selected = false }) => {
  const textColor = selected ? "text-black" : "text-white";
  const bgColor = selected ? "bg-gray-100" : "";
  const style = `${textColor} ${bgColor} text-base hover:bg-purple-300 hover:text-black px-3 py-2 rounded-md text-sm font-semibold`
  return (
    <Link className="flex item-center" to={to} title={title}>
      <span className={style}>{children}</span>
    </Link>
  );
}

export default function Header({ activePage }) {
  return (
    <header>
      <nav className="bg-mainPurple fixed top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.
            Heroicon name: outline/menu
            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* <!--
            Icon when menu is open.
            Heroicon name: outline/x
            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">

              <Link to="/">
                <div className="flex-shrink-0 flex items-center ml-8">
                  {/* <img className="block lg:hidden" src={logo} alt="Logo" width="120" />
                  <img className="hidden lg:block" src={logo} alt="Logo" width="160" /> */}
                  <img className="h-14 w-auto" src={logo} alt="Logo" />
                </div>
              </Link>

              <div className="hidden sm:flex sm:ml-8 items-center">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  {/* <a href="#" className="bg-gray-100 text-gray-800 px-3 py-2 rounded-md text-sm font-bold" aria-current="page">Home</a> */}
                  <NavLink to="/dates" title="Important Dates" selected={activePage === "/dates"}>Important Dates</NavLink>
                  <NavLink to="/" title="Important Dates" selected={activePage === "/program"}>Program</NavLink>
                  <NavLink to="/" title="Important Dates" selected={activePage === "/attend"}>Attend</NavLink>
                  <NavLink to="/calls" title="Important Dates" selected={activePage === "/calls"}>Calls</NavLink>
                  <NavLink to="/" title="Important Dates" selected={activePage === "/organisation"}>Organisation</NavLink>
                  <NavLink to="/" title="Important Dates" selected={activePage === "/sponsors"}>Sponsors</NavLink>
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
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {/* <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-bold" aria-current="page">Home</a> */}
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Important Dates</a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Program</a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold">Attend</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
