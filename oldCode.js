
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
