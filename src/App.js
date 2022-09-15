import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableData from './Components/Table';
import SignUp from './Components/Form.jsx';
import NavbarComponent from './Components/Navbar';
import PasswordValidation from './Components/Validation';



function App() {
  return (
    <>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <NavbarComponent/>
      </header>
      <TableData />
      <SignUp />
      
      {/* <PasswordValidation/> */}
    </>
  );
}

export default App;