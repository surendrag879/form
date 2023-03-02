import React from "react";
import { Outlet } from "react-router";
import Login from "../components/adminPanel/login";

const AuthenticationRoutes = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      path: "/login",
      element: <Login />,
    },
  ],
};

export default AuthenticationRoutes;
