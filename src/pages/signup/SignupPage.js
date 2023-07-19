import React, { useState } from "react";
import "./SignupPageStyles.css";
import GreenCheckmark from "../../assets/icons/green-checkmark.png";
import Logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import GoogleLogo from "../../assets/icons/google-logo.png";
import "./TabletResponsiveness.css";
import "./MobileResponsiveness.css";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const checkPasswordLength = (passwordValue) => {
        setIsPasswordValid(passwordValue.length >= 8);
    };

    const checkPasswordSpecialCharacter = (passwordValue) => {
        const regex = /[!@#$%^&*]/;
        setHasSpecialCharacter(regex.test(passwordValue));
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordLength(newPassword);
        checkPasswordSpecialCharacter(newPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(`Name: ${name}`)
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);

        setName("");
        setEmail("");
        setPassword("");
        setIsPasswordValid(false);
        setHasSpecialCharacter(false);
    }

    return(
        <div className="signup__container">
            <div className="signup__title-and-logo">
                <img 
                    alt="logo"
                    src={Logo}
                    className="signup__logo"
                />
                <h1 className="signup__title">
                    Create account
                </h1>
                <h2 className="signup__free-trial">
                    Start your 30-day free trial.
                </h2>
            </div>
            <form 
                onSubmit={handleSubmit}
                className="signup-form"
            >
                <div className="signup-form__group">
                    <label className="signup-form__label">
                        Name* 
                    </label>
                    <input 
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                        className="signup-form__input"
                    />
                </div>
                <div className="signup-form__group">
                    <label className="signup-form__label">
                        Email*
                    </label>
                    <input 
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="signup-form__input"
                    />
                </div>
                <div className="signup-form__group">
                    <label className="signup-form__label">
                        Password*
                    </label>
                    <input 
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        className="signup-form__input"
                    />
                    {password && (
                        <p className={`password-validation ${isPasswordValid ? "valid" : "error"}`}> 
                            {isPasswordValid ? (
                                <React.Fragment>
                                    Password must be 8 characters long.
                                    <img 
                                        src={GreenCheckmark}
                                        alt="checkmark"
                                        className="password-validation__checkmark"
                                    />
                                </React.Fragment>
                            ) : (
                                "Password must be 8 characters long."
                            )}
                        </p>
                    )}
                    {password && (
                        <p className={`password-validation ${hasSpecialCharacter ? "valid" : "error"}`}>
                            {hasSpecialCharacter ? (
                                <React.Fragment>
                                    Password must contain at least one special character.
                                    <img 
                                        src={GreenCheckmark}
                                        alt="checkmark"
                                        className="password-validation__checkmark"
                                    />
                                </React.Fragment>
                            ) : (
                                "Password must contain at least one special character."
                            )}
                        </p>
                    )}
                </div>
                <button 
                    type="submit"
                    className="signup__submit-button"
                >
                    Get started
                </button>
                <Link
                    className="signup__google-button"
                    to="https://www.google.com/"
                >
                    <img 
                        className="google-button__logo"
                        alt="googlebutton"
                        src={GoogleLogo}
                    />
                    Sign up with Google
                </Link>
                <p className="signup__login-box">
                    Already have an account?
                    <Link 
                        className="signup__login-button"
                        to="/login"
                    >
                        Log in
                    </Link>
                </p>
            </form>
        </div>
    );
}