import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-amber-500 justify-between'>
      <h2 className='text-2xl font-bold'>Raj Coder</h2>
      <div className='flex font-bold gap-8 items-center'>
        <Link className=' hover:text-white ' to='/'>Home</Link>
        <Link className=' hover:text-white ' to='/Contact'>Contact us</Link>
        <Link className=' hover:text-white ' to='/about'>About us</Link>
        <Link className=' hover:text-white ' to='/Product'>Project</Link>
        <Link className=' hover:text-white ' to='/Skills'>Skills</Link>
      </div>

    </div>
  )
}

export default Navbar
