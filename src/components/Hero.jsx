/* eslint-disable no-unused-vars */
import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className=" text-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          TURNING COMPASSION INTO ACTION
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6">
          Join Hands, Change Lives
        </h1>
        <div>
          <ReactTyped
            strings={["Seamless Contributions", "Significant Results"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className="bg-[#00df9a] w-[200px] font-medium rounded-md my-7 mx-auto py-3 px-6  ">
          Start Raising Funds
        </button>
      </div>
    </div>
  );
};

export default Hero;
