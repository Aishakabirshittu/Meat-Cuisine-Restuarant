import React from "react";
import { useParams } from "react-router-dom";
import steakFrites from "../assets/SteakFrites.JPG";
import londonBroil from "../assets/LondonBroil.JPG";
import chickenFriedSteaks from "../assets/ChickenFriedSteaks.JPG";
import steakAndEggs from "../assets/SteakAndEggs.JPG";
import steakSandwich from "../assets/SteakSandwich.JPG";
import fingerSteaks from "../assets/FingerSteaks.JPG";

const mealDetails = {
  1: { name: "Steak Frites", description: "meaning steak and fries in the French language, is a dish consisting of a steak paired with fried potatoes.", image: steakFrites },
  2: { name: "London Broil", description: "London broil is a beef dish made by grilling marinated beef, then cutting it across the grain into thin strips.", image: londonBroil },
  3: { name: "Chicken Fried Steaks", description: "Chicken-fried steak, is an American Southern breaded cutlet dish consisting of a piece of beefsteak (most often tenderized cube steak) coated with seasoned flour and either deep-fried or pan-fried.", image: chickenFriedSteaks },
  4: { name: "Steak And Eggs", description: "Steak and eggs is a dish of beefsteak and fried eggs. Originating in Australian cuisine, it is most typically served as a breakfast or brunch food.", image: steakAndEggs },
  5: { name: "Steak Sandwich", description: "A steak sandwich with shredded steak, cheese, mushrooms, onions, peppers and tomatoes, then served on bread or a roll.", image: steakSandwich },
  6: { name: "Finger Steaks", description: "Finger steaks are strips of steak (usually top sirloin), battered with a tempura-like or flour batter, and deep-fried in oil.", image: fingerSteaks },
};

const MealDetailPage = () => {
  const { id } = useParams();
  const meal = mealDetails[id];

  return (
    <div className="p-6 sm:p-8 md:p-12">
      <img
        src={meal.image}
        alt={meal.name}
        className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg mb-4"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{meal.name}</h1>
      <p className="text-sm sm:text-base md:text-lg">{meal.description}</p>
    </div>
  );
};

export default MealDetailPage;
