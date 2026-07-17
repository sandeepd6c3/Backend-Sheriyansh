const express = require('express');
const connectdb = require('./src/db/db');
const appRoutes = require('./src/app');
const dotenv = require('dotenv');
const dns = require('dns');

dns.setServers(['8.8.8.8']);

dotenv.config();

const app = express();

app.use(express.json());

connectdb();

app.use(appRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

