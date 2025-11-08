// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection inside Docker network
mongoose.connect("mongodb://mongo:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ Connected to MongoDB successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully with MongoDB!");
});

// Example route to add sample data
app.post("/api/data", async (req, res) => {
  const sample = new DataModel({ name: req.body.name });
  await sample.save();
  res.json({ message: "✅ Data saved successfully!" });
});

// Example Mongoose schema
const dataSchema = new mongoose.Schema({
  name: String
});
const DataModel = mongoose.model("Data", dataSchema);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
