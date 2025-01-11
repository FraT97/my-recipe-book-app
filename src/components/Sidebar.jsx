import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/create">Add Recipe</Link>
    </aside>
  );
}

export default Sidebar;