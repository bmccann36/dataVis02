
const chalk = require('chalk')
var fs = require('fs');

const crimeData = require('./crimeData').data // all we care about is the data portion

// const bigData = (crimeData[0])

const medData = crimeData.slice(0, 10000)


fs.writeFile('./medData.json', JSON.stringify(medData, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(chalk.magenta('File has been created'));
});


function magenta(str) {
  console.log(chalk.magenta(str))
}
function yellow(str) {
  console.log(chalk.yellow(str))
}

function cyan(str) {
  console.log(chalk.cyan(str))
}

