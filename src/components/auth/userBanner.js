import React from "react";
import { navigate } from "gatsby";
import { getUser, isLoggedIn, logout } from "../../services/auth";

const UserBanner = () => {
  return isLoggedIn() ? (
    <div className="text-sm bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center pl-0 pr-4 sm:pr-6 lg:pl-16 lg:pr-16">
          <p className="mb-0 pl-8 flex"><span className="hidden sm:block">You are currently signed in as&nbsp;</span><span className="font-semibold">{getUser().email}</span></p>
          <a className="px-4 font-semibold hover:bg-gray-700 py-1.5 flex space-between items-center space-x-1.5" href="/" onClick={event => {
            event.preventDefault();
            logout(() => navigate(`/`));
          }}>
            {/* <svg className="w-3 h-3 text-gray-100" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.971 384.971" xmlSpace="preserve" fill="currentColor">
              <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03C192.485,366.299,187.095,360.91,180.455,360.91z" />
              <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z" />
            </svg> */}
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>) : null;
};

export default UserBanner;
