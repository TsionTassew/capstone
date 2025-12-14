

import { useState, useEffect } from 'react';
import RecipeCard from './components/RecipeCard.jsx';
import './App.css';

const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    try {
      const url = apiURL + query;
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error('Failed to fetch recipes', err);
      setRecipes([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  return (
    <div className="container">
      <h2>Discover Authentic Recipes</h2>

      {isLoading && <p>Loading...</p>}

      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
