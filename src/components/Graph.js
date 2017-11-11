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
    console.log('props for graph', this.props)
    const topFive = this.props.topFive || []
    const defaultData = [{ x: 0, y: 5 }, { x: 1, y: 4 }, { x: 2, y: 3 }, { x: 3, y: 2 },
    { x: 4, y: 1 }]
    const data = topFive.map((crime, i) => {
      return { x: i, y: crime.value }
    })

    return (
      <div className="graph">
        <VictoryChart polar
          theme={VictoryTheme.material}
        >
          {
            topFive.map((crime, i) => {
              return (
                <VictoryPolarAxis dependentAxis
                  key={i}
                  label={crime.crime}
                  labelPlacement="perpendicular"
                  style={{ tickLabels: { fill: "none" } }}
                  axisValue={i}
                />
              );
            })
          }
          <VictoryBar
            style={{ data: { fill: "tomato", width: 25 } }
            }
            data={ data || defaultData

            }
          />
        </VictoryChart>
      </div>
    );
  }
}
