#!/usr/bin/env node
const yargs = require('yargs');
const chalk = require('chalk');
const {createComponent} = require('./lib/utils/createComponent');
const {getCurrentPath} = require('./lib/utils/getCurrentPath');

yargs.command({
    command: 'create',
    describe: 'Create a react component',
    builder: {
        path: {
            describe: 'path from current directory to component',
            type: 'string'
        },
        name: {
            describe: 'name of the react component',
            demandOption: true,
            type: 'string'
        },
        type: {
            describe: 'type of component, "function/class"',
            type: 'string'
        },

    },
    handler: ({path, name, type = 'functional'}) => {
        createComponent({path: `${getCurrentPath()}/${path}`, name, type});
    }
});

yargs.parse();