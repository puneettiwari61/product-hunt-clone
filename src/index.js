import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Aside from './components/Aside'
const App = () => {
  return (
    <>
     <Navbar />
    <div className='top'>
    <div>
    <Cards />
    </div>
    <div>
    <Aside />
    </div>
    </div>
    </>
  )
}


ReactDom.render(<App />, document.getElementById('root'))