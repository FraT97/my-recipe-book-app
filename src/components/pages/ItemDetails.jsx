
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  


function ItemDetails() {
  const { id } = useParams();  
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    
    fetch('recipes.json')  
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === id);  
        setRecipe(selectedRecipe);  
      });
  }, [id]);  

  if (!recipe) {
    return <p>Loading recipe details...</p>;  
  }

  return (
    <div className="item-details">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p><strong>Calories:</strong> {recipe.calories}</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>  
      <p><strong>Instructions:</strong> {recipe.instructions}</p>  
      <p>{recipe.calories < 180 ? '✅ Healthy Choice' : '❌ Consider an Alternative'}</p>
      {recipe.calories > 300 ? <p>High in Calories</p> : <p>Lower in Calories</p>}
    </div>
  );
}

export default ItemDetails;
