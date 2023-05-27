const express = require("express");
const employeeRoute = express.Router();
const Employee = require("../models/employees_model");
const jwt = require("jsonwebtoken");

employeeRoute.route("/create").post((req, res) => {
  const { name, emailAddress, username, password, role } = req.body;

  const employee = new Employee({
    name,
    emailAddress,
    username,
    password,
    role,
  });

  employee
    .save()
    .then((employee) => {
      res.send({ status: "success", employee });
    })
    .catch((e) => {
      res.send({ status: "failure" });
    });
});

// View all employees
employeeRoute.route("/view").get((req, res) => {
  Employee.find()
    .then((employees) => {
      res.status(200).send({ status: "success", employees });
    })
    .catch((e) => {
      res.status(400).send({ status: "failure" });
    });
});

// Employee sign-in
employeeRoute.route("/sign-in").post((req, res) => {
  const { emailAddress, password } = req.body;
  Employee.findOne({ emailAddress })
    .populate("role")
    .then((employee) => {
      console.log(employee);
      if (employee && employee.password === password) {
        const token = jwt.sign(
          {
            id: employee._id,
            userType: employee.role.role,
          },
          process.env.SECRETKEY
        );

        res.status(200).send({
          status: "login-success",
          token,
          employee: {
            username: employee.username,
            userType: employee.role.role,
          },
        });
      } else {
        res.status(404).send({
          status: "failure",
          message: "Email or password incorrect",
        });
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(400).send({ status: "failure", message: "Error" });
    });
});

module.exports = employeeRoute;
