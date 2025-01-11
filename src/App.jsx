import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
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
