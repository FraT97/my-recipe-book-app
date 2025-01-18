
import { useState, useEffect } from 'react';
import ListItem from '../List/ListItem';


function Dashboard() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('recipes.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h2>Recipe List</h2>
      <ul className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <ListItem key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>Loading recipes...</p>
        )}
      </ul>
    </div>
  );
}

export default Dashboard;

