const mongoose = require("mongoose");
const FeedbackSchema = new mongoose.Schema({
  FeedbackID: {
    type: String,
  },
  Feedback: {
    type: String,
  },
  Ratings: {
    type: String,
  },
  FeedbackDateandTime: {
    type: String,
  },
});
