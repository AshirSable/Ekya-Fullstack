const FinancialPulse = require("../models/financialPulse.model");

const minMaxScaler = (data) => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    if (min === max) return data.map(() => 1); // Avoid division by zero
    return data.map((value) => (value - min) / (max - min));
  };

exports.analyzeFinancialHealth = async (req, res) => {
  try {
    const data = req.body;
    const processedData = data.map((item) => {
      const profit = item.revenue - item.expenses;
      const grossMargin = profit / item.revenue;
      const netMargin = (profit - item.debtToEquityRatio * item.expenses) / item.revenue;
      return { ...item, profit, grossMargin, netMargin };
    });

    const metrics = processedData.map((item) => [
      item.cashFlow, item.revenue, item.expenses, item.debtToEquityRatio, item.grossMargin, item.netMargin
    ]);
    
    const scaledData = metrics.map(row => minMaxScaler(row));
    const healthScores = scaledData.map(row => (row.reduce((acc, val) => acc + val, 0) / row.length) * 100);
    
    const results = await Promise.all(processedData.map(async (item, index) => {
      return await FinancialPulse.create({
        cashFlow: item.cashFlow,
        revenue: item.revenue,
        expenses: item.expenses,
        debtToEquityRatio: item.debtToEquityRatio,
        grossMargin: item.grossMargin,
        netMargin: item.netMargin,
        healthScore: healthScores[index],
      });
    }));

    res.status(200).json({ healthScores: healthScores.map(score => score.toFixed(2)) });
  } catch (error) {
    console.error("Error in analysis:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};