import React from "react";
import stu1 from "../assets/stu1.jpg";
import stu3 from "../assets/stu3.jpg";
import stu4 from "../assets/stu4.jpg";
import stu2 from "../assets/stu2.jpg";
import stu5 from "../assets/stu5.jpg";

// Mock Data (Normally you would fetch this from an API)
const studentNeeds = [
  {
    needName: "Scholarship for Student A",
    goalAmount: 5000,
    raisedAmount: 1200,
    description: "This is a description for the scholarship need.",
    studentPhotos: [stu1],
    status: "Fundraising",
  },
  {
    needName: "Medical Fund for Student B",
    goalAmount: 4000,
    raisedAmount: 1500,
    description: "This is a description for the medical fund need.",
    studentPhotos: [stu2],
    status: "Fundraising",
  },
  {
    needName: "Study Material Fund for Student C",
    goalAmount: 2000,
    raisedAmount: 800,
    description: "This is a description for the study material fund.",
    studentPhotos: [stu3],
    status: "Fundraising",
  },
  {
    needName: "Housing Fund for Student D",
    goalAmount: 3000,
    raisedAmount: 1200,
    description: "This is a description for the housing fund need.",
    studentPhotos: [stu4],
    status: "Fundraising",
  },
  {
    needName: "Housing Fund for Student D",
    goalAmount: 3000,
    raisedAmount: 1200,
    description: "This is a description for the housing fund need.",
    studentPhotos: [stu5],
    status: "Fundraising",
  },
];

const ShowCase = () => {
  return (
    <div className="w-full bg-[#ffffff] md:py-10">
      <h1 className="md:text-6xl sm:text-5xl text-3xl md:py-6 mx-10">
        Discover Fundraisers
      </h1>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Column - Bigger one */}
          <div className="flex flex-col items-start bg-[#ffffffab] p-4 rounded-lg hover:bg-[#fff9f9] ">
            <div
              className="w-full h-[500px] bg-cover bg-center rounded-lg mb-4 hover:scale-95"
              style={{
                backgroundImage: `url(${studentNeeds[0].studentPhotos[0]})`,
              }}
            ></div>
            <p className="text-lg font-sans mt-[5px] mb-[30px]">
              {studentNeeds[0].description}
            </p>
            <p className="text-green-500 font-sans">
              Raised Amount: ${studentNeeds[0].raisedAmount}
            </p>
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500"
                style={{
                  width: `${
                    (studentNeeds[0].raisedAmount /
                      studentNeeds[0].goalAmount) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>

          {/* Second Column - Other smaller ones */}
          <div className="grid grid-cols-2 gap-4">
            {studentNeeds.slice(1).map((need, index) => (
              <div
                key={index}
                className="flex flex-col items-start bg-[#ffffffab] p-4 rounded-lg hover:bg-[#fff9f9] "
              >
                <div
                  className="w-full h-40 bg-cover bg-center rounded-lg mb-4 hover:scale-95"
                  style={{ backgroundImage: `url(${need.studentPhotos[0]})` }}
                ></div>
                <p className="text-lg font-sans mt-[5px] mb-[30px]">
                  {need.description}
                </p>
                <p className="text-green-500 font-sans">
                  Raised Amount: ${need.raisedAmount}
                </p>
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500"
                    style={{
                      width: `${(need.raisedAmount / need.goalAmount) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
