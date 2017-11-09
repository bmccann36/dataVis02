



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

