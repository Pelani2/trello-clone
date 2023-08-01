import React from "react";
import PropTypes from "prop-types";
import "./button-styles.scss";

const Button = ({ type, children }) => (
    <button
        className="signup__submit-button signup__mobile-font14px"
        type={type}
    >
        {children}
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
};

export default Button;