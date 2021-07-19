//import the greet module that is in the current folder
const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

//import the figlet
var figlet = require('figlet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)
console.log(figlet.textSync(greet('Xola'), {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));