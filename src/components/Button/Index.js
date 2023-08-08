import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./button-styles.scss";

const Button = ({ variant, children, className, type, to }) => {
    const buttonClassMap = {
        "primary-button": "primary-button",
        "google-button": "google-button",
        "secondary-button": "secondary-button",
        "forgot-pass-button": "forgot-pass-button",
    };

    const buttonClassName = `Button ${buttonClassMap[variant] || ""} ${className || ""}`;

    if (to) {
        return (
            <Link
                className={buttonClassName}
                to={to}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button
                className={buttonClassName}
                type={type}
            >
                {children}
            </button>
        );
    }
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    variant: PropTypes.oneOf(["primary-button", "google-button", "secondary-button", "forgot-pass-button"]),
    className: PropTypes.string,
    to: PropTypes.string,
};

export default Button;