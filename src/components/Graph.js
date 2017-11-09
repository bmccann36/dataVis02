/*eslint-disable no-magic-numbers*/
import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryPolarAxis
} from 'victory'

export default class Chart extends React.Component {
  render() {
const yChange = Math.abs(this.props.coor.lat)
const bChange = Math.abs(this.props.coor.lng)

console.log('lat',yChange, 'lon', bChange)
    return (
      <div className="graph">
        <h1> test </h1>
        <VictoryChart polar
          theme={VictoryTheme.material}
        >
          {
            ["intelligence", "strength", "speed", "stealth", "charisma"].map((d, i) => {
              return (
                <VictoryPolarAxis dependentAxis
                  key={i}
                  label={d}
                  labelPlacement="perpendicular"
                  style={{ tickLabels: { fill: "none" } }}
                  axisValue={i}
                />
              );
            })
          }
          <VictoryBar
            style={{ data: { fill: "tomato", width: 25 }}
            }
            data={[
              { x: 0, y: yChange },
              { x: 1, y: 25 },
              { x: 2, y: bChange },
              { x: 3, y: 50 },
              { x: 4, y: 50 }
            ]}
          />
        </VictoryChart>

      </div>
    );
  }
}
