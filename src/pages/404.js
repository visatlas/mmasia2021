import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404" />
      <div className="flex-grow flex flex-col justify-center content-center items-center m-20">
        <h1 className="font-bold text-3xl mb-2">404: Not Found</h1>
        <p>This page does not exist...</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
