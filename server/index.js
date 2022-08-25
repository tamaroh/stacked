const express = require('express');
const mongo = require('mongoose');
const app = express();

app.use((req, res) => {
    res.send('');
})
app.listen(4000, () => {
    console.log("listen on Port 4000")
})