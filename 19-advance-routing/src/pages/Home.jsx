import React from 'react'

const Home = () => {
  return (
    <div className="home min-h-screen flex flex-col justify-center items-center from-black to-gray-900 text-white text-center px-4">

  <h1 className="text-5xl md:text-7xl font-bold mb-4 text-black">
    Hi, I'm <span className="text-yellow-400">Raj</span>
  </h1>

  <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
    Frontend Developer 🚀
  </h2>

  <p className="max-w-xl text-gray-400 mb-8">
    I build modern, responsive, and user-friendly web applications using React, JavaScript, and latest technologies.
  </p>

  <div className="flex gap-4">
    <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
      View Projects
    </button>

    <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
      Contact Me
    </button>
  </div>

</div>
  )
}

export default Home
