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
            longTitle
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
    title: pageMeta.title !== "Home" ? pageMeta.title : site.siteMetadata.longTitle,
    fullTitle: pageMeta.title !== "Home" ? `${pageMeta.title} | ${site.siteMetadata.title}` : site.siteMetadata.longTitle,
    description: pageMeta.description || site.siteMetadata.description,
    datePublished: pageMeta.datePublished || site.buildTime,
    dateModified: pageMeta.dateModified || site.buildTime,
    pageUrl: `${site.siteMetadata.siteUrl}${pageMeta.pathname || ""}`,
  };

  // initial breadcrumb list
  const itemListElement = [{
    '@type': 'ListItem',
    position: 1,
    name: 'Home',
    item: site.siteMetadata.siteUrl,
  }];

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
    itemListElement.push({
      '@type': 'ListItem',
      position: 2,
      name: pageSEO.title,
      item: pageSEO.pageUrl,
    });
  } else {
    // main page
    schemaPage = {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      name: site.siteMetadata.longTitle,
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
    itemListElement,
  };

  // Event Information
  const schemaEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ACM Multimedia Asia Conference",
    startDate: "2021-12-01",
    endDate: "2021-12-03",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: [{
      "@type": "VirtualLocation",
      url: "https://mmasia2021.uqcloud.net",
    }, {
      "@type": "Place",
      name: "Griffith University, Gold Coast Campus",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Parklands Dr",
        addressLocality: "Southport",
        postalCode: "4215",
        addressRegion: "QLD",
        addressCountry: "AU",
      }
    }],
    image: [
      "https://mmasia2021.uqcloud.net/uploads/mmasia-logo.png",
    ],
    description: "ACM Multimedia Asia 2021 Conference will be held in a hybrid mode by offering both online and offline events. A live in-person conference with virtual online component will be enabled.",
    // performer: {
    //   "@type": "Organization",
    //   "name": "ACM Multimedia Asia Conference (MM Asia)"
    // },
    // offers: {
    //   "@type": "Offer",
    //   "url": "https://mmasia2021.uqcloud.net",
    //   "price": "30",
    //   "priceCurrency": "USD",
    //   "availability": "https://schema.org/InStock",
    //   "validFrom": "2024-05-21T12:00"
    // },
    organizer: {
      "@type": "Organization",
      name: "ACM Multimedia Asia Conference (MM Asia)",
      url: "https://www.acmmmasia.org/",
    },
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
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      {pageMeta.title === "Home" && (
        <script type="application/ld+json">{JSON.stringify(schemaEvent)}</script>
      )}
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: `en`,
  pageMeta: {
    title: "Home",
  },
};

Seo.propTypes = {
  lang: PropTypes.string,
  pageMeta: PropTypes.object.isRequired,
};

export default Seo;
