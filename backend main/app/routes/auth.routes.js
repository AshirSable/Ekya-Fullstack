const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");  // Correct import
const express = require("express")
const router = express.Router()




  // Routes for authentication
  router.post("/signup", [
    verifySignUp.checkDuplicateUsernameOrEmail,
  ], controller.signup);  // Reference to the signup controller

  router.post("/signin", controller.signin);  // Reference to the signin controller

  module.exports = router