import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Label from "../../components/Label/Index";
import Typography from "../../components/Typography/Index";
import Logo from "../../components/Logo/Index";
import Input from "../../components/Input/Index";
import Button from "../../components/Button/Index";
import LogoIcon from "../../assets/icons/logo.png";
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
        .test(
            "passwordLength",
            "Password must be at least 8 characters long",
            (value) => {
                return value.length >= 8;
            }
        )
        .test(
            "specialCharacter",
            "Password must contain at least one special character",
            (value) => {
                return /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*\d).*$/g.test(value);
            }
        )
        .required("Password is required."),
    });

    const {
        handleSubmit, 
        control, 
        setValue, 
        formState: {errors},
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = () => {
        setValue("name", "");
        setValue("email", "");
        setValue("password", "");
    };

    return(
        <div className="signup__container">
            <div className="signup__title-and-logo">
                <Logo 
                    alt="logo"
                    src={LogoIcon}
                />
                <Typography 
                    className="
                        signup__title
                        signup__mobile-font24px
                    "
                    variant="h1"
                >
                    Create Account
                </Typography>
                <Typography 
                    className="
                        signup__free-trial
                        signup__mobile-font14px
                    "
                    variant="h2"
                >
                    Start your 30-day free trial.
                </Typography>
            </div>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="signup-form"
            >
                <div className="signup-form__group">
                    <Label className="signup-form__label">
                        Name*
                    </Label>
                    <Controller 
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Input 
                                type="text"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.name && <Typography className="error-message">
                            {errors.name.message}
                        </Typography>}
                </div>
                <div className="signup-form__group">
                    <Label className="signup-form__label">
                        Email*
                    </Label>
                    <Controller 
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <Input 
                                type="email"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.email && <Typography className="error-message">
                            {errors.email.message}
                        </Typography>}
                </div>
                <div className="signup-form__group">
                    <Label className="signup-form__label">
                        Password*
                    </Label>
                    <Controller 
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <React.Fragment>
                                <Input 
                                    type="password"
                                    value={field.value}
                                    onChange={field.onChange}
                                    required
                                />

                                {errors.password?.type === "passwordLength" && (
                                    <Typography className="error-message">
                                        {errors.password.message}
                                    </Typography>
                                )}

                                {errors.password?.type === "specialCharacter" && (
                                    <Typography className="error-message">
                                        {errors.password.message}
                                    </Typography>
                                )}
                            </React.Fragment>
                        )}
                    />
                </div>
                <Button type="submit">
                    Submit
                </Button>
                <Link
                    className="
                        signup__google-button
                        signup__mobile-font14px
                    "
                    to="https://www.google.com/"
                >
                    <Logo
                        alt="googlebutton"
                        src={GoogleLogo}
                    />
                    Sign up with Google
                </Link>
                <Typography 
                    className="
                        signup__login-box
                        signup__mobile-font12px
                    "
                >
                    Already have an account?
                    <Link 
                        className="signup__login-button"
                        to="/login"
                    >
                        Log in
                    </Link>
                </Typography>
            </form>
        </div>
    );
}