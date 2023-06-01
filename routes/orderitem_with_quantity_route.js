const express = require("express");
const orderitemWithQuantityRoute = express.Router();
const OrderitemWithQuantity = require("../models/orderitem_with_quantity_model");

orderitemWithQuantityRoute.route("/create").post((req, res) => {
  const { orderId, item, quantity } = req.body;

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
orderitemWithQuantityRoute.route("/get-all-by-order-id").post((req, res) => {
  const { order_id } = req.body;
  OrderitemWithQuantity.find({ orderId: order_id })
    .populate("item")
    .then((orderitemWithQuantity) => {
      res.status(200).send({ status: "sucess", orderitemWithQuantity });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = orderitemWithQuantityRoute;
