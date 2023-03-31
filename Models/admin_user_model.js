const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    adminName: {
      type: String,
    },
    emailAddress: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { collation: "admins" }
);

module.exports = model("Admin", adminSchema);
