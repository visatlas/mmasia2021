import React from "react";

export default function MobileMenuButton({ showMobileMenu, setShowMobileMenu }) {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
      <button type="button" className="py-2 pl-3 pr-3 ml-4 inline-flex items-center justify-center rounded-md 
              text-gray-50 focus:outline-none focus:ring-1 focus:ring-inset 
              focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
        onClick={() => { showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true); }}>
        <span className="sr-only">Open main menu</span>
        <svg className={`${showMobileMenu ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg className={`${showMobileMenu ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
