// Import the Express app from the src folder
const app = require("./src/app");



// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server Start at port 3000");
});