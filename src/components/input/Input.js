import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, value, onChange, required, className }) => (
        <input 
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className={className}
        />
);

Input.propTypes =  {
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    className: PropTypes.string,
}

export default Input;