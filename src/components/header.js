import { Link } from "gatsby"
import React from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/Logo.png"

const NavLink = ({ to, children, title = "Link", selected = false }) => {
  const textColor = selected ? "text-accent" : "text-secondary"
  const style = `nav-item px-1 mb-2 mb-lg-0`
  return (
    <li className="nav-item px-1 mb-2 mb-lg-0">
      <Link className="nav-link text-white" to={to} title={title}>
        <span>{children}</span>
      </Link>
    </li>
  )
}

export default function Header({ activePage }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#51247a", height: "80px" }}>
        <div className="container-fluid">
          <Link to="/">
            <div className="navbar-brand mx-5">
              {/* <StaticImage src="../images/Logo.png" alt="Logo" width={160} /> */}
              <img src={logo} alt="Logo" width="160" />
            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
              <NavLink to="/dates" title="Important Dates" selected={activePage === "dates"}>Important Dates</NavLink>
              <NavLink to="/dates" title="Important Dates" selected={activePage === "dates"}>Program</NavLink>
              <NavLink to="/dates" title="Important Dates" selected={activePage === "dates"}>Attend</NavLink>
              <NavLink to="/dates" title="Important Dates" selected={activePage === "dates"}>Call for Papers</NavLink>
              <NavLink to="/dates" title="Important Dates" selected={activePage === "dates"}>Organisation</NavLink>
              <NavLink to="/dates" title="Important Dates" selected={activePage === "dates"}>Sponsors</NavLink>
              {/* <li className="nav-item px-1 mb-2 mb-lg-0">
                <a className="nav-link text-white" href="#">Important Dates</a>
              </li>
              <li className="nav-item px-1 mb-2 mb-lg-0">
                <a className="nav-link text-white" href="#">Call for Papers</a>
              </li>
              <li className="nav-item px-1 mb-2 mb-lg-0">
                <a className="nav-link text-white" href="#">Program</a>
              </li>
              <li className="nav-item px-1 mb-2 mb-lg-0">
                <a className="nav-link text-white" href="#">Attend</a>
              </li>
              <li className="nav-item px-1 mb-2 mb-lg-0">
                <a className="nav-link text-white" href="#">Organisation</a>
              </li>
              <li className="nav-item px-1 mb-2 mb-lg-0">
                <a className="nav-link text-white" href="#">Sponsors</a>
              </li> */}

              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
