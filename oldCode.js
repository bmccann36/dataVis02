
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

// RUN IN INDEX TO GET TOTALS

const data = require('./backend/data/focusedData')

console.log(data[0])

console.log(reduceCrimes(data))

// TAKES IN A LIST OF CRIMES GIVES BACK THE TOP FIVE MOST OCCURING AND THEIR FREQ
function reduceCrimes(crimes) {
  let frequency = {}
  crimes.forEach(crime => {
    frequency[crime.cat] ? frequency[crime.cat]++ : frequency[crime.cat] = 1
  })
  // console.log('freq', frequency)
  var props = Object.keys(frequency).map(function (crime) {
    return { crime: crime, value: this[crime] };
  }, frequency);
  props.sort(function (p1, p2) { return p2.value - p1.value; });
  return props.slice(0, 20);
}

const amounts = [ { crime: 'PETIT LARCENY', value: 62205 },
{ crime: 'HARRASSMENT 2', value: 49464 },
{ crime: 'ASSAULT 3 & RELATED OFFENSES', value: 38889 },
{ crime: 'CRIMINAL MISCHIEF & RELATED OF', value: 37888 },
{ crime: 'GRAND LARCENY', value: 31772 },
{ crime: 'OFF. AGNST PUB ORD SENSBLTY &', value: 16704 },
{ crime: 'DANGEROUS DRUGS', value: 16286 },
{ crime: 'FELONY ASSAULT', value: 15250 },
{ crime: 'ROBBERY', value: 10261 },
{ crime: 'MISCELLANEOUS PENAL LAW', value: 9982 },
{ crime: 'BURGLARY', value: 8803 },
{ crime: 'DANGEROUS WEAPONS', value: 6583 },
{ crime: 'OFFENSES AGAINST PUBLIC ADMINI', value: 6055 },
{ crime: 'VEHICLE AND TRAFFIC LAWS', value: 4816 },
{ crime: 'INTOXICATED & IMPAIRED DRIVING', value: 4214 },
{ crime: 'GRAND LARCENY OF MOTOR VEHICLE', value: 4196 },
{ crime: 'FORGERY', value: 4138 },
{ crime: 'THEFT-FRAUD', value: 3585 },
{ crime: 'CRIMINAL TRESPASS', value: 2738 },
{ crime: 'FRAUDS', value: 2222 } ]
