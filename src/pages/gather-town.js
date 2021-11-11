import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";

const GatherTown = ({ location }) => {
  const datePublished = "2021-11-11";
  const dateModified = "2021-11-11";
  const dateModifiedFormatted = "11 November, 2021";
  const pageMeta = {
    title: "Gather.Town Tutorial",
    description: "Gather.Town Tutorial",
    datePublished,
    dateModified,
    pathname: location.pathname
  };

  return (
    <Layout location={location}>
      <Seo pageMeta={pageMeta} />
      <div className="global-wrapper pt-10">
        <h1 className="text-4xl mb-10 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">Gather.Town Tutorial</h1>

        <footer className="pb-0">
          <p className="text-xs mt-0 sm:mt-8 mb-0 text-center sm:text-left">Last updated on {dateModifiedFormatted}.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default GatherTown;
