// Server ko create krna 
const express = require('express')

const notes = [];

const app = express();
app.use(express.json());

app.post('/notes', (req, res) => {
    notes.push(req.body)
    
    res.status(201).json({
        message: "Note created successfully "
        
    })
})

app.get('/notes', (req, res)=>{
    res.status(200).json({
        message: "Note fetch successfully !",
        notes: notes
    })
})
module.exports = app;