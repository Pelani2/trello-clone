import React from "react";
import PropTypes from "prop-types";

const Typography = ({
    classNameProp, textProp
}) => {
    return(
        <p className={classNameProp}>
            {textProp}
        </p>
    );
}

Typography.propTypes = {
    classNameProp: PropTypes.string,
    textProp: PropTypes.string
};

export default Typography;