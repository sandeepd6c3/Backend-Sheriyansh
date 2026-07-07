const express = require('express')
const notemodel = require('./models/note.model')

const app = express();

// Middleware to parse incoming JSON data from requests
app.use(express.json());

// ==============================
// CREATE A NEW NOTE
// ==============================

// POST request -> Database me nayi note add karega
app.post("/notes", async (req, res) => {

    // req.body me client (Postman/Frontend) se bheja hua data hota hai
    // Example:
    // {
    //   "title": "Study",
    //   "description": "Complete Node.js"
    // }
    const data = req.body;

    // notemodel.create() MongoDB me ek naya document create karta hai
    // await ka use isliye kiya hai kyunki database operation time leta hai
    await notemodel.create({

        // Database ke title field me req.body.title save hoga
        title: data.title,

        // Database ke description field me req.body.description save hoga
        description: data.description
    })

    // Agar note successfully create ho gayi,
    // to client ko 201 (Created) status bhejte hain
    res.status(201).json({
        message: "Note created"
    })
})



// ==============================
// GET ALL NOTES
// ==============================

// GET request -> Database ki saari notes fetch karega
app.get("/notes", async (req, res) => {

    // find() bina kisi condition ke collection ki
    // saari documents return karta hai
    const notes = await notemodel.find()

    // Client ko success status aur notes bhej rahe hain
    res.status(200).json({

        // Success message
        message: "Note fetched successfully!",

        // Database se aayi hui saari notes
        notes: notes

        // Shortcut me aise bhi likh sakte ho:
        // notes
    })
})



// ==============================
// DELETE A NOTE
// ==============================

// URL Example:
// DELETE /notes/6873a9f...

app.delete("/notes/:id", async (req, res) => {

    // req.params se URL ka dynamic value milta hai
    // Example:
    // /notes/12345
    // id = "12345"
    const id = req.params.id

    // _id match hone wali note delete ho jayegi
    await notemodel.findOneAndDelete({
        _id: id
    })

    // Success response
    res.status(200).json({
        message: "Deleted successfully"
    })
})



// ==============================
// UPDATE A NOTE
// ==============================

// PATCH request sirf required fields update karta hai
// URL Example:
// PATCH /notes/6873a9f...

app.patch("/notes/:id", async (req, res) => {

    // URL se note ki ID lena
    const id = req.params.id

    // Body se naye values lena
    const title = req.body.title
    const description = req.body.description

    // findOneAndUpdate()
    // 1st object -> Kis document ko update karna hai
    // 2nd object -> Kya update karna hai

    await notemodel.findOneAndUpdate(

        // Condition
        { _id: id },

        // New values
        {
            title: title,
            description: description
        }

        // Agar updated document chahiye ho to:
        // { new: true }
    )

    // Success response
    res.status(200).json({
        message: "Note updated successfully!"
    })
})


module.exports = app;