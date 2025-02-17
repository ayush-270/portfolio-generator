const mongoose = require("mongoose");

const UserPortfolioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  skills: { type: [String], default: [] },
  projects: [
    {
      title: { type: String, required: true },
      description: { type: String },
      link: { type: String },
    },
  ],
  socialLinks: {
    linkedin: { type: String },
    github: { type: String },
    twitter: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("UserPortfolio", UserPortfolioSchema);
