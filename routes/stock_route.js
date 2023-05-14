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
      res.send({ status: "sucess", stock });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});
//View all stock details
stockRoute.route("/view").get((req, res) => {
  Stock.find()
    .populate("category")
    .populate("item")
    .then((stock) => {
      res.status(200).send({ status: "sucess", stock });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

//Update stock
stockRoute.route("/update").post((req, res) => {
  const { stock } = req.body;
  console.log(stock);
  Stock.findByIdAndUpdate(stock._id, stock)
    .then((stock) => {
      res.status(200).send({ status: "sucess", stock });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = stockRoute;
