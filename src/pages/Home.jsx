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
import HowItWorks from "../components/HowItWork";
import UserForm from "../components/Forms/userForm";
import ReferralForm from "../components/Forms/ReferralForm";
import StudentInfoForm from "../components/Forms/studentInfo";
import StudentNeedForm from "../components/Forms/StudentNeedForm";
import DonorForm from "../components/Forms/DonationForm";
function HomePage() {
  return (
    <>
      <Hero />
      <ShowCase />
      <FeaturedTopics />
      <ThreeMain />
      <DokaDesc />
      <HowItWorks />
      <RaiseForAnyone />
      <DonorForm />
      <StudentNeedForm />
      <UserForm />
      <ReferralForm />
      <StudentInfoForm />
    </>
  );
}

export default HomePage;
