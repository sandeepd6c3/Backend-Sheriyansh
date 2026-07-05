const chalk = require('chalk')
const app = require('./src/app')
const dbConnect = require('./src/db/db.js')
const dns = require('dns');

dns.setServers(["1.1.1.1", "8.8.8.8"]);



dbConnect();

app.listen(3000, (req,res)=>{
    console.log(chalk.blue("Server is running on port 3000"));
    
})