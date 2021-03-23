const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let schemaUser = new Schema({
    name: {
        type: String,
        required: [true, 'Las notas no se escriben solas!']
    },

});

schemaUser.plugin(uniqueValidator, {
    message: '{PATH} must be unique'
});

module.exports = mongoose.model('User', schemaUser)