const inquirer = require('inquirer');
const chalk = require('chalk');
const {createComponent} = require('../createComponent');
const {getCurrentPath} = require('../getCurrentPath');

module.exports = ({path, name}) => inquirer.prompt([
    {
        name: 'wrapper',
        message: 'What html tag should the wrapper tag be?\n'
    }
]).then(({wrapper}) => {
    createComponent({path: `${getCurrentPath()}/${path}`, name, type: 'functional', wrapper});
});