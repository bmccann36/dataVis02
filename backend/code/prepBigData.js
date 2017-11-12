const data = require('../data/focusedData')


const grid = new Array(100)
for (let i = 0; i < 100; i++) {
  grid[i] = [new Array(100)]
}


// put data into 100 by 100 grid
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

// transform grid so that each spot contains the top five crimes for that location
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j]) {
      grid[i][j] = reduceCrimes(grid[i][j])
    }
  }
}


// TAKES IN A LIST OF CRIMES GIVES BACK THE TOP FIVE MOST OCCURING AND THEIR FREQ
function reduceCrimes(crimes) {
  let frequency = {}
  crimes = crimes.filter(crime => crime !== undefined)
  crimes.forEach(crime => {
    frequency[crime.cat] ? frequency[crime.cat]++ : frequency[crime.cat] = 1
  })
  // console.log('freq', frequency)
  var props = Object.keys(frequency).map(function (crime) {
    return { crime: crime, value: this[crime] };
  }, frequency);
  props.sort(function (p1, p2) { return p2.value - p1.value; });
  return props.slice(0, 5);
}

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
