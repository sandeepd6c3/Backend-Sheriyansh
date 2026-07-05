const mongoose = require("mongoose")
const chalk = require('chalk')


async function dbConnect(){
    try {
        await mongoose.connect("mongodb+srv://Sandeep:j5E99xFXqZwApUFa@backendbysheriyansh.sadqfb9.mongodb.net/")
        console.log(chalk.green("Database connected successfully ✅"));
    } catch (error) {
        console.log(chalk.red("Database connection failed:", error.message));
        process.exit(1);
    }
}

module.exports = dbConnect;

 