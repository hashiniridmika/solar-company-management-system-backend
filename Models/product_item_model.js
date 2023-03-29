const mongoose = require("mongoose");
const ProductCategory = require("./product_category_model");

const productItemSchema = new mongoose.Schema(
  {
    productName: {
      type: Number,
    },
    productDescription: {
      type: String,
    },
    productImage: {
      type: String,
    },
    productStockCount: {
      type: Number,
    },
    category: {
      type: Schema.types.objectID,
      ref: "ProductCategory",
    },
  },
  { collection: "productItems" }
);

module.exports = model("ProductItem", productItemSchema);
