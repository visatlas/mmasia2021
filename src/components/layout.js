import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="min-h-screen flex flex-col" data-is-root-path={isRootPath}>
      <Header activePage={location.pathname} />
      {process.env.GATSBY_PREVIEW_MODE === "true" && (<div className="w-screen h-6" />)}
      <div className="w-screen h-16" />
      <main>{children}</main>
      <Footer activePage={location.pathname} />
    </div>
  );
};

export default Layout;
