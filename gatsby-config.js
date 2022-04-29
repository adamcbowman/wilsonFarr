module.exports = {
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
  ],
};
