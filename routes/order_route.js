const express = require("express");
const orderRoute = express.Router();
const Order = require("../models/order_model");
const OrderItemWithQuantity = require("../models/orderitem_with_quantity_model");

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
    .populate("orderItems")
    .then((order) => {
      res.status(200).send({ status: "sucess", order });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

//View all orders by aigent id
orderRoute.route("/get-all-by-user-id").get(async (req, res) => {
  const { userId: aigentid } = req.query;
  const { status: searchString } = req.query;
  Order.find({ orderBy: aigentid })
    .populate("handleBy")
    .then(async (order) => {
      const modifyResponse = await Promise.all(
        order.map(async (orderInfomation) => {
          const items = await OrderItemWithQuantity.find({
            orderId: orderInfomation._id,
          }).populate("item");

          // const review = await Feedback.findOne({ orderId: orderInfomation._id });

          return {
            order: orderInfomation,
            items,
            // review,
          };
        })
      );

      res.status(200).send({ status: "sucess", orders: modifyResponse });
    })
    .catch((e) => {
      console.log(e);
      res.status(400).send({ status: "faliure" });
    });
});

orderRoute.route("/create-order-with-item").post((req, res) => {
  const { orderRequestData } = req.body;
  const {
    orderedDateandTime,
    discount,
    paymentType,
    billValue,
    orderBy,
    itemList,
  } = JSON.parse(orderRequestData);

  let newOrder = new Order({
    orderStatus: "Pending",
    paymentType,
    billValue,
    discount,
    orderBy,
    orderedDateandTime,
  });

  newOrder
    .save()
    .then((order) => {
      itemList.forEach(async (cartItem) => {
        const orderItem = new OrderItemWithQuantity({ orderId: order._id });
        const { item, qty } = cartItem;
        const { id } = item;
        orderItem.item = id;
        orderItem.quantity = qty;
        await orderItem.save();
      });
      res.status(200).send({ status: "sucess", newOrder });
    })
    .catch((e) => {
      console.log(e);
    });
});

module.exports = orderRoute;
