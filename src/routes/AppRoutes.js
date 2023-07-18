import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/loginpage",
        element: <Login />
    },
    {
        path: "/signuppage",
        element: <Signup />
    }
]);

export default AppRoutes;