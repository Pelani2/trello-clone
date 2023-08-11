import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";
import { Link } from "react-router-dom";
import Label from "../../components/Label";
import Typography from "../../components/Typography";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Icon from "../../assets/icons/icon.png";
import GoogleLogo from "../../assets/icons/google-logo.png";
import "./signup-styles.scss";

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

    const onSubmit = async (formData) => {
        try {
            const response = await Axios.post("NE_ZNAM_STA_OVDE_IDE", formData);
            console.log("API Response: ", response.data);
        } catch (error) {
            console.log("API Error: ", error);
        }

        setValue("name", "");
        setValue("email", "");
        setValue("password", "");
    };

    return(
        <div className="
            signup__container 
        ">
            <div className="signup__title-and-logo">
                <Logo 
                    alt="logo"
                    src={Icon}
                />
                <Typography
                    variant="h1"
                    className="typography h1"
                >
                    Create Account
                </Typography>
                <Typography 
                    className="typography h2"
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
                    <Label variant="primary-label">
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
                                variant="primary-input"
                            />
                        )}
                    />
                    {errors.name && <Typography className="typography error-message">
                            {errors.name.message}
                        </Typography>}
                </div>
                <div className="signup-form__group">
                    <Label variant="primary-label">
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
                                variant="primary-input"
                            />
                        )}
                    />
                    {errors.email && <Typography className="typography error-message">
                            {errors.email.message}
                        </Typography>}
                </div>
                <div className="signup-form__group">
                    <Label variant="primary-label">
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
                                    variant="primary-input"
                                />

                                {errors.password?.type === "passwordLength" && (
                                    <Typography className="typography error-message">
                                        {errors.password.message}
                                    </Typography>
                                )}

                                {errors.password?.type === "specialCharacter" && (
                                    <Typography className="typography error-message">
                                        {errors.password.message}
                                    </Typography>
                                )}
                            </React.Fragment>
                        )}
                    />
                </div>
                <Button 
                    type="submit"
                    variant="primary-button"
                >
                    Submit
                </Button>
                <Link
                    className="google-button"
                    to="https://www.google.com/"
                >
                    <Logo
                        alt="googlebutton"
                        src={GoogleLogo}
                    />
                    Sign up with Google
                </Link>
                <Typography className="typography default">
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