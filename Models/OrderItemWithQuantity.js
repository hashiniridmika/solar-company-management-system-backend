const mongoose = require("mongoose");
const OrderItemWithQuantitySchema = new mongoose.Schema({
  ID: {
    type: String,
  },
  Quantity: {
    type: Number,
  },
});
