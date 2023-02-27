import React from "react";
import MainLayout from "src/layout/MainLayout";
import NoMatch from "../pages/ErrorPage";
import ProtectedRoute from "./protectedRoutes";
import Admin from "../components/adminPanel/admin";


const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      ),
    },

    {
      path: "*",
      element: <NoMatch />,
    },
  ],
};

export default MainRoutes;
