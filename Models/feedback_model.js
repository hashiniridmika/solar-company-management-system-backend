const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const Agent = require("./agent_user_model");
const Order = require("./order_model");

const feedbackSchema = new mongoose.Schema(
  {
    agentID: {
      type: Schema.Types.ObjectId,
      ref: "Agent",
    },
    orderID: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    feedbackDescription: {
      type: String,
    },
    ratings: {
      type: String,
    },
    feedbackDateandTime: {
      type: String,
    },
  },
  { collection: "feedbacks" }
);

module.exports = model("Feedback", feedbackSchema);
