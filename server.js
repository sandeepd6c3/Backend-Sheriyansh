const { log } = require('console');
const express = require('express')

const app = express();



app.get("/" ,(req,res)=>{
    res.send("Server start ho gya ! hui hui ")
})
app.get("/about" ,(req,res)=>{
    res.send("Ye hai about page ! ")
})


app.listen(3000,()=>{
console.log("Server running !");

})