const express = require("express");
const userTypeRoute = express.Router();
const UserType = require("../models/user_type_model");

//save all users
userTypeRoute.route("/create").post((req, res) => {
  const { role } = req.body;

  const userType = new UserType({ role });
  userType
    .save()
    .then((userType) => {
      res.status(200).send({ status: "sucess", userType });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});
module.exports = userTypeRoute;
