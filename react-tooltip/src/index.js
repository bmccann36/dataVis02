import React from 'react'
import ReactDOM from 'react-dom'

import Dashboard from './components/Dashboard'
import Map from './components/Map'

class Application extends React.Component {
  constructor(){
    super()
    this.state = {}
    this.setCoor = this.setCoor.bind(this)
  }

  setCoor(lngLat){
    this.setState(lngLat)
  }

  render() {
    return (
      <div>
        <Dashboard coor= {this.state}/>
         <Map setCoor={this.setCoor} />

      </div>
    )
  }


}



ReactDOM.render(<Application />, document.getElementById('app'));


