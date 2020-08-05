const fs = require('fs');
const getTypeOfComponent = require('./getTypeOfComponent');
const errorHandling = require('./errorHandling');
const { componentSuccess } = require('./successMessages');
const recursiveMkdir = require('./recursive-mkdir');


exports.createComponent = ({path, name, type, wrapper}) => {
    const pathToCreate = `${path}/${name}`;

    try {
        recursiveMkdir(pathToCreate);

        const component = getTypeOfComponent({name, type, wrapper});
        const newFile = `${path}/${name}/index.js`;

        fs.writeFileSync(newFile, component);

        return componentSuccess({path, name, type});
    }
    catch (err) {
        return errorHandling(err);
    }
};