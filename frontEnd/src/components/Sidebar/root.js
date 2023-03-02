import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { setLocalData } from '../../Helper/storage';
import './style.css';
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Admin Panel</h1>
        <nav>
          <ul>
            <li>
              <Link to={`/dashboard`}>Dashboard</Link>
            </li>

            <li>
              <Link to={`/service`}>Services</Link>
            </li>
            <li>
              <button onClick={()=>setLocalData('isLoggedIn', false)}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"><Outlet/></div>
    </>
  );
}