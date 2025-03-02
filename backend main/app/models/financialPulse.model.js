const { DataTypes } = require("sequelize"); // ✅ Import DataTypes correctly
const sequelize = require("../models/index").sequelize; // ✅ Get Sequelize instance

const FinancialPulse = sequelize.define("financial_pulse", {
  cashFlow: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  revenue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  expenses: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  debtToEquityRatio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  healthScore: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

module.exports = FinancialPulse;
