import { data } from '../code/data'

import React, { Component } from 'react'
var _ = require('lodash');

// const data = require('../code/data').data

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
    let crimes = []
    if (up && over) {
      crimes = (data[up + 1][over - 1]) || []
      crimes = crimes.concat((data[up + 1][over]))
      crimes = crimes.concat(data[up][over + 1])
      crimes.concat(data[up][over - 1]);
      crimes.concat(data[up][over]);
       crimes.concat(data[up][over + 1]);
      crimes.concat(data[up - 1][over - 1]); crimes.concat(data[up - 1][over]); crimes.concat(data[up - 1][over + 1]) ;
      // _.flattenDeep(crimes)
      // crimes.join(',')
      console.log(crimes)

    }

    const offenses = crimes.map( offense => {
     return (offense) ? <p key={offense.id}> {offense.cat} </p> : null
    })



    return (
      <div className="dashboard" >
        <h1> hello world </h1>
        <p> {this.props.coor.lng} longitude </p>
        <p> {this.props.coor.lat} latitude </p>
        <p>   up {up} </p>
        <p> over {over} </p>

        <p> crimes {offenses} </p>




      </div>
    )
  }

}
