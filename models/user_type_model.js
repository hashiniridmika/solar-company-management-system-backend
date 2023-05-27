const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const userTypeSchema = new Schema(
  {
    role: {
      type: String,
    },
  },
  { collection: "userTypes" }
);

module.exports = model("UserType", userTypeSchema);
