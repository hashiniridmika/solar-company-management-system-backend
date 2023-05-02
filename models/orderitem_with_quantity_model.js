const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const Order = require("./order_model");
const ProductItem = require("./product_item_model");

const orderItemWithQuantitySchema = new mongoose.Schema(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: "ProductItem",
    },
    quantity: {
      type: Number,
    },
  },
  { collection: "orderItemWithQuantities" }
);

module.exports = model("OrderItemsWithQuantity", orderItemWithQuantitySchema);
