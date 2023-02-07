import * as React from "react"
import { graphql } from "gatsby"
import parse from 'html-react-parser';
import './stylestatic.css';
import { Helmet } from "react-helmet";
const Page = ({ data }) => {
  console.log(page)
  const page = data.wpPage
  return (
    <article>
      <Helmet>
        <link rel='stylesheet' id='dashicons-css' href='https://dev-alfanar-nihal.pantheonsite.io/wp-includes/css/dashicons.min.css?ver=6.1.1' type='text/css' media='all' />
        <link rel='stylesheet' id='admin-bar-css' href='https://dev-alfanar-nihal.pantheonsite.io/wp-includes/css/admin-bar.min.css?ver=6.1.1' type='text/css' media='all' />
        <link rel='stylesheet' id='wp-block-library-css' href='https://dev-alfanar-nihal.pantheonsite.io/wp-includes/css/dist/block-library/style.min.css?ver=6.1.1' type='text/css' media='all' />
        <link rel='stylesheet' id='fontawesome-css' href='https://dev-alfanar-nihal.pantheonsite.io/wp-content/plugins/gutentor/assets/library/fontawesome/css/all.min.css?ver=5.12.0' type='text/css' media='all' />
        <link rel='stylesheet' id='wpness-grid-css' href='https://dev-alfanar-nihal.pantheonsite.io/wp-content/plugins/gutentor/assets/library/wpness-grid/wpness-grid.css?ver=1.0.0' type='text/css' media='all' />
        <link rel='stylesheet' id='animate-css' href='https://dev-alfanar-nihal.pantheonsite.io/wp-content/plugins/gutentor/assets/library/animatecss/animate.min.css?ver=3.7.2' type='text/css' media='all' />
        <link rel='stylesheet' id='slick-css' href='https://dev-alfanar-nihal.pantheonsite.io/wp-content/plugins/gutentor/assets/library/slick/slick.min.css?ver=1.8.1' type='text/css' media='all' />
        <link rel='stylesheet' id='classic-theme-styles-css' href='https://dev-alfanar-nihal.pantheonsite.io/wp-includes/css/classic-themes.min.css?ver=1' type='text/css' media='all' />
      </Helmet>
      {page.content !== null && parse(page.content)}
    </article >
  )
}
export default Page
export const query = graphql`
  query ($databaseId: Int!) {
    wpPage(databaseId: { eq: $databaseId }) {
      title
      content
    }
}
`