import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";

const GatherTown = ({ location }) => {
  const datePublished = "2021-11-11";
  const dateModified = "2021-11-11";
  const dateModifiedFormatted = "11 November, 2021";
  const pageMeta = {
    title: "Gather Town",
    description: "Gather Town",
    datePublished,
    dateModified,
    pathname: location.pathname
  };

  return (
    <Layout location={location}>
      <Seo {...pageMeta} />
      <div className="global-wrapper pt-10">
        <h1 className="text-4xl mb-10 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">Gather Town</h1>
      </div>
    </Layout>
  );
};

export default GatherTown;
