import { useState, useEffect } from 'react';
import RecipeItem from './ListItem';
import './List.css';

function List() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    fetch('http://localhost:5000/recipes') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/recipes/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete recipe');
        }
        return fetch('http://localhost:5000/recipes'); 
      })
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((err) => setError(err.message));
  };

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="list">
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} onDelete={handleDelete} />
      ))}
    </ul>
  );
}

export default List;
