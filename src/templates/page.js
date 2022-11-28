import * as React from "react"
import { graphql, Script } from "gatsby"
// import {  } from "gatsby"
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import parse from 'html-react-parser';
import './stylestatic.css';

const Page = ({ data }) => {
  const page = data.wpPage
  return (
    <article>


      <Script async src='https://alfanar-new.azurewebsites.net/wp-includes/js/jquery/jquery.min.js?ver=3.6.1' id='jquery-core-js' />
      <Script async src='https://alfanar-new.azurewebsites.net/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js' />
      <Script async src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js' id='swiper-js' />
      <Script async src='https://alfanar-new.azurewebsites.net/wp-includes/js/hoverintent-js.min.js?ver=2.2.1' id='hoverintent-js-js' />
      <Script async src='https://alfanar-new.azurewebsites.net/wp-includes/js/admin-bar.min.js?ver=6.1' id='admin-bar-js' />
      <Script async src="https://alfanar-new.azurewebsites.net/wp-content/themes/astra-child-astra-child/asset/custom.js?ver=525772336" />
      <Script async src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js" />




      {/* Pantheos Perfect Workkin */}
      {/* <Script src='https://dev-alfnar-new.pantheonsite.io/wp-includes/js/jquery/jquery.min.js?ver=3.6.1' id='jquery-core-js' />
      <Script src='https://dev-alfnar-new.pantheonsite.io/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js' />
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js' id='swiper-js' />
      <Script src='https://dev-alfnar-new.pantheonsite.io/wp-includes/js/hoverintent-js.min.js?ver=2.2.1' id='hoverintent-js-js' />
      <Script src='https://dev-alfnar-new.pantheonsite.io/wp-includes/js/admin-bar.min.js?ver=6.1' id='admin-bar-js' />
      <Script src="https://dev-alfnar-new.pantheonsite.io/wp-content/themes/astra-child-astra-child/asset/custom.js?ver=525772336" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js" /> */}


      {/* <Script id='jquery-core-js' src='https://dev-manish-react.pantheonsite.io/wp-includes/js/jquery/jquery.min.js?ver=3.6.1' strategy="idle" />
      <Script id='jquery-migrate-js' src='https://dev-manish-react.pantheonsite.io/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' strategy="idle" />

      <Script id="twentynineteen-priority-menu-js"
        src="https://dev-manish-react.pantheonsite.io/wp-content/themes/twentynineteen/js/priority-menu.js?ver=20200129"

      />
      <Script id="twentynineteen-touch-navigation-js"
        src="https://dev-manish-react.pantheonsite.io/wp-content/themes/twentynineteen/js/touch-keyboard-navigation.js?ver=20221101"

      />
      <Script id="elementor-webpack-runtime-js"
        src="https://dev-manish-react.pantheonsite.io/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.8.1"

      />
      <Script id="elementor-frontend-modules-js"
        src="https://dev-manish-react.pantheonsite.io/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.8.1"

      />
      <Script id="elementor-waypoints-js"
        src="https://dev-manish-react.pantheonsite.io/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2"

      />
      <Script id="jquery-ui-core-js"
        src="https://dev-manish-react.pantheonsite.io/wp-includes/js/jquery/ui/core.min.js?ver=1.13.2"

      />
      <Script id="elementor-frontend-js-before">
        {` var elementorFrontendConfig = {
    environmentMode: { edit: false, wpPreview: false, isScriptDebug: false },
    i18n: {
      shareOnFacebook: "Share on Facebook",
      shareOnTwitter: "Share on Twitter",
      pinIt: "Pin it",
      download: "Download",
      downloadImage: "Download image",
      fullscreen: "Fullscreen",
      zoom: "Zoom",
      share: "Share",
      playVideo: "Play Video",
      previous: "Previous",
      next: "Next",
      close: "Close",
    },
    is_rtl: false,
    breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
    responsive: {
      breakpoints: {
        mobile: {
          label: "Mobile",
          value: 767,
          default_value: 767,
          direction: "max",
          is_enabled: true,
        },
        mobile_extra: {
          label: "Mobile Extra",
          value: 880,
          default_value: 880,
          direction: "max",
          is_enabled: false,
        },
        tablet: {
          label: "Tablet",
          value: 1024,
          default_value: 1024,
          direction: "max",
          is_enabled: true,
        },
        tablet_extra: {
          label: "Tablet Extra",
          value: 1200,
          default_value: 1200,
          direction: "max",
          is_enabled: false,
        },
        laptop: {
          label: "Laptop",
          value: 1366,
          default_value: 1366,
          direction: "max",
          is_enabled: false,
        },
        widescreen: {
          label: "Widescreen",
          value: 2400,
          default_value: 2400,
          direction: "min",
          is_enabled: false,
        },
      },
    },
    version: "3.8.1",
    is_static: false,
    experimentalFeatures: {
      e_dom_optimization: true,
      e_optimized_assets_loading: true,
      e_optimized_css_loading: true,
      a11y_improvements: true,
      additional_custom_breakpoints: true,
      e_import_export: true,
      e_hidden_wordpress_widgets: true,
      "landing-pages": true,
      "elements-color-picker": true,
      "favorite-widgets": true,
      "admin-top-bar": true,
    },
    urls: {
      assets:
        "https:\/\/dev-manish-react.pantheonsite.io\/wp-content\/plugins\/elementor\/assets\/",
    },
    settings: { page: [], editorPreferences: [] },
    kit: {
      active_breakpoints: ["viewport_mobile", "viewport_tablet"],
      global_image_lightbox: "yes",
      lightbox_enable_counter: "yes",
      lightbox_enable_fullscreen: "yes",
      lightbox_enable_zoom: "yes",
      lightbox_enable_share: "yes",
      lightbox_title_src: "title",
      lightbox_description_src: "description",
    },
    post: {
      id: 11157,
      title: "home%20%E2%80%93%20Manish%20React",
      excerpt: "",
      featuredImage: false,
    },
  };
  `}
      </Script>
      <Script id="elementor-frontend-js"
        src="https://dev-manish-react.pantheonsite.io/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.8.1"

      /> */}
      {/* <Script >
        {`
    /(trident|msie)/i.test(navigator.userAgent) &&
    document.getElementById &&
    window.addEventListener &&
    window.addEventListener(
      "hashchange",
      function () {
        var t,
          e = location.hash.substring(1);
        /^[A-z0-9_-]+$/.test(e) &&
          (t = document.getElementById(e)) &&
          (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) ||
            (t.tabIndex = -1),
          t.focus());
      },
      !1
    );
  `}
      </Script> */}
      {/* <h1>{page.title}</h1> */}
      {page.content !== null && parse(page.content)}
    </article>
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