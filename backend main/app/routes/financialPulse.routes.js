const express = require("express");
const router = express.Router();
const { analyzeFinancialHealth } = require("../controllers/financialPulse.controller");

router.post("/analyze", analyzeFinancialHealth);

module.exports = router;