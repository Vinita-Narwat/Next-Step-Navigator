const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const users = [];
const feedbacks = [];

// Sign In route
app.post("/signin", (req, res) => {
  const { name, dob, contact, email } = req.body;
  users.push({ name, dob, contact, email });
  res.json({ success: true, message: `Welcome ${name}, account created!` });
});

// Feedback route
app.post("/feedback", (req, res) => {
  const { name, email, feedback } = req.body;
  feedbacks.push({ name, email, feedback });
  res.json({ success: true, message: "Thanks for your feedback!" });
});

// ✅ GET routes (yahan likhna hai)
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/feedbacks", (req, res) => {
  res.json(feedbacks);
});

// Server start
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

