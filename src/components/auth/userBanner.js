import React from "react";
import { navigate } from "gatsby";
import { getUser, isLoggedIn, logout } from "../../services/auth";

const UserBanner = () => {
  return isLoggedIn() ? (
    <div className="text-sm bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center pl-0 pr-4 sm:pr-6 lg:pl-16 lg:pr-16">
          <p className="mb-0 pl-8 flex"><span className="hidden sm:block">
            You are currently signed in as&nbsp;</span><span className="font-semibold">{getUser().email}</span>
          </p>
          <a className="px-4 font-semibold hover:bg-gray-700 py-1.5 flex space-between items-center space-x-1.5"
            href="/" onClick={event => {
              event.preventDefault();
              logout(() => navigate(`/`));
            }}>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>) : null;
};

export default UserBanner;
