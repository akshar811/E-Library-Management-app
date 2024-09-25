const { Router } = require("express");

const { signup, login } = require("../controllers/User_controller");

const Route = Router();

Route.post("/signup", signup);

Route.post("/login", login);

module.exports = Route;
