import React from "react";
import { Link } from "gatsby";

export default function MobileNavLink({ to, children, title = "Link", selected = false,
  disabled = false, nested = false }) {
  if (disabled) {
    return (<span className="pl-8 pr-4 py-2 flex item-center w-full text-textDisabled rounded-md text-base 
    font-semibold font-headingStyle cursor-default">{children}</span>);
  }
  const bgColor = selected ? "bg-menuSelected" : "";
  const fontWeight = nested ? "font-medium" : "font-semibold";
  const paddingLeft = nested ? "pl-16" : "pl-8";

  const style = `${paddingLeft} pr-4 py-2 w-full text-white ${bgColor} block rounded-md 
  text-base ${fontWeight} font-headingStyle`;
  return (
    <Link className="flex item-center w-full" to={to} title={title}>
      <span className={style}>{children}</span>
    </Link>
  );
};
