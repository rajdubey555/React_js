import React from 'react'

const Footer = () => {
  return (
   <div className="bg-black text-white py-6 mt-10">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

    {/* Left */}
    <h3 className="text-lg font-semibold">
      © 2026 Raj Coder
    </h3>

    {/* Center */}
    <p className="text-gray-400 text-sm">
      Built with ❤️ using React & Tailwind
    </p>

    {/* Right */}
    <div className="flex gap-4">
      <a href="#" className="hover:text-yellow-400">LinkedIn</a>
      <a href="#" className="hover:text-yellow-400">GitHub</a>
      <a href="#" className="hover:text-yellow-400">Portfolio</a>
    </div>

  </div>
</div>
  )
}

export default Footer
