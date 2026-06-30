// server.js
// Entry point for the notes API server.
const app = require('./src/app');

// Application port.
const PORT = 3000;

// Start the server.
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});