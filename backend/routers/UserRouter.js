const express = require("express");
const { signin, signup } = require("../controller/UserController");

const User = express.Router();

User.route("/signUp").post(signup);
User.route("/signIn").post(signin);

module.exports = User;
