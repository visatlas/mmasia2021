const isBrowser = () => typeof window !== "undefined";

export const getTimezonePref = () =>
  isBrowser() && window.localStorage.getItem("gatsbyTimezone")
    ? window.localStorage.getItem("gatsbyTimezone")
    : null;

export const setTimezonePref = timezone => window.localStorage.setItem("gatsbyTimezone", timezone);

export const getRememberTimezone = () =>
  isBrowser() && window.localStorage.getItem("gatsbyRememberTimezone")
    ? window.localStorage.getItem("gatsbyRememberTimezone")
    : null;

export const setRememberTimezone = remember => window.localStorage.setItem("gatsbyRememberTimezone", remember);

export const getDatePref = () =>
  isBrowser() && window.localStorage.getItem("gatsbyDateSelect")
    ? window.localStorage.getItem("gatsbyDateSelect")
    : null;

export const setDatePref = date => date && window.localStorage.setItem("gatsbyDateSelect", date);

export const getVideoPref = () =>
  isBrowser() && window.localStorage.getItem("gatsbyVideoSource")
    ? window.localStorage.getItem("gatsbyVideoSource")
    : null;

export const setVideoPref = source => source && window.localStorage.setItem("gatsbyVideoSource", source);
