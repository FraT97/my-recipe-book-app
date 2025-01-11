import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {


  return (
    <>
      <div className='recipe-book-app'>
        <Navbar />
        <Home />
        <Sidebar />
        <Footer />
      </div>
    </>
  )
}

export default App
