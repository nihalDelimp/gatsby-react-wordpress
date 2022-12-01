const React = require("react")
exports.onPreRenderHTML = ({
    getHeadComponents,
    replaceHeadComponents,
}) => {
    const headComponents = getHeadComponents()
    const s = [
        <script src='https://alfanar-new.azurewebsites.net/wp-includes/js/jquery/jquery.min.js?ver=3.6.1' id='jquery-core-js' strategy="idle" />,
        <script src='https://alfanar-new.azurewebsites.net/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js' strategy="idle" />,
        <script src="https://wpstorage10fd4cc6f0.blob.core.windows.net/wpblob10fd4cc6f0/wp-content/plugins/ultimate-addons-for-gutenberg/assets/js/slick.min.js?ver=2.0.15" strategy="idle" />,
        <script src='https://alfanar-new.azurewebsites.net/wp-includes/js/hoverintent-js.min.js?ver=2.2.1' id='hoverintent-js-js' strategy="idle" />,
        <script src='https://alfanar-new.azurewebsites.net/wp-includes/js/admin-bar.min.js?ver=6.1' id='admin-bar-js' strategy="idle" />,
        <script src="https://wpstorage10fd4cc6f0.blob.core.windows.net/wpblob10fd4cc6f0/wp-content/themes/astra-child-astra-child/asset/custom.js?ver=1866131814" strategy="idle" />,
        <script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.1/js/swiper.min.js' id='swiper-js' strategy="idle" />
    ]
    headComponents.push(s)
    replaceHeadComponents(headComponents)
}