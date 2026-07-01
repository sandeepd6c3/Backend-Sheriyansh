
const mongoose = require('mongoose');

// Connect to the MongoDB database.

mongoose.connect('mongodb://localhost:27017/notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
