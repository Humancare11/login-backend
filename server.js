const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running");
});