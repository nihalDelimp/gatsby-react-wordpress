/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `myapp`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      // "url": "https://alfanar-new.azurewebsites.net/graphql",
      // "url": "https://wordpress-gatsby.azurewebsites.net/graphql",
      // "url": "https://dev-nihal-react.pantheonsite.io/graphql",
      // "url": "https://dev-manish-react.pantheonsite.io/graphql",
      "url": "https://alfanar-new.azurewebsites.net/graphql",
      // "url": "https://dev-alfnar-new.pantheonsite.io/graphql",
      // "url": "https://new-wordpress-nihal.azurewebsites.net/graphql",
      // "url": "https://new-wordpress-nihal.azurewebsites.net/graphql",
      // "url": "https://alfanar-new.azurewebsites.net/graphql",
      // "url": "https://alfanar-react.azurewebsites.net/graphql",
      // "url": "https://alfnar.azurewebsites.net/graphql",
      // "url": "https://dev-alfnar-new.pantheonsite.io/graphql",
      // "url": "https://live-contentacms.pantheonsite.io/graphql",
      schema: {
        perPage: 2, // currently set to 100
        requestConcurrency: 5, // currently set to 15
        previewRequestConcurrency: 2, // currently set to 5
      },
      html: {
        createStaticFiles: true,
      },
      type: {
        MediaItem: {
          exclude: true,
        },
      },

      // "url": "https://dev-alfanar-wp.pantheonsite.io/graphql"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};