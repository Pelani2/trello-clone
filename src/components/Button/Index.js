import React from "react";
import PropTypes from "prop-types";
import "./button-styles.scss";

const buttonClassMap = {
    "primary-button": "primary-button",
};

const Button = ({ variant, children, className, type, onClick }) => {

    const buttonClassName = `button ${buttonClassMap[variant] || ""} ${className || ""}`;

    return(
        <button
            className={buttonClassName}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    variant: PropTypes.oneOf(Object.keys(buttonClassMap)),
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;