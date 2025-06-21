import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Vans from './pages/Vans/Vans'
import "./server"
import VanDetails from './pages/Vans/VanDetails'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import HostVans from "./pages/Host/HostVans/HostVans"
import HostVanDetail from './pages/Host/HostVans/HostVanDetail'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />} >
              <Route index element={<h1>Host Van Detail goes here</h1>} />
              <Route path='pricing' element={<h1>Pricing goes here</h1>} />
              <Route path='photos' element={<h1>Photos goes here</h1>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
