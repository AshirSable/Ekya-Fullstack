const controller = require("../controllers/user.controller");  // Correct import
const { verifyToken } = require("../middleware/authJwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Routes for user actions
  app.get("/api/user/all", controller.allAccess);  // Public route
  app.get("/api/user/mod", controller.moderatorBoard);  // Moderator-specific route
  app.get("/api/user/admin", controller.adminBoard);  // Admin-specific route
  app.get("/api/user/:id", [verifyToken], controller.userBoard);  // User-specific route
};
