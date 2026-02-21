const express = require("express");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");

const app = express();

// ✅ FIXED CORS FOR RENDER + VERCEL
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://login-frontend-olive-nine.vercel.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // IMPORTANT
  }

  next();
});

app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/auth", authRoutes);

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});