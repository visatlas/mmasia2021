import React from 'react';
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { committee, lastUpdated } from "../data/committee";

const Organisation = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Organisation`;

  // get all committee images
  let images = {};
  data.allFile.edges.forEach(content => {
    images[content.node.name] = content.node;
  });

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Organisation" />
      <div className="flex sm:block sm:mx-auto sm:my-0 sm:max-w-4xl py-10 sm:px-5 flex-col items-center">
        <h1 className="text-4xl mb-10 font-extrabold font-headingStyle tracking-semiWide">Key Organisors</h1>
        {committee.map((roles, index) => {
          return (
            <div className="flex sm:block flex-col items-center" key={index}>
              <h2 className="text-2xl font-bold mt-2 sm:mt-6 pb-2 mb-6 text-mainPurple border-b-2 border-gray-200 tracking-semiWide">{roles["role"]}</h2>
              <div className="flex flex-row justify-center sm:justify-start flex-wrap">
                {roles["list"].map((person, index) => {
                  // resolve committee image path
                  let imageName = images[person["imageUrl"]];
                  if (!imageName) {
                    imageName = images["default"];
                  }
                  const image = getImage(imageName);
                  return (
                    <div className="mr-0 sm:mr-6 mb-9 flex flex-col items-center sm:bg-orgBackground sm:p-3 sm:pb-6 sm:rounded-lg"
                      key={index} style={{ width: "180px" }}>
                      <div style={{ width: "150px", height: "150px" }}>
                        <GatsbyImage className="rounded-lg" image={image} alt={person["name"]} imgStyle={{ borderRadius: "0.5rem" }} />
                      </div>

                      <p className="text-xl font-bold mt-6 mb-2 text-center leading-6">{person["name"]}</p>
                      <p className="text-orgSmall text-gray-700 leading-5 text-center">{person["institution"]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
        }
        <footer className="pb-0">
          <p className="text-xs mt-0 sm:mt-8">Last Updated on {lastUpdated}</p>
        </footer>
      </div>
    </Layout>
  );
};

export default Organisation;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allFile(
      filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "committee"}}
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(width: 150, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
