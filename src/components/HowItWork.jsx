import React from "react";
import step1Image from "../assets/step1.jpg"; // Replace with appropriate images
import step2Image from "../assets/step2.jpg";
import step3Image from "../assets/step3.jpg";

const HowItWorks = () => {
  return (
    <div className="w-full bg-[#f8f9fa] py-10">
      <h1 className="text-4xl text-center mb-6">How It Works</h1>
      <div className="mx-10">
        <div className="flex flex-col md:flex-row mb-10">
          <div className="md:w-1/3 p-4 flex flex-col items-center text-center">
            <img
              src={step1Image}
              alt="Step 1"
              className="h-[200px] w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Browse Student Needs
            </h3>
            <p className="text-lg">
              Explore the profiles of students seeking donations for various
              needs, including tuition, books, and living expenses.
            </p>
          </div>
          <div className="md:w-1/3 p-4 flex flex-col items-center text-center">
            <img
              src={step2Image}
              alt="Step 2"
              className="h-[200px] w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Choose Your Donation
            </h3>
            <p className="text-lg">
              Select a student or cause that resonates with you and choose how
              much you would like to contribute.
            </p>
          </div>
          <div className="md:w-1/3 p-4 flex flex-col items-center text-center">
            <img
              src={step3Image}
              alt="Step 3"
              className="h-[200px] w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Make a Difference</h3>
            <p className="text-lg">
              Complete your donation and watch the progress as students get
              closer to their goals, knowing you made a direct impact in their
              education and future.
            </p>
          </div>
        </div>

        {/* Additional Section (optional, but could include testimonials or other information) */}
        <div className="bg-white py-10 rounded-lg shadow-md mx-6 mt-10">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-center mb-6">
            By donating, you are helping students achieve their dreams. Start
            today and support the future.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#00df9a] text-black py-3 px-6 rounded-lg">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
