const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv").config();
const item = import("./Items.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.DB_PORT || 9000;
const appCode = process.env.DB_CODE.replace(
  "<password>",
  process.env.DB_PASS
).replace("/?", `/${process.env.DB_NAME}?`);
mongoose.connect(appCode);
const itemSchema = mongoose.Schema({ name: String });
const Item = mongoose.model("Item", itemSchema);

app.get("/", async (req, res) => {
  const Items = await Item.find();
  res.json(Items);
});
app.listen(port, () => {
  console.log(`listen on Port ${port}`);
});
