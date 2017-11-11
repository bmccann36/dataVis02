import React from 'react'
import Graph from './Graph'

export default class GraphCont extends React.Component {


  render() {
    const frequency = {}
    let crimes = this.props.crimes
    if (crimes) {
      // filter out any undefined
      crimes = crimes.filter(crime => crime !== undefined)
      crimes.forEach(crime => {
        frequency[crime.cat] ? frequency[crime.cat]++ : frequency[crime.cat] = 1
      })
      // console.log('freq', frequency)
      var props = Object.keys(frequency).map(function (crime) {
        return { crime: crime, value: this[crime] };
      }, frequency);
      props.sort(function (p1, p2) { return p2.value - p1.value; });
      var topFive = props.slice(0, 5);
      console.log('top five', topFive)

    }
    return (
      <div className="GraphCont">

          <Graph topFive={topFive} />
        }

      </div>
    )
  }
}