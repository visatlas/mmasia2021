import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";

import { handleLogin, isLoggedIn } from "../../services/auth";
import Seo from "../seo";

const Login = ({ setShowBanner }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidMessage, setInvalidMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const inputStyle = `${submitting ? "bg-gray-200" : "bg-gray-600 hover:bg-gray-800 cursor-pointer"} text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      if (submitting) setInvalidMessage("Sign in timed out, please try again.");
      setSubmitting(false);
    }, 5000);

    const response = await handleLogin({ username, password });
    if (response) {
      setShowBanner(isLoggedIn());
      navigate(`/program/home`);
    } else {
      setInvalidMessage("Incorrect username or access pin.");
      setSubmitting(false);
    };
  };

  useEffect(() => {
    if (isLoggedIn()) navigate(`/program/home`);
    return () => {
      clearTimeout();
    };
  }, []);

  return (<>
    <Seo pageMeta={{ title: "Sign In" }} />
    <div className="global-wrapper py-10">
      <h1 className="text-4xl mb-6 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">Sign In</h1>
      <p className="font-semibold mb-6">Please sign in to view the program details.</p>
      <p className="text-gray-800 bg-gray-200 text-xs inline-block px-3 py-1 font-semibold rounded-md">Sign in details will be available soon.</p>
      <form className="bg-gray-50 border rounded px-8 pt-6 pb-8 mb-4" method="post" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email or Username
          </label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="user@example.com"
            onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin">
            Access Pin
          </label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="pin" type="password" placeholder="**********"
            onChange={e => setPassword(e.target.value)} />
          {invalidMessage && <p className="text-red-600 text-xs italic font-medium">{invalidMessage}</p>}
        </div>
        {/* <p className="text-sm text-gray-600 font-medium">This website uses cookies to improve user experience.</p> */}
        <div className="flex items-center justify-between">
          <input className={inputStyle} type="submit" value={submitting ? "Signing In..." : "Sign In"} disabled={submitting} />
        </div>
      </form>
    </div>
  </>);
};

export default Login;
