/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)
//const { paginate } = require(`gatsby-awesome-pagination`)

/**
 * Generate pages
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: '/',
    exactPath: true,
    isPermanent: false,
    redirectInBrowser: true,
    toPath: '/',
  });

  // Query all the data
  const queryResult = await graphql(`
     {
       pageQuery: allWpPage {
         nodes {
           databaseId
           uri
         }
       }
    }
      
   `)
  if (queryResult.errors) {
    reporter.panic("error loading events", queryResult.errors)
    return
  }

  // Generate single page pages
  const pages = queryResult.data.pageQuery.nodes
  console.log(queryResult, "Nihal Pages")
  pages.forEach(page => {
    createPage({
      path: decodeURIComponent(page.uri),
      component: path.resolve(`./src/templates/page.js`),
      context: {
        databaseId: page.databaseId,
        uri: page.uri
      },
    })
  })
}