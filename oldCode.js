
//  TEST ARRAY GENERATOR
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


 // UTILITY TO FIND HIGHEST AND LOWEST LAT LON
 const highestLat = focusedData.reduce( (acc, val) => {
  return acc.lat > val.lat ? acc : val
})
console.log('highest lat', highestLat.lat)
// highest Lat  40.91

const lowestLat = focusedData.reduce( (acc, val) => {
  return acc.lat < val.lat ? acc : val
})
console.log('lowest lat', lowestLat.lat)  // 40.502


const highestLon = focusedData.reduce( (acc, val) => {
  return acc.lon > val.lon ? acc : val
})
console.log(highestLon.lon, 'highest lon')  //lon: -73.706596761

const lowestLon = focusedData.reduce( (acc, val) => {
  return acc.lon < val.lon ? acc : val
})
console.log(lowestLon.lon, 'lowest lon')  //   lon: -74.249303727


// when I was looking at a radius of data and not just a point
setCoor(lngLat) {
  this.setState(lngLat)
  // calculate up
  let val = lngLat.lat
  let dist = val - 40.502 // subtract the value from the base (lowest value)
  let ratio = dist / .4070 // divide that by the range (difference between high lat and low lat)
  let up = Math.floor(ratio * 100) // turn ito a percentage value
  // calculate over
  let lonVal = lngLat.lng
  let dist2 = lonVal + 74.249303727
  let ratio2 = dist2 / .542706966
  let over = Math.floor(ratio2 * 100)
  let crimes = []
  if (up && over) {  // gather data around this point and this point
    crimes = (data[up + 1][over - 1]) || []
    crimes = crimes.concat((data[up + 1][over]))
    crimes = crimes.concat(data[up][over + 1])
    crimes.concat(data[up][over - 1]);
    crimes.concat(data[up][over]);
    crimes.concat(data[up][over + 1]);
    crimes.concat(data[up - 1][over - 1]); crimes.concat(data[up - 1][over]); crimes.concat(data[up - 1][over + 1]);
    this.setState({ crimes: crimes })
    // console.log(this.state)
  }
}

