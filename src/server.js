// const express = require("express");
// const Razorpay = require("razorpay");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const crypto = require("crypto");
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Razorpay instance
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY,
//   key_secret: process.env.RAZORPAY_SECRET,
// });

// // POST /create-order
// app.post("/create-order", async (req, res) => {
//   const { amount } = req.body;

//   try {
//     const order = await razorpay.orders.create({
//       amount: amount * 100, // Convert to paise
//       currency: "INR",
//       receipt: `receipt_order_${Date.now()}`,
//     });

//     res.json(order);
//   } catch (err) {
//     console.error("Error creating Razorpay order:", err);
//     res.status(500).send("Error creating order");
//   }
// });

// // POST /verify-payment
// app.post("/verify-payment", (req, res) => {
//   const {
//     razorpay_order_id,
//     razorpay_payment_id,
//     razorpay_signature,
//     userId,
//     projectId,
//     title,
//     image,
//     downloadLink,
//   } = req.body;

//   // Generate expected signature
//   const generated_signature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_SECRET)
//     .update(`${razorpay_order_id}|${razorpay_payment_id}`)
//     .digest("hex");

//   if (generated_signature === razorpay_signature) {
//     console.log("Payment verified:", {
//       userId,
//       projectId,
//       title,
//       image,
//       downloadLink,
//     });

//     // Optionally, store the purchase in DB or Firebase here

//     res.json({ success: true });
//   } else {
//     res.json({ success: false });
//   }
// });

// // Server start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const jwt = require("jsonwebtoken"); // 🔐 JWT
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

// 🔒 JWT Authentication Middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: Bearer <token>

  if (!token) return res.status(401).json({ message: "Access Denied: No Token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });
    req.user = user;
    next();
  });
}

// POST /create-order (no auth needed)
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    });

    res.json(order);
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    res.status(500).send("Error creating order");
  }
});

// POST /verify-payment (protected)
app.post("/verify-payment", authenticateToken, (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    userId,
    projectId,
    title,
    image,
    downloadLink,
  } = req.body;

  const generated_signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generated_signature === razorpay_signature) {
    console.log("Payment verified for user:", req.user.username);

    // You can store purchase info in DB here

    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// 🛡️ Sample Login Route for Testing (you can remove it later)
app.post("/login", (req, res) => {
  const { username } = req.body;

  if (!username) return res.status(400).json({ message: "Username required" });

  // Normally you'd verify from DB
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
