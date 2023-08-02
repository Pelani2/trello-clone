import React from "react";
import PropTypes from "prop-types";
import "./input-styles.scss";

const Input = ({ type, value, onChange, required, id, name, onBlur, autoComplete }) => (
        <input 
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className="
                signup-form__input 
                signup__mobile-font14px
            "
            id={id}
            name={name}
            onBlur={onBlur}
            autoComplete={autoComplete}
        />
);

Input.propTypes =  {
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    autoComplete: PropTypes.string,
}

export default Input;