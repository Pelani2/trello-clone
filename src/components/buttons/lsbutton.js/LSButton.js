import React from "react";
import { Link } from "react-router-dom";
import "./LSButtonStyles.css";

export default function LSButton({
    text, toProp
}) {
    return(
        <Link
            to={toProp}
            className="ls-button"
        >
            {text}
        </Link>
    );
}