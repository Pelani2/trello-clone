import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Signup";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <SignUp />
    }
]);

export default AppRoutes;