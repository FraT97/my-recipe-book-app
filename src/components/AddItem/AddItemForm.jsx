import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import  "./AddItemForm.css"



const API_URL = "http://localhost:5000/recipes";



function AddItemForm() {
    
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');
  
    const handleSubmit = (e) => {        
    e.preventDefault();
    const newRecipe = { 
        name, 
        image, 
        calories: Number(calories), 
        servings: Number(servings) 
      };
  
      axios
        .post(`${API_URL}`, newRecipe)
        .then(() => {
          alert("Recipe added !");
          setName('');
          setImage('');
          setCalories('');
          setServings('');
        })
        .catch((error) => {
          console.error("Error adding recipe:", error);
          alert("Failed to add recipe.Try again.");
        });
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