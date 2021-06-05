module.exports = {
  siteMetadata: {
    title: "Rahul Lokurte",
    copyright: "Designed & developed by Rahul Lokurte",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
};
