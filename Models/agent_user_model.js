const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const agentSchema = new mongoose.Schema(
  {
    agentName: {
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
    mobileNumber: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyAddress: {
      type: String,
    },
  },
  { collation: "agents" }
);

module.exports = model("Agent", agentSchema);
