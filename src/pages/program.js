import React from "react";
import { Router } from "@reach/router";

import Layout from "../components/layout";
import PrivateRoute from "../components/auth/privateRoute";
import Dashboard from "../components/program/dashboard";
import Login from "../components/auth/login";
import UserBanner from "../components/auth/userBanner";
import Schedule from '../components/program/schedule';
import { isLoggedIn } from "../services/auth";
import Detail from "../components/program/detail";

const Program = ({ location }) => (
  <Layout location={location} themed>
    {isLoggedIn() && <UserBanner />}
    <Router>
      <PrivateRoute path="/program/home" component={Dashboard} />
      <PrivateRoute path="/program/session/:id" component={Detail} />
      <Login path="/program/login" />
      <Schedule path="/program" />
    </Router>
  </Layout>
);

export default Program;
