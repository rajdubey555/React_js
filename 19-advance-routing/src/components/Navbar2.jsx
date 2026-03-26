import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <div className='flex gap 3'>
       <button onClick={() =>{
navigate('/')
       }} className='h-10 w-50 mt-5 text-white rounded-3xl bg-red-500'>Return to Home page</button>
<button onClick={() =>{
navigate(-1)
       }} className='h-10 w-50 mt-5 text-white rounded-3xl bg-red-500'>Return to Home page</button>

    </div>
  )
}

export default Navbar2
