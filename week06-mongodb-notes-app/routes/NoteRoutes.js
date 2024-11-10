const noteModel = require('../models/Notes.js');
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    try {
        const noteData = req.body;
        const note = new noteModel(noteData);
        
        // Save the note to MongoDB
        const newNote = await note.save();
        
        // Send back the saved note
        res.send(newNote);
    } catch (error) {
        res.status(500).send({ message: error.message});
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    try{
        const notes = await noteModel.find();
        res.send(notes);
    }catch(error){
        res.status(500).send({
            message: error.message
        });
    }
});


//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    noteModel.findByIdAndUpdate(req.params.noteId, req.body, { new: true })
        .then(note => {
            if(note){
                res.send(note); 
            }else{
                res.status(404).send({message: "Note not found"})
            }
        })
        .catch(err => {
            res.status(500).send({message: err.message})
        });
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    noteModel.findByIdAndDelete(req.params.noteId)
    .then(note => {
        if(note) {
            res.send(note); // Return the deleted note
        }else {
            res.status(404).send({message: "Note not found"})

        }
    })
    .catch(err => {
        res.status(500).send({message: err.message})
    });

});
