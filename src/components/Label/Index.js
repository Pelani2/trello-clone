import React from "react";
import PropTypes from "prop-types";
import "./label-styles.scss";

const Label = ({ children, htmlFor }) => (
    <label 
        className="signup-form__label signup__mobile-font14px"
        htmlFor={htmlFor}    
    >
        {children}
    </label>
);

Label.propTypes = {
    children: PropTypes.string,
    htmlFor: PropTypes.string,
};

export default Label;