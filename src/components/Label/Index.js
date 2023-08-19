import React from "react";
import PropTypes from "prop-types";
import "./label-styles.scss";

const Label = ({ children, htmlFor, className, variant }) => {
    const labelClassMap = {
        "primary-label": "primary-label",
        "secondary-label": "secondary-label",
    };

    const labelClassName = `label ${labelClassMap[variant] || ""} ${className || ""}`;

    return(
        <label
            htmlFor={htmlFor}
            className={labelClassName}
        >
            {children}
        </label>
    );
};

Label.propTypes = {
    children: PropTypes.string,
    htmlFor: PropTypes.string,
    variant: PropTypes.oneOf(["primary-label", "secondary-label"]),
    className: PropTypes.string,
};

export default Label;