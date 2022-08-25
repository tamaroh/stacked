const mongoose = rquire('mongoose');
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("Mongodb is connected....");
    } catch (err) {
        console.error(rr.message);
        process.exit(1);
    }
};

module.exports  = connectDB;