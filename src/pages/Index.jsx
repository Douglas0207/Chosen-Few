
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonies from "../components/Testimonies";
import PrayerWall from "../components/PrayerWall";
import PrayerRequest from "../components/PrayerRequest";
import Meetings from "../components/Meetings";
// import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Testimonies />
      <PrayerWall />
      <PrayerRequest />
      <Meetings />
      {/* <Team /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
