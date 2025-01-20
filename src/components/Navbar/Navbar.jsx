import Logo from '../../assets/images/third-logo.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className='logo'/>
      <h1><strong>RECIPE BOOK</strong></h1>
    </nav>
  );
}

export default Navbar;