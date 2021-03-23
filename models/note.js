const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let schemaNote = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Las notas no se crean solas!']
    },
    title: {
        type: String,
        required: [true, 'Una nota sin titulo no es una nota!']
    },
    content: {
        type: String,
        required: [true, 'Las notas necesitan palabras!']
    },
    date: {
        type: Date,
        required: [true, 'Las notas necesitan fechas!']
    }
});

module.exports = mongoose.model('Note', schemaNote);