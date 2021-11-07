import * as React from "react";
import { graphql } from "gatsby";

import Layout from "@/components/layout";
import Seo from "@/components/seo";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  // const { previous, next } = data;

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
        <article className="blog-post" itemScope itemType="http://schema.org/Article">
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
        </article>

        {/* <nav className="blog-post-nav">
          <ul className="flex flex-wrap justify-between list-none p-0">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}

        <footer className="pb-0">
          <p className="text-xs mt-8">Last updated on {post.frontmatter.dateModifiedFormatted}.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
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
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
