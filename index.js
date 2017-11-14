// const experiments = require('./code/experiments')
// const prepBigData = require('./backend/code/prepBigData.js')
const chalk = require('chalk')
// const data = require('./backend/data/focusedData')
const grid = require('./src/grid')

const bigData = require('./backend/data/crimeData').data

magenta(bigData.length)
//
// lowest lat 40.4988   range 0.4139
// lowest lon -74.25319084   range 0.552474155

// RETURN ALL VALUES BETWEEN AN ARBITRARY RANGE ****
let filtered = bigData.filter(entry => {
  return (
    (entry[29] > 40.609 && entry[29] < 40.620 ) &&
    (entry[30] > -74.100 && entry[30] < -73.110))
})

cyan(filtered.length)
// let sorted = bigData.sort(compareFunc)

// function compareFunc(a, b) {
//   if (a[29] > b[29]) return 1
//   if (a[29 < b[29]]) return -1
//   else return 0
// }

// console.log(chalk.magenta('sorted'))


function magenta(str){
  console.log(chalk.magenta(str))
}

function cyan(str) {
  console.log(chalk.cyan(str))
}
