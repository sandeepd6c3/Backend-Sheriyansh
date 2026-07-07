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

module.exports = app;