import React from "react";
import PropTypes from "prop-types";
import classNames from  "classnames";
import "./checkbox-styles.scss";

const Checkbox = ({ type, id, name, checked, onChange, onRememberChange }) => {
    const checkboxClass = classNames("checkbox", {
        "fa": true,
        "fa-check": checked
    });

    const handleCheckboxChange = (event) => {
        onChange(event);
        onRememberChange();
    }

    return(
        <input 
            type={type}
            id={id}
            name={name}
            checked={checked}
            onChange={handleCheckboxChange}
            className={checkboxClass}
        />
    );
};

Checkbox.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    onRememberChange: PropTypes.func,
}

export default Checkbox;