import { Link } from "gatsby";
import React, { useState } from 'react';

const NavLink = ({ to, children, title = "Link", selected = false, disabled = false }) => {
  if (disabled) {
    return (<span className="text-textDisabled text-base px-3 py-2 rounded-md text-sm font-medium 
    font-headingStyle cursor-default">{children}</span>);
  }
  const bgColor = selected ? "bg-menuSelected" : "";
  const style = `${bgColor} text-white text-base hover:bg-purple-300 hover:text-black px-3 py-2 rounded-md text-sm 
  font-medium font-headingStyle`;
  return (
    <Link className="flex item-center" to={to} title={title}>
      <span className={style}>{children}</span>
    </Link>
  );
};

const MobileNavLink = ({ to, children, title = "Link", selected = false, disabled = false }) => {
  if (disabled) {
    return (<span className="pl-8 pr-4 py-2 flex item-center w-full text-textDisabled block rounded-md text-base 
    font-semibold font-headingStyle cursor-default">{children}</span>);
  }
  const bgColor = selected ? "bg-menuSelected" : "";
  const style = `pl-8 pr-4 py-2 w-full text-white ${bgColor} hover:bg-purple-300 hover:text-black block rounded-md 
  text-base font-semibold font-headingStyle`;
  return (
    <Link className="flex item-center w-full" to={to} title={title}>
      <span className={style}>{children}</span>
    </Link>
  );
};

const Calls = ({ selected }) => {
  const bgColor = selected ? "bg-menuSelected" : "";
  const style = `${bgColor} text-white text-base group-hover:bg-purple-300 group-hover:text-black pl-3 pr-2 py-2 
  rounded-md text-sm font-medium font-headingStyle inline-flex items-center`;

  return (
    <div className="group dropdown inline-block relative">
      <button className={style}>
        <span className="mr-1">Calls &amp; Dates</span>
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </button>
      <div className="dropdown-menu absolute hidden text-gray-800 pt-1 w-60"> {/* hidden */}
        <div className="rounded shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
          <Link to="/important-dates" className="font-headingStyle bg-white hover:bg-gray-100 py-2 px-4 block 
          whitespace-no-wrap text-orgSmall font-medium" title="Important Dates">Important Dates</Link>
          <div className="w-full bg-white py-1"><div className="w-full bg-gray-200" style={{ height: "1px" }} /></div>
          <Link to="/call-for-papers" className="font-headingStyle bg-white hover:bg-gray-100 py-2 px-4 block 
          whitespace-no-wrap text-orgSmall" title="Call for Papers">Call for Papers</Link>
          <Link to="/call-for-workshops" className="font-headingStyle bg-white hover:bg-gray-100 py-2 px-4 block 
          whitespace-no-wrap text-orgSmall" title="Call for Workshops">Call for Workshops</Link>
        </div>
      </div>
    </div>
  );
};

export default function Header({ activePage }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header>
      <nav className="bg-mainPurple fixed top-0 z-50 w-full lg:px-10 md:bg-uqStyle">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* <!-- Mobile menu button--> */}
              <button type="button" className="py-2 pl-3 pr-3 ml-4 inline-flex items-center justify-center rounded-md 
              text-gray-50 hover:text-black hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-inset 
              focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
                onClick={() => {
                  showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
                }}>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg className={`${showMobileMenu ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Icon when menu is open */}
                <svg className={`${showMobileMenu ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">

              <Link to="/" title="ACM Multimedia Asia 2021 - Gold Coast, Australia">
                <div className="flex-shrink-0 items-center lg:ml-8 flex md:hidden bp3:flex">
                  {/* <img className="h-12" src={Logo} alt="ACM MMAsia 2021 Logo" height={48} width={131.5} /> */}
                  {/* <div className="flex flex-col ml-2 justify-center items-center">
                    <h1 className="text-white font-bold leading-tight text-xl"><span className="text-yellow-400" 
                    style={{}}>ACM</span>multimedia</h1>
                    <p className="text-white leading-none" style={{ fontSize: "0.75rem", 
                    color: "rgba(255,255,255,0.6)" }}>Asia 2021, Gold Coast</p>
                  </div> */}
                  <svg className="h-12" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"
                    clipRule="evenodd" viewBox="0 0 369 133">
                    <title>ACM Multimedia Asia 2021 - Gold Coast, Australia</title>
                    <path
                      fill="#fff"
                      d="M104.888 507.962h-6.323v-63.657c0-3.718-.901-6.641-2.701-8.765-1.8-2.127-4.265-3.187-7.393-3.187-3.246 0-6.582 1.21-10.003 3.63v71.979H23.751V401.365h54.717v13.369c8.854-9.502 19.801-14.256 32.846-14.256 15.522 0 27.005 6.142 34.442 18.417 6.077-6.375 12.171-11.037 18.281-13.988 6.109-2.951 13-4.429 20.674-4.429h38.674v14.256c8.857-9.502 19.805-14.256 32.85-14.256 15.523 0 27.003 6.142 34.44 18.417 6.078-6.375 12.174-11.037 18.285-13.988 6.109-2.951 12.998-4.429 20.671-4.429 11.57 0 20.687 3.542 27.358 10.625 6.669 7.083 10.006 17.06 10.006 29.926v66.933h-51.706v-63.657c0-3.776-.931-6.714-2.79-8.809-1.86-2.095-4.295-3.143-7.304-3.143-3.365 0-6.7 1.15-10.005 3.452v72.157h-51.704v-63.657c0-3.718-.902-6.641-2.702-8.765-1.802-2.127-4.264-3.187-7.39-3.187-3.25 0-6.585 1.21-10.009 3.63v71.979h-53.016v-63.657c0-3.776-.93-6.714-2.789-8.809-1.86-2.095-4.296-3.143-7.306-3.143-3.364 0-6.699 1.15-10.004 3.452v57.481l-3.542-3.759s-8.732-6.966-15.834-12.482a28.05 28.05 0 00.278-1.837c.805-8.18-.894-14.755-4.634-20.901-1.844-3.032-2.175-7.025-2.255-9.468 0 0 .272.86.987 1.844.716.983 2.302-.074 2.245-.614-.056-.54.909-.341 2.763.614 2.85 1.468 10.024 9.525 10.829 10.509.805.983 6.193 6.801 6.193 6.801s1.957 1.4-.032-2.889c-.583-1.257-10.552-16.21-10.999-17.64-.447-1.431-1.162-2.146-.984-2.951.179-.805-.357-2.504-.894-3.398-.536-.895-3.36-3.935-4.918-4.114-1.559-.179-2.146-.231-2.593-.517-.447-.288-1.132.875-1.952.875-.82 0-5.268.612-6.543 3.398-2.619 5.723-1.431 7.78 3.577 20.835 2.24 5.842 2.963 10.245 2.154 14.285a61.254 61.254 0 00-.478-.348c-5.617-4.058-8.677-12.825-8.677-12.825s-4.479-11.105-1.819-19.502c2.658-8.397 4.478-16.513 4.478-17.677 0-1.163-.7-4.994-1.854-6.422-1.153-1.428-4.304-5.57-8.222-5.5-3.919.069-6.927 3.709-6.927 3.709s-.63 1.12-1.537 2.106c-.908.986-11.454 6.547-15.831 8.282-5.549 2.201-4.544 3.495-4.544 3.495s1.676.575 4.158-.175c2.483-.749 16.843-5.031 17.754-5.398.911-.367 2.815-.543 2.815-.543l1.968 1.329s.369 2.373 1.864 2.996c1.086.453 1.842-.541 1.842-.541s1.156.04.593 3.311c-.956 5.558-4.55 10.174-4.987 21.099-.166 4.15.154 11.901 3.906 22.376a340.85 340.85 0 015.579 17.029l-9.309 19.284zm270.907-13.402c2.548 0 4.29 2.366 4.29 5.746 0 1.274-.234 2.6-.624 3.588h.936c2.002 0 3.198-1.196 3.198-3.328 0-1.43-.546-2.834-1.56-4.317l1.82-.883c1.17 1.742 1.768 3.536 1.768 5.46 0 3.718-2.002 5.928-5.538 5.928h-4.914c-.65 0-.91.208-.936.806h-2.444a7.572 7.572 0 01-.13-1.403c.078-1.093.624-1.664 1.482-1.795l.858-.077c-1.586-1.223-2.47-3.095-2.47-5.124 0-2.625 1.846-4.601 4.264-4.601zm-39.256 10.642c-3.162 0-5.479-2.751-5.479-6.562 0-3.812 2.317-6.584 5.479-6.584 3.141 0 5.48 2.772 5.48 6.584 0 3.811-2.339 6.562-5.48 6.562zm26.602-1.949v1.733h-7.775v-1.733h3.075v-8.446c-.498.671-2.404 1.689-3.53 1.689v-1.82c1.256 0 3.357-1.732 3.53-2.057h1.95v10.634h2.75zm-19.508 1.733c0-2.318.607-4.007 3.531-5.654 1.71-.953 3.811-1.689 3.811-3.226 0-.997-.909-2.015-2.599-2.015-1.754 0-2.793 1.105-3.335 1.755l-1.234-1.386c.476-.499 2.231-2.058 4.916-2.058 2.664 0 4.31 1.559 4.31 3.487 0 2.231-2.209 3.335-3.487 3.963-1.277.629-3.379 1.776-3.661 3.401h7.386v1.733h-9.638zm-24.011 0c0-2.318.606-4.007 3.53-5.654 1.711-.953 3.812-1.689 3.812-3.226 0-.997-.91-2.015-2.599-2.015-1.754 0-2.794 1.105-3.336 1.755l-1.234-1.386c.476-.499 2.231-2.058 4.917-2.058 2.663 0 4.309 1.559 4.309 3.487 0 2.231-2.209 3.335-3.487 3.963-1.277.629-3.378 1.776-3.66 3.401h7.385v1.733h-9.637zm55.445-1.638c.286.338.676.546.988.546h1.794c.364-.962.598-2.106.598-3.146 0-2.028-.988-3.484-2.418-3.484-1.352 0-2.392 1.144-2.392 2.678 0 1.378.546 2.73 1.43 3.406zm-38.528-9.517c-2.122 0-3.573 1.95-3.573 4.809 0 2.858 1.451 4.787 3.573 4.787 2.079 0 3.552-1.929 3.552-4.787 0-2.859-1.473-4.809-3.552-4.809zm54.233-4.549v2.86h-3.146v-2.86h3.146zm-5.382 0v2.86h-13.599v-2.86h13.599zm-11.961-14.118l1.924 1.196c-1.144 1.638-1.742 3.276-1.742 4.967 0 1.715.676 2.807 1.898 2.807 1.144 0 1.508-1.092 2.106-3.536.858-3.406 1.56-4.758 3.666-4.758 2.756 0 4.342 2.34 4.342 5.33 0 1.976-.676 3.901-1.742 5.33l-1.742-1.221c.988-1.326 1.457-2.731 1.457-4.16 0-1.456-.573-2.601-1.899-2.601-1.118 0-1.404.78-1.95 2.99-.884 3.744-1.69 5.383-4.004 5.383-2.574 0-4.212-2.159-4.212-5.513 0-2.184.702-4.654 1.898-6.214zm2.366-14.56c2.548 0 4.29 2.367 4.29 5.747 0 1.273-.234 2.6-.624 3.588h.936c2.002 0 3.198-1.196 3.198-3.328 0-1.43-.546-2.834-1.56-4.317l1.82-.883c1.17 1.742 1.768 3.536 1.768 5.46 0 3.718-2.002 5.928-5.538 5.928h-4.914c-.65 0-.91.208-.936.806h-2.444a7.575 7.575 0 01-.13-1.404c.078-1.092.624-1.664 1.482-1.794l.858-.078c-1.586-1.222-2.47-3.094-2.47-5.123 0-2.625 1.846-4.602 4.264-4.602zm-.728 8.789c.286.338.676.546.988.546h1.794c.364-.962.598-2.107.598-3.147 0-2.027-.988-3.483-2.418-3.483-1.352 0-2.392 1.144-2.392 2.678 0 1.378.546 2.73 1.43 3.406zm-205.451-81.562c0-3.877 2.901-7.122 7.044-7.122 4.167 0 6.884 3.324 6.884 7.017 0 .369-.026.739-.053.896h-11.422c.211 2.718 2.243 4.617 4.643 4.617 1.688 0 3.35-.924 3.931-2.295l2.003.554c-.896 2.031-3.243 3.482-6.013 3.482-4.142 0-7.017-3.271-7.017-7.149zm-61.737 1.373v-8.257h2.321v7.808c0 2.822.976 4.22 2.928 4.22 1.899 0 3.72-1.292 4.537-3.402v-8.626h2.321v10.921c0 .58.211.818.739.844v2.005c-.396.052-.685.105-.923.105-1.055 0-1.689-.554-1.741-1.398l-.079-1.662c-1.213 2.058-3.351 3.218-5.724 3.218-2.875 0-4.379-1.978-4.379-5.776zm77.329-1.346c0-3.904 2.612-7.149 6.252-7.149 2.215 0 4.037 1.32 5.038 2.982v-8.23h2.321v16.407c0 .58.211.818.739.844v2.005c-.37.052-.685.105-.923.105-1.055 0-1.741-.633-1.768-1.398l-.052-1.292c-1.082 1.767-3.06 2.848-5.039 2.848-3.824 0-6.568-3.323-6.568-7.122zm22.453 2.902c0-2.611 2.4-4.326 5.802-4.326 1.346 0 2.797.264 3.852.686v-1.108c0-2.242-1.345-3.614-3.641-3.614-1.423 0-2.875.554-4.378 1.609l-.764-1.504c1.766-1.186 3.508-1.794 5.407-1.794 3.508 0 5.697 2.059 5.697 5.541v5.618c0 .58.212.818.739.844v2.005c-.343.053-.686.105-.95.105-.764 0-1.688-.396-1.741-1.398l-.052-.976c-1.24 1.662-3.351 2.532-5.224 2.532-2.769 0-4.747-1.872-4.747-4.22zm-69.416 3.27c-.581.264-1.873.871-3.35.871-1.689 0-3.112-.897-3.112-2.875v-9.259h-1.873v-1.82h1.873v-4.59h2.321v4.59h3.086v1.82h-3.086v8.546c.052 1.002.739 1.451 1.556 1.451.923 0 1.767-.422 2.031-.58l.554 1.846zm-14.272-18.569h2.321v15.694c0 1.03.581 1.637 1.556 1.637.396 0 .977-.133 1.425-.317l.369 1.872c-.764.317-1.952.554-2.769.554-1.794 0-2.902-1.081-2.902-2.901v-16.539zm78.754 5.486h2.321v13.77h-2.321v-13.77zm-62.476 0h2.321v13.77h-2.321v-13.77zm-35.753 13.769h-2.321v-7.703c0-2.875-.95-4.22-2.77-4.22-1.873 0-3.508 1.503-4.141 3.64v8.283h-2.322v-7.703c0-2.928-.923-4.22-2.743-4.22-1.847 0-3.508 1.451-4.141 3.613v8.31h-2.321v-13.77h2.11v2.955c1.107-2.032 2.981-3.192 5.222-3.192 2.295 0 3.693 1.398 4.01 3.35 1.213-2.19 3.007-3.35 5.249-3.35 3.166 0 4.168 2.48 4.168 5.777v8.23zm62.476 0h-2.321v-7.703c0-2.875-.95-4.22-2.77-4.22-1.873 0-3.509 1.503-4.141 3.64v8.283h-2.322v-7.703c0-2.928-.923-4.22-2.743-4.22-1.847 0-3.509 1.451-4.141 3.613v8.31h-2.322v-13.77h2.111v2.955c1.108-2.032 2.981-3.192 5.223-3.192 2.294 0 3.693 1.398 4.009 3.35 1.213-2.19 3.007-3.35 5.249-3.35 3.166 0 4.168 2.48 4.168 5.777v8.23zm49.84-3.112c.343-.396.501-.791.501-1.082v-2.031a9.935 9.935 0 00-3.481-.659c-2.374 0-3.958 1.055-3.958 2.717 0 1.424 1.162 2.691 3.113 2.691 1.477 0 3.034-.713 3.825-1.636zm-20.316-1.715v-3.956c-.659-1.794-2.638-3.219-4.378-3.219-2.717 0-4.511 2.532-4.511 5.171 0 2.769 2.057 5.09 4.722 5.09 1.661 0 3.825-1.371 4.167-3.086zm-15.144-2.981c-.237-2.638-2.242-4.458-4.694-4.458-2.454 0-4.458 1.846-4.643 4.458h9.337zm-41.103-11.448h2.321v2.901h-2.321v-2.901zm62.476 0h2.321v2.901h-2.321v-2.901z"
                      transform="translate(-22.192 -375.117)"
                    ></path>
                    <path
                      fill="#FFC500"
                      fillRule="nonzero"
                      d="M31.461 379.338l-2.813 7.918h5.545l-2.732-7.918zm-9.269 15.477l7.725-19.588h3.089l7.697 19.588h-4.028l-1.793-4.883h-6.869l-1.793 4.883h-4.028zm28.829-19.698c3.476 0 6.152 1.738 7.367 4.276l-2.925 2.015c-.911-2.208-2.897-2.925-4.552-2.925-3.614 0-5.435 3.393-5.435 6.51 0 3.477 2.262 6.622 5.518 6.622 1.683 0 3.696-.856 4.579-2.98l3.118 1.793c-1.186 2.924-4.746 4.552-7.808 4.552-5.435 0-9.242-5.131-9.242-10.097 0-4.773 3.449-9.766 9.38-9.766m26.237 19.698v-12.966l-5.048 9.655h-2.07l-5.049-9.655v12.966h-3.807v-19.587h4.084l5.793 11.146 5.849-11.146h4.055v19.587h-3.807z"
                      transform="translate(-22.192 -375.117)"
                    ></path>
                    <path
                      fill="#B72501"
                      fillRule="nonzero"
                      d="M0-8.038s.553.47.553.981c0 .512-1.42.398-.796 1.08.625.681 1.193 1.761 1.648 2.044.454.285-1.132 2.604-1.473 2.819-.934.59-2.219.59-2.503 1.158-.284.568-2.525.267-2.525.267s.035-3.509-.327-3.874c-.362-.366-3.1-1.46-3.1-1.46l-.92-.564s.33-.439 1.903-1.171c1.887-.878 3.387-.788 3.997-.938.39-.096.987-.954 1.624-.836.415.077 1.919.494 1.919.494"
                      transform="translate(-22.192 -375.117) translate(128.866 440.97)"
                    ></path>
                    <path
                      fill="#B72501"
                      fillRule="nonzero"
                      d="M0 11.045s.656-2.474 1.907-3.662c1.251-1.188 3.368-2.038 3.368-2.038S3.681 2.783 2.306 1.689C.75.451-.381-.061-.381-.061s.463 1.69-.001 2.378c-.463.688-1.339 1.501-2.027 1.564-.687.062 0 1.622 0 1.622s-.312 1.379-1.5 1.567c0 0 2.588.617 2.655 2.327C-1.188 11.106 0 11.045 0 11.045"
                      transform="translate(-22.192 -375.117) translate(111.172 410.27)"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="nonzero"
                      d="M-.558-2.571s-1.338.196-1.33.932c.009.735.696 1.746 1.33 1.712C.076.038.7-.239 1.042-.902c.34-.666-.265-1.591-1.6-1.669"
                      transform="translate(-22.192 -375.117) scale(-1 1) rotate(-14.12 1630.31 654.667)"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="nonzero"
                      d="M0-2.897c-.549.275-.909 2.329 0 2.499.909.17 2.02.284 2.259.511.24.228 1.035-.397 1.092-.852.057-.454-.454-1.988-1.476-2.158-1.023-.17-1.193-.341-1.875 0"
                      transform="translate(-22.192 -375.117) translate(125.442 439.14)"
                    ></path>
                  </svg>
                </div>
              </Link>

              <div className="hidden md:flex sm:ml-8 items-center">
                <div className="flex space-x-4">
                  <NavLink selected={false} to="/" title="Home">Home</NavLink>
                  <Calls selected={["/call-for-papers", "/call-for-workshops",
                    "/important-dates"].includes(activePage)} />
                  {/* <NavLink selected={activePage === "/calls"} to="/calls"
                    title="Calls &amp; Dates" >Calls &amp; Dates</NavLink> */}
                  <NavLink selected={activePage === "/program"} to="/" title="Program" disabled>Program</NavLink>
                  <NavLink selected={activePage === "/attend"} to="/" title="Attend" disabled>Attend</NavLink>
                  <NavLink selected={activePage === "/organisation"} to="/organisation"
                    title="Organisation">Organisation</NavLink>
                  <NavLink to="/" title="Sponsors" selected={activePage === "/sponsors"} disabled>Sponsors</NavLink>
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto 
            sm:ml-6 sm:pr-0">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341
                  C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div> */}
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className={showMobileMenu ? "md:hidden" : "hidden"} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" title="Home" selected={activePage === "/"}>Home</MobileNavLink>
            <MobileNavLink to="/important-dates" title="Important Dates"
              selected={activePage === "/important-dates"}>Important Dates</MobileNavLink>
            <MobileNavLink to="/call-for-papers" title="Calls for Papers"
              selected={activePage === "/call-for-papers"}>Call for Papers</MobileNavLink>
            <MobileNavLink to="/call-for-workshops" title="Calls for Workshops"
              selected={activePage === "/call-for-workshops"}>Call for Workshops</MobileNavLink>
            <MobileNavLink to="/" title="Program" selected={activePage === "/program"}
              disabled>Program</MobileNavLink>
            {/* <MobileNavLink to="/" title="Attend"
              selected={activePage === "/attend"} disabled>Attend</MobileNavLink> */}
            <MobileNavLink to="/organisation" title="Organisation"
              selected={activePage === "/organisation"}>Organisation</MobileNavLink>
            {/* <MobileNavLink to="/" title="Sponsors"
              selected={activePage === "/sponsors"} disabled>Sponsors</MobileNavLink> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
