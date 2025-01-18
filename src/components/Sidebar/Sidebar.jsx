import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      
      <Link to="/about">About</Link> 
      <Link to="/AddItem">Add Item</Link> 
    </aside>
  );
}

export default Sidebar;
