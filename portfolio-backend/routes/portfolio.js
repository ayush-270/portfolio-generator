const express = require("express");
const router = express.Router();
const UserPortfolio = require("../models/UserPortfolio");

// POST route to save portfolio data
router.post("/save", async (req, res) => {
  try {
    const portfolioData = req.body;
    const newPortfolio = new UserPortfolio(portfolioData);
    const savedPortfolio = await newPortfolio.save();
    res
      .status(201)
      .json({
        message: "Portfolio saved successfully",
        id: savedPortfolio._id,
      });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to save portfolio", details: err.message });
  }
});

// GET route to fetch a portfolio by id (for future use)
router.get("/:id", async (req, res) => {
  try {
    const portfolio = await UserPortfolio.findById(req.params.id);
    if (!portfolio)
      return res.status(404).json({ error: "Portfolio not found" });
    res.json(portfolio);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch portfolio", details: err.message });
  }
});

module.exports = router;
