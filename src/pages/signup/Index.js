import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LabelComp from "../../components/label/LabelComp";
import Typography from "../../components/typography/Typography";
import LogoComp from "../../components/logo/LogoComp";
import InputComp from "../../components/input/InputComp";
import SubmitComp from "../../components/buttons/submit/SubmitComp";
import Logo from "../../assets/icons/logo.png";
import GoogleLogo from "../../assets/icons/google-logo.png";
import "./index-styles-reconf.scss";
import "./mobile-responsiveness.scss";
import "./tablet-responsiveness.scss";

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
                    classNameProp="signup__logo"
                />
                <Typography 
                    classNameProp="signup__title"
                    textProp="Create account"
                />
                <Typography 
                    classNameProp="signup__free-trial"
                    textProp="Start your 30-day free trial."
                />
            </div>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="signup-form"
            >
                <div className="signup-form__group">
                    <LabelComp 
                        classNameProp="signup-form__label"
                        textProp="Name*"
                    />
                    <Controller 
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputComp 
                                typeProp="text"
                                valueProp={field.value}
                                onChangeProp={field.onChange}
                                classNameProp="signup-form__input"
                            />
                        )}
                    />
                    {errors.name && <p className="error-message">
                            {errors.name.message}
                        </p>}
                </div>
                <div className="signup-form__group">
                    <LabelComp 
                        classNameProp="signup-form__label"
                        textProp="Email*"
                    />
                    <Controller 
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputComp 
                                typeProp="email"
                                valueProp={field.value}
                                onChangeProp={field.onChange}
                                classNameProp="signup-form__input"
                            />
                        )}
                    />
                    {errors.email && <p className="error-message">
                            {errors.email.message}
                        </p>}
                </div>
                <div className="signup-form__group">
                    <LabelComp 
                        classNameProp="signup-form__label"
                        textProp="Password*"
                    />
                    <Controller 
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputComp 
                                typeProp="password"
                                valueProp={field.value}
                                onChangeProp={field.onChange}
                                requiredProp
                                classNameProp="signup-form__input"
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