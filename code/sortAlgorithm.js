// { id: 100,
//   cat: 'CRIMINAL TRESPASS',
//   lat: '40.686749281',
//   lon: '-73.796904574' }
const chalk = require('chalk')

const testArr = []

// creates random numbers - - can change how many digits
function newNum() {
  return Math.ceil(Math.random() * 10)
}

for (let i = 0; i <= 50; i++) {
  const obj = {
    id: i,
    lat: newNum(),
    lon: newNum()
  }
  // console.log(obj)
  testArr.push(obj)
}
/////

// magenta('********* sorting lat long ')
// testArr.sort(sortLatLon)
// console.log(testArr)
// magenta('********* sorted')



//UTILITIES

const sortLatLon = function (a, b) {
  if (a.lat < b.lat) return -1
  if (a.lat > b.lat) return 1
  if (a.lat == b.lat) {
    if (a.lon < b.lon) return -1
    if (a.lon > b.lon) return 1
    if (a.lon == b.lon) return 0
  }
}


module.exports =  {sortLatLon}



  function magenta(str) {
    console.log(chalk.magenta(str))

  }
