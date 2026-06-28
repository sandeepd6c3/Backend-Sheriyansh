// Create Express server
const express = require('express');

// Store notes in memory for demo purposes
const notes = [];

// Initialize the app
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Route to create a new note
app.post('/notes', (req, res) => {
    // Save the incoming note data
    notes.push(req.body);

    // Send success response back to the client
    res.status(201).json({
        message: "Note created successfully"
    });
});

// Route to get all notes
app.get('/notes', (req, res) => {
    // Return all saved notes
    res.status(200).json({
        message: "Note fetch successfully!",
        notes: notes
    });
});


app.delete('/notes/:index',(req, res)=>{

    const index = req.params.index;

    delete notes[index];

    res.status(200).json({
        message: "Deleted successfully"
        
    })

})

module.exports = app;