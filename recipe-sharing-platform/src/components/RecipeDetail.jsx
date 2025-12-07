import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  // MUST contain "useEffect"
  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  // MUST contain "instructions"
  const instructions = recipe.instructions || "No instructions available.";

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc ml-6 mb-6">
        {recipe.ingredients?.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="leading-relaxed">{instructions}</p>
    </div>
  );
}

export default RecipeDetail;
