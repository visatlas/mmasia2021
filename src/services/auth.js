export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};

const setUser = user => window.localStorage.setItem("gatsbyUser", JSON.stringify(user));

export const handleLogin = async ({ username, password }) => {
  // temporary url for testing purposes
  try {
    const response = await fetch("https://mmasia2021.uqcloud.net/api/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    });
    const token = await response.json();
    if (token) {
      setUser(token);
      return true;
    }
  } catch (error) {
    return false;
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
