module.exports = {
  siteMetadata: {
    title: `Wilson & Farr Cleaning Solutions`,
    description: `Cleaning Services in the Annapolis Valley, Nova Scotia: Coldbrook, Kentville, New Minas, Port WIlliams,
    Canning, Wolfville, Hantsport & Windsor`,
    author: `adambowman.tech`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-theme-codebushi`,
      fallback: {
        fs: false,
      },
      options: {
        tailwindConfig: `tailwind.config.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.png",
      },
    },
  ],
};
