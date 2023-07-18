import React from "react";
import "./FormSubmitButtonStyles.css";

export default function FormSubmitButton({
    text, buttonType
}) {
    return(
        <button 
            type={buttonType}
            className="form-submit-button"
        >
            {text}
        </button>
    );
}