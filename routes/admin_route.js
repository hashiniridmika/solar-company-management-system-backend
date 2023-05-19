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

//admin sign-in
adminRoute.route("/sign-in").post((req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  Employee.findOne({ username: username })
    .populate("userType")
    .then((admin) => {
      if (admin) {
        console.log(admin);
        if (admin.password === password) {
          console.log(admin.userType.userType);
          const token = jwt.sign(
            {
              id: admin._id,
              userType: admin.userType.userType,
            },
            process.env.SECRETKEY
          );
          res.status(200).send({
            status: "login-sucess",
            token,
            employee: {
              userName: admin.userName,
              userType: admin.userType.userType,
            },
          });
        } else {
          res.status(404).send({
            status: "fail",
            message: "Username or Password incorrect",
          });
        }
      } else {
        res.status(403).send({ status: "fail", message: "User not found" });
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(400).send({ status: "fail", message: "Error " });
    });
});

module.exports = adminRoute;
