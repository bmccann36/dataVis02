
const chalk = require('chalk')
var fs = require('fs');

const crimeData = require('../data/crimeData').data // all we care about is the data portion

const rawData = crimeData.filter(entry => entry[29] && entry[30])

const data = rawData.map(entry => {
  let latNumber = Number(entry[29])
  return {
    id: entry[0],
    cat: entry[15],
    lat: +latNumber.toFixed(4),
    lon: Number(entry[30]),
  }
})


fs.writeFile('./focusedData.js', data, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(chalk.magenta('File has been created'));
});

