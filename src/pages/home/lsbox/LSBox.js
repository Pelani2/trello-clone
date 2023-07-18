import React from "react";
import "./LSBoxStyles.css";
import LSButton from "../../../components/buttons/lsbutton.js/LSButton";
import TrelloTitle from "./trello-title/TrelloTitle";

export default function LSBox() {
    return(
        <div className="ls-box">
            <TrelloTitle />
            <div className="ls-button-container">
                <LSButton 
                    text="Log In"
                    toProp="/loginpage"
                />
                <LSButton 
                    text="Sign Up"
                    toProp="/signuppage"
                />
            </div>
        </div>
    );
}