// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection using the environment variable
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB successfully"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully with MongoDB!");
});

// Example Mongoose schema
const dataSchema = new mongoose.Schema({
  name: String
});
const DataModel = mongoose.model("Data", dataSchema);

// Example route to add sample data
app.post("/api/data", async (req, res) => {
  try {
    const sample = new DataModel({ name: req.body.name });
    await sample.save();
    res.json({ message: "✅ Data saved successfully!" });
  } catch (err) {
    res.status(500).json({ error: "❌ Error saving data" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
