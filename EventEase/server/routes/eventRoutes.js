// server/routes/eventRoutes.js
import express from "express";
import Event from "../models/Event.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   GET /api/events
// @desc    Get all events
// @access  Public
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    return res.json(events);
  } catch (error) {
    console.error("Get events error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/events/:id
// @desc    Get single event
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    return res.json(event);
  } catch (error) {
    console.error("Get event error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
});

// @route   POST /api/events
// @desc    Create event
// @access  Private
router.post("/", protect, async (req, res) => {
  try {
    const { title, date, time, venue, description, imageUrl } = req.body;

    if (!title || !date || !time || !venue || !description) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    const event = await Event.create({
      organizerName: req.user.name,
      title,
      date,
      time,
      venue,
      description,
      imageUrl: imageUrl || "",
      createdBy: req.user._id,
    });

    return res.status(201).json(event);
  } catch (error) {
    console.error("Create event error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
});

// @route   PUT /api/events/:id
// @desc    Update event
// @access  Private
router.put("/:id", protect, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed to edit this event" });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.json(updatedEvent);
  } catch (error) {
    console.error("Update event error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
});

// @route   DELETE /api/events/:id
// @desc    Delete event
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (event.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed to delete this event" });
    }

    await event.deleteOne();
    return res.json({ message: "Event deleted" });
  } catch (error) {
    console.error("Delete event error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
});

// @route   GET /api/events/:id/reviews
// @desc    Get reviews
// @access  Public
router.get("/:id/reviews", async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  res.json(event.reviews);
});

// @route   POST /api/events/:id/reviews
// @desc    Add review
// @access  Public
router.post("/:id/reviews", async (req, res) => {
  const { userName, userRole, text, rating } = req.body;

  const event = await Event.findById(req.params.id);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  event.reviews.push({ userName, userRole, text, rating });
  await event.save();

  res.status(201).json(event.reviews);
});

export default router;
