const express = require("express");
const feedbackRoute = express.Router();
const Feedback = require("../models/feedback_model");

feedbackRoute.route("/create").post((req, res) => {
  const {
    agentID,
    orderID,
    feedbackDescription,
    ratings,
    feedbackDateandTime,
  } = req.body;

  const feedback = new Feedback({
    agentID,
    orderID,
    feedbackDescription,
    ratings,
    feedbackDateandTime,
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
  const { product } = req.body;
  console.log(product);
  Feedback.find({ product })
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
