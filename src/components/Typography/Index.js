import React from "react";
import PropTypes from "prop-types";

const Typography = ({ className, children, variant }) => {
    const variantElementMap = {
        default: "p",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        span: "span",
    };

    const Element  = variantElementMap[variant] || variantElementMap["default"];

    return(
        <Element className={className}>
            {children}
        </Element>
    );
};

Typography.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
    variant: PropTypes.oneOf(["default", "h1", "h2", "h3", "h4", "h5", "h6", "span"]),
};

export default Typography;