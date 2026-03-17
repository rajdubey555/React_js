import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(2)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  useEffect(() => {
    getData()
  }, [index])


  let printUserData = (
    <div className="flex flex-col items-center justify-center w-full mt-20 gap-5">
      <h1 className="text-4xl">Loading......</h1>
    </div>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <div key={idx} >
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='h-screen p-4 pt-0 '>
      <div className='flex fixed top-0 left-1/2 -translate-x-1/2 items- gap-5 bg-white w-full justify-center pt-5 shadow'>
      <h1 className='text-7xl font-bold text-center pb-10'>Gallery</h1>
<img className='h-22' src="https://cdn-icons-png.flaticon.com/512/13103/13103673.png" alt="" />      </div>
      <div className='flex flex-wrap gap-10 justify-center mt-40'>{printUserData}</div>
      <div className='flex justify-center items-center p-4 gap-5'>
        <button className='h-10 w-30 text-xl text-white rounded-xl font-bold bg-blue-700 active:scale-95'
          onClick={() => {
            if (index > 2) {
              setIndex(index - 1)
              setUserData([])
            }
          }}>Prev</button>
          <h4 className='font-bold'>Page {index-1}</h4>
        <button className='h-10 w-30 text-xl text-white rounded-xl font-bold bg-blue-700 active:scale-95'
          onClick={() => {
            setIndex(index + 1)
            setUserData([])
          }}
        >Next</button>
      </div>
    </div>
  )
}

export default App
