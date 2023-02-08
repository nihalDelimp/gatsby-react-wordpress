
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";

const UniversalLink = ({
    children,
    to,
    activeClassName,
    partiallyActive,
    uri,
    ...other
}) => {
    const internal = /^\/(?!\/)/.test(to);
    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
        return (
            <GatsbyLink
                to={to}
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
                uri={uri}
                {...other}
            >
                {children}
            </GatsbyLink>
        );
    }
    return (
        <a href={to} {...other} uri={uri}>
            {children}
        </a>
    );
};
export default UniversalLink;