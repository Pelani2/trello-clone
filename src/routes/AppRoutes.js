import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/signup/Index";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    }
]);

export default AppRoutes;