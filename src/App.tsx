import React, { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

const App: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [search, setSearch] = useState("chicken");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) setMeals(data.meals);
      })
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="min-h-screen bg-orange-50">
      <header className="p-6 text-center">
        <h1 className="text-3xl font-bold text-orange-600">RecipeHub</h1>
        <p className="text-gray-600">
          Discover delicious recipes from around the world
        </p>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search recipes..."
          className="mt-4 px-4 py-2 border rounded-lg w-64 focus:outline-none"
        />
      </header>

      <main
        className="p-6 grid gap-6 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
        max-w-6xl mx-auto"
      >
        {meals.length > 0 ? (
          meals.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No recipes found.
          </p>
        )}
      </main>
    </div>
  );
};

export default App;
