import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
]);

export default AppRoutes;