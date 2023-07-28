import React from "react";
import PropTypes from "prop-types";

const Typography = ({ className, children }) => (
    <p className={className}>
        {children}
    </p>  
);

Typography.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string
};

export default Typography;