const mongoose = require("mongoose");
const ProductItemSchema = new mongoose.Schema({
  ProductID: {
    type: String,
  },
  ProductName: {
    type: String,
  },
  ProductDescription: {
    type: String,
  },
  ProductPrice: {
    type: Number,
  },
  ProductImage: {
    type: String,
  },
  ProductStockCount: {
    type: Number,
  },
  CategoryID: {
    type: String,
  },
});
