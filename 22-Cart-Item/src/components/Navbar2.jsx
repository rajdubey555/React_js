import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";


const Navbar2 = () => {
  return (
        <div className='flex justify-center items-center gap-5 text-xl font-bold text-gray-500'>
            <div className='flex flex-row items-center justify-center gap-1'>
                <Link to="/" className='flex items-center gap-1 font-medium hover:underline'>
                    <IoMdHome  color="#0565ff" />
                    <span> Home </span>
                </Link>
            </div>
            |
            <div className='flex flex-row items-center gap-1'>
                <Link to="/about" className='flex items-center gap-1 font-medium hover:underline'>
                    <FaCircleInfo color="#0565ff" />
                    <span> About </span>
                </Link>
            </div>
            |
            <div className='flex flex-row items-center gap-1'>
                <Link to="/contact" className='flex items-center gap-1 font-medium hover:underline'>
                    <IoIosContact color="#0565ff" />
                    <span> Contact </span>
                </Link>
            </div>
            |
            <div className='flex flex-row items-center gap-1'>
                <Link to="/cart" className='flex items-center gap-1 font-medium hover:underline'>
                    <FaShoppingCart color="#0565ff" />
                    <span> Cart </span>
                </Link>
            </div>

            {/* <div className='flex flex-row items-center gap-1'>
                <button onClick={toggleTheme} className='flex items-center gap-1 justify-center hover:underline'>
                    {theme === "light" ?
                     (<>
                     <MdOutlineLightMode /> light
                     
                     
                     </>)
                     :
                     (< >
                     <MdLightMode /> Dark
                     
                     </>)}
                    
                </button>
            </div> */}
        </div>
    )
}

export default Navbar2
