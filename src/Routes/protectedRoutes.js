import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalData } from "../Helper/storage";

// ProtectedRoute:: Protected routes area accessible to logged in users only.
const ProtectedRoute = (props) => {
  const {Component} = props.comp;
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = getLocalData("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return <Component />;
};

export default ProtectedRoute;
