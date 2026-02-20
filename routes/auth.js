const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.json({ error: "User Exists" });
  const hash = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hash });
  res.json({ success: true });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json({ error: "Invalid" });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ error: "Invalid" });
  const token = jwt.sign({ id: user._id }, "secret123");
  res.json({ token });
});

router.get("/me", async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.json({ error: "No token" });
  const decoded = jwt.verify(token, "secret123");
  const user = await User.findById(decoded.id).select("-password");
  res.json(user);
});

module.exports = router;