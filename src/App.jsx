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
import HostVanInfo from './pages/Host/HostVans/HostVanInfo'
import HostVanPricing from './pages/Host/HostVans/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVans/HostVanPhotos'

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
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
