import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'


createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} /> 
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  </div>
  
)
