import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
      <h3>Raj Coder</h3>
      <div>
        <Link to='/'>Home</Link>
         <Link to='/About'>About us</Link>
          <Link to='/Contact_us'>Contact</Link>

      </div>
    </div>
  )
}

export default Navbar
