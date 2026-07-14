const mongoose = require('mongoose')

 

async function connectdb(){
    await mongoose.connect(process.env.DB_URI)


    console.log("Connected to db !");
    
}






module.exports = connectdb















// const mongoose = require('mongoose')

// async function dbconnect(){
//     await mongoose.connect(process.env.DB_URI)

//     console.log("db connected !");
    
// }

// module.exports = dbconnect;