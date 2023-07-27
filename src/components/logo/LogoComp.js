import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/icons/logo.png";

const LogoComp = ({ alt, src, className }) => (
    <img 
        alt={alt}
        src={src}
        className={className}
    />  
);

LogoComp.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    className: PropTypes.string
}

LogoComp.defaultProps = {
    srcProp: Logo
}

export default LogoComp;