const express = require("express");
const adminRoute = express.Router();
const Admin = require("../models/admin_user_model");

adminRoute.route("/create").post((req, res) => {
  const { adminName, emailAddress, username, password } = req.body;

  const admin = new Admin({ adminName, emailAddress, username, password });

  admin // Save admin user details.
    .save()
    .then((admin) => {
      res.send({ status: "sucess", admin });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

//View all agents
adminRoute.route("/view").get((req, res) => {
  Admin.find()
    .then((admin) => {
      res.status(200).send({ status: "sucess", admin });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = adminRoute;
