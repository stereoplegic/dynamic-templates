const chalk = require('chalk');

exports.componentSuccess = ({path, name, type}) => {
    console.log('\n');
    
    console.log(chalk.bold.green(`Successfully created ${chalk.bold.blue(`${name} ${type} component`)} file at ${path}`));
    
    console.log('\n');

    return null;
}