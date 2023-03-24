const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  AgentName: {
    type: String,
  },
  AgentID: {
    type: String,
  },
  Username: {
    type: String,
  },
  Password: {
    type: String,
  },
  EmailAddress: {
    type: String,
  },
  MobileNumber: {
    type: String,
  },
  CompanyName: {
    type: String,
  },
  CompanyAddress: {
    type: String,
  },
});
