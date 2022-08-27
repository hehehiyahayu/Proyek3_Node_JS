const fs = require('fs');

fs.writeFileSync('notes.txt', 'I live in Philadelphia');

//

const checkUtils = require('./src/utils.js');

checkUtils();

//

const validator = require('validator');

console.log(validator.isURL('https://mead.io'));

//

const chalk = require('chalk');

console.log(chalk.blue('Hello World'));