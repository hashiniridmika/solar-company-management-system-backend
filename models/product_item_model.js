const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const ProductCategory = require("./product_category_model");

const productItemSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    productImage: {
      type: String,
    },
    productStockCount: {
      type: Schema.Types.ObjectId,
      ref: "Stock",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "ProductCategory",
    },
  },
  { collection: "productItems" }
);

module.exports = model("ProductItem", productItemSchema);
