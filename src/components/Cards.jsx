import React from 'react'
import data from './../data.json'
import Card from './Card'


class Cards extends React.Component{

  render(){
  return(
    <>
    <div className='filter'>
      <div className="today-filter">Today</div>
      <div> <span className="popular-filter">Popular</span><span className="popular-filter">Newest</span> </div>
    </div>
    <div className='cards'>
    {this.props.data.map(p => <Card key={p.id} {...p} handleClick={this.props.handleClick}  />)}
    </div>
    </>
  )
}
}

export default Cards