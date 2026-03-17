import React from 'react'

const Card = (props) => {
  return (
    <div>
       <a href={props.elem.url} target='_blank'>
          <div className='w-100 h-90 overflow-hidden rounded-2xl'>
            <img className='h-full w-full object-cover ' src={props.elem.download_url
            } alt="" />
          </div>
          <h1 className='text-xl text-center font-bold '>{props.elem.author}</h1>
        </a>
    </div>
  )
}

export default Card
