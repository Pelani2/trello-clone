import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckmarkComp from "../../components/checkmark-comp/CheckmarkComp";
import LogoComp from "../../components/logo/LogoComp";
import InputComp from "../../components/input/InputComp";
import SubmitComp from "../../components/buttons/submit/SubmitComp";
import GreenCheckmark from "../../assets/icons/green-checkmark.png";
import Logo from "../../assets/icons/logo.png";
import GoogleLogo from "../../assets/icons/google-logo.png";
import "./index-styles-reconf.scss";
import "./mobile-responsiveness.scss";
import "./tablet-responsiveness.scss";

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
                <LogoComp 
                    alt="logo"
                    src={Logo}
                    classNameProp="signup__logo"
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
                    <InputComp 
                        typeProp="text"
                        valueProp={name}
                        onChangeProp={handleNameChange}
                        requiredProp
                        classNameProp="signup-form__input"
                    />
                </div>
                <div className="signup-form__group">
                    <label className="signup-form__label">
                        Email*
                    </label>
                    <InputComp 
                        typeProp="email"
                        valueProp={email}
                        onChangeProp={handleEmailChange}
                        requiredProp
                        classNameProp="signup-form__input"
                    />
                </div>
                <div className="signup-form__group">
                    <label className="signup-form__label">
                        Password*
                    </label>
                    <InputComp 
                        typeProp="password"
                        valueProp={password}
                        onChangeProp={handlePasswordChange}
                        requiredProp
                        classNameProp="signup-form__input"
                    />
                    {password && (
                        <p className={`password-validation ${isPasswordValid ? "valid" : "error"}`}> 
                            {isPasswordValid ? (
                                <React.Fragment>
                                    Password must be 8 characters long.
                                    <CheckmarkComp 
                                        srcProp={GreenCheckmark}
                                        altProp="checkmark"
                                        classNameProp="password-validation__checkmark"
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
                                    <CheckmarkComp 
                                        srcProp={GreenCheckmark}
                                        altProp="checkmark"
                                        classNameProp="password-validation__checkmark"
                                    />
                                </React.Fragment>
                            ) : (
                                "Password must contain at least one special character."
                            )}
                        </p>
                    )}
                </div>
                <SubmitComp 
                    typeProp="submit"
                    classNameProp="signup__submit-button"
                    textProp="Get started"
                />
                <Link
                    className="signup__google-button"
                    to="https://www.google.com/"
                >
                    <LogoComp 
                        classNameProp="google-button__logo"
                        altProp="googlebutton"
                        srcProp={GoogleLogo}
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