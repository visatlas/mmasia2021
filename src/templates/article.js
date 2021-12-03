import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const ArticleTemplate = ({ data, location }) => {
  const post = data.markdownRemark;

  const pageMeta = {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt,
    datePublished: post.frontmatter.datePublished,
    dateModified: post.frontmatter.dateModified,
    pathname: location.pathname
  };

  return (
    <Layout location={location}>
      <Seo pageMeta={pageMeta} />
      <div className="global-wrapper pt-10">
        <article className="article-post" itemScope itemType="http://schema.org/Article">
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
        </article>
        <footer className="pb-0">
          <p className="text-xs mt-8">Last updated on {post.frontmatter.dateModifiedFormatted}.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default ArticleTemplate;

export const pageQuery = graphql`
  query ArticleBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        datePublished
        dateModified
        dateModifiedFormatted: dateModified(formatString: "D MMMM, YYYY")
        description
      }
    }
  }
`;
