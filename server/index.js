const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv').config();

const app = express();
app.use(express.json());

const appCode = process.env.DB_CODE;
console.log(appCode)
mongoose.connect(
    "mongodb+srv://tamaroh:mNfn6IHwQSfzLDSm@mycluster.2fc3hkk.mongodb.net/?retryWrites=true&w=majority"
    );

app.use((req, res) => {
    res.send('');
})
app.listen(4000, () => {
    console.log("listen on Port 4000")
})