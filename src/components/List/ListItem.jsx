import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListItem({ recipe, onDelete }) {
  return (
    <li className="recipe-item">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>

      
      <Link to={`/recipes/${recipe.id}`} className="view-details-link">View Details</Link>
      
      {recipe.calories < 180  ? <p>✅ Healthy Choice</p> : <p>❌ Consider an Alternative</p>}
      {recipe.calories > 300 ? <p>High in Calories</p> : <p>Lower in Calories</p>}

      <button onClick={() => onDelete(recipe.id)}>Delete</button>
    </li>
  );
}

ListItem.propTypes = {
    recipe: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      servings: PropTypes.number.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

export default ListItem;