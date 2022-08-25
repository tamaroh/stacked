const mongoose = require('mongoose');
const item = mongoose.model("item", {name: String});

module.exports = item;