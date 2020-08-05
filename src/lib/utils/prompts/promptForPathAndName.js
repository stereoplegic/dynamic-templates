const inquirer = require('inquirer');
const chalk = require('chalk');
const promptForWrapperTag = require('./promptForWrapperTag');

module.exports = () => inquirer.prompt([
    {
        name: 'path',
        message: 'Type a path from currenty directory that you wish to use for component.\n'
    },
    {
        name: 'name',
        message: 'What is your component\'s name?\n'
    }
]).then(({path, name}) => {
        if (!path || !name) {
            console.log(chalk.red('Path and Name are not defined, Please try again.'));
        } else {
            return promptForWrapperTag({path, name});
        }
    });