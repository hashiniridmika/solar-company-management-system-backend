const { Schema, model } = require("mongoose");
const Order = require("./order_model");
const ProductItem = require("./product_item_model");

const orderItemWithQuantitySchema = new mongoose.Schema(
  {
    orderId: {
      type: Schema.types.objectID,
      ref: "Order",
    },
    item: {
      type: Schema.types.objectID,
      ref: "ProductItem",
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  { collation: "orderItemWithQuantities" }
);

module.exports = model("OrderItemsWithQuantity", orderItemWithQuantitySchema);
