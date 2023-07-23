import React from "react";
import PropTypes from "prop-types";

const LabelComp = ({
    classNameProp, textProp
}) => {
    return(
        <label className={classNameProp}>
            {textProp}
        </label>
    );
}

LabelComp.propTypes = {
    classNameProp: PropTypes.string,
    textProp: PropTypes.string,
};

export default LabelComp;