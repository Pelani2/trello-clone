import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Signup/Index";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <SignUp />
    }
]);

export default AppRoutes;