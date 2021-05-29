module.exports = {
  siteMetadata: {
    title: `ACM Multimedia Asia 2021 - Gold Coast, Australia`,
    author: {
      name: `ACM Multimedia Asia Conference`,
      summary: `ACM Multimedia Asia Conference.`,
    },
    description: `ACM Multimedia Asia Conference (ACM MM Asia) 2021 will be held from 1 to 3 December, 2021 in Gold Coast, Australia. 
    It will be held in a hybrid mode by offering both online and offline events. A live in-person conference with 
    virtual online component will be enabled.`,
    siteUrl: `https://mmasia2021.uqcloud.net/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-XSX58G49PD`,
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
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
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
        display: `minimal-ui`,
        icon: `src/images/mmasia-icon.jpg`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-no-sourcemaps`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -64,
      },
    },
    {
      // Progressive Web App + Offline functionality
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/uploads/*`],
      },
    },
  ],
};
