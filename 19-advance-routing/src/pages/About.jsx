import React from 'react'

const About = () => {
  return (
   <div className="about min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">

  <h1 className="text-4xl md:text-6xl font-bold mb-6">
    About <span className="text-yellow-500">Me</span>
  </h1>

  <p className="max-w-2xl text-gray-600 text-lg leading-relaxed mb-8">
    I'm a passionate Frontend Developer who loves building modern, scalable, and user-friendly web applications. 
    I enjoy turning ideas into reality using technologies like React, JavaScript, and Tailwind CSS.
  </p>

  {/* Cards Section */}
  <div className="grid md:grid-cols-3 gap-6 mt-6">

    <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">🚀 Experience</h3>
      <p className="text-gray-500">Worked on real-world projects and internships.</p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">💻 Skills</h3>
      <p className="text-gray-500">React, JavaScript, API Integration, UI Design.</p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-2">🎯 Goal</h3>
      <p className="text-gray-500">To become a top frontend engineer & build impactful products.</p>
    </div>

  </div>

</div>
  )
}

export default About
