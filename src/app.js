// app.js
// Express application for managing a simple in-memory notes list.
const express = require('express');

// In-memory storage for notes (demo only).
const notes = [];

// Create the Express app.
const app = express();

// Middleware: parse JSON request bodies.
app.use(express.json());

// ---------------------------------------------------------
// Route handlers
// ---------------------------------------------------------

// Create a new note.
app.post('/notes', (req, res) => {
    const note = req.body;

    notes.push(note);

    res.status(201).json({
        message: 'Note created successfully',
        note,
    });
});

// Get all notes.
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: 'Notes fetched successfully',
        notes,
    });
});

// Delete a note by index.
app.delete('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);

    if (Number.isNaN(index) || index < 0 || index >= notes.length) {
        return res.status(400).json({
            message: 'Invalid note index',
        });
    }

    notes.splice(index, 1);

    res.status(200).json({
        message: 'Note deleted successfully',
    });
});

// Update a note by index.
app.patch('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index, 10);
    const { title, description } = req.body;

    if (Number.isNaN(index) || index < 0 || index >= notes.length) {
        return res.status(400).json({
            message: 'Invalid note index',
        });
    }

    const note = notes[index];

    if (title !== undefined) {
        note.title = title;
    }

    if (description !== undefined) {
        note.description = description;
    }

    res.status(200).json({
        message: 'Note updated successfully',
        note,
    });
});

// Export the configured Express app.
module.exports = app;