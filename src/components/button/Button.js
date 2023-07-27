import React from "react";
import PropTypes from "prop-types";

const Button = ({ className, type, text }) => (
    <button
        className={className}
        type={type}
    >
        {text}
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
};

export default Button;