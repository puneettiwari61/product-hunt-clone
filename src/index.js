import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Aside from './components/Aside'
import data from './data.json'


class App extends React.Component{

  constructor(){
    super()
    this.state={
      data: [...data.data]
    }
  }

  updateProduct = (e,d) => {
    d.upVote = 100
    d.comments = 121
    d.id = new Date().getTime()
    e.preventDefault()
    this.setState({data: [...this.state.data, d ]})
  }

  handleClick = (id) => {
    let updatedData = this.state.data.map(d => {
      if(d.id === id){
        d.upVote = ++d.upVote
      }
      return d
    })
    this.setState({data: updatedData})
  }

  render(){
  return (
    <>
     <Navbar />
    <div className='top'>
    <div>
    <Cards data={this.state.data} handleClick={this.handleClick} />
    </div>
    <div>
    <Aside updateProduct={this.updateProduct} />
    </div>
    </div>
    </>
  )}
}


ReactDom.render(<App />, document.getElementById('root'))