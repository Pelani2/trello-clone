import React from "react";
import PropTypes from "prop-types";

const SubmitComp = ({
    classNameProp, typeProp, textProp
}) => {
    return(
        <button
            className={classNameProp}
            type={typeProp}
        >
            {textProp}
        </button>
    );
}

SubmitComp.propTypes = {
    classNameProp: PropTypes.string,
    typeProp: PropTypes.string,
    textProp: PropTypes.string,
};

export default SubmitComp;