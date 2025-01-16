import { useState, useEffect } from 'react';
import RecipeItem from './ListItem';
import './List.css'
function List() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('recipes.json')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <ul className="list">
      {recipes.map(recipe => (
        <RecipeItem key={recipe.id} recipe={recipe} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default List;
