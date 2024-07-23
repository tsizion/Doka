/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./HomeCards.css"; // Import CSS for styling

const HomeCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const cardsData = [
    {
      id: 1,
      image: "left-card-image.jpg", // Replace with actual image path
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      totalRaised: "$50,000",
    },
    {
      id: 2,
      image: "right-card-image1.jpg", // Replace with actual image path
      description: "Fundraiser description 1",
    },
    {
      id: 3,
      image: "right-card-image2.jpg", // Replace with actual image path
      description: "Fundraiser description 2",
    },
    {
      id: 4,
      image: "right-card-image3.jpg", // Replace with actual image path
      description: "Fundraiser description 3",
    },
    {
      id: 5,
      image: "right-card-image4.jpg", // Replace with actual image path
      description: "Fundraiser description 4",
    },
  ];

  return (
    <div className="home-cards-container">
      <div className="left-card">
        {cardsData
          .filter((card) => card.id === 1) // Only the first card will be on the left
          .map((card) => (
            <div
              key={card.id}
              className="card bg-white rounded-lg shadow-md p-6"
            >
              <img
                src={card.image}
                alt="Fundraiser"
                className="card-image w-full h-64 object-cover rounded-t-lg"
              />
              <div className="card-content p-4">
                <p className="text-lg font-semibold mb-2">{card.description}</p>
                <p className="text-gray-600">{`Total Raised: ${card.totalRaised}`}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="right-card-grid">
        {cardsData
          .filter((card) => card.id !== 1) // Exclude the first card from the right grid
          .map((card, index) => (
            <div
              key={card.id}
              className={`card bg-white rounded-lg shadow-md p-4 ${
                selectedCard === card.id ? "selected" : ""
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <img
                src={card.image}
                alt="Fundraiser"
                className="card-image w-full h-48 object-cover rounded-t-lg"
              />
              <div className="card-content p-4">
                <p className="text-lg font-semibold mb-2">{card.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeCards;
