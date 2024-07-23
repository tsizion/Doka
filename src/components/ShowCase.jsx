/* eslint-disable no-unused-vars */
import React from "react";
import mainimage from "../assets/bg.png";
import newimage from "../assets/new.jpg";
import sick from "../assets/sick.jpg";

const ShowCase = () => {
  return (
    <div className="w-full bg-[#ffffff] md:py-10">
      <h1 className="md:text-6xl sm:text-5xl text-3xl md:py-6 mx-10">
        Discover Fundraisers
      </h1>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Column */}
          <div className="flex flex-col items-start bg-[#ffffffab] p-4 rounded-lg hover:bg-[#fff9f9] ">
            <div
              className="w-full h-[500px] bg-cover bg-center rounded-lg mb-4 hover:scale-95"
              style={{ backgroundImage: `url(${newimage})` }}
            ></div>

            <p className="text-lg font-sans  mt-[5px] mb-[30px]">
              Description of the main item or donation.
            </p>
            <p className="text-green-500 font-sans">Raised Amount: $1,234</p>
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>

          {/* Second Column */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-start bg-[#ffffffab] p-4 rounded-lg hover:bg-[#fff9f9] ">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4 hover:scale-95"
                style={{ backgroundImage: `url(${newimage})` }}
              ></div>

              <p className="text-lg font-sans  mt-[5px] mb-[30px]">
                Description of the main item or donation.
              </p>
              <p className="text-green-500 font-sans">Raised Amount: $1,234</p>
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div className="flex flex-col items-start bg-[#ffffffab] p-4 rounded-lg hover:bg-[#fff9f9] ">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4 hover:scale-95"
                style={{ backgroundImage: `url(${sick})` }}
              ></div>

              <p className="text-lg font-sans  mt-[5px] mb-[30px]">
                Description of the main item or donation.
              </p>
              <p className="text-green-500 font-sans">Raised Amount: $1,234</p>
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div className="flex flex-col items-start bg-[#ffffffab] p-4 rounded-lg hover:bg-[#fff9f9] ">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4 hover:scale-95"
                style={{ backgroundImage: `url(${mainimage})` }}
              ></div>

              <p className="text-lg font-sans  mt-[5px] mb-[30px]">
                Description of the main item or donation.
              </p>
              <p className="text-green-500 font-sans">Raised Amount: $1,234</p>
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div className="flex flex-col items-start bg-[#ffffffab] p-4 rounded-lg hover:bg-[#fff9f9] ">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4 hover:scale-95"
                style={{ backgroundImage: `url(${mainimage})` }}
              ></div>

              <p className="text-lg font-sans  mt-[5px] mb-[30px]">
                Description of the main item or donation.
              </p>
              <p className="text-green-500 font-sans">Raised Amount: $1,234</p>
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
