import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/icons/logo.png";
import "./logo-styles.scss";

const LogoComp = ({ alt, src }) => (
    <img 
        alt={alt}
        src={src}
        className="google-button__logo"
    />  
);

LogoComp.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
}

LogoComp.defaultProps = {
    srcProp: Logo
}

export default LogoComp;