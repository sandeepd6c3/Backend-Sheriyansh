const express = require('express');
const multer = require('multer');
 const uploadFile = require('./services/storage.services')
const postmodel = require('./models/Post.model')

const app = express(); 

const upload = multer({storage : multer.memoryStorage()})

app.post('/create-post',upload.single("image"), async (req,res)=>{
    console.log(req.body); 
    console.log(req.file);   

const result  = await uploadFile(req.file.buffer);

 const post = await postmodel.create({
    image: result.url,
    caption: req.body.caption
 })

 res.status(201).json({
    message: "post created successfully !",
    post
 })
})


module.exports = app;