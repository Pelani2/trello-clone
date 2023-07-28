import React from "react";
import PropTypes from "prop-types";
import "./input-styles.scss";

const Input = ({ type, value, onChange, required }) => (
        <input 
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className="signup-form__input signup__mobile-font14px"
        />
);

Input.propTypes =  {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
}

export default Input;