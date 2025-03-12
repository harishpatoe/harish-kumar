// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
// import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
    // <>
      // </>
  )
}

export default App
