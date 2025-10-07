import React from "react";

interface RecipeCardProps {
  meal: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ meal }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg">{meal.strMeal}</h2>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {meal.strCategory}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <p>30 min</p>
          <p>{meal.strArea}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
