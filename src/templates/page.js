import * as React from "react"
import { graphql, Script } from "gatsby"
import parse from 'html-react-parser';
import './stylestatic.css';
import Header from "../components/header";
import Footer from "../components/footer";
const Page = ({ data }) => {
  const page = data.wpPage
  return (
    <article>
      <Script src='https://alfanar-new.azurewebsites.net/wp-includes/js/jquery/jquery.min.js?ver=3.6.1' id='jquery-core-js' strategy="idle" />
      <Script src='https://alfanar-new.azurewebsites.net/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js' strategy="idle" />
      <Script src="https://wpstorage10fd4cc6f0.blob.core.windows.net/wpblob10fd4cc6f0/wp-content/plugins/ultimate-addons-for-gutenberg/assets/js/slick.min.js?ver=2.0.15" strategy="idle" />
      <Script src='https://alfanar-new.azurewebsites.net/wp-includes/js/hoverintent-js.min.js?ver=2.2.1' id='hoverintent-js-js' strategy="idle" />
      <Script src='https://alfanar-new.azurewebsites.net/wp-includes/js/admin-bar.min.js?ver=6.1' id='admin-bar-js' strategy="idle" />
      <Script src="https://wpstorage10fd4cc6f0.blob.core.windows.net/wpblob10fd4cc6f0/wp-content/themes/astra-child-astra-child/asset/custom.js?ver=1866131814" strategy="idle" />
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js' id='swiper-js' strategy="idle" />

      <Header />
      {page.content !== null && parse(page.content)}
      <Footer />
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