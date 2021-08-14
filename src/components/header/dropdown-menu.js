import React from "react";

export default function DropDownMenu({ name, selected, widthStyle, children }) {
  const bgColor = selected ? "bg-menuSelected" : "";
  const style = `${bgColor} text-white text-base group-hover:bg-menuHover pl-3 pr-2 py-2 
  rounded-md text-sm font-medium font-headingStyle inline-flex items-center cursor-default`;
  const dropDownStyle = `dropdown-menu absolute hidden text-gray-800 pt-1 ${widthStyle}`;

  return (
    <div className="group dropdown inline-block relative">
      <button className={style}>
        <span className="mr-1">{name}</span>
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <div className={dropDownStyle}>
        <div className="rounded shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
          {children}
        </div>
      </div>
    </div>
  );
};
