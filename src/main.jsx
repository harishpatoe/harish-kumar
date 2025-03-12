import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Footer from './Components/Footer.jsx'


import NU from './Practice/NU.jsx'
import Task from './Practice/Task.jsx'


createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/footer" element={<Footer />} /> 
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

    
    <BrowserRouter>
      <Routes>
        <Route path="/nu" element={<NU />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </BrowserRouter>
  </div>
  
)
