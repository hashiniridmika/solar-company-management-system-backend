const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const ProductCategory = require("./product_category_model");
const ProductItem = require("./product_item_model");

const stockSchema = new mongoose.Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "ProductCategory",
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: "ProductItem",
    },
    stockCount: {
      type: Number,
    },
    stockStatus: {
      type: String,
    },
  },
  { collection: "stocks" }
);

module.exports = model("Stock", stockSchema);
