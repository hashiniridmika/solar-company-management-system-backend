const express = require("express");
const productItemRoute = express.Router();
const ProductItem = require("../models/product_item_model");

productItemRoute.route("/create").post((req, res) => {
  const {
    productName,
    productDescription,
    productImage,
    productStockCount,
    category,
  } = req.body;

  const productItem = new ProductItem({
    productName,
    productDescription,
    productImage,
    productStockCount,
    category,
  });

  productItem // Save product item details.
    .save()
    .then((productItem) => {
      res.send({ status: "success", productItem });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

module.exports = productItemRoute;
