import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Title from "../components/title";

const Index = ({ data, location }) => {
  const [allowVideo, setAllowVideo] = useState(false);
  const [useYouTube, setUseYouTube] = useState(false);

  // get introduction paragraph
  const highlights = data.paragraphsJson.data;

  useEffect(() => {
    // set timeout when determine country
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      setAllowVideo(true);
      setUseYouTube(false);
    }, 4000);

    // switch to youtube/bilibili source based on country
    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then(res => res.json())
      .then(response => {
        clearTimeout(timeoutId);
        setAllowVideo(true);
        if (response.country_code !== "CN") {
          setUseYouTube(true);
        }
      })
      .catch(_ => {
        clearTimeout(timeoutId);
        setAllowVideo(true);
        setUseYouTube(false);
      });
  }, []);

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

        {allowVideo && (
          <div>
            <h2 className="mt-12 mb-6 text-3xl text-mainPurple font-extrabold">Promotional Video</h2>
            <div className="flex flex-row justify-between">
              <button onClick={() => { setUseYouTube(true); }} type="button"
                className="py-2 px-5 flex-1 space-x-2 mr-1 flex justify-center items-center rounded-md text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-200 focus:outline-none">
                <svg width="24px" height="24px" viewBox="0 0 310 310" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
                  C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
		              C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
		              c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
		              c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
		              C204.394,157.263,202.325,160.684,199.021,162.41z"/>
                </svg>
                <span className="font-medium">Watch on YouTube</span>
              </button>
              <button onClick={() => { setUseYouTube(false); }} type="button"
                className="py-2 px-5 flex-1 space-x-2 ml-1 flex justify-center items-center rounded-md text-gray-900 bg-gray-100 hover:text-gray-900 hover:bg-gray-200 focus:outline-none">
                <svg width="22px" height="22px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 
                  3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 
                  1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027
                  c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747
                  c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24
                  c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334
                  c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 
                  11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374
                  c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173
                  c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z" />
                </svg>
                <span className="font-medium">Watch on Bilibili</span>
              </button>
            </div>
            {useYouTube ? (
              <div className="pb-6 mt-2">
                <div className="bg-black" style={{ position: "relative", padding: "28.1% 45%" }}>
                  <iframe style={{ position: "absolute", width: "100%", height: "100%", left: 0, top: 0 }} src="https://www.youtube-nocookie.com/embed/dOebaAv8e_4" title="ACM Multimedia Asia 2021 Video on YouTube" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
              </div>
            ) : (
              <div className="pb-6 player:pb-0 mt-2">
                <div className="bg-black" style={{ position: "relative", padding: "29% 45%", marginBottom: "0px" }}>
                  <iframe style={{ position: "absolute", width: "100%", height: "100%", left: 0, top: 0 }} src="https://player.bilibili.com/player.html?aid=417066582&bvid=BV1DV411v733&cid=308690846&page=1&as_wide=1&high_quality=1&danmaku=0" title="ACM Multimedia Asia 2021 Video on Bilibili" frameBorder="no" scrolling="no" allowFullScreen></iframe>
                  <div className="hidden player:block bg-white w-full" style={{ position: "absolute", padding: "0 50%", height: "38px", bottom: 0, left: 0 }} />
                </div>
              </div>
            )}
          </div>
        )}

        <h2 className="mt-6 text-3xl text-mainPurple font-extrabold">Latest News</h2>
        <ol className="list-none">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li className="group" key={post.fields.slug}>
                <Link to={post.fields.slug.slice(0, -1)} itemProp="url" title={title}>
                  <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                    <header className="flex flex-col">
                      <span className="w-90 text-xl font-bold font-headingStyle tracking-semiWide group-hover:text-blue-600" itemProp="headline">{title}</span>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p itemProp="description" dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      />
                    </section>
                  </article>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout >
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
    paragraphsJson(id: {eq: "highlights"}) {
      data
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          description
        }
      }
    }
  }
`;
