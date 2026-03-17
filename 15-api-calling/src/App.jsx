import React, { useState } from 'react'
import axios from "axios";

const App = () => {

  // const getdata = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  //   const data = await response.json()
  //   console.log(data)
  // }

  const [data, setdata] = useState([])

  const getData = async () => {

    const response = await axios.get("https://picsum.photos/v2/list")
    setdata(response.data)
    console.log(response);

  }
  return (
    <div className='p-10 bg-black'>
      <h1 className='text-white font-bold text-5xl text-center mb-5'>Random Users</h1>

     
      <div className='flex gap-10 flex-wrap '>
        {data.map((elem, idx) => {
          return <div key={idx} className='' >
            <div className=' flex flex-col items-center text-xl h-60 font-black bg-amber-500 w-50 rounded-2xl p-4 '>
              <img className='w-35 h-35 rounded-full '  src={elem.download_url
              } alt="" />
              <h1 className='text-center'>{elem.author}</h1>

            </div>
          </div>
        })}
      </div>
      <div className='flex justify-center'>
       <button className='h-12 w-50 mt-5 text-white font-bold bg-blue-800 rounded-2xl' onClick={() => {
        getData()
      }}>Get Data</button>
      </div>
    </div>
  )
}

export default App
