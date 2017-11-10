
import React, { Component } from 'react'

// const data = require('../code/data').data
import { data } from '../code/data'

export default class Dashboard extends Component {


  render() {
    let dummy = this.state
    let val = this.props.coor.lat
    let dist = val - 40.502 // subtract the value from the base (lowest value)
    let ratio = dist / .4070 // divide that by the range (difference between high lat and low lat)
    let up = Math.floor(ratio * 100) // turn ito a percentage value

    let lonVal = this.props.coor.lng
    let dist2 = lonVal + 74.249303727
    let ratio2 = dist2 / .542706966
    let over = Math.floor(ratio2 * 100)
    if (up && over) console.log('crimes for this area', data[up][over])


    return (
      <div className="dashboard" >
        <h1> hello world </h1>
        <p> {this.props.coor.lng} longitude </p>
        <p> {this.props.coor.lat} latitude </p>
        <p>   up {up} </p>
        <p> over {over} </p>

        <p> crimes  </p>




      </div>
    )
  }

}
