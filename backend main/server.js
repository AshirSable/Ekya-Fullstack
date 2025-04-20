const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./app/models");
const authRoutes = require("./app/routes/auth.routes");
const userRoutes = require("./app/routes/user.routes");
const collaborationRoutes = require("./app/routes/collaboration.routes");
const profileRoutes = require("./app/routes/profile.routes");
const notificationsRoute = require("./app/routes/notification.routes");
const collaborationRequestController = require("./app/controllers/collaborationrequest.controller");
const collaborationRequestRoutes = require("./app/routes/collaborationrequest.routes");
const uploadRoutes = require('./app/routes/upload.routes');
const ongoingRoutes = require("./app/routes/ongoingcollab.routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/upload', uploadRoutes);

db.sequelize.sync()
  .then(() => {
    console.log("✅ Database connected successfully.");
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err);
  });

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/collaboration", collaborationRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/notifications", notificationsRoute);
app.post("/api/collaboration-request", collaborationRequestController.createRequest);
app.use("/api/collaboration-request", collaborationRequestRoutes);

const financialPulseRoutes = require("./app/routes/financialPulse.routes");
app.use("/api/financialPulse", financialPulseRoutes);

app.use("/api/ongoing", ongoingRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Ekya API!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
