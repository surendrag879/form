import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../src/pages/Login/login";
import ErrorPage from "./pages/ErrorPage/error";
import Navbar from "../src/components/Navbar/navbar";
import Home from "../src/pages/Dashboard/home";
import About from "../src/pages/Dashboard/about";
import Contact from "../src/pages/Dashboard/contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/dashboard",
    element: <Navbar />,

    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
