const userController = require("../Controllers/User.Controller");
const express = require("express");
const userRoute = express();

userRoute.post("/SignUp", userController.createUser);

module.exports = userRoute;
