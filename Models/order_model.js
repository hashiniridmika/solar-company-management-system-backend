const mongoose = require("mongoose");
const Agent = require("./ajent_user_model");
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
      type: Schema.types.objectID,
      ref: "Agent",
    },
    handleBy: {
      type: Schema.types.objectID,
      ref: "Admin",
    },
  },
  { collation: "orders" }
);

module.exports = model("Order", orderSchema);
