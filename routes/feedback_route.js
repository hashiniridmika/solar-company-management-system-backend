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
      res.send({ status: "success", feedback });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

module.exports = feedbackRoute;
