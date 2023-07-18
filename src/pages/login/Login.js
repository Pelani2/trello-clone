import React, { useState } from "react";
import "./LoginStyles.css";
import FormSubmitButton from "../../components/buttons/form-submit-button/FormSubmitButton";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    };

    return(
        <div className="login-container"> 
            <h1 className="login-container__title">
                Log In
            </h1>
            <form 
                className="login-form"
                onSubmit={handleSubmit}
            >
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
                        onChange={handleEmailChange}
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
                        onChange={handlePasswordChange}
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