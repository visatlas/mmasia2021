import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const browser = typeof window !== "undefined" && window;

const NotFoundPage = ({ location }) => {
  const pageMeta = {
    title: "404"
  };

  return (
    browser && (<Layout location={location}>
      <Seo pageMeta={pageMeta} />
      <div className="global-wrapper py-10">
        <h1 className="font-bold text-3xl mb-2">404 - Not Found</h1>
        <p className="">This page does not exist.</p>
        <Link className="inline-block underline text-mainPurple font-semibold" to="/" title="Homepage">
          <span>Back to Homepage</span>
        </Link>
      </div>
    </Layout>)
  );
};

export default NotFoundPage;
