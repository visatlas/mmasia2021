import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ lang, pageMeta }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime(formatString: "YYYY-MM-DD")
          siteMetadata {
            title
            description
            author {
              name
            }
            siteUrl
            thumbnail
          }
        }
      }
    `
  );

  const pageSEO = {
    title: pageMeta.title !== "Home" ? pageMeta.title : site.siteMetadata.title,
    fullTitle: pageMeta.title !== "Home" ? `${pageMeta.title} | ${site.siteMetadata.title}` : site.siteMetadata.title,
    description: pageMeta.description || site.siteMetadata.description,
    datePublished: pageMeta.datePublished || site.buildTime,
    dateModified: pageMeta.dateModified || site.buildTime,
    pageUrl: `${site.siteMetadata.siteUrl}${pageMeta.pathname || ""}`
  };

  // schema.org in JSONLD format
  let schemaPage = null;
  if (pageMeta.title !== "Home") {
    schemaPage = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      name: pageSEO.fullTitle,
      description: pageSEO.description,
      url: pageSEO.pageUrl,
      mainEntityOfPage: pageSEO.pageUrl,
      headline: pageSEO.fullTitle,
      datePublished: pageSEO.datePublished,
      dateModified: pageSEO.dateModified,
      inLanguage: lang,
      author: {
        '@type': 'Organization',
        name: site.siteMetadata.author.name,
      },
      copyrightHolder: {
        '@type': 'Organization',
        name: site.siteMetadata.author.name,
      },
      copyrightYear: "2021",
      creator: {
        '@type': 'Organization',
        name: site.siteMetadata.author.name,
      },
      publisher: {
        '@type': 'Organization',
        name: site.siteMetadata.author.name,
      },
      image: {
        '@type': 'ImageObject',
        url: `${site.siteMetadata.siteUrl}${site.siteMetadata.thumbnail}`,
      },
    };
  } else {
    // main page
    schemaPage = {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      name: site.siteMetadata.title,
      description: site.siteMetadata.description,
      url: site.siteMetadata.siteUrl,
      mainEntityOfPage: site.siteMetadata.siteUrl,
      inLanguage: lang,
      author: {
        '@type': 'Organization',
        name: site.siteMetadata.author.name,
      },
      copyrightHolder: {
        '@type': 'Organization',
        name: site.siteMetadata.author.name,
      },
      copyrightYear: "2021",
      creator: {
        '@type': 'Organization',
        name: site.siteMetadata.author.name,
      },
      publisher: {
        '@type': 'Organization',
        name: site.siteMetadata.author.name,
      },
      datePublished: '2021-05-21T20:00:00+10:00',
      dateModified: site.buildTime,
      image: {
        '@type': 'ImageObject',
        url: `${site.siteMetadata.siteUrl}${site.siteMetadata.thumbnail}`,
      },
    };
  }

  // breadcrumbs
  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement: [{
      '@type': 'ListItem',
      position: 1,
      name: 'Important Dates',
      item: `${site.siteMetadata.siteUrl}/important-dates`,
    }, {
      '@type': 'ListItem',
      position: 2,
      name: 'Organisation',
      item: `${site.siteMetadata.siteUrl}/organisation`,
    }, {
      '@type': 'ListItem',
      position: 3,
      name: 'Call for Regular Papers',
      item: `${site.siteMetadata.siteUrl}/call-for-papers`,
    }, {
      '@type': 'ListItem',
      position: 4,
      name: 'Call for Demo Papers',
      item: `${site.siteMetadata.siteUrl}/call-for-demo-papers`,
    }, {
      '@type': 'ListItem',
      position: 5,
      name: 'Call for Short Papers',
      item: `${site.siteMetadata.siteUrl}/call-for-short-papers`,
    }, {
      '@type': 'ListItem',
      position: 6,
      name: 'Call for Tutorials',
      item: `${site.siteMetadata.siteUrl}/call-for-tutorials`,
    }],
  };

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageSEO.fullTitle}
      meta={[{
        name: `description`,
        content: pageSEO.description,
      }, {
        property: `og:title`,
        content: pageSEO.fullTitle,
      }, {
        property: `og:description`,
        content: pageSEO.description,
      }, {
        property: `og:type`,
        content: `website`,
      }, {
        property: `og:image`,
        content: site.siteMetadata.thumbnail,
      }, {
        property: `og:url`,
        content: pageSEO.pageUrl,
      }, {
        name: `twitter:card`,
        content: `summary`,
      }, {
        name: `twitter:creator`,
        content: site.siteMetadata.author.name,
      }, {
        name: `twitter:title`,
        content: pageSEO.fullTitle,
      }, {
        name: `twitter:description`,
        content: pageSEO.description,
      }]}
    >
      <script type="application/ld+json">{JSON.stringify(schemaPage)}</script>
      {pageMeta.title === "Home" && (
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      )}
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: `en`,
  pageMeta: {
    title: "Home"
  }
};

Seo.propTypes = {
  lang: PropTypes.string,
  pageMeta: PropTypes.object.isRequired
};

export default Seo;
