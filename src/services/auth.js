export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

const setUser = user => window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleLogin = async ({ username, password }) => {
  // temporary url for testing purposes
  const response = await fetch("https://api.nifu.me/mmasia21", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password })
  });
  const { token } = await response.json();
  if (token) {
    setUser(token);
    return true;
  }
  return false;
};

export const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};

export const logout = callback => {
  setUser({});
  callback();
};
