const express = require("express");
const productCategoryRoute = express.Router();
const ProductCategory = require("../models/product_category_model");

productCategoryRoute.route("/create").post((req, res) => {
  const { categoryName, categoryImage, categoryDescription } = req.body;

  const productCategory = new ProductCategory({
    categoryName,
    categoryImage,
    categoryDescription,
  });

  productCategory // Save product category details.
    .save()
    .then((productCategory) => {
      res.send({ status: "sucess", productCategory });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

//View all product category
productCategoryRoute.route("/view").get((req, res) => {
  ProductCategory.find()
    .then((productCategory) => {
      res.status(200).send({ status: "sucess", productCategory });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});
module.exports = productCategoryRoute;
