import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div style={{ textAlign: "center" }}>
      <h2>Contact Page</h2>
      <Link to="/home">Go to Home Page</Link>
    </div>
    </>
    
  );
};

export default Contact;
