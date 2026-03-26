import React from 'react'
import { useNavigate } from 'react-router-dom'

const Skills = () => {

const navigate= useNavigate()

  

  return (
     <div className="min-h-screen p-10 text-center">

      <h1 className="text-3xl md:text-5xl font-bold mb-10">
        My Skills
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

        <div className="border p-6 rounded hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Frontend</h2>
          <p className="text-gray-600">HTML, CSS, JavaScript, React, Tailwind</p>
        </div>

        <div className="border p-6 rounded hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Backend</h2>
          <p className="text-gray-600">PHP, MySQL, API Integration</p>
        </div>

        <div className="border p-6 rounded hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">Tools</h2>
          <p className="text-gray-600">Git, GitHub, VS Code</p>
        </div>
       

      </div> 
      
    </div>
  )
}

export default Skills
