import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/navbar'
const Home = () => {
  return (
    <>
    <Navbar />
     <div style={{textAlign:'center'}}>
      <h1>Home Page</h1>
      <h3>Hello this is home page !</h3>
    <Link to='/about' >Go to About Page</Link>
    </div>
    </>
   
  )
}

export default Home