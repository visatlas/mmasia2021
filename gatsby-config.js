require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `ACM Multimedia Asia 2021`,
    longTitle: `ACM Multimedia Asia 2021 - Gold Coast, Australia`,
    author: {
      name: `ACM Multimedia Asia Conference`,
    },
    description: `ACM Multimedia Asia Conference (ACM MM Asia) 2021 will be held from 1 to 3 December, 2021 in Gold Coast, Australia. It will be held in a hybrid mode by offering both online and offline events. A live in-person conference with virtual online component will be enabled.`,
    siteUrl: process.env.GATSBY_SITE_URL || process.env.GATSBY_PRODUCTION_SITE_URL,
    thumbnail: `/thumbnail.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `article`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 855,
              srcSetBreakpoints: [200, 340, 520, 890],
              quality: 100,
              wrapperStyle: `border: solid 0.75px #ddd`
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noreferrer",
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `${process.env.GATSBY_GOOGLE_GTAG}`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.dateModified,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            title: `ACM Multimedia Asia 2021`,
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___dateModified] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      dateModified
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ACM MMAsia 2021`,
        short_name: `MMAsia '21`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#51247a`,
        display: `fullscreen`,
        icon: `static/mmasia-icon.jpg`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -64,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.GATSBY_PREVIEW_MODE || "false",
        env: {
          true: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          false: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
  ],
};
