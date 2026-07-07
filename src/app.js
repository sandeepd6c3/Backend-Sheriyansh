const express = require('express')
const notemodel = require('./models/note.model')

const app = express();

const notes = [];

app.use(express.json());

app.post("/notes", async (req, res) => {
    const data = req.body;

    await notemodel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created "
    })
})

app.get("/notes", async (req, res) => {

    const notes = await notemodel.find()

    res.status(200).json({
        message: "Note fetch successfully !",
        notes: notes
    })


})

app.delete("/notes/:id", async (req,res)=>{

    const id = req.params.id

    await notemodel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message: "Deleted successfully"
    })

})

app.patch("/notes/:id", async (req,res)=>{

const id = req.params.id
const title = req.body.title
const description = req.body.description

await notemodel.findOneAndUpdate({_id : id}, {title: title},{description: description})

res.status(200).json({
    message: "Note updated successflly !"
})

})


module.exports = app;