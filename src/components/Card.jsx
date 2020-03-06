import React from 'react'

const Card = (props) => {
  return(
    <div className='flex start'>
    <div className='flex product'>
      <div>
        <img src={props.image} alt="peeps" />
      </div>
      <div>
        <h2 className='heading'>
          {props.title}
        </h2>
        <p className='para'>
          {props.text}
        </p>
        <div className="last">
        <span className='number'> {props.comments} </span>
        <span className='tags'> {props.tags || "product"}</span>
        </div>
      </div>
    </div>
    <div className='flex column' onClick={() => props.handleClick(props.id)}>
      <div className="upvote" ></div>
      <span>{props.upVote}</span> 
    </div>
    </div>

  )
}


export default Card