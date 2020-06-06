module.exports = {
  siteMetadata: {
    title: `High View Construction`,
    description: `We pride ourselves in high quality workmanship`,
    author: `@dseehappy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `highviewconstruction`,
        short_name: `highview`,
        start_url: `/`,
        background_color: `#142A4F`,
        theme_color: `#142A4F`,
        display: `minimal-ui`,
        icon: `src/images/HighviewIcon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
