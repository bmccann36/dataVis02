const chalk = require('chalk')

let medData = require('../medData')
//THROW OUT BAD ENTRIES
medData = medData.filter(entry => entry[29] && entry[30])

// creates new data set with only the values we care about also converts lat and lon to numbers
const focusData = medData.map(entry => {
  let latNumber = Number(entry[29])

  return {
    id: entry[0],
    cat: entry[15],
    lat: +latNumber.toFixed(3),
    lon: Number(entry[30]),
  }
})
// where everything will go for map display
// const data = []
const data = new Array(100)
for (let i = 0; i <= 100; i++) {
  data[i] = [new Array(100)]
}

focusData.forEach(entry => {
  let up = calcUp(entry.lat)
  let over = calcOver(entry.lon)
  if (data[up] && data[up][over]) { // is something is there push into it
    data[up][over].push(entry)
  }
  else { // if no array yet create one with entry as first element
    data[up][over] = [entry]
  }
})


// console.log(data[40][80])


function calcUp(lat) {
  let dist = lat - 40.502 // subtract the base from the value (lowest value)
  let ratio = dist / 0.4070 // divide that by the range (difference between high lat and low lat)
  return Math.floor(ratio * 100) // turn ito a percentage value
}

function calcOver(lon) {
  let dist2 = lon + 74.249303727 // subtract the base from the value (lowest value)
  let ratio2 = dist2 / 0.542706966
  return Math.floor(ratio2 * 100)
}

module.exports = { data }

// function magenta(str) {
//   console.log(chalk.magenta(str))
// }
// function yellow(str) {
//   console.log(chalk.yellow(str))
// }

// function cyan(str) {
//   console.log(chalk.cyan(str))
// }

