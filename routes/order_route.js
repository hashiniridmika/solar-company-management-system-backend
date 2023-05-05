const express = require("express");
const orderRoute = express.Router();
const Order = require("../models/order_model");

orderRoute.route("/create").post((req, res) => {
  const {
    orderedDateandTime,
    orderStatus,
    discount,
    paymentType,
    billValue,
    orderBy,
    handleBy,
  } = req.body;

  const order = new Order({
    orderedDateandTime,
    orderStatus,
    discount,
    paymentType,
    billValue,
    orderBy,
    handleBy,
  });

  order // Save orders
    .save()
    .then((order) => {
      res.send({ status: "sucess", order });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

//View all orders
orderRoute.route("/view").get((req, res) => {
  Order.find()
    .populate("orderBy")
    .populate("handleBy")
    .then((order) => {
      res.status(200).send({ status: "sucess", order });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = orderRoute;
