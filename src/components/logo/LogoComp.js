import React from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/icons/logo.png";

const LogoComp = ({ 
    altProp, srcProp, classNameProp 
}) => {
    return(
        <img 
            alt={altProp}
            src={srcProp}
            className={classNameProp}
        />
    );
};

LogoComp.propTypes = {
    altProp: PropTypes.string.isRequired,
    srcProp: PropTypes.string,
    classNameProp: PropTypes.string
}

LogoComp.defaultProps = {
    srcProp: Logo
}

export default LogoComp;