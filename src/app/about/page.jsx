import React from "react";
import Hero from "../components/About/Hero";
import Navbar from "../components/Navbar";
import Story from "../components/About/Story";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Hero />
      </div>
      <Story />
    </>
  );
};

export default About;
