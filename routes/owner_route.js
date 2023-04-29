const express = require("express");
const ownerRoute = express.Router();
const Owner = require("../models/owner_user_model");

ownerRoute.route("/create").post((req, res) => {
  const { name, username, password, emailAddress } = req.body;

  const owner = new Owner({ name, username, password, emailAddress });

  owner // Save owner details.
    .save()
    .then((owner) => {
      res.send({ status: "sucess", owner });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});
//View all owner
ownerRoute.route("/view").get((req, res) => {
  Owner.find()
    .then((owner) => {
      res.status(200).send({ status: "sucess", owner });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = ownerRoute;
