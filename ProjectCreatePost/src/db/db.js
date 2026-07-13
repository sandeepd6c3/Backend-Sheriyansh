const mongoose = require('mongoose')

async function dbconnect(){
    await mongoose.connect(process.env.DB_URI)

    console.log("db connected !");
    
}

module.exports = dbconnect;