import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalData } from "../Helper/storage";

const ProtectedRoute = ({children }) => {
  const isLoggedIn = getLocalData('isLoggedIn');
  // console.log('isLoggedIn',isLoggedIn)
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
