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


const highestLat = grid.reduce( (acc, val) => {
  return acc.lat > val.lat ? acc : val
})
// console.log('highest lat', highestLat.lat)
// highest Lat  40.91

const lowestLat = grid.reduce( (acc, val) => {
  return acc.lat < val.lat ? acc : val
})
// console.log('lowest lat', lowestLat.lat)  // 40.502


const highestLon = grid.reduce( (acc, val) => {
  return acc.lon > val.lon ? acc : val
})
console.log(highestLon.lon, 'highest lon')  //lon: -73.706596761

const lowestLon = grid.reduce( (acc, val) => {
  return acc.lon < val.lon ? acc : val
})
console.log(lowestLon.lon, 'lowest lon')  //   lon: -74.249303727




// yellow(highestLat)





function magenta(str) {
  console.log(chalk.magenta(str))
}
function yellow(str) {
  console.log(chalk.yellow(str))
}

function cyan(str) {
  console.log(chalk.cyan(str))
}


