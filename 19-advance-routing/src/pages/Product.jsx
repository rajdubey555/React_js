import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 text-center">

      <h1 className="text-4xl font-bold mb-10">
        My <span className="text-yellow-400">Projects</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        {/* Project 1 */}
        <Link to='/Product/Project1'>
          <div className="border border-gray-700 p-6 rounded-xl hover:bg-gray-900 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-yellow-400">E-Commerce Website</h2>
            <p className="text-gray-400 mt-2">
              Full stack eCommerce website with cart, login, admin panel and dynamic products.
            </p>
          </div>
        </Link>

        {/* Project 2 */}
        <Link to='/Product/Project2'>
          <div className="border border-gray-700 p-6 rounded-xl hover:bg-gray-900 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-yellow-400">Kagzi Document App</h2>
            <p className="text-gray-400 mt-2">
              Desktop app for managing documents, billing system and customer records.
            </p>
          </div>
        </Link>

        {/* Project 3 */}
        <Link to='/Product/Project3'>
          <div className="border border-gray-700 p-6 rounded-xl hover:bg-gray-900 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-yellow-400">Portfolio Website</h2>
            <p className="text-gray-400 mt-2">
              Personal portfolio built using React showcasing projects, skills and contact section.
            </p>
          </div>
        </Link>

        {/* Project 4 */}
        <Link to='/Product/Project4'>
          <div className="border border-gray-700 p-6 rounded-xl hover:bg-gray-900 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-yellow-400">Rummy Vijeta UI</h2>
            <p className="text-gray-400 mt-2">
              Gaming UI project with modern design, animations and responsive layouts.
            </p>
          </div>
        </Link>

        {/* Project 5 */}
        <Link to='/Product/Project5'>
          <div className="border border-gray-700 p-6 rounded-xl hover:bg-gray-900 hover:scale-105 transition">
            <h2 className="text-xl font-semibold text-yellow-400">Job Listing UI</h2>
            <p className="text-gray-400 mt-2">
              Job portal UI with filters, cards layout and dynamic job listings using React.
            </p>
          </div>
        </Link>

      </div>

      <div className="mt-12">
        <Outlet />
      </div>

    </div>
  )
}

export default Product