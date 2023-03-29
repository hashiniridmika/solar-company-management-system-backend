const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    usename: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { collection: "owners" }
);

module.exports = model("Owner", orderItemWithQuantitySchema);
