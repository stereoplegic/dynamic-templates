const classComponent = require('../templates/classComponent');
const {functional} = require('../templates/functional');

module.exports = ({type, name}) => {
    switch(type) {
        case 'class':
            return classComponent({name});
        default:
            return functional({name});
    }
};