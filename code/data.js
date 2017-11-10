const chalk = require('chalk')
var fs = require("fs");


const sortLatLon = require('./sortAlgorithm').sortLatLon
let medData = require('../data/medData')
//THROW OUT BAD ENTRIES
medData = medData.filter( entry =>  entry[29] && entry[30])

// creates new data set with only the values we care about also converts lat and lon to numbers
const focusData = medData.map( entry => {
  let latNumber = Number(entry[29])
   return {
     id: entry[0],
     cat: entry[15],
     lat: +latNumber.toFixed(3),
     lon: Number(entry[30]),
     address:null
   }
})

function calcUp(lat){
  let dist = lat - 40.502 // subtract the base from the value (lowest value)
  let ratio = dist/.4070 // divide that by the range (difference between high lat and low lat)
  return Math.floor(ratio*100) // turn ito a percentage value
}

function calcOver(lon){
  let dist2 = lon + 74.249303727 // subtract the base from the value (lowest value)
  let ratio2 = dist2/.542706966
  return Math.floor(ratio2*100)
}

// console.log(focusData[500])

const sample = focusData[500]
console.log(sample.lat, sample.lon)
console.log('up', calcUp(sample.lat))
console.log('over', calcOver(sample.lon))

// NEW PLAN
/*
give every point an address based on its coor with formula devised (address doesn't need to be unique)

make an empty array of 10,000 buckets (some can be empty)

put data with adresses into that array(grid)
*/






// const grid = focusData.sort(sortLatLon)





function magenta(str) {
  console.log(chalk.magenta(str))
}
function yellow(str) {
  console.log(chalk.yellow(str))
}

function cyan(str) {
  console.log(chalk.cyan(str))
}


