const fs = require('fs');
const getTypeOfComponent = require('./getTypeOfComponent');
const errorHandling = require('./errorHandling');
const { componentSuccess } = require('./successMessages');


exports.createComponent = ({path, name, type}) => {
    const pathToCreate = `${path}/${name}`;

    try {
        // TODO: create recursive method to mkdir all dirs not in path
        fs.mkdirSync(pathToCreate);

        const component = getTypeOfComponent({name, type});
        const newFile = `${path}/${name}/index.js`;
        
        fs.writeFileSync(newFile, component);

        return componentSuccess({path, name, type});
    }
    catch (err) {
        return errorHandling(err);
    }
};