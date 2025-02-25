const authConfig = require("../config/auth.config");
const { BearerToken } = require("../utils/common");
const jwt = require("jsonwebtoken")

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {

  const token = req.headers["authorization"];

  const bearer = BearerToken(token)

  const user_id = jwt.decode(bearer, authConfig.secret)?.id

  const id = req.params.id


  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
