/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Tristec Ltd`,
    description: `Tristec Ltd website. `,
    author: `@tristeccto`,
    siteUrl: `https://tristec.co.uk/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ["auto", "webp"], // Only auto (original) and webp
          quality: 50,
        },
        failOn: "warning", // Optional: makes it stricter about errors
        useMozJpeg: false, // Optional: tweak image processing
        stripMetadata: true, // Optional
        avif: false // Explicitly disable AVIF (not standard, but worth a try)
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tristec Ltd`,
        short_name: `tristec`,
        start_url: `/`,
        background_color: `#663399`, // was `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tristec-icon.png`,
      },
    },
  ],
};
