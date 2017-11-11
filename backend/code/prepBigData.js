const data = require('../data/focusedData')

// console.log(focusedData.length)

// highest lat 40.9127
// lowest lat 40.4988
// -73.700716685 'highest lon'
// -74.25319084 'lowest lon'

const grid = new Array(100)
for (let i = 0; i <= 100; i++) {
  grid[i] = [new Array(100)]
}

data.forEach(entry => {
  let up = calcUp(entry.lat)
  let over = calcOver(entry.lon)
  if (grid[up] && grid[up][over]) { // is something is there push into it
    grid[up][over].push(entry)
  }
  else { // if no array yet create one with entry as first element
    // console.log('up and over', up, over)
    grid[up][over] = [entry]
  }
})


function calcUp(lat) {
  let dist = lat - 40.4988 // subtract the base from the value (lowest value)
  let ratio = dist / 0.4139 // divide that by the range (difference between high lat and low lat)
  return Math.floor(ratio * 100) // turn ito a percentage value
}

function calcOver(lon) {
  let dist2 = lon + 74.25319084 // subtract the base from the value (lowest value)
  let ratio2 = dist2 / 0.552474155
  return Math.floor(ratio2 * 100)
}
module.exports = { grid }

// highest lat 40.9127
// lowest lat 40.4988
// -73.700716685 'highest lon'
// -74.25319084 'lowest lon'
