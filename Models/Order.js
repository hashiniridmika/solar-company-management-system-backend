const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  OrderID: {
    type: String,
  },
  OrderedDateandTime: {
    type: String,
  },
  OrderStatus: {
    type: String,
  },
});
