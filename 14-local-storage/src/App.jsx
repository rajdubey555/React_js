import React from 'react'

const App = () => {
 const user ={
 name : "raj",
 age : 21,
 city : "surat"
  }
  localStorage.clear()
  localStorage.setItem("Users",JSON.stringify(user))

  const users =JSON.parse( localStorage.getItem('Users'))
  console.log(users)
  return (
    <div>
      APP
    </div>
  )
}

export default App
