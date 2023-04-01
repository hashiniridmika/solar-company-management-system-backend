const express = require("express");
const stockRoute = express.Router();
const Stock = require("../models/stock_model");

stockRoute.route("/create").post((req, res) => {
  const { category, item, stockCount, stockStatus } = req.body;
  const stock = new Stock({
    category,
    item,
    stockCount,
    stockStatus,
  });
  stock // Save product item details.
    .save()
    .then((stock) => {
      res.send({ status: "success", stock });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

module.exports = stockRoute;
