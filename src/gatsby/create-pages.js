const path = require("path");
const createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("./src/templates/post-template.js");

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: ASC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      console.log(result.errors);
      throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node }, index) => {
      const { slug } = node.frontmatter;
      const next = index === posts.length - 1 ? null : posts[index + 1].node;
      const previous = index === 0 ? null : posts[index - 1].node;

      return createPage({
        slug,
        component: blogPostTemplate,
        context: {
          slug: slug,
          previous,
          next,
        },
      });
    });
  });
};

module.exports = createPages;
