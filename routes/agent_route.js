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
    companyAddress,
  } = req.body;

  const agent = new Agent({
    agentName,
    username,
    password,
    emailAddress,
    mobileNumber,
    companyAddress,
  });
  agent // Save user details.
    .save()
    .then((agent) => {
      res.send({ status: "sucess", agent });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

//View all agents
agentRoute.route("/view").get((req, res) => {
  Agent.find()
    .then((agent) => {
      res.status(200).send({ status: "sucess", agent });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

//Update agents
agentRoute.route("/update").post((req, res) => {
  const { agent } = req.body;
  console.log(doctor);
  Agent.findByIdAndUpdate(agent._id, agent)
    .then((agent) => {
      res.status(200).send({ status: "sucess", agent });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

module.exports = agentRoute;
