const chalk = require('chalk');
const lineBreak = () => console.log(chalk.green('*************************************'));

exports.componentSuccess = ({path, name}) => {
    lineBreak();
    console.log(chalk.bold.green(`Successfully created: \n${chalk.bold.blue(`${name}`)} file\nPath: ${path}`));
    lineBreak();

    return null;
};