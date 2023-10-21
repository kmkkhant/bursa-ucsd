import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Home from './components/Home/Home'
import ContactPage from './components/Contact/Contact';


function App() {
  return (
    <div>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
