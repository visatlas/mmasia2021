import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import committee from "../data/committee"

const Organisation = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Organisation`

  // get all committee images
  let images = {}
  data.allFile.edges.map((content) => {
    images[content.node.name] = content.node
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Organisation" />
      <div className="global-wrapper">
        <h1 className="text-4xl mb-10 font-extrabold font-headingStyle tracking-semiWide">Key Organisors</h1>
        {committee.map((roles, index) => {
          return (
            <div key={index}>
              <h2 className="text-2xl font-bold mt-6 mb-8 text-mainPurple">{roles["role"]}</h2>
              <div className="flex flex-row flex-wrap">
                {roles["list"].map((person, index) => {

                  // resolve committee image path
                  let imageName = images[person["imageUrl"]]
                  if (!imageName) {
                    imageName = images["default"]
                  }
                  const image = getImage(imageName)
                  return (
                    <div className="mr-6 mb-10 flex flex-col items-center" key={index} style={{ width: "180px" }}>
                      <div style={{ width: "150px", height: "150px" }}>
                        <GatsbyImage image={image} alt={person["name"]} />
                      </div>

                      <p className="text-xl font-extrabold mt-6 mb-1 text-center">{person["name"]}</p>
                      <p className="text-base leading-6 text-center">{person["institution"]}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })
        }
      </div>
    </Layout>
  )
}

export default Organisation

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
`
