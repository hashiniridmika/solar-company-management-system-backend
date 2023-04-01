const express = require("express");
const orderitemWithQuantityRoute = express.Router();
const OrderitemWithQuantity = require("../models/orderitem_with_quantity_model");

orderitemWithQuantityRoute.route("/create").post((req, res) => {
  const { orderId, item, quantity, price } = req.body;

  const orderorderitemWithQuantity = new OrderitemWithQuantity({
    orderId,
    item,
    quantity,
    price,
  });

  orderitemWithQuantity // Save order details.
    .save()
    .then((orderitemWithQuantity) => {
      res.send({ status: "success", orderitemWithQuantity });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

module.exports = orderitemWithQuantityRoute;
