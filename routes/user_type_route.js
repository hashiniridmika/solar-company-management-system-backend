const express = require("express");
const userTypeRoute = express.Router();
const UserType = require("../models/user_type_model");

//View all users
userTypeRoute.route("/get-all").get((req, res) => {
  UserType.find()
    .then((userType) => {
      res.status(200).send({ status: "sucess", userType });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});
module.exports = userTypeRoute;
