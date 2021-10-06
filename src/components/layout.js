import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ location, footer = true, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="w-full min-h-screen flex flex-col" data-is-root-path={isRootPath}>
      <Header activePage={location.pathname} />
      {process.env.GATSBY_PREVIEW_MODE === "true" && (<div className="w-full h-6" />)}
      <div className="w-full h-16" />
      <main className="w-full">{children}</main>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;
