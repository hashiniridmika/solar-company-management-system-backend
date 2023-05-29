const express = require("express");
const orderitemWithQuantityRoute = express.Router();
const OrderitemWithQuantity = require("../models/orderitem_with_quantity_model");

orderitemWithQuantityRoute.route("/create").post((req, res) => {
  const { orderId, item, quantity, price } = req.body;

  const orderitemWithQuantity = new OrderitemWithQuantity({
    orderId,
    item,
    quantity,
  });

  orderitemWithQuantity // Save items and Quantities
    .save()
    .then((orderitemWithQuantity) => {
      res.send({ status: "sucess", orderitemWithQuantity });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

//View all order items and Quantities
orderitemWithQuantityRoute.route("/view").get((req, res) => {
  OrderitemWithQuantity.find()
    .populate("item")
    .then((orderitemWithQuantity) => {
      res.status(200).send({ status: "sucess", orderitemWithQuantity });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = orderitemWithQuantityRoute;
