const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./app/models"); // Sequelize models
const authRoutes = require("./app/routes/auth.routes");  // Correct import
const userRoutes = require("./app/routes/user.routes");  // Correct import
const collaborationRoutes = require("./app/routes/collaboration.routes"); 

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

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Ekya API!" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


