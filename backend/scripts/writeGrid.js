
const chalk = require('chalk')
var fs = require('fs');

const grid = require('../code/prepBigData').grid // all we care about is the data portion



fs.writeFile('./grid.json', JSON.stringify(grid, null, 4), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(chalk.magenta('grid file has been created'));
});

