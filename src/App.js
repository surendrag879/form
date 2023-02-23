import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar";
import Login from '../src/pages/Login/index';
import Home from "../src/pages/Dashboard/home";
import About from "../src/pages/Dashboard/about";
import Contact from "../src/pages/Dashboard/contact";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
export default App;
