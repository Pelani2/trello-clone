import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Signup";
import Login from "../pages/Login";

const AppRoutes = createBrowserRouter([
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/",
        element: <Login />
    }
]);

export default AppRoutes;