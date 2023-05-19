const express = require("express");
const feedbackRoute = express.Router();
const Feedback = require("../models/feedback_model");

feedbackRoute.route("/create").post((req, res) => {
  console.log(req.body);
  const { review } = req.body;
  const {
    agentId,
    orderId,
    feedbackDescription,
    ratings,
    feedbackDateandTime,
    productId,
  } = review;

  const feedback = new Feedback({
    agentId,
    orderId,
    feedbackDescription,
    ratings,
    feedbackDateandTime,
    productId,
  });

  feedback // Save feedback details.
    .save()
    .then((feedback) => {
      res.send({ status: "sucess", feedback });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

//View all feedbacks
feedbackRoute.route("/view").get((req, res) => {
  Feedback.find()
    .then((feedback) => {
      res.status(200).send({ status: "sucess", feedback });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

//Get reviews for products
feedbackRoute.route("/get-feedbacks-by-product-id").post((req, res) => {
  const { productId } = req.body;
  console.log(productId);
  Feedback.find({ productId })
    .populate("agentId")
    .then((feedback) => {
      let totlRating = 0;

      feedback.forEach((fb) => {
        totlRating = totlRating + parseInt(fb.ratings);
      });

      res.status(200).send({
        status: "Success",
        feedback,
        averageRating: Math.round(totlRating / feedback.length),
      });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

// get feedback for order user and product
feedbackRoute.route("/get-by-order-user-product-id").post((req, res) => {
  const { productId, userId, orderId } = req.body;
  Feedback.find({ agentId: userId, orderId, productId })
    .populate("agentId")
    .then((feedback) => {
      res.status(200).send({
        status: "Success",
        feedback,
      });
    })

    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = feedbackRoute;
