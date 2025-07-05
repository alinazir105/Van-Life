import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import AuthRequired from './components/AuthRequired'
import Home from "./pages/Home"
import "./server"

// Lazy-loaded pages
const About = lazy(() => import('./pages/About'))
const Vans = lazy(() => import('./pages/Vans/Vans'))
const VanDetails = lazy(() => import('./pages/Vans/VanDetails'))

const Dashboard = lazy(() => import('./pages/Host/Dashboard'))
const Income = lazy(() => import('./pages/Host/Income'))
const Reviews = lazy(() => import('./pages/Host/Reviews'))

const HostVans = lazy(() => import('./pages/Host/HostVans/HostVans'))
const HostVanDetail = lazy(() => import('./pages/Host/HostVans/HostVanDetail'))
const HostVanInfo = lazy(() => import('./pages/Host/HostVans/HostVanInfo'))
const HostVanPricing = lazy(() => import('./pages/Host/HostVans/HostVanPricing'))
const HostVanPhotos = lazy(() => import('./pages/Host/HostVans/HostVanPhotos'))

const NotFound = lazy(() => import('./pages/NotFound'))
const Login = lazy(() => import('./Login'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center mt-10 text-lg font-medium">Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetails />} />

            <Route element={<AuthRequired />}>
              <Route path="host" element={<HostLayout />}>
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

            <Route path='login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
