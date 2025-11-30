import React from "react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
   const mockEvents = [

/* -------------------------------------------------------------------------- */
/*                               ORIGINAL EVENTS                               */
/* -------------------------------------------------------------------------- */

{
  id: 1,
  title: "Civil Pudura",
  date: "11",
  month: "SEP",
  time: "5:00 PM",
  image:
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&w=800",
  location: "Civil Engineering Dept",
  eventType: "Cultural",
  category: "weekdays",
  popularity: 87,
  createdAt: "2024-09-01",
  price: 0,

  description: "An energetic cultural fest by Civil department.",
  longDescription:
    "Civil Pudura is a vibrant cultural evening organized within the Civil Engineering Department. Students participate in drama, music, dance, and creative presentations that showcase artistic talent. The event is designed to strengthen bonding among students, promote confidence, and create memorable moments through interactive performances and group activities. It helps students relax, express themselves, and celebrate creativity beyond academics.",
  organizer: "Civil Engineering Students’ Club",
  process:
    "Registration → Opening ceremony → Cultural performances → Fun activities → Competitions → Award distribution → Closing note",

  likes: 124,
  reviews: []
},

{
  id: 2,
  title: "Yaye Padura",
  date: "14",
  month: "SEP",
  time: "6:00 PM",
  image:
    "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&w=800",
  location: "Chemical Dept",
  eventType: "Cultural",
  category: "weekend",
  popularity: 93,
  createdAt: "2024-09-05",
  price: 50,

  description:
    "A musical night filled with lights and excitement.",
  longDescription:
    "Yaye Padura is a fun-filled music night featuring solo performances, band acts, and rhythmic cultural pieces. Students from multiple departments participate, creating a lively festive atmosphere. The event focuses on promoting musical talent and fostering unity through entertainment. Beautiful lighting, energetic crowds, and joyful interactions make it an unforgettable night for music lovers.",
  organizer: "Chemical Arts & Culture Club",
  process:
    "Registration → Stage lighting → Solo singing rounds → Band performances → Musical games → Jury scoring → Winner announcement",

  likes: 200,
  reviews: []
},

{
  id: 3,
  title: "Spandana",
  date: "14",
  month: "SEP",
  time: "6:45 PM",
  image:
    "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&w=800",
  location: "Medical Faculty",
  eventType: "Cultural",
  category: "weekdays",
  popularity: 74,
  createdAt: "2024-09-07",
  price: 0,

  description: "A cultural event hosted by medical students.",
  longDescription:
    "Spandana offers a refreshing cultural break to medical students who often undergo intense academic pressure. The event includes expressive art performances, storytelling, poetry recitations, and social-themed drama. It helps students build confidence, teamwork, and emotional expression while encouraging creativity in a relaxing environment.",
  organizer: "Medical Students Council",
  process:
    "Opening speech → Dance and poetry → Short plays → Open mic → Audience engagement → Closing ceremony",

  likes: 95,
  reviews: []
},

{
  id: 4,
  title: "Devthon",
  date: "14",
  month: "SEP",
  time: "All Day",
  image:
    "https://images.pexels.com/photos/1181555/pexels-photo-1181555.jpeg?auto=compress&w=800",
  location: "CSE Dept",
  eventType: "Technical",
  category: "weekdays",
  popularity: 98,
  createdAt: "2024-09-10",
  price: 100,

  description: "A thrilling 24-hour hackathon for passionate developers.",
  longDescription:
    "Devthon is a 24-hour hackathon where aspiring developers build innovative solutions around real-world challenges. Teams collaborate intensively to develop apps, AI tools, or hardware prototypes that solve meaningful problems. Mentors guide participants throughout the hackathon, and judges evaluate creativity, impact, and technical execution. It strengthens teamwork, coding skills, and innovation.",
  organizer: "CSE Innovators Club",
  process:
    "Team formation → Problem selection → Coding sprint → Mid-review → Final pitch → Judgement and prizes",

  likes: 330,
  reviews: []
},

{
  id: 5,
  title: "RoboWars",
  date: "20",
  month: "SEP",
  time: "3:00 PM",
  image: "https://images.pexels.com/photos/712538/pexels-photo-712538.jpeg",
  location: "Mechanical Dept",
  eventType: "Technical",
  category: "weekend",
  popularity: 91,
  createdAt: "2024-09-11",
  price: 80,

  description: "Robots battle for dominance in the arena.",
  longDescription:
    "RoboWars is an exciting event where teams build combat robots designed for strength, durability, and strategy. These robots fight inside a controlled arena while crowds cheer for powerful hits, precision moves, and innovative engineering. The event teaches real-world mechanical designing, problem-solving, and teamwork, making it one of the most thrilling technical competitions.",
  organizer: "Mechanical Innovation Society",
  process:
    "Robot inspection → Qualification rounds → Knockout matches → Semi-finals → Final battle → Trophy award",

  likes: 260,
  reviews: []
},

{
  id: 6,
  title: "Sports Fiesta",
  date: "22",
  month: "SEP",
  time: "10:00 AM",
  image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg",
  location: "Stadium",
  eventType: "Sports",
  category: "weekdays",
  popularity: 60,
  createdAt: "2024-09-12",
  price: 20,

  description: "Outdoor games and competitions.",
  longDescription:
    "Sports Fiesta is a vibrant outdoor sports event designed to promote fitness, teamwork, and healthy competition among students. Participants take part in multiple sports activities including races, football, volleyball, and indoor games. The event encourages discipline, coordination, and sportsmanship. Energetic commentary and cheering from students add excitement to the entire experience.",
  organizer: "University Sports Council",
  process:
    "Warm-up session → Sports rounds → Team games → Individual competitions → Score tally → Medal distribution",

  likes: 80,
  reviews: []
},

{
  id: 7,
  title: "CodeSprint",
  date: "23",
  month: "SEP",
  time: "9:00 AM",
  image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
  location: "CSE Block",
  eventType: "Technical",
  category: "weekdays",
  popularity: 95,
  createdAt: "2024-09-13",
  price: 60,

  description: "Competitive programming contest for coders.",
  longDescription:
    "CodeSprint is a fast-paced competitive programming event where participants solve algorithmic challenges under real-time pressure. The contest tests logical thinking, coding efficiency, data structure knowledge, and problem-solving skills. It helps students sharpen their competitive coding abilities and prepares them for placements and national-level coding contests.",
  organizer: "Coding Club",
  process:
    "Problem distribution → Timed coding → Leaderboard updates → Final evaluation → Rank announcement",

  likes: 310,
  reviews: []
},

{
  id: 8,
  title: "Dance Battle",
  date: "24",
  month: "SEP",
  time: "8:00 PM",
  image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
  location: "Auditorium",
  eventType: "Cultural",
  category: "weekend",
  popularity: 85,
  createdAt: "2024-09-15",
  price: 40,

  description: "Hip-hop and freestyle dance competition.",
  longDescription:
    "Dance Battle is an electrifying competition where dancers face off in multiple rounds, showcasing their freestyle, hip-hop, and choreography skills. A cheering crowd and loud music energize the floor as participants battle through knockout rounds to win the final title. The event boosts creativity, confidence, and performance spirit.",
  organizer: "Dance Crew Society",
  process:
    "Auditions → Round 1 freestyle → Knockout rounds → Judge scoring → Final battle → Winner reveal",

  likes: 190,
  reviews: []
},

{
  id: 9,
  title: "Art Expo",
  date: "25",
  month: "SEP",
  time: "11:00 AM",
  image: "https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg",
  location: "Arts Dept",
  eventType: "Cultural",
  category: "weekdays",
  popularity: 55,
  createdAt: "2024-09-16",
  price: 0,

  description: "Artworks, paintings, and creative exhibitions.",
  longDescription:
    "Art Expo brings together aspiring artists from various departments to display their paintings, sketches, sculptures, and digital artworks. It provides a platform for creative expression and collaboration. Students also engage in live art sessions, interactive workshops, and discussions about artistic techniques.",
  organizer: "Fine Arts Club",
  process:
    "Setup → Artwork display → Live sketching → Visitors’ interaction → Art auction (optional) → Closing ceremony",

  likes: 75,
  reviews: []
},

{
  id: 10,
  title: "Circuit Debugging",
  date: "26",
  month: "SEP",
  time: "2:30 PM",
  image: "https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg",
  location: "ECE Dept",
  eventType: "Technical",
  category: "weekdays",
  popularity: 88,
  createdAt: "2024-09-18",
  price: 25,

  description: "Fix the electronic circuits under pressure.",
  longDescription:
    "Circuit Debugging is a thrilling technical event where students troubleshoot faulty circuits within limited time. It enhances practical electronics knowledge, analytical thinking, and quick problem-solving skills. Participants compete individually or in small teams to find errors and restore proper circuit functionality.",
  organizer: "ECE Robotics Society",
  process:
    "Briefing → Circuit distribution → Troubleshooting → Timer-based evaluation → Score calculation → Winner announcement",

  likes: 145,
  reviews: []
},

{
  id: 11,
  title: "Math Olympiad",
  date: "27",
  month: "SEP",
  time: "1:00 PM",
  image: "https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg",
  location: "Math Dept",
  eventType: "Technical",
  category: "weekdays",
  popularity: 78,
  createdAt: "2024-09-18",
  price: 10,

  description: "Advanced math problems for top students.",
  longDescription:
    "Math Olympiad challenges students with advanced mathematical questions designed to test logic, reasoning, and conceptual clarity. Participants solve problems from algebra, geometry, combinatorics, and calculus. The contest sharpens analytical ability and prepares students for academic competitions.",
  organizer: "Mathematics Society",
  process:
    "Registration → Problem sets → Timed solving → Evaluation → Rank list → Medal ceremony",

  likes: 110,
  reviews: []
},

{
  id: 12,
  title: "Fashion Walk",
  date: "28",
  month: "SEP",
  time: "7:00 PM",
  image: "https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg",
  location: "Auditorium",
  eventType: "Cultural",
  category: "weekend",
  popularity: 82,
  createdAt: "2024-09-19",
  price: 60,

  description: "Trendy fashion showcase by students.",
  longDescription:
    "Fashion Walk is a glamorous cultural event where students model stylish outfits created by fashion enthusiasts from the campus. With professional lighting, music, and choreography, the event resembles a real fashion runway show. It encourages creativity, confidence, and stage presence.",
  organizer: "Fashion & Styling Club",
  process:
    "Outfit selection → Rehearsal → Ramp walk rounds → Judges scoring → Photo sessions → Awards",

  likes: 165,
  reviews: []
},

{
  id: 13,
  title: "Cricket Tournament",
  date: "29",
  month: "SEP",
  time: "9:00 AM",
  image: "https://images.pexels.com/photos/1632090/pexels-photo-1632090.jpeg",
  location: "Ground",
  eventType: "Sports",
  category: "weekdays",
  popularity: 99,
  createdAt: "2024-09-20",
  price: 0,

  description: "Inter-college cricket battle.",
  longDescription:
    "Cricket Tournament features multiple teams battling in knockout matches to win the championship trophy. The event promotes sportsmanship, teamwork, and endurance among players. Cheering crowds make the matches more exciting.",
  organizer: "Sports Council",
  process:
    "Team registration → Match fixtures → Knockout games → Semi-finals → Finals → Trophy distribution",

  likes: 400,
  reviews: []
},

{
  id: 14,
  title: "Startup Pitch Fest",
  date: "30",
  month: "SEP",
  time: "4:00 PM",
  image: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg",
  location: "Innovation Lab",
  eventType: "Technical",
  category: "weekend",
  popularity: 96,
  createdAt: "2024-09-22",
  price: 80,

  description: "Pitch your startup idea to investors.",
  longDescription:
    "Startup Pitch Fest provides a platform to aspiring entrepreneurs who want feedback and funding for their innovative ideas. Participants pitch their startup concepts to industry professionals and investors. The event encourages leadership, creativity, and problem-solving.",
  organizer: "Entrepreneurship Cell",
  process:
    "Idea submission → Pitch rehearsal → Live pitch → Q&A → Scoring → Funding offers (if selected)",

  likes: 275,
  reviews: []
},

{
  id: 15,
  title: "Photography Walk",
  date: "01",
  month: "OCT",
  time: "6:00 AM",
  image: "https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg",
  location: "Campus",
  eventType: "Cultural",
  category: "weekdays",
  popularity: 64,
  createdAt: "2024-09-23",
  price: 20,

  description: "Capture nature and life around campus.",
  longDescription:
    "Photography Walk invites photography lovers to explore scenic locations around the campus and capture artistic shots. The event helps participants learn new camera techniques, composition skills, and outdoor photography styles.",
  organizer: "Photography Club",
  process:
    "Meet-up → Location briefing → Guided walk → Photography rounds → Review → Best shots showcase",

  likes: 120,
  reviews: []
},

{
  id: 16,
  title: "Robotics Expo",
  date: "02",
  month: "OCT",
  time: "3:00 PM",
  image: "https://images.pexels.com/photos/58596/pexels-photo-58596.jpeg",
  location: "Workshop Hall",
  eventType: "Technical",
  category: "weekend",
  popularity: 86,
  createdAt: "2024-09-24",
  price: 90,

  description: "Showcase your working robots.",
  longDescription:
    "Robotics Expo brings together students who design working robots, from humanoids to automated machines. The expo encourages technical creativity and gives students a platform to demonstrate engineering solutions.",
  organizer: "Robotics Lab",
  process:
    "Setup → Robot display → Demonstrations → Student Q&A → Jury review → Awards",

  likes: 140,
  reviews: []
},

{
  id: 17,
  title: "Kite Festival",
  date: "03",
  month: "OCT",
  time: "4:00 PM",
  image: "https://images.pexels.com/photos/58596/pexels-photo-58596.jpeg",
  location: "Main Ground",
  eventType: "Cultural",
  category: "weekend",
  popularity: 70,
  createdAt: "2024-09-25",
  price: 0,

  description: "Colorful kites flying in the sky.",
  longDescription:
    "Kite Festival creates a joyful celebration of creativity and friendly competition as students fly colorful kites across the sky. The event includes kite-making, flying battles, and fun challenges.",
  organizer: "Cultural Committee",
  process:
    "Registration → Kite setup → Flying rounds → Friendly battles → Winner announcement",

  likes: 90,
  reviews: []
},

{
  id: 18,
  title: "AI Workshop",
  date: "05",
  month: "OCT",
  time: "10:00 AM",
  image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg",
  location: "Seminar Hall",
  eventType: "Technical",
  category: "weekdays",
  popularity: 97,
  createdAt: "2024-09-26",
  price: 100,

  description: "Hands-on AI model building workshop.",
  longDescription:
    "AI Workshop provides students hands-on training on machine learning, neural networks, and model development. The session teaches practical skills for building AI systems.",
  organizer: "AI Research Club",
  process:
    "Introduction → Dataset briefing → Model building → Training → Testing → Q&A session",

  likes: 310,
  reviews: []
},

{
  id: 19,
  title: "Music Fiesta",
  date: "07",
  month: "OCT",
  time: "7:30 PM",
  image: "https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg",
  location: "Open Arena",
  eventType: "Cultural",
  category: "weekend",
  popularity: 90,
  createdAt: "2024-09-27",
  price: 50,

  description: "Live singing and band performances.",
  longDescription:
    "Music Fiesta is an upbeat cultural night that features talented singers and live bands performing popular tracks. The event is filled with energy and fun.",
  organizer: "Music Club",
  process:
    "Stage setup → Solo performances → Duets → Band performance → Audience interaction → Finale",

  likes: 180,
  reviews: []
},

{
  id: 20,
  title: "Chess Masterclass",
  date: "08",
  month: "OCT",
  time: "1:30 PM",
  image: "https://images.pexels.com/photos/58596/pexels-photo-58596.jpeg",
  location: "Library Hall",
  eventType: "Sports",
  category: "weekdays",
  popularity: 53,
  createdAt: "2024-09-28",
  price: 10,

  description: "Learn strategy from expert chess players.",
  longDescription:
    "Chess Masterclass teaches students advanced chess strategies, including openings, middle-game planning, and endgame techniques. Perfect for beginners and intermediate players.",
  organizer: "Chess Club",
  process:
    "Introduction → Live demonstration → Strategy lessons → Practice games → Review → Certificates",

  likes: 70,
  reviews: []
},

/* -------------------------------------------------------------------------- */
/*                             NEW UPCOMING EVENTS                             */
/* -------------------------------------------------------------------------- */

{
  id: 21,
  title: "Tech Innovators Summit",
  date: "30",
  month: "NOV",
  time: "10:00 AM",
  image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
  location: "Auditorium Hall A",
  eventType: "Technical",
  category: "weekdays",
  createdAt: "2025-11-30",
  price: 80,
  popularity: 70,

  description: "A conference showcasing future technologies.",
  longDescription:
    "Tech Innovators Summit brings together tech enthusiasts to discuss advancements in AI, robotics, IoT, and automation. Industry professionals and student innovators share their insights through talks and project demos.",
  organizer: "Innovation Cell",
  process:
    "Talk sessions → Panel discussion → Project demos → Networking → Closing notes",

  likes: 50,
  reviews: []
},

{
  id: 22,
  title: "Campus Winter Fest",
  date: "05",
  month: "DEC",
  time: "6:00 PM",
  image: "https://images.pexels.com/photos/3819960/pexels-photo-3819960.jpeg",
  location: "Central Ground",
  eventType: "Cultural",
  category: "weekend",
  createdAt: "2025-12-05",
  price: 40,
  popularity: 90,

  description: "Winter-themed music and fun activities.",
  longDescription:
    "Campus Winter Fest is packed with music, stalls, games, and performances under dazzling lights. The festival invites students to enjoy a cozy winter celebration filled with energy and joy.",
  organizer: "Cultural Committee",
  process:
    "Decor setup → Music show → Stalls opening → Games → Dance floor → Closing act",

  likes: 85,
  reviews: []
},

{
  id: 23,
  title: "AI & Robotics Bootcamp",
  date: "10",
  month: "DEC",
  time: "3:00 PM",
  image: "https://images.pexels.com/photos/547395/pexels-photo-547395.jpeg",
  location: "Tech Lab - Block C",
  eventType: "Technical",
  category: "weekdays",
  createdAt: "2025-12-10",
  price: 100,
  popularity: 95,

  description: "Hands-on workshop for robotics and AI models.",
  longDescription:
    "This bootcamp trains students in robot automation, path planning, model training, and AI engineering. Participants work on real robot systems and sensors.",
  organizer: "Robotics Research Wing",
  process:
    "Intro → Robotics basics → AI model building → Robot testing → Final demo",

  likes: 110,
  reviews: []
},

{
  id: 24,
  title: "Entrepreneurship Meetup",
  date: "12",
  month: "DEC",
  time: "4:30 PM",
  image: "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg",
  location: "Innovation Hub",
  eventType: "Technical",
  category: "weekdays",
  createdAt: "2025-12-12",
  price: 50,
  popularity: 80,

  description: "Meet founders, investors, and startup leaders.",
  longDescription:
    "Entrepreneurship Meetup provides networking opportunities between young innovators and industry experts. Students pitch their ideas, receive feedback, and learn fundraising basics.",
  organizer: "E-Cell",
  process:
    "Introduction → Startup pitches → Mentor Q&A → Networking session",

  likes: 92,
  reviews: []
},

{
  id: 25,
  title: "Cultural Fusion Night",
  date: "15",
  month: "DEC",
  time: "7:00 PM",
  image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
  location: "Open Theatre",
  eventType: "Cultural",
  category: "weekend",
  createdAt: "2025-12-15",
  price: 40,
  popularity: 88,

  description: "A mix of dance, drama, and musical acts.",
  longDescription:
    "Cultural Fusion Night blends different art forms into a single celebration. Students perform dance, drama, and musical sequences inspired by diverse cultures.",
  organizer: "Drama & Dance Club",
  process:
    "Stage prep → Dance acts → Cultural drama → Musical finale",

  likes: 120,
  reviews: []
},

{
  id: 26,
  title: "Sports Mania 2025",
  date: "18",
  month: "DEC",
  time: "9:00 AM",
  image: "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg",
  location: "Sports Arena",
  eventType: "Sports",
  category: "weekdays",
  createdAt: "2025-12-18",
  price: 30,
  popularity: 68,

  description: "Annual sports event with multiple competitions.",
  longDescription:
    "Sports Mania brings together athletes from various departments to compete in football, volleyball, track events, and more. The event encourages teamwork and sportsmanship.",
  organizer: "Sports Authority",
  process:
    "Opening march → Events → Team matches → Scoreboard → Prize ceremony",

  likes: 76,
  reviews: []
},

{
  id: 27,
  title: "Photography Contest",
  date: "20",
  month: "DEC",
  time: "11:30 AM",
  image: "https://images.pexels.com/photos/320617/pexels-photo-320617.jpeg",
  location: "Art Studio",
  eventType: "Cultural",
  category: "weekdays",
  createdAt: "2025-12-20",
  price: 10,
  popularity: 58,

  description: "Showcase your best photographs and win prizes.",
  longDescription:
    "Photography Contest invites student photographers to submit their best captures. The event encourages creativity and storytelling through pictures.",
  organizer: "Photography Club",
  process:
    "Submission → Display → Jury review → Award",

  likes: 55,
  reviews: []
},

{
  id: 28,
  title: "Winter Coding Marathon",
  date: "22",
  month: "DEC",
  time: "10:00 AM",
  image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg",
  location: "CSE Block",
  eventType: "Technical",
  category: "weekdays",
  createdAt: "2025-12-22",
  price: 75,
  popularity: 99,

  description: "A full-day coding challenge for developers.",
  longDescription:
    "Winter Coding Marathon challenges students to solve coding problems, build mini projects, and collaborate on solutions. It encourages skill development and peer learning.",
  organizer: "Coding Club",
  process:
    "Problem sets → Coding rounds → Evaluation → Result",

  likes: 130,
  reviews: []
},

{
  id: 29,
  title: "Christmas Carnival",
  date: "24",
  month: "DEC",
  time: "6:30 PM",
  image: "https://images.pexels.com/photos/3819967/pexels-photo-3819967.jpeg",
  location: "Main Campus",
  eventType: "Cultural",
  category: "weekend",
  createdAt: "2025-12-24",
  price: 60,
  popularity: 100,

  description: "Christmas celebration with games, food, and music.",
  longDescription:
    "Christmas Carnival spreads festive cheer across campus with lighting, stalls, games, music, and Santa-themed attractions. Students enjoy food, rides, and live performances.",
  organizer: "Cultural Committee",
  process:
    "Decorations → Stall setup → Games → Live show → Santa parade",

  likes: 200,
  reviews: []
},

{
  id: 30,
  title: "New Year Bash 2026",
  date: "31",
  month: "DEC",
  time: "11:00 PM",
  image: "https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg",
  location: "Open Arena",
  eventType: "Cultural",
  category: "weekend",
  createdAt: "2025-12-31",
  price: 100,
  popularity: 100,

  description: "DJ night, fireworks, and countdown celebrations.",
  longDescription:
    "New Year Bash is the biggest celebration of the year with DJ music, fireworks, light shows, dance floor, and a grand midnight countdown. Students enjoy performances, food stalls, and party vibes.",
  organizer: "Event Management Club",
  process:
    "Music setup → DJ night → Games → Fireworks → Countdown → Celebration",

  likes: 350,
  reviews: []
}

];

  const reviews = [
    {
      id: 1,
      name: "Taylor Swift",
      role: "Student, CSE",
      text: "Great way to discover events and never miss the important ones in campus.",
    },
    {
      id: 2,
      name: "Taylor Swift",
      role: "Club Coordinator",
      text: "Managing registrations became so simple. All data is in one place.",
    },
    {
      id: 3,
      name: "Taylor Swift",
      role: "Student, ECE",
      text: "Clean UI and easy event search. I love the reminders!",
    },
  ];
  const IconData = [
    { icon: "🎵", label: "Music Events" },
    { icon: "🎤", label: "Conferences" },
    { icon: "🎉", label: "Annual Celebrations" },
    { icon: "🎮", label: "Games" },
  ];

  return (
    <AppContext.Provider value={{ mockEvents, reviews, IconData, navigate }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
