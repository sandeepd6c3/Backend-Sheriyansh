require('dotenv').config();;
const app = require('./src/app');
const connectDB = require('./src/db/db');
const dns = require('dns');

dns.setServers(['8.8.8.8']);


    
connectDB();

app.listen(5000, (req,res)=>{
console.log("Server is running on port 3000");
})