import { useContext, useState } from "react";
import Navbar from './components/Navbar'
import Button from "./components/Button";
import  { ThemeDataContext } from "./context/ThemeContext";
import Button2 from "./components/Button2";

const App = () => {
const [theme] = useContext(ThemeDataContext)
 
  return (
    <div >
      <Navbar/>
      <div className={`main ${theme}`}>
         <Button/>
         
         </div>
    </div>
  )
}

export default App
