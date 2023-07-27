import React from "react";
import PropTypes from "prop-types";

const Label = ({ className, text }) => (
    <label className={className}>
        {text}
    </label>
);

Label.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
};

export default Label;