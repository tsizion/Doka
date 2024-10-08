/* eslint-disable no-unused-vars */
import React from "react";
import backgroundImage from "../assets/bg.png"; // Path to your image
import HomeCards from "./HomeCards";
import Hero from "../components/Hero";
import ShowCase from "../components/ShowCase";
import FeaturedTopics from "../components/FeaturedTopics";
import ThreeMain from "../components/ThreeMain";
import DokaDesc from "../components/DokaDesc";
import RaiseForAnyone from "../components/RaiseForAnyone";

function HomePage() {
  return (
    <>
      <Hero />
      <ShowCase />
      <FeaturedTopics />
      <ThreeMain />
      <DokaDesc />
      <RaiseForAnyone />
    </>
  );
}

export default HomePage;
