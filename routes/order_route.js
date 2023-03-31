const express = require("express");
const orderRoute = express.Router();
const Order = require("../models/order_model");

orderRoute.route("/create").post((req, res) => {
  const {
    orderedDateandTime,
    orderStatus,
    discount,
    billValue,
    orderBy,
    handleBy,
  } = req.body;

  const order = new Order({
    orderedDateandTime,
    orderStatus,
    discount,
    billValue,
    orderBy,
    handleBy,
  });

  order // Save order details.
    .save()
    .then((order) => {
      res.send({ status: "success", order });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

module.exports = orderRoute;
