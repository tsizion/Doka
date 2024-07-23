import React from "react";
import newimage from "../assets/new.jpg";
const FeaturedTopics = () => {
  return (
    <div className="w-full bg-[#ffffff] md:py-10">
      <h1 className="md:text-4xl sm:text-3xl text-xl md:py-6 mx-10">
        Featured Topics
      </h1>
      <div className="m-10 bg-gray-100 rounded-lg">
        <div className="flex flex-col">
          <h3 className=" my-6 mx-6 bg-[#954dcd45] inline-block self-start px-2  rounded-lg">
            Urgent Cause
          </h3>
          <div
            className="md:w-[50%] h-[300px] bg-cover bg-center rounded-lg  mx-6 mb-6 hover:scale-95"
            style={{ backgroundImage: `url(${newimage})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTopics;
