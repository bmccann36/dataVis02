import { data } from './code/data'

import React from 'react'
import ReactDOM from 'react-dom'

import Dashboard from './components/Dashboard'
import Map from './components/Map'
import GraphCont from './components/GraphCont'

// import Graph from './components/Graph'

class Application extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.setCoor = this.setCoor.bind(this)
  }

  setCoor(lngLat) {
    this.setState(lngLat)
    // calculate up
    let val = lngLat.lat
    let dist = val - 40.502 // subtract the value from the base (lowest value)
    let ratio = dist / .4070 // divide that by the range (difference between high lat and low lat)
    let up = Math.floor(ratio * 100) // turn ito a percentage value
    // calculate over
    let lonVal = lngLat.lng
    let dist2 = lonVal + 74.249303727
    let ratio2 = dist2 / .542706966
    let over = Math.floor(ratio2 * 100)
    let crimes = []
    if (up && over) {
      crimes = (data[up + 1][over - 1]) || []
      crimes = crimes.concat((data[up + 1][over]))
      crimes = crimes.concat(data[up][over + 1])
      crimes.concat(data[up][over - 1]);
      crimes.concat(data[up][over]);
      crimes.concat(data[up][over + 1]);
      crimes.concat(data[up - 1][over - 1]); crimes.concat(data[up - 1][over]); crimes.concat(data[up - 1][over + 1]);
      this.setState({ crimes: crimes })
      // console.log(this.state)
    }
  }


  render() {
    return (
      <div className="main">
        {/* <Dashboard coor={this.state} /> */}
        <Map setCoor={this.setCoor} />

        <GraphCont crimes={this.state.crimes} />

      </div>
    )
  }


}



ReactDOM.render(<Application />, document.getElementById('app'));


