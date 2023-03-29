const mongoose = require("mongoose");
const ProductCategory = require("./product_category_model");
const ProductItem = require("./product_item_model");

const stockSchema = new mongoose.Schema(
  {
    category: {
      type: Schema.types.objectID,
      ref: "ProductCategory",
    },
    item: {
      type: Schema.types.objectID,
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
