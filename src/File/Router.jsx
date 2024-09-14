import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeCards from '../Components/HomeCards';
import CustomerSupport from '../Components/CustomerSupport';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services'
import Cart from '../Components/Cart';
import ServicesPage from '../Components/ServicesPage';
import Dashboard from "../Components/Dashboard";


const Router = () => {
  return (
    <BrowserRouter>

        <Navbar />

      <Routes>
        <Route path='/' element={<HomeCards />} />
        <Route path='/customersupport' element={<CustomerSupport />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router