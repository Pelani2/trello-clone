import React from "react";
import PropTypes from "prop-types";
import "./label-styles.scss";

const Label = ({ children }) => (
    <label className="signup-form__label signup__mobile-font14px">
        {children}
    </label>
);

Label.propTypes = {
    children: PropTypes.string,
};

export default Label;