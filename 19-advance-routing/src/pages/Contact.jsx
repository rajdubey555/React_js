import React from 'react'

const Contact = () => {
  return (
<div className="contact min-h-screen flex flex-col justify-center items-center text-center px-4">

  <h1 className="text-3xl md:text-5xl font-bold mb-4">
    Contact Me
  </h1>

  <p className="text-gray-600 mb-6">
    Feel free to reach out anytime 🚀
  </p>

  {/* Simple Form */}
  <div className="flex flex-col gap-4 w-full max-w-md">

    <input
      type="text"
      placeholder="Your Name"
      className="border p-3 rounded outline-none"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="border p-3 rounded outline-none"
    />

    <textarea
      placeholder="Your Message"
      rows="4"
      className="border p-3 rounded outline-none"
    ></textarea>

    <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
      Send Message
    </button>

  </div>

</div>
  )
}

export default Contact
