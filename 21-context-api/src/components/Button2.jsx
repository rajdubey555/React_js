import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';


const Button2 = () => {
  const [theme,setTheme]= useContext(ThemeDataContext)
  
      const changeTheme = () =>{
          
         if(theme === "Light"){
          setTheme("dark")
         }else{
          setTheme("Light")
         }
          
      }
  
    return (
      <div>
        <button onClick={changeTheme}>Change Theme</button>
      </div>
    )
}

export default Button2
