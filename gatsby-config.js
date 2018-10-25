module.exports = {
  siteMetadata: {
    title: 'CreativeFuse Help Desk',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'CreativeFuse Help Desk',
        short_name: 'CFi-Help',
        start_url: '/',
        background_color: '#636363',
        theme_color: '#636363',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}