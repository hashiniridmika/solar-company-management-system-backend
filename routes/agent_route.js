const express = require("express");
const agentRoute = express.Router();
const Agent = require("../models/agent_user_model");

agentRoute.route("/create").post((req, res) => {
  const {
    agentName,
    username,
    password,
    emailAddress,
    mobileNumber,
    companyName,
    companyAddress,
  } = req.body;

  const agent = new Agent({
    agentName,
    username,
    password,
    emailAddress,
    mobileNumber,
    companyName,
    companyAddress,
  });
  agent // Save user details.
    .save()
    .then((agent) => {
      res.send({ status: "success", agent });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

module.exports = agentRoute;
