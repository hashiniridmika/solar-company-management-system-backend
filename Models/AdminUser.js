const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  AdminName: {
    type: String,
  },
  AdminID: {
    type: String,
  },
  EmailAddress: {
    type: String,
  },
  Username: {
    type: String,
  },
  Password: {
    type: String,
  },
});
