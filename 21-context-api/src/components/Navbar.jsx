
import Navbar2 from './Navbar2'

import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'



const Navbar = () => {
const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
        <h2>Raj Coder</h2>
        <Navbar2 />
     
      
    </div>
  )
}

export default Navbar
