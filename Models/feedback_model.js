const { Schema, model } = require("mongoose");
const Agent = require("./agent_user_model");
const Order = require("./order_model");

const feedbackSchema = new mongoose.Schema(
  {
    agentID: {
      type: Schema.types.objectID,
      ref: "Agent",
    },
    OrderID: {
      type: Schema.types.objectID,
      ref: "Order",
    },
    feedback: {
      type: String,
    },
    ratings: {
      type: String,
    },
    feedbackDateandTime: {
      type: String,
    },
  },
  { collation: "feedbacks" }
);

module.exports = model("Feedback", feedbackSchema);
