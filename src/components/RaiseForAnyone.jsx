/* eslint-disable react/prop-types */
import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Reusable component
const FundraisingOption = ({ title, description }) => {
  return (
    <div className="my-5 group hover:bg-gray-100 transition duration-300 p-4 rounded-lg cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl">{title}</h1>
        <span className="w-[30px] h-[30px] bg-[#004521] rounded-full flex items-center justify-center group-hover:bg-green-700 transition duration-300">
          <FontAwesomeIcon
            className="text-white group-hover:text-gray-900 transition duration-300"
            icon={faAngleRight}
          />
        </span>
      </div>
      <p className="text-lg py-4 mb-3 text-[#8e8e8e]">{description}</p>
      <hr className="border-1 border-gray-300 rounded-lg" />
    </div>
  );
};

// Main component
const RaiseForAnyone = () => {
  return (
    <div className=" px-20 py-20 ">
      <h2 className="text-[30px] md:text-[40px]">Fundraise for anyone</h2>
      <br />
      <FundraisingOption
        title="Yourself"
        description="Funds are delivered to your bank account for your own use"
      />
      <FundraisingOption
        title="Friends and family"
        description="You’ll invite a beneficiary to receive funds or distribute them yourself"
      />
      <FundraisingOption
        title="Charity"
        description="Charity Funds are delivered to your chosen nonprofit for you"
      />
    </div>
  );
};

export default RaiseForAnyone;
