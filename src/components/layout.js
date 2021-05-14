import * as React from "react"
// import { Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header = (
    <>
      <Header activePage={location.pathname} />
    </>
  )

  // if (isRootPath) {
  //   header = (
  //     <h1 className="main-heading">
  //       <Link to="/">{title}</Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <Link className="header-link-home" to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    // <div className="global-wrapper" data-is-root-path={isRootPath}>
    <div className="min-h-screen flex flex-col" data-is-root-path={isRootPath}>
      {/* <header className="global-header">{header}</header> */}
      <header>{header}</header>
      <div className="bg-mainPurple w-screen h-20" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
