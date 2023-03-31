const express = require("express");
const ownerRoute = express.Router();
const Owner = require("../models/owner_user_model");

ownerRoute.route("/create").post((req, res) => {
  const { name, username, password, emailAddress } = req.body;

  const owner = new Owner({ name, username, password, emailAddress });

  owner // Save owner details.
    .save()
    .then((owner) => {
      res.send({ status: "success", owner });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

module.exports = ownerRoute;
