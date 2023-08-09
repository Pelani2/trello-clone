import React from "react";
import PropTypes from "prop-types";
import "./input-styles.scss";

const Input = ({ type, value, onChange, required, id, name, onBlur, autoComplete, variant, className }) => {
    const inputClassMap = {
        "primary-input": "primary-input",
    };

    const inputClassName = `Input ${inputClassMap[variant] || ""} ${className || ""}`;

    return(
        <input 
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className={inputClassName}
            id={id}
            name={name}
            onBlur={onBlur}
            autoComplete={autoComplete}
        />
    );
};

Input.propTypes =  {
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    autoComplete: PropTypes.string,
    variant: PropTypes.oneOf(["primary-input"]),
    className: PropTypes.string,
}

export default Input;