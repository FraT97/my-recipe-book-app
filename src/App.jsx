import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/pages/About';
import Dashboard from './components/pages/Dashboard';
import ItemDetails from './components/pages/ItemDetails';
import NotFound from './components/pages/NotFound';
import AddItemForm from './components/AddItem/AddItemForm';
import './App.css';

function App() {


  return (


    <div className="recipe-book-app">

      <Navbar />
      <Sidebar />
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recipes/:id" element={<ItemDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/addrecipe" element={<AddItemForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;

