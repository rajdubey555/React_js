import React from 'react'

const Navbar = (props) => {
    
    
    const changeTheme = () =>{
        console.log(props.Theme);
        props.setTheme('Dark')
      console.log(props.Theme);
    }

  return (
    <div>
      <button onClick={changeTheme}>Change Teheme</button>
    </div>
  )
}

export default Navbar
