const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const UserType = require("./user_type_model");

const employeeSchema = new mongoose.Schema(
  {
    name: {
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
    role: {
      type: Schema.Types.ObjectId,
      ref: "UserType",
    },
  },
  { collection: "employees" }
);

module.exports = model("Employee", employeeSchema);
