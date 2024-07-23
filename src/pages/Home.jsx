/* eslint-disable no-unused-vars */
import React from "react";
import backgroundImage from "../assets/bg.png"; // Path to your image
import HomeCards from "./HomeCards";
import Hero from "../components/Hero";
import ShowCase from "../components/ShowCase";
import FeaturedTopics from "../components/FeaturedTopics";

function HomePage() {
  return (
    <>
      <Hero />
      <ShowCase />
      <FeaturedTopics />
    </>
  );
}

export default HomePage;
