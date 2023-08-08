import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";
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
            const response = await Axios.post("API_ENDPOINT", formData);
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
                    className="Typography h1"
                >
                    Create Account
                </Typography>
                <Typography 
                    className="Typography h2"
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
                    {errors.name && <Typography className="Typography error-message">
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
                    {errors.email && <Typography className="Typography error-message">
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
                                    <Typography className="Typography error-message">
                                        {errors.password.message}
                                    </Typography>
                                )}

                                {errors.password?.type === "specialCharacter" && (
                                    <Typography className="Typography error-message">
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
                <Button
                    variant="google-button"
                    to="https://www.google.com/"
                >
                    <Logo
                        alt="googlebutton"
                        src={GoogleLogo}
                    />
                    Sign up with Google
                </Button>
                <Typography className="Typography default">
                    Already have an account?
                    <Button 
                        variant="secondary-button"
                        to="/login"
                    >
                        Log in
                    </Button>
                </Typography>
            </form>
        </div>
    );
}