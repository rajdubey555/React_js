import React, { useState } from 'react'

const App = () => {
  const [data, setdata] = useState({ username: 'Raj', age: 21 })
  const [num, setnum] = useState(0)


  const changeUser = () => {
    const newUser = { ...data }
    newUser.username = "Aman"
    newUser.age = 24
    setdata(newUser)
    console.log(newUser)

  }

  const count = () => {
    setnum(prev => (prev + 1))
    setnum(prev => (prev + 1))
    setnum(prev => (prev + 1))
  }

  return (
    <div>
      <div className='head'>
        <h1>{data.username} and {data.age}</h1>
        <h1>{num}</h1>
      </div>
      <div className='btn'>
        <button onClick={changeUser}>Change User</button>
        <button onClick={count}>Change Count</button>
      </div>
    </div>
  )
}

export default App
