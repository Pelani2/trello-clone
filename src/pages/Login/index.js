import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
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
        if ( storedRememberMe === "true") {
            setRememberMe(true);
            formik.setFieldValue("remember", true);

            const storedPassword = localStorage.getItem("rememberedPassword");
            formik.setFieldValue("password", storedPassword);
        }
    }, []);

    const handleRememberChange = () => {
        setRememberMe((prevRememberMe) => !prevRememberMe);
        if (!rememberMe) {
            localStorage.setItem("rememberedPassword", formik.values.password);
        } else {
            localStorage.setItem("rememberMe", !rememberMe);
            formik.setFieldValue("remember", !rememberMe);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: false,
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Form submitted with values: ", values);
        },
    });

    return(
        <div className="login-container">
            <div className="login__title-and-logo">
                <Logo 
                    alt="logo"
                    src={Icon} 
                />
                <Typography 
                    variant="h1"
                    className="login__title"
                >
                    Login to your account
                </Typography>
                <Typography
                    variant="h3"
                    className="login__welcome-message"
                >
                    Welcome back! Please enter your details.
                </Typography>
            </div>
            <div className="login__form">
                <form onSubmit={formik.handleSubmit}>
                    <div className="login__input">
                        <Label htmlFor="email">
                            Email:
                        </Label>
                        <Input 
                            type="email"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="off"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <Typography className="login__error-message">
                                {formik.errors.email}
                            </Typography>
                        ) : null}
                    </div>
                    <div className="login__input">
                        <Label
                            htmlFor="password"
                        >
                            Password: 
                        </Label>
                        <Input 
                            type="password"
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete="off"
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <Typography className="login__error-message">
                                {formik.errors.password}
                            </Typography>
                        ) : null}
                    </div>
                    <div className="login__remember-forgot-box">
                        <div className="login__remember">
                            <Checkbox 
                                type="checkbox"
                                id="remember"
                                name="remember"
                                checked={formik.values.remember}
                                onChange={formik.handleChange}
                                onRememberChange={handleRememberChange}
                            />
                            <Label htmlFor="remember">
                                Remember for 30 days
                            </Label>
                        </div>
                        <Link 
                            className="login__forgot-link"
                            to="/forgotpassword"
                        >
                            Forgot password
                        </Link>
                    </div>
                    <Button type="submit">
                        Login
                    </Button>
                    <Link
                        className="login__google-button"
                        to="https://www.google.com/"
                    >
                        <Logo 
                            src={GoogleLogo}
                            alt="googleIcon"
                            
                        />
                        Sign in with Google
                    </Link>
                    <div 
                        className="login__signup-box"
                    >
                        Dont have an account? 
                        <Link 
                            className="login__signup-button"
                            to="/signup"
                        >
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}