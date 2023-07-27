import React from "react";
import PropTypes from "prop-types";

const Typography = ({ className, text }) => (
    <p className={className}>
        {text}
    </p>  
);

Typography.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string
};

export default Typography;