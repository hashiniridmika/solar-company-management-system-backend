const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    emailAddress: {
      type: String,
    },
  },
  { collection: "owners" }
);

module.exports = model("Owner", ownerSchema);
