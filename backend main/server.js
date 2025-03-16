const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./app/models"); // Sequelize models
const authRoutes = require("./app/routes/auth.routes");  // Correct import
const userRoutes = require("./app/routes/user.routes");  // Correct import
const collaborationRoutes = require("./app/routes/collaboration.routes");
const profileRoutes = require("./app/routes/profile.routes");
const notificationsRoute = require("./app/routes/notification.routes");
const collaborationRequestController = require("./app/controllers/collaborationrequest");
const collaborationRequestRoutes = require("./app/routes/collaborationrequest.routes");




const app = express();

// CORS setup for React frontend (Change this if deployed)
// const corsOptions = {
//   origin: "http://localhost:3000", // React runs on port 3000
//   credentials: true,
// };

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync DB
db.sequelize.sync().then(() => {
  console.log("✅ Database connected successfully.");
}).catch((err) => {
  console.error("❌ Database connection error:", err);
});

// Routes
app.use("/api/auth", authRoutes);  // Correct use of authRoutes
app.use("/api/user", userRoutes);  // Correct use of userRoutes
app.use("/api/collaboration", collaborationRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/notificarions", notificationsRoute);
app.post("/api/collaboration-request", collaborationRequestController.sendCollabRequest);
app.use("/api/collaboration-request", collaborationRequestRoutes);


const financialPulseRoutes = require("./app/routes/financialPulse.routes");
app.use("/api/financialPulse", financialPulseRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Ekya API!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


