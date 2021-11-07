import React from 'react';
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Organisation = ({ data, location }) => {
  const pageMeta = {
    title: "Organisation",
    description: "Key organisers of ACM MMAsia 2021 Conference.",
    datePublished: data.committeeJson.datePublished,
    dateModified: data.committeeJson.dateModified,
    pathname: location.pathname
  };

  // get committee roles & names
  const committee = data.committeeJson.data;

  // get committee images
  let images = {};
  data.allFile.edges.forEach(content => {
    images[content.node.name] = content.node;
  });

  return (
    <Layout location={location}>
      <Seo pageMeta={pageMeta} />
      <div className="flex sm:block sm:mx-auto sm:my-0 sm:max-w-4xl py-10 sm:px-5 flex-col items-center">
        <h1 className="text-4xl pl-0 sm:pl-4 mb-10 font-extrabold font-headingStyle tracking-semiWide text-semiBlack">Key Organisers</h1>
        {committee.map((roles, index) => {
          return (
            <div className="flex sm:block flex-col items-center" key={index}>
              <h2 className="text-2xl font-bold mt-4 sm:mt-6 text-center sm:text-left pl-0 sm:pl-4 pb-2 mb-6 text-mainPurple 
              border-b border-gray-200 font-headingStyle tracking-semiWide">{roles["role"]}</h2>
              <div className="flex flex-row justify-center sm:justify-start flex-wrap">
                {roles["list"].map((person, index) => {
                  // resolve committee image path
                  let imageName = images[person["imageUrl"]];
                  if (!imageName) {
                    imageName = images["default"];
                  }
                  const image = getImage(imageName);
                  return (
                    <div className="mr-0 sm:mr-6 mb-3 md:mb-9 px-0 sm:px-3 pt-3 flex flex-col items-center sm:bg-orgBackground 
                    sm:rounded-lg" key={index} style={{ width: "180px" }}>
                      <div style={{ width: "150px", height: "150px" }}>
                        <GatsbyImage className="rounded-lg" image={image} alt={person["name"]}
                          imgStyle={{ borderRadius: "0.5rem" }} />
                      </div>

                      <p className="text-xl font-bold mt-6 mb-2 text-center leading-6">{person["name"]}</p>
                      <p className="mb-6 text-orgSmall text-gray-700 leading-5 text-center">{person["institution"]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
        }
        <footer className="pb-0">
          <p className="text-xs mt-0 sm:mt-8 mb-0 text-center sm:text-left">Last updated on {data.committeeJson.dateModifiedFormatted}.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default Organisation;

export const pageQuery = graphql`
  query {
    committeeJson(jsonId: {eq: "committee"}) {
      data {
        list {
          imageUrl
          institution
          name
        }
        role
      }
      datePublished
      dateModified
      dateModifiedFormatted: dateModified(formatString: "D MMMM, YYYY")
    }
    allFile(
      filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "committee"}}
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(width: 500, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
