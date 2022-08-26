const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const item = import("./Items.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.DB_PORT || 9000;
const localDB = `mongodb://127.0.0.1/${process.env.DB_NAME}`;
const appCode =
  process.env.MONGODB_URI || 
  localDB;
//   process.env.DB_CODE.replace("<password>", process.env.DB_PASS).replace(
//     "/?",
//     `/${process.env.DB_NAME}?`
//   );
mongoose.connect(appCode);
const itemSchema = mongoose.Schema({ name: String });
const Item = mongoose.model("Item", itemSchema);

app.get("/", async (req, res) => {
  const Items = await Item.find();
  res.json(Items);
});
app.post("/item", async(req, res) => {
    const newItem = new Item({name: req.body.name});
    await newItem.save()
    .catch(err => console.log(err));
    res.json(newItem);
})
app.listen(port, () => {
  console.log(`listen on Port ${port}`);
});

module.exports = app;