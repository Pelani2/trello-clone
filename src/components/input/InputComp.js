import React from "react";
import PropTypes from "prop-types";

const InputComp = ({
    typeProp, valueProp, onChangeProp, requiredProp, classNameProp
}) => {
    return(
        <input 
            type={typeProp}
            value={valueProp}
            onChange={onChangeProp}
            required={requiredProp}
            className={classNameProp}
        />
    );
}

InputComp.propTypes =  {
    typeProp: PropTypes.string.isRequired,
    valueProp: PropTypes.string.isRequired,
    onChangeProp: PropTypes.func.isRequired,
    requiredProp: PropTypes.bool,
    classNameProp: PropTypes.string,
}

export default InputComp;