import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import GoogleLogo from "../../assets/icons/google-logo.png"
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Icon from "../../assets/icons/icon.png";
import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Checkbox from "../../components/Checkbox";
import "./login-styles.scss";

export default function Login() {
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        const storedRememberMe = localStorage.getItem("rememberMe");
        if (storedRememberMe === "true") {
            setRememberMe(true);
            setValue("remember", true);
            setValue("password", localStorage.getItem("rememberedPassword"));
        }
    }, []);

    const handleRememberChange = () => {
        setRememberMe((prevRememberMe) => prevRememberMe);
        if (!rememberMe) {
            localStorage.setItem("rememberedPassword", watch("password"));
        } else {
            localStorage.setItem("rememberMe", !rememberMe);
            setValue("remember", !rememberMe);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const {
        handleSubmit, 
        control,
        setValue, 
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    const onSubmit = (data) => {
        console.log("Form submitted with values: ", data);
    };

    return(
        <div className="login-container">
            <div className="login__title-and-logo">
                <Logo 
                    alt="logo"
                    src={Icon}
                />
                <Typography 
                    variant="h1"
                    className="Typography h1"
                >
                    Login to your account
                </Typography>
                <Typography
                    variant="h2"
                    className="Typography h2"
                >
                    Welcome back! Plese enter your details.
                </Typography>
            </div>

            <div className="login__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="login__input">
                        <Label 
                            variant="primary-label"
                            htmlFor="email"
                        >
                            Email: 
                        </Label>
                        <Controller 
                            name="email"
                            control={control}
                            render={({field}) => (
                                <Input 
                                    type="email"
                                    value={field.value}
                                    onChange={field.onChange}
                                    autoComplete="off"
                                    variant="primary-input"
                                />
                            )}
                        />
                        {errors.email && <Typography className="Typography error-message">
                                {errors.email.message}
                            </Typography>}
                    </div>

                    <div className="login__input">
                        <Label 
                            variant="primary-label"
                            htmlFor="password"
                        >
                            Password:
                        </Label>
                        <Controller 
                            name="password"
                            control={control}
                            render={({field}) => (
                                <Input 
                                    type="password"
                                    value={field.value}
                                    onChange={field.onChange}
                                    autoComplete="off"
                                    variant="primary-input"
                                />
                            )}
                        />
                        {errors.password && (
                            <Typography className="Typography error-message"> 
                                {errors.password.message}
                            </Typography>
                        )}
                    </div>

                    <div className="login__remember-forgot-box">
                        <div className="login__remember">
                            <Controller 
                                name="remember"
                                control={control}
                                render={({field}) => (
                                    <Checkbox 
                                        type="checkbox"
                                        id="remember"
                                        name="remember"
                                        checked={field.value}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            handleRememberChange();
                                        }}
                                    />
                                )}
                            />
                            <Label 
                                htmlFor="remember"
                                variant="secondary-label"
                            >
                                Remember for 30 days
                            </Label>
                        </div>

                        <Button 
                            variant="forgot-pass-button"
                            to="/passwordreset"
                        >
                            
                            Forgot password
                        </Button>
                    </div>

                    <Button 
                        type="submit"
                        variant="primary-button"
                    >
                        Login
                    </Button>
                    <Button 
                        variant="google-button"
                        to="https://www.google.com"
                    >
                        <Logo 
                            src={GoogleLogo}
                            alt="googleIcon"
                        />
                        Sign in with Google
                    </Button>

                    <div className="login__signup-box">
                        Dont have an account?
                        <Button 
                            variant="secondary-button"
                            to="/signup"
                        >
                            Sign up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}