const React = require("react")
exports.onPreRenderHTML = ({
    getHeadComponents,
    replaceHeadComponents,
}) => {
    const headComponents = getHeadComponents()
    const s = []
    headComponents.push(s)
    replaceHeadComponents(headComponents)
}