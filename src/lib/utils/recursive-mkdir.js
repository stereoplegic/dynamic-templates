const fs = require('fs');

module.exports = (path) => {
    const fullPathArray = path.split('/');
    try {
        fullPathArray.map((path, index) => {
                if (path === '') return;
                const currentPath = fullPathArray.slice(0, index+1).join('/');
                if (!fs.existsSync(currentPath)) {
                    return fs.mkdirSync(currentPath);
                }
            });
    } catch (err) {
        console.log(err);
    }
}