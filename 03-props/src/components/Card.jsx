import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <h4>{props.age}</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, deserunt?</p>
        <button>View Profile let see</button>
      </div>
  )
}

export default Card
