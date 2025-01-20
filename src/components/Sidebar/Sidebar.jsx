import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/home">Home</Link>
      <Link to="/addrecipe">Add Recipe</Link>
      <Link to="/about">About</Link>
      
    </aside>
  );
}

export default Sidebar;
