import React from 'react'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import { Routes,Route } from "react-router-dom";
import Cart from './components/Cart';
import Home from './pages/Home';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     
    </div>
  )
}

export default App
