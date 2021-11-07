import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";

import Layout from "@/components/layout";
import PrivateRoute from "@/components/auth/privateRoute";
import Dashboard from "@/components/program/dashboard";
import Login from "@/components/auth/login";
import UserBanner from "@/components/auth/userBanner";
import Detail from "@/components/program/detail";
import { isLoggedIn } from "@/services/auth";

const Program = ({ location }) => {
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    setShowBanner(isLoggedIn());
  }, []);

  return (
    <Layout location={location} themed>
      {showBanner && <UserBanner />}
      <Router basepath="/program">
        <PrivateRoute path="/home" component={Dashboard} />
        <PrivateRoute path="/session/:id" component={Detail} />
        <Login path="/login" setShowBanner={setShowBanner} />
      </Router>
    </Layout>
  );
};

export default Program;
