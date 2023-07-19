import React from "react";
import { RouterProvider } from "react-router";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return(
    <React.Fragment>
      <RouterProvider router={AppRoutes} />
    </React.Fragment>
  );
}