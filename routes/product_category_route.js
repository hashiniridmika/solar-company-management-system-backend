const express = require("express");
const productCategoryRoute = express.Router();
const ProductCategory = require("../models/product_category_model");

productCategoryRoute.route("/create").post((req, res) => {
  const { adminName, emailAddress, username, password } = req.body;

  const productCategory = new ProductCategory({
    adminName,
    emailAddress,
    username,
    password,
  });

  productCategory // Save admin user details.
    .save()
    .then((productCategory) => {
      res.send({ status: "success", productCategory });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

module.exports = productCategoryRoute;
