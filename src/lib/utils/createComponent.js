const fs = require('fs');
const getTypeOfComponent = require('./getTypeOfComponent');
const errorHandling = require('./errorHandling');
const { componentSuccess } = require('./successMessages');


exports.createComponent = ({path, name, type}) => {
    const component = getTypeOfComponent({name, type});
    const newFile = `${path}/${name}/index.js`;
    const pathToCreate = `${path}/${name}`;
    try {
        fs.mkdirSync(pathToCreate);

        fs.writeFileSync(newFile, component);
        
        return componentSuccess({path, name, type});
    }
    catch (err) {
        return errorHandling(err);
    }
};