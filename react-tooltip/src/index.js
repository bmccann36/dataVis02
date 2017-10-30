import React from 'react'
import ReactDOM from 'react-dom'

// import Dashboard from './components/Dashboard'
import Map from './components/Map'

import Graph from './components/Graph'

class Application extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.setCoor = this.setCoor.bind(this)
  }

  setCoor(lngLat) {
    this.setState(lngLat)
    // console.log(this.state)
  }

  render() {
    return (
      <div className="main">
        <Graph coor= {this.state} />
        <Map setCoor={this.setCoor} />

      </div>
    )
  }


}



ReactDOM.render(<Application />, document.getElementById('app'));


