// const experiments = require('./code/experiments')
// const prepBigData = require('./backend/code/prepBigData.js')
const chalk = require('chalk')

// const data = require('./backend/data/focusedData')
const grid = require('./src/grid')

let counter = {
  'PETIT LARCENY': [], 'HARRASSMENT 2': [], 'ASSAULT 3 & RELATED OFFENSES': [], 'CRIMINAL MISCHIEF & RELATED OF': [], 'GRAND LARCENY': [], 'OFF. AGNST PUB ORD SENSBLTY &': [], 'DANGEROUS DRUGS': [], 'FELONY ASSAULT': [], ROBBERY: [], 'MISCELLANEOUS PENAL LAW': [], BURGLARY: [], 'DANGEROUS WEAPONS': []
}
// LOOP THROUGH GRID OBJECT
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j]) {
      // console.log(grid[i][j]) // array of five or less objects
      processEntry(grid[i][j])
    }
  }
}
// NOW IN OUR COUNTER ARRAYS ARE STORED AT EACH CRIME KEY
// WE NEED TO LOOP THROUGH AND GET AVERAGES FOR EACH
// console.log(chalk.magenta('before average'))
// console.log(counter)

for (let crimeName in counter) {
  if (counter[crimeName].length) {
    counter[crimeName] = getAverage(counter[crimeName])
  }
}
console.log(chalk.magenta('after average'))
console.log(counter)

function getAverage(array) {
  var sum = array.reduce((a, b) => a + b)
  return Math.round(sum / array.length)
}

function processEntry(loc) {
  loc.forEach(obj => {
    if (counter[obj.crime]) counter[obj.crime].push(obj.value)
  })
}


// { 'PETIT LARCENY': 23,
// 'HARRASSMENT 2': 18,
// 'ASSAULT 3 & RELATED OFFENSES': 17,
// 'CRIMINAL MISCHIEF & RELATED OF': 14,
// 'GRAND LARCENY': 14,
// 'OFF. AGNST PUB ORD SENSBLTY &': 7,
// 'DANGEROUS DRUGS': 19,
// 'FELONY ASSAULT': 10,
// ROBBERY: 5,
// 'MISCELLANEOUS PENAL LAW': 6,
// BURGLARY: 4,
// 'DANGEROUS WEAPONS': 6 }

// let row = grid.slice(40, 41)[0] // gotta do at 0
// console.log(row.length) // 95
// let line = row.slice(50, 60)

// line.forEach(loc => processEntry(loc))

// console.log(counter)
// console.log(getAverage(counter['HARRASSMENT 2']))
