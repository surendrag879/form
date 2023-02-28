import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";

const About = () => {
  return (
    <>
    <Navbar/>
     <div style={{ textAlign: "center" }}>
      <h1>About Page</h1>
      <h3>Hello this is About page !</h3>

      <Link to="/home">Go to Home Page</Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    </>
   
  );
};

export default About;
