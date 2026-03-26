import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Skills from './pages/Skills'
import SkillsDetails from './pages/SkillsDetails'

const App = () => {
  return (
    <div className='h-screen' >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Skills' element={<Skills/>} />
        <Route path='/Skills/:id' element={<SkillsDetails/>} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Product/Project1' element={<Project1 />}/>
        <Route path='/Product/Project2' element={<Project2 />}/>


        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
