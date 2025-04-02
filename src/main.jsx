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
import GoogleLogin from './Pages/Googlelogin.jsx';
import {GoogleOAuthProvider} from '@react-oauth/google';


import NU from './Practice/NU.jsx'
import Task from './Practice/Task.jsx'

const GoogleWrapper = () => {
  return(
  <GoogleOAuthProvider clientId=" 304977618829-a948c4gjul7i0hd4a1nu757lcs1or77p.apps.googleusercontent.com">
    <GoogleLogin />
  </GoogleOAuthProvider>
  )
  
}
createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      {/* <Header /> */}
        <Routes>
        <Route path="/" element={<GoogleWrapper />} />
          <Route path="/app" element={<App />} />
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
