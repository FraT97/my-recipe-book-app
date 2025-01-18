import { Link } from 'react-router-dom';
import { useState } from 'react';

function AddItemForm({ addRecipe }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newRecipe = {
      id: Date.now().toString(), 
      name,
      image,
      calories: parseInt(calories),
      servings: parseInt(servings),
    };
    addRecipe(newRecipe);
   
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (

     
    <div className="add-item-form">
    <Link to={`/AddItem`}></Link>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            
          />
        </div>
        <div>
          <label>Calories:</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            
          />
        </div>
        <div>
          <label>Servings:</label>
          <input
            type="number"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddItemForm;