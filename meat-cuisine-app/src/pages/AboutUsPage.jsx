import React from "react";
import aboutImage from "../assets/AboutUs.jpg";

const AboutUsPage = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={aboutImage}
          alt="Restaurant Interior"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-sm sm:text-base md:text-lg">
            Welcome to Meat Cuisine, where we specialize in serving the finest meat-based
            cuisines. Our chefs use the freshest ingredients to craft delicious meals that will
            leave you craving more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
