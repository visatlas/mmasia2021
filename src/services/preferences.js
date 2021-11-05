const isBrowser = () => typeof window !== "undefined";

export const getTimezonePref = () =>
  isBrowser() && window.localStorage.getItem("gatsbyTimezone")
    ? window.localStorage.getItem("gatsbyTimezone")
    : null;

export const setTimezonePref = timezone => window.localStorage.setItem("gatsbyTimezone", timezone);
