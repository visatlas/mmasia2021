import React from "react";
import { Link } from "gatsby";

export default function NavLink({ to, children, title = "Link", selected = false, disabled = false }) {
  if (disabled) {
    return (<span className="text-textDisabled text-base px-3 py-2 rounded-md text-sm font-medium 
    font-headingStyle cursor-default">{children}</span>);
  }
  const bgColor = selected ? "bg-menuSelected" : "";
  const style = `${bgColor} text-white text-base hover:bg-menuHover px-3 py-2 rounded-md text-sm 
  font-medium font-headingStyle`;
  return (
    <Link className="flex item-center" to={to} title={title}>
      <span className={style}>{children}</span>
    </Link>
  );
};
