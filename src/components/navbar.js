import React from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="home">
                    Home
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
                <li className="nav-item">
                  <button
                    className="nav-link logout"
                    onClick={(e) => dispatch(logout(e.target.value),navigate('/'))}
                  >
                    Logout
                  </button>
                </li>
              </>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
