const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  agentName: {
    type: String,
  },
  agentID: {
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
});
