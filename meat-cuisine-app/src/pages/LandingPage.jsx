import React from "react";
import { useNavigate } from "react-router-dom"; 
import heroImage from "../assets/HeroImage.jpg";

const LandingPage = () => {
  const navigate = useNavigate(); 

  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Welcome to Meat Cuisine
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white mt-4">
          Home of the finest meat-based cuisines.
        </p>
        <button
          onClick={() => navigate("/menu")} 
          className="mt-6 inline-block bg-transparent border-2 border-white text-white py-2 px-6 rounded-lg hover:bg-red-600 hover:border-transparent hover:text-white transition-all duration-300"
        >
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
