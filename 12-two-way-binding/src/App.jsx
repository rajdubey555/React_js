import React,{useState} from 'react'

const App = () => {

  const [Name, setName] = useState('')

  const formSubmit = (e) => {
    e.preventDefault()
    console.log("form submit by : ",Name);
    setName('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        formSubmit(e)
      }}>
        <input type="text" value={Name} onChange={(e) =>{
          setName(e.target.value)
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
