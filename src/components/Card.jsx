import React from 'react'

const Card = (props) => {
  return(
    <div className='flex start'>
    <div className='flex product'>
      <div>
        <img width='80' height='80' src={props.thumbnail.image_url} alt="peeps" />
      </div>
      <div>
        <h2 className='heading'>
          {props.name}
        </h2>
        <p className='para'>
          {props.tagline}
        </p>
        <div className="last">
        <span className='number'> {props.comments} </span>
        <span className='tags'> {props.tags || "product"}</span>
        </div>
      </div>
    </div>
    <div className='flex column' onClick={() => props.handleClick(props.id)}>
      <div className="upvote" ></div>
      <span>{props.votes_count}</span> 
    </div>
    </div>

  )
}


export default Card