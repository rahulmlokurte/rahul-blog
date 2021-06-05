import React from "react";
import Layout from "../components/layout/layout";
import Feed from "../components/feed/feed";
import { graphql } from "gatsby";

const BlogFeed = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Feed posts={edges} />
    </Layout>
  );
};

export default BlogFeed;

export const postsQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            excerpt
            slug
            tag
            title
          }
        }
      }
    }
  }
`;
