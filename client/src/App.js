import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Main from './pages/Main'
import Footer from './components/Footer'
import './css/app.css'

export default function App() {

  return (
    <div className="nav-container">
      <Router>
        <nav className="nav-bar" >
          <Link to="/">Home</Link>
          <Link to="/travel">Travel Log</Link>
          <Link to="/about">About me</Link>
        </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </Router>     
      <Footer /> 
    </div>
  );
}

