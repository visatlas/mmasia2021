const isBrowser = () => typeof window !== "undefined";

export const getTimezonePref = () =>
  isBrowser() && window.localStorage.getItem("gatsbyTimezone")
    ? window.localStorage.getItem("gatsbyTimezone")
    : null;

export const setTimezonePref = timezone => window.localStorage.setItem("gatsbyTimezone", timezone);

export const getDatePref = () =>
  isBrowser() && window.localStorage.getItem("gatsbyDateSelect")
    ? window.localStorage.getItem("gatsbyDateSelect")
    : null;

export const setDatePref = date => date && window.localStorage.setItem("gatsbyDateSelect", date);
