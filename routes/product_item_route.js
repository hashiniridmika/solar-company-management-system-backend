const express = require("express");
const productItemRoute = express.Router();
const ProductItem = require("../models/product_item_model");

productItemRoute.route("/create").post((req, res) => {
  const {
    productName,
    productDescription,
    price,
    productImage,
    productStockCount,
    category,
  } = req.body;

  const productitem = new ProductItem({
    productName,
    productDescription,
    price,
    productImage,
    productStockCount,
    category,
  });

  productitem // Save product item details.
    .save()
    .then((productitem) => {
      res.send({ status: "sucess", productitem });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

//View all product items
productItemRoute.route("/view").get((req, res) => {
  ProductItem.find()
    .populate("productStockCount")
    .populate("category")
    .then((productItem) => {
      res.status(200).send({ status: "sucess", productItem });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = productItemRoute;
