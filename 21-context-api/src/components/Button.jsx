import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {

    const [theme,setTheme]= useContext(ThemeDataContext)

    const changeTheme = () =>{
        
       if(theme === "Light"){
        setTheme("dark")
       }else{
        setTheme("Light")
       }
        
    }

  return (
    <div >
      <button className={`btn ${theme}`} onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button

