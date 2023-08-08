import React from "react";
import PropTypes from "prop-types";
import "./button-styles.scss";

const Button = ({ variant, children, className, type }) => {
    const buttonClassMap = {
        "primary-button": "primary-button",
    };

    const buttonClassName = `Button ${buttonClassMap[variant] || ""} ${className || ""}`;

    return (
        <button
            className={buttonClassName}
            type={type}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    variant: PropTypes.oneOf(["primary-button"]),
    className: PropTypes.string,
};

export default Button;