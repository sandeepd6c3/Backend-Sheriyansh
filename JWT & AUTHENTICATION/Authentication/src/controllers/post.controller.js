const express = require("express");
const jsonwebtoken = require("jsonwebtoken");

const router = express.Router();

const postController = require("./post.controller");

router.post("/create", (req,res)=>{

   const token = req.cookies.token;


   if(!token){
    return res.status(401).json({
        message:"Unauthorized"
    })
   }

   jsonwebtoken.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
    if(err){
        return res.status(401).json({
            message:"token is invalid"
        })
    }

    res.send("Post created successfully")
   });
});

module.exports = router;
 