import { createBrowserRouter } from "react-router-dom";
import SignupPage from "../pages/signup/SignupPage";
import React from "react";

const AppRoutes = createBrowserRouter([
    {
        path: "/signup",
        element: <SignupPage />
    }
]);

export default AppRoutes;