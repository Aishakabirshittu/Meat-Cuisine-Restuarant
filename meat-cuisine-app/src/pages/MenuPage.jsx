import React from "react";
import { Link } from "react-router-dom";
import steakFrites from "../assets/SteakFrites.JPG";
import londonBroil from "../assets/LondonBroil.JPG";
import chickenFriedSteaks from "../assets/ChickenFriedSteaks.JPG";
import steakAndEggs from "../assets/SteakAndEggs.JPG";
import steakSandwich from "../assets/SteakSandwich.JPG";
import fingerSteaks from "../assets/FingerSteaks.JPG";

const menuItems = [
  { id: 1, name: "Steak Frites", image: steakFrites },
  { id: 2, name: "London Broil", image: londonBroil },
  { id: 3, name: "Chicken Fried Steaks", image: chickenFriedSteaks },
  { id: 4, name: "Steak And Eggs", image: steakAndEggs },
  { id: 5, name: "Steak Sandwich", image: steakSandwich },
  { id: 6, name: "Finger Steaks", image: fingerSteaks },
];

const MenuPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {menuItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg sm:text-xl font-bold mb-2">{item.name}</h2>
            <Link to={`/menu/${item.id}`} className="text-red-600 hover:text-red-800 hover:underline text-sm sm:text-base">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
