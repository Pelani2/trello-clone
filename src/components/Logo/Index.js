import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/icons/logo.png";
import "./logo-styles.scss";

const ButtonLogo = ({ alt, src }) => (
    <img 
        alt={alt}
        src={src}
        className="google-button__logo"
    />  
);

ButtonLogo.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
}

ButtonLogo.defaultProps = {
    srcProp: Logo
}

export default ButtonLogo;