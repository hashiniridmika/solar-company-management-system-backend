const express = require("express");
const agentRoute = express.Router();
const Agent = require("../models/agent_user_model");

agentRoute.route("/create").post((req, res) => {
  const { agent } = req.body;
  const newAgent = new Agent({ ...agent });

  newAgent // Save user details.
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
  console.log(agent);
  Agent.findByIdAndUpdate(agent._id, agent)
    .then((agent) => {
      res.status(200).send({ status: "sucess", agent });
    })
    .catch((e) => {
      res.status(400).send({ status: "faliure" });
    });
});

//Agent Signin
agentRoute.route("/sign-in").post((req, res) => {
  const { email, password } = req.body;
  Agent.findOne({ emailAddress: email, password: password })
    .then((agent) => {
      if (agent) {
        const {
          agentName,
          username,
          emailAddress,
          mobileNumber,
          companyAddress,
          _id,
          image,
        } = agent;

        const sendUser = {
          agentName,
          username,
          emailAddress,
          mobileNumber,
          companyAddress,
          image,
          _id,
        };

        res.status(200).send({
          status: "login-sucess",
          agent: sendUser,
        });
      } else {
        res
          .status(401)
          .send({ status: "User not found", errorMsg: "User not found" });
      }
    })
    .catch((e) => {
      res.status(400).send({
        status: "Bad request",
        errorMsg: "Username or password incorrect",
      });
    });
});

module.exports = agentRoute;
