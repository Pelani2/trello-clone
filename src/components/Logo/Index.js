import React from "react";
import PropTypes from "prop-types";
import Icon from "../../assets/icons/icon.png";
import "./logo-styles.scss";

const Logo = ({ alt, src }) => (
    <img 
        alt={alt}
        src={src}
        className="google-button__logo"
    />  
);

Logo.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
}

Logo.defaultProps = {
    srcProp: Icon
}

export default Logo;