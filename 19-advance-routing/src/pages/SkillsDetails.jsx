import React from 'react'
import { useParams } from 'react-router-dom'

const SkillsDetails = () => {

    const params = useParams()
    console.log(params)

  return (
     <div className="min-h-screen p-10 max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        Frontend Development
      </h1>

      <p className="text-gray-600 mb-6">
        I specialize in building responsive and user-friendly interfaces using modern frontend technologies.
      </p>

      <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
        <li>HTML, CSS, JavaScript</li>
        <li>React.js for building UI</li>
        <li>Tailwind CSS for styling</li>
        <li>Responsive Design</li>
      </ul>

      <p className="text-gray-600 mb-6">
        I have worked on multiple projects including eCommerce websites, dashboards, and UI-focused applications.
      </p>

    </div>
  )
}

export default SkillsDetails
