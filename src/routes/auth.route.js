const express = require("express");

const router = express.Router();

const register =
  require("../controllers/auth/register.controller").register;

const login =
  require("../controllers/auth/login.controller").login;

router.post(
  "/register",register
);

router.post(
  "/login", login
);  

module.exports = router;