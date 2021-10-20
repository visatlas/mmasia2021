import React from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../../services/auth";

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  };

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    handleLogin(this.state);
  };

  render() {
    if (isLoggedIn()) navigate(`/app/program`);
    return (
      <div className="global-wrapper py-10">
        <h1 className="text-4xl mb-6 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">Sign In</h1>
        <p className="font-semibold mb-6">Please sign in to view the program details.</p>
        <p className="text-gray-800 bg-gray-200 text-xs inline-block px-3 py-1 font-semibold rounded-md">Sign in details will be available soon.</p>
        <form class="bg-gray-50 border rounded px-8 pt-6 pb-8 mb-4" method="post" onSubmit={event => {
          this.handleSubmit(event);
          navigate(`/app/program`);
        }}>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Email or Username
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="user@example.com"
              onChange={this.handleUpdate} />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="**********"
              onChange={this.handleUpdate} />
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div class="flex items-center justify-between">
            <input class="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
