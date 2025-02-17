const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Import portfolio routes
const portfolioRoutes = require("./routes/portfolio");
app.use("/api/portfolio", portfolioRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend is running!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
