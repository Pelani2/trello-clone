import React from "react";
import "./LoginStyles.css";

export default function Login() {
    return(
        <div className="login-container"> 
            <h1 className="login-container__title">
                Log In
            </h1>
            <form className="login-form">
                <div className="login-form__group">
                    <label 
                        htmlFor="username"
                        className="login-form__label"
                    >
                        Username:
                    </label>
                    <input 
                        className="login-form__input"
                        type="text"
                        id="username"
                        name="username"
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
            </form>
        </div>
    )
}