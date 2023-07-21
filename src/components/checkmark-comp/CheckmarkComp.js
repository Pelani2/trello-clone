import React from "react";
import PropTypes from "prop-types";
import GreenCheckmark from "../../assets/icons/green-checkmark.png";

const CheckmarkComp = ({
    srcProp, altProp, classNameProp
}) => {
    return(
        <img 
            src={srcProp}
            alt={altProp}
            className={classNameProp}
        />
    );
}

CheckmarkComp.propTypes = {
    srcProp: PropTypes.string,
    altProp: PropTypes.string.isRequired,
    classNameProp: PropTypes.string.isRequired
};

CheckmarkComp.defaultProps = {
    srcProp: GreenCheckmark,
}

export default CheckmarkComp;