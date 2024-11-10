const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
    
    noteTitle: {
        type: String,
    },
    noteDescription: {
        type: String,
    },
    priority: {
        type: String,
        enum: ['HIGH', 'MEDIUM', 'LOW'], 
    },
    dateAdded: {
        type: Date,
    },
    dateUpdated: {
        type: Date,
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;