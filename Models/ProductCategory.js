const mongoose = require("mongoose");

const ProductCategorySchema = new mongoose.Schema({
  CategoryID: {
    type: String,
  },
  CategoryName: {
    type: String,
  },
  CategoryImage: {
    type: String,
  },
  CategoryDescription: {
    type: String,
  },
});
