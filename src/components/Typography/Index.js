import React from "react";
import PropTypes from "prop-types";
import "./typography-styles.scss";

const variantElementMap = {
    default: "p",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    span: "span",
    "error-message": "p",
    "signup-error": "p",
    "signup-success": "p",
};

const typography = ({ className, children, variant }) => {
    const Element = variantElementMap[variant] || variantElementMap["default"];

    return(
        <Element className={className}>
            {children}
        </Element>
    );
};

typography.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
    variant: PropTypes.oneOf(Object.keys(variantElementMap)),
};

export default typography;