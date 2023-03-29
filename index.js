const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = 5000;

mongoose.connect(process.env.url);

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database Successfully"));

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
