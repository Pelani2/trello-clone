import React from "react";
import "./LoginStyles.css";
import FormSubmitButton from "../../components/buttons/form-submit-button/FormSubmitButton";
import { type } from "@testing-library/user-event/dist/type";

export default function Login() {
    return(
        <div className="login-container"> 
            <h1 className="login-container__title">
                Log In
            </h1>
            <form className="login-form">
                <div className="login-form__group">
                    <label 
                        htmlFor="email"
                        className="login-form__label"
                    >
                        Email:
                    </label>
                    <input 
                        className="login-form__input"
                        type="text"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="login-form__group">
                    <label 
                        className="login-form__label"
                        htmlFor="password"
                    >
                        Password:
                    </label>
                    <input 
                        className="login-form__input"
                        type="password"
                        id="password"
                        name="password"
                    />
                </div>
                <FormSubmitButton 
                    text="Submit"
                    buttonType="submit"
                />
            </form>
        </div>
    )
}