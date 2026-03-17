import React from 'react'
import { useState } from 'react'
import { useSyncExternalStore } from 'react'

const App = () => {
  const [a, seta] = useState(0)
  const [msg, setmsg] = useState("")

  let incNum = () => {
    seta(a + 1)
    setmsg("The Increase Value : ")
   
  }

  const decNum = () => {
     seta(a - 1)
     setmsg("The Decrease Value : ")
  }

  const jumpBy5 = () =>{
    seta(a+5)
    setmsg("The Jump By 5 Value : ")

  }

  const reset = () =>{
    seta(0)
    setmsg("Let Play Again : ")

  }

  return (
    <div>
      <div className='head'>
        <h1>{msg}{a}</h1>
      </div>
      <div className='btn'>
        <button onClick={incNum}>Increase</button>
        <button onClick={decNum} className='dec'>Decrease</button>
        <button onClick={jumpBy5} className='dec'>Jump By 5</button>
        <button onClick={reset} className='dec'>Reset</button>


      </div>
    </div>
  )
}

export default App
