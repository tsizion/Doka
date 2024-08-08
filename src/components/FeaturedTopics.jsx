import React from "react";
import newimage from "../assets/new.jpg";
const FeaturedTopics = () => {
  return (
    <div className="w-full bg-[#ffffff] md:py-10">
      <h1 className="md:text-4xl sm:text-3xl text-xl md:py-6 mx-10">
        Featured Topics
      </h1>
      <div className="m-10 bg-gray-100 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="my-6 mx-6 bg-[#954dcd45] inline-block self-start px-2 rounded-lg">
              Urgent Cause
            </h3>
            <div
              className="h-[300px] bg-cover bg-center rounded-lg mx-6 mb-6 hover:scale-95"
              style={{ backgroundImage: `url(${newimage})` }}
            ></div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center justify-center p-6">
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vehicula odio et libero vestibulum, a sollicitudin metus
              ullamcorper. Nulla facilisi. Sed auctor velit ac sapien interdum,
              ac luctus sapien suscipit.
            </p>
            <button className=" bg-[#00df9a] px-7 py-3 mt-5 text-black rounded-lg ">
              Donate now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTopics;
