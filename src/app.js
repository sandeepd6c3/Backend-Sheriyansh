const express = require('express')

const app = express();

const notes = [];

app.use(express.json());

app.post('/notes',(req,res)=>{
    console.log(req.body);
    
    notes.push(req.body);

    res.status(201).json({
        message  : "Note created successfully !"
    })
    
})

app.get('/notes',(req,res)=>{
   

    res.status(200).json({
        message: "Note mil gya !",
        notes: notes
    })
})

app.delete('/notes/:index', (req,res)=>{

    const index = req.params.index;

    delete notes[index]

    res.status(200).json({
        message: "Note deleted successfully !"
    })

})

app.patch('/notes/:index',(req,res)=>{

    const index = req.params.index
    const name = req.body.name
    const work = req.body.work

    notes[index].name = name;
    notes[index].work = work

    res.status(200).json({
        message: "Note updated successfully ! "         
    })

})

module.exports = app;