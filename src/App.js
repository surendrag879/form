import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../src/pages/Login/index";
import ErrorPage from "../src/pages/errorPage";
import Navbar from "../src/components/navbar";
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
      }
    ],
  },
]);

const App = () => <RouterProvider router={router} />

export default App;
