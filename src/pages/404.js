import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = ({ location }) => {
  const pageMeta = {
    title: "404"
  };

  return (
    <Layout location={location}>
      <Seo pageMeta={pageMeta} />
      <div className="flex-grow flex flex-col justify-center content-center items-center m-20">
        <h1 className="font-bold text-3xl mb-2 text-center">404 - Not Found</h1>
        <p className="text-center">This page does not exist.</p>
        <Link className="flex item-center underline text-mainPurple" to="/" title="Homepage">
          <span className="text-center">Back to Homepage</span>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
