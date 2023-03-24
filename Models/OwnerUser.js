const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  Usename: {
    type: String,
  },
  Password: {
    type: String,
  },
  Email: {
    type: String,
  },
});
