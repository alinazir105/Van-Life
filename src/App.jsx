import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './ui/Navbar'
import Footer from './ui/Footer'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<h1>Vans Page</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
