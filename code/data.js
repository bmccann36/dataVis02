const chalk = require('chalk')
var fs = require("fs");


const sortLatLon = require('./sortAlgorithm').sortLatLon
let medData = require('../data/medData')
//THROW OUT BAD ENTRIES
medData = medData.filter( entry =>  entry[29] && entry[30])


const focusData = medData.map( entry => {
  let latNumber = Number(entry[29])
   return {
     id: entry[0],
     cat: entry[15],
     lat: +latNumber.toFixed(3),
     lon: Number(entry[30])
   }
})



const grid = focusData.sort(sortLatLon)

console.log(grid.slice(0,100))








function magenta(str) {
  console.log(chalk.magenta(str))
}
function yellow(str) {
  console.log(chalk.yellow(str))
}

function cyan(str) {
  console.log(chalk.cyan(str))
}


