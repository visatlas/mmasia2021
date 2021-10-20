import React from "react";
import { Router } from "@reach/router";

import Layout from "../components/layout";
import PrivateRoute from "../components/auth/privateRoute";
import Program from "../components/auth/program";
import Login from "../components/auth/login";
import UserBanner from "../components/auth/userBanner";
import { isLoggedIn } from "../services/auth";
import NotFoundPage from "./404";

const App = ({ location }) => (
  <Layout location={location} themed>
    {isLoggedIn() && <UserBanner />}
    <Router>
      <PrivateRoute path="/app/program" component={Program} />
      <Login path="/app/login" />
      <NotFoundPage default />
    </Router>
  </Layout>
);

export default App;
