const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();

const app = express();
app.use(express.json());

const appCode = process.env.DB_CODE.replace("<password>", process.env.DB_PASS);

mongoose.connect(appCode);

app.use((req, res) => {
    res.send('');
})
app.listen(4000, () => {
    console.log("listen on Port 4000")
})