import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Aside from './components/Aside'
import data from './data.json'
import axios from 'axios'

export default class App extends React.Component{

  constructor(){
    super()
    this.state={
      data: [...data.data],
      apiData : [],
      loader:false
    }
  }

  componentDidMount() {
    this.setState({loader: true})
    // fetch('/v1/posts',{headers: {"authorization": "Bearer SHg1C3dhaP_lcVN4_Z8_rjcfZbSFCFeWmRcT8LrnGWU"}})
    // .then(res => res.json())
    // .then(res =>this.setState({apiData : res.posts, loader: false}))
    // .catch(err => console.log(err))

    
    var total = 0;
    axios.get('/v1/posts',{headers: {"authorization": "Bearer SHg1C3dhaP_lcVN4_Z8_rjcfZbSFCFeWmRcT8LrnGWU"},
    onDownloadProgress (progressEvent) {
      // progressEvent.total += progressEvent.loaded
      total += progressEvent.loaded
      console.log(progressEvent.loaded * 100 / total)
      // let percentCompleted = Math.round((progressEvent.loaded) / (total));
    // console.log(percentCompleted);
    // console.log(progressEvent)
    }
      }).then(res =>this.setState({apiData : res.data.posts, loader: false}))   


    
    // axios({
    //   method: 'get',
    //   url: '/v1/posts',
    //   headers: {"authorization": "Bearer SHg1C3dhaP_lcVN4_Z8_rjcfZbSFCFeWmRcT8LrnGWU"},
    //   onUploadProgress:  progressEvent => console.log(progressEvent.loaded)
    // })
    //   .then(res =>this.setState({apiData : res.data.posts, loader: false}))
    }

  

  updateProduct = (e,d) => {
    // e.persist()
    // console.log(e)
    d.upVote = 100
    d.comments = 121
    d.id = new Date().getTime()
    e.preventDefault()
    this.setState({data: [...this.state.data, d ]})
  }

  handleClick = (id) => {
    let updatedData = this.state.apiData.map(d => {
      if(d.id === id){
        d.votes_count = ++d.votes_count
      }
      return d
    })
    this.setState({apiData: updatedData})
  }

  render(){
  return (
    <>
     <Navbar />
     {/* <progress id="file" value="32" max="100"></progress> */}
    {this.state.loader?<div class="lds-circle"><div></div></div> : ''} 
    <div className='top'>
    <div>
    <Cards data={this.state.apiData} handleClick={this.handleClick} />
    </div>
    <div>
    <Aside updateProduct={this.updateProduct} />
    </div>
    </div>
    </>
  )}
}
