const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const Agent = require("./agent_user_model");
const Order = require("./order_model");
const ProductItem = require("./product_item_model");

const feedbackSchema = new mongoose.Schema(
  {
    agentId: {
      type: Schema.Types.ObjectId,
      ref: "Agent",
    },
    orderId: {
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
    sentiment: {
      type: String,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "ProductItem",
    },
  },
  { collection: "feedbacks" }
);

module.exports = model("Feedback", feedbackSchema);
