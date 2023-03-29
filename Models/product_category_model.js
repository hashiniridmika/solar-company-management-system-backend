const { Schema, model } = require("mongoose");

const productCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
    },
    categoryImage: {
      type: String,
    },
    categoryDescription: {
      type: String,
    },
  },
  { collection: "productCategories" }
);

module.exports = model("ProductCategory", productCategorySchema);
