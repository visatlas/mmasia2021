import React, { useState, useEffect } from "react";
import { navigate, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { handleLogin, isLoggedIn } from "../../services/auth";
import Seo from "../seo";

const Login = ({ setShowBanner }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidMessage, setInvalidMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const inputStyle = `${submitting ? "bg-gray-200" : "bg-gray-600 hover:bg-gray-800 cursor-pointer"} text-white 
    font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline`;

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
    <div className="w-full h-screen absolute top-0 left-0">
      <StaticImage className="h-full w-full" src="../../images/gold-coast-blur.jpg" alt="Gold Coast Background"
        placeholder="blurred" layout="constrained" objectFit="cover" quality={100} />
      <div className="absolute w-full h-screen top-0 left-0">
        <div className="max-w-7xl mx-auto px-0 lg:px-12 h-full">
          <div className="w-full sm:w-148 bg-gray-100 bg-opacity-90 p-8 sm:p-12 pt-16 h-full overflow-auto" >
            <h1 className="text-2xl mb-6 mt-16 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">
              Sign in to MMAsia'21
            </h1>
            <p className="font-medium mb-3">Please sign in to view the program details.</p>
            <p className="mt-2 mb-4 text-red-900 text-xs inline-block font-semibold rounded-md leading-5">
              We have started sending access codes to all registrants' email addresses. If you haven't received the code after 30 November or have trouble logging in, please contact mmasia2021@gmail.com.
            </p>
            <form className="pt-3" method="post" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Email or Username
                </label>
                <input className="appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-50 
                  leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="user@example.com"
                  onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin">
                  Access Pin
                </label>
                <input className="appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-50 mb-3 
                  leading-tight focus:outline-none focus:shadow-outline" name="pin" type="password" placeholder="**********"
                  onChange={e => setPassword(e.target.value)} />
                {invalidMessage && <p className="text-red-800 text-xs italic font-medium mt-2">{invalidMessage}</p>}
              </div>
              <p className="text-sm text-gray-600 font-medium leading-6 mb-8">
                This website may use cookies to improve user experience, including keeping you logged in and remembering your preferences.
              </p>
              <div className="flex items-center gap-2">
                <input className={inputStyle} type="submit" value={submitting ? "Signing In..." : "Sign In"} disabled={submitting} />
                <Link to="/registration" title="Conference Registration" className="hover:underline py-2 px-4 font-medium">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default Login;
