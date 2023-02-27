import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { setLocalData, getLocalData } from "../../Helper/storage";

const Navbar = () => {
  const isLoggedIn = getLocalData("isLoggedIn");
  const navigate = useNavigate();

  const handleLogout = () => {
    setLocalData("isLoggedIn", false);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <div className="container-fluid">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" to="home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="service">
                Service
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button style={{color:'blue', fontSize:'16px'}}
              className="btn btn-success-oulined"
              onClick={() => {
                isLoggedIn ? handleLogout() : handleLogin();
              }}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
