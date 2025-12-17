// server/routes/contactRoutes.js
import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// @route   POST /api/contact
// @desc    Save contact message
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Name, email & message are required" });
    }

    await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    return res.status(201).json({ message: "Message received" });
  } catch (error) {
    console.error("Contact error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
