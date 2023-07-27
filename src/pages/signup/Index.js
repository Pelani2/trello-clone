import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Label from "../../components/label/Label";
import Typography from "../../components/typography/Typography";
import LogoComp from "../../components/logo/LogoComp";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Logo from "../../assets/icons/logo.png";
import GoogleLogo from "../../assets/icons/google-logo.png";
import "./signup-styles.scss";
import "./signup-mobile-styles.scss"
import "./signup-tablet-styles.scss";

export default function SignupPage() {

    const validationSchema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup
        .string()
        .min(8, "Password must be at least 8 characters long")
        .test(
            "specialCharacters",
            "Password must contain at least one special character",
            (value) => {
                return /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*\d).*$/.test(value);
            }
        )
        .required("Password is required"),
    });

    const {
        handleSubmit, 
        control, 
        setValue, 
        formState: {errors},
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const passwordValue = useWatch({
        control,
        name: "password",
        defaultValue: ""
    });

    const onSubmit = () => {
        setValue("name", "");
        setValue("email", "");
        setValue("password", "");
    };

    return(
        <div className="signup__container">
            <div className="signup__title-and-logo">
                <LogoComp 
                    alt="logo"
                    src={Logo}
                    className="signup__logo"
                />
                <Typography 
                    className="signup__title"
                    text="Create account"
                />
                <Typography 
                    className="signup__free-trial"
                    text="Start your 30-day free trial."
                />
            </div>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="signup-form"
            >
                <div className="signup-form__group">
                    <Label 
                        className="signup-form__label"
                        text="Name*"
                    />
                    <Controller 
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Input 
                                type="text"
                                value={field.value}
                                onChange={field.onChange}
                                className="signup-form__input"
                            />
                        )}
                    />
                    {errors.name && <p className="error-message">
                            {errors.name.message}
                        </p>}
                </div>
                <div className="signup-form__group">
                    <Label 
                        className="signup-form__label"
                        text="Email*"
                    />
                    <Controller 
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Input 
                                type="email"
                                value={field.value}
                                onChange={field.onChange}
                                className="signup-form__input"
                            />
                        )}
                    />
                    {errors.email && <p className="error-message">
                            {errors.email.message}
                        </p>}
                </div>
                <div className="signup-form__group">
                    <Label 
                        className="signup-form__label"
                        text="Password*"
                    />
                    <Controller 
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Input 
                                type="password"
                                value={field.value}
                                onChange={field.onChange}
                                required
                                className="signup-form__input"
                            />
                        )}
                    />
                    {!errors.password && passwordValue.length > 0 && passwordValue.length < 8 && (
                        <p className="error-message">
                            Password must be at least 8 characters long.
                        </p>
                    )}
                    {!errors.password && passwordValue.length >= 8 && !/(?=.*[!@#$%^&*])/.test(passwordValue) && (
                        <p className={`error-message`}>
                            Password must contain at least one special character.
                        </p>
                    )}
                </div>
                <Button 
                    type="submit"
                    className="signup__submit-button"
                    text="Get started"
                />
                <Link
                    className="signup__google-button"
                    to="https://www.google.com/"
                >
                    <LogoComp 
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