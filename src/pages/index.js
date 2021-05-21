import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Title from "../components/title";
import highlights from "../data/highlights";

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Title />
      <div className="global-wrapper" id="welcome">
        <h2 className="mb-6 text-3xl text-mainPurple font-extrabold">Welcome to ACMMM Asia 2021!</h2>
        {highlights.map((content, index) => {
          return (
            <p className="mb-4" key={index}>{content}</p>
          );
        })
        }
        <div className="my-4" style={{ position: "relative", padding: "30% 45%" }}>
          <iframe style={{ position: "absolute", width: "100%", height: "100%", left: 0, top: 0 }} src="https://www.youtube.com/embed/dOebaAv8e_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="my-4" style={{ position: "relative", padding: "30% 45%" }}>
          <iframe style={{ position: "absolute", width: "100%", height: "100%", left: 0, top: 0 }} src="https://player.bilibili.com/player.html?aid=417066582&bvid=BV1DV411v733&cid=308690846&page=1&as_wide=1&high_quality=1&danmaku=0" frameborder="no" scrolling="no"></iframe>
        </div>

        <h2 className="mt-10 text-3xl text-mainPurple font-extrabold">Latest News</h2>
        <ol className="list-none">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header className="flex flex-col">
                    <Link className="w-90 text-xl font-bold font-headingStyle tracking-semiWide hover:text-blue-600" to={post.fields.slug.slice(0, -1)} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
