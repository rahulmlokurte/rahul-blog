import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import PostMeta from "../components/post-meta/post-meta";
export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <article>
          <PostMeta
            frontmatter={post.frontmatter}
            timeToRead={post.timeToRead}
          />
        </article>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        excerpt
        tag
        slug
      }
    }
  }
`;
