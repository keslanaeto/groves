import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


 const Navbar = () => {
  return (

    <div className='navbar-container'>
       <p><span>G</span>Green Groves</p>

  
      <nav>
        <Link to='/'>Home</Link>
        <Link t0='/gardening'>Gardening</Link>
        <Link to='/educational'>Educational</Link>
        <Link to='/about'>About</Link>
      </nav>


      <Link>Contact Us</Link>

    </div>
  )
}

export default Navbar