const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const agentRoute = require("./routes/agent_route");

const app = express();
const PORT = 5000;

mongoose.connect(process.env.url);

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database Successfully"));

app.use(cors());
app.use(express.json());
app.use("/agent", agentRoute);

app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
