const mongoose = require("mongoose");
const Event = require("./models/Event");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
/* --------------------------- FUTURE EVENTS ONLY --------------------------- */
const futureEvents = [
  {
    title: "AI & Robotics Summit 2026",
    date: "15",
    month: "JAN",
    time: "10:00 AM",
    image: "https://images.pexels.com/photos/547395/pexels-photo-547395.jpeg",
    location: "Main Auditorium",
    eventType: "Technical",
    category: "weekdays",
    popularity: 0,
    createdAt: new Date("2026-01-15"),
    price: 150,
    description: "Future-focused summit on AI & robotics.",
    longDescription:
      "Industry experts and students explore advancements in AI, robotics, and automation.",
    organizer: "Innovation & Research Cell",
    process:
      "Registration → Keynote → Panel → Live Demos → Networking",
    likes: 0,
    reviews: [],
  },

  {
    title: "Campus Cultural Fest 2026",
    date: "22",
    month: "FEB",
    time: "6:00 PM",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
    location: "Open Ground",
    eventType: "Cultural",
    category: "weekend",
    popularity: 0,
    createdAt: new Date("2026-02-22"),
    price: 0,
    description: "Annual cultural celebration.",
    longDescription:
      "Dance, drama, music, fashion & DJ night.",
    organizer: "Cultural Committee",
    process:
      "Opening → Performances → Celebrity Act → DJ Night",
    likes: 0,
    reviews: [],
  },

  {
    title: "Startup Pitch Day 2026",
    date: "10",
    month: "MAR",
    time: "11:00 AM",
    image: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg",
    location: "Innovation Hub",
    eventType: "Technical",
    category: "weekdays",
    popularity: 0,
    createdAt: new Date("2026-03-10"),
    price: 100,
    description: "Pitch startup ideas to investors.",
    longDescription:
      "Students pitch innovative ideas and receive mentor feedback.",
    organizer: "Entrepreneurship Cell",
    process:
      "Submission → Pitch → Mentorship → Funding Discussion",
    likes: 0,
    reviews: [],
  },

  {
    title: "Inter-College Sports Meet 2026",
    date: "05",
    month: "APR",
    time: "9:00 AM",
    image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg",
    location: "Sports Complex",
    eventType: "Sports",
    category: "weekend",
    popularity: 0,
    createdAt: new Date("2026-04-05"),
    price: 50,
    description: "Multi-college sports competition.",
    longDescription:
      "Football, athletics, volleyball & indoor sports.",
    organizer: "Sports Council",
    process:
      "Inauguration → Matches → Finals → Prize Distribution",
    likes: 0,
    reviews: [],
  },

  {
    title: "Cyber Security Workshop 2026",
    date: "18",
    month: "MAY",
    time: "2:00 PM",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
    location: "CSE Seminar Hall",
    eventType: "Technical",
    category: "weekdays",
    popularity: 0,
    createdAt: new Date("2026-05-18"),
    price: 120,
    description: "Hands-on cyber security training.",
    longDescription:
      "Learn ethical hacking & cyber defense.",
    organizer: "Cyber Security Club",
    process:
      "Intro → Live Demo → Hands-on Labs → Certificates",
    likes: 0,
    reviews: [],
  },
];


/* ------------------------------ SEED DATA -------------------------------- */
async function seedFutureEvents() {
  try {
    await Event.insertMany(futureEvents);
    console.log("✅ Future events inserted successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Future events insert failed:", err);
    process.exit(1);
  }
}

seedFutureEvents();
