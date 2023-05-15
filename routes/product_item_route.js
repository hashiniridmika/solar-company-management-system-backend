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
    .then((productitem) => {
      res.status(200).send({ status: "sucess", productitem });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});
//Update productItem
productItemRoute.route("/update").post((req, res) => {
  const { productitem } = req.body;
  console.log(productitem);
  ProductItem.findByIdAndUpdate(productitem._id, productitem)
    .then((productitem) => {
      res.status(200).send({ status: "sucess", productitem });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

//View all food accoding to catergory ID
productItemRoute.route("/get-product-by-catergory-id").post((req, res) => {
  const { productitem } = req.body;
  ProductItem.find({ productitem })
    .populate("category")
    .then((productitem) => {
      // const procuctIds = products.map((product) => product._id); get products id's only
      res.status(200).send({
        status: "Success",
        productitem,
      });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = productItemRoute;
