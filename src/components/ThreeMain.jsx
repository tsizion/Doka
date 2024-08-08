import React from "react";
import student from "../assets/student.jpg";
import book from "../assets/books.jpg";
import school from "../assets/school.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const ThreeMain = () => {
  return (
    <div className="w-full bg-white py-16 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 ">
        <div
          className="h-[400px] bg-cover bg-center rounded-t-xl mx-6 mb-6 hover:scale-95 flex flex-col justify-end relative group"
          style={{ backgroundImage: `url(${student})` }}
        >
          <span className="absolute top-4 left-4 bg-[#e0c0f8] text-[#371d3b] px-3 rounded-lg">
            Back to school
          </span>
          <div className="bg-[#f7f7f7] h-35">
            <p className="px-7 py-3">Fundraising for Students</p>
            <button className="m-3 text-black rounded-lg flex items-center px-4 py-2 transition-transform transition-colors duration-300 group-hover:bg-[#ffffff] group-hover:translate-x-2">
              <span className="mr-2">Learn more</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>

        <div
          className="h-[400px] bg-cover bg-center rounded-t-xl mx-6 mb-6 hover:scale-95 flex flex-col justify-end relative group"
          style={{ backgroundImage: `url(${book})` }}
        >
          <span className="absolute top-4 left-4 bg-[#e0c0f8] text-[#371d3b] px-3 rounded-lg">
            Urgent
          </span>
          <div className="bg-[#f7f7f7] h-35">
            <p className="px-7 py-3">Fundraising for Students</p>
            <button className="m-3 text-black rounded-lg flex items-center px-4 py-2 transition-transform transition-colors duration-300 group-hover:bg-[#ffffff] group-hover:translate-x-2">
              <span className="mr-2">Learn more</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
        <div
          className="h-[400px] bg-cover bg-center rounded-t-xl mx-6 mb-6 hover:scale-95 flex flex-col justify-end relative group"
          style={{ backgroundImage: `url(${school})` }}
        >
          <span className="absolute top-4 left-4 bg-[#e0c0f8] text-[#371d3b] px-3 rounded-lg">
            News
          </span>
          <div className="bg-[#f7f7f7] h-35">
            <p className="px-7 py-3">Fundraising for Students</p>
            <button className="m-3 text-black rounded-lg flex items-center px-4 py-2 transition-transform transition-colors duration-300 group-hover:bg-[#ffffff] group-hover:translate-x-2">
              <span className="mr-2">Learn more</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeMain;
