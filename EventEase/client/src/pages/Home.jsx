// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import EventsSection from "../components/EventsSection";
import AddEventSection from "../components/AddEventSection";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="home-hero-wrapper">
        <Navbar />
        <Hero />
        <SearchBar />
        <Categories />
      </div>

      <main className="home-main">
        <EventsSection
          title="Upcoming Events"
          variant="upcoming"
        />
        <AddEventSection />
        <EventsSection
          title="Past Successful Events"
          variant="past"
        />
        <ReviewsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
