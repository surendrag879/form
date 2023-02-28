import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../src/pages/Login/login";
import ErrorPage from "./pages/ErrorPage/error";
import Navbar from "../src/components/Navbar/navbar";
import Home from "../src/pages/Dashboard/home";
import About from "../src/pages/Dashboard/about";
import Contact from "../src/pages/Dashboard/contact";
import Service from "./pages/Dashboard/userList";
import Product from "../src/pages/Dashboard/product";
import ProtectedRoute from "./Routes/protectedRoutes";
// import Admin from "./pages/Dashboard/admin";
// import Root from "./components/Sidebar/root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/product",
    element: (
      <ProtectedRoute>
        <Product />
      </ProtectedRoute>
    ),
  },

  {
    path: "/userList",
    element: (
      <ProtectedRoute>
        <Service />
      </ProtectedRoute>
    ),
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
