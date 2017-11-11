
import React, { Component } from 'react'


// const data = require('../code/data').data

export default class Dashboard extends Component {
  constructor() {
    super()
  }

  componentWillReceiveProps() {
      // calculate up
      let val = this.props.coor.lat
      let dist = val - 40.4988 // subtract the value from the base (lowest value)
      let ratio = dist / 0.4139 // divide that by the range (difference between high lat and low lat)
      let up = Math.floor(ratio * 100) // turn ito a percentage value
      // calculate over
      let lonVal = this.props.coor.lng
      let dist2 = lonVal + 74.25319084
      let ratio2 = dist2 / 0.552474155
      let over = Math.floor(ratio2 * 100)
      console.log('up', up)
      console.log('over', over)
  //     let crimes = []
  //     if (up && over) {
  //       crimes = (data[up + 1][over - 1]) || []
  //       crimes = crimes.concat((data[up + 1][over]))
  //       crimes = crimes.concat(data[up][over + 1])
  //       crimes.concat(data[up][over - 1]);
  //       crimes.concat(data[up][over]);
  //       crimes.concat(data[up][over + 1]);
  //       crimes.concat(data[up - 1][over - 1]); crimes.concat(data[up - 1][over]); crimes.concat(data[up - 1][over + 1]);
  //       this.setState({ crimes: crimes })
  //       console.log(this.state)
  //     }
  //   // }
  }


  render() {
    // const offenses = crimes.map( offense => {
    //   return (offense) ? <p key={offense.id}> {offense.cat} </p> : null
    //  })
    return (
      <div className="dashboard" >
          <div>
            <h1> Dashboard </h1>
            <p> {this.props.coor.lng} longitude </p>
            <p> {this.props.coor.lat} latitude </p>
            <p>   up  </p>
            <p> over  </p>

            <p> crimes  </p>
          </div>

      </div>
    )
  }
}



