import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";
import PasswordReset from "../pages/PasswordReset";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/forgotpassword",
        element: <PasswordReset />
    }
]);

export default AppRoutes;