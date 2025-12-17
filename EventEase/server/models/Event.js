import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    userName: String,
    userRole: String,
    text: String,
    rating: Number,
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const eventSchema = new mongoose.Schema(
  {
    title: String,
    date: String,
    month: String,
    time: String,
    image: String,
    location: String,
    eventType: String,
    category: String,
    popularity: Number,
    price: Number,

    description: String,
    longDescription: String,
    organizer: String,
    process: String,

    likes: { type: Number, default: 0 },
    reviews: [reviewSchema], // ✅ reviews per event
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
