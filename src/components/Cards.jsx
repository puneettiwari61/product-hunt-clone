import React from 'react'
import data from './../data.json'
import Card from './Card'


const Cards = () => {
  return(
    <>
    <div className='filter'>
      <div className="today-filter">Today</div>
      <div> <span className="popular-filter">Popular</span><span className="popular-filter">Newest</span> </div>
    </div>
    <div className='cards'>
    {data.data.map(p => <Card {...p} />)}
    </div>
    </>
  )
}

export default Cards