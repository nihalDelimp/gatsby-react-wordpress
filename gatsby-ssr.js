const React = require("react")
exports.onPreRenderHTML = ({
    getHeadComponents,
    replaceHeadComponents,
}) => {
    const headComponents = getHeadComponents()
    const s = [
        <script src='https://dev-alfanar-nihal.pantheonsite.io/wp-includes/js/wp-emoji-release.min.js?ver=6.1.1' />,
        <script src='https://dev-alfanar-nihal.pantheonsite.io/wp-includes/js/jquery/jquery.min.js?ver=3.6.1' />,
        <script src='https://dev-alfanar-nihal.pantheonsite.io/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' />,
        <script src='https://dev-alfanar-nihal.pantheonsite.io/wp-includes/js/comment-reply.min.js?ver=6.1.1' />,
        <script src='https://dev-alfanar-nihal.pantheonsite.io/wp-content/plugins/gutentor/assets/library/wow/wow.min.js?ver=1.2.1' />,
        <script src='https://dev-alfanar-nihal.pantheonsite.io/wp-content/plugins/gutentor/assets/library/countUp/countUp.min.js?ver=1.9.3' />,
        <script src='https://dev-alfanar-nihal.pantheonsite.io/wp-content/plugins/gutentor/assets/library/slick/slick.min.js?ver=1.8.1' />,
        <script src='https://dev-alfanar-nihal.pantheonsite.io/wp-content/plugins/gutentor/assets/js/gutentor.js?ver=3.2.5' />
    ]
    headComponents.push(s)
    replaceHeadComponents(headComponents)
}