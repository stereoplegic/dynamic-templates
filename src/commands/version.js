#!/usr/bin/env node

const yargs = require('yargs');
const chalk = require('chalk');

const versionHandler = () => {
        const packageJSON = require('../../package.json');

        console.log(chalk.yellowBright('component-template-cli: '), chalk.bold.yellow(packageJSON.version));
    };

yargs.command({
    command: 'version',
    describe: 'Fetches version of cli',
    handler: versionHandler
});

yargs.parse();