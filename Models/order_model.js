const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const Agent = require("./agent_user_model");
const Admin = require("./admin_user_model");

const orderSchema = new mongoose.Schema(
  {
    orderedDateandTime: {
      type: String,
    },
    orderStatus: {
      type: String,
    },
    discount: {
      type: String,
    },
    billValue: {
      type: String,
    },
    orderBy: {
      type: Schema.Types.ObjectId,
      ref: "Agent",
    },
    handleBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { collection: "orders" }
);

module.exports = model("Order", orderSchema);
