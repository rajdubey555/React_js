import React,{useState} from 'react'
import Navbar from './componenets/Navbar'

const App = (props) => {
  const [Theme, setTheme] = useState("Light")
  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Navbar Theme={Theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
