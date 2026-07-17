const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.services')
const postmodel = require('./models/Post.model')
const cors = require('cors')
const app = express();


app.use(cors())

const upload = multer({storage: multer.memoryStorage()})

app.post('/create-post', upload.single("image"), async (req,res)=>{
    console.log(req.file);


    const result = await uploadFile(req.file.buffer)

  const post = await postmodel.create({
    image: result.url,
    caption: req.body.caption
  })
    

  return  res.status(201).json({
        message: "Post create successfully !",
        post
    })
    
})

app.get("/posts",async(req,res)=>{

const posts = await postmodel.find()

res.status(200).json({
    message: "Post fatch successfully !",
    posts
})

})


module.exports = app


 


