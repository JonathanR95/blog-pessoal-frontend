import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';



function App() {
  return (
  <Router>

    <Navbar />

        <Routes> {/* Switch */}
        
  
          <Route path='/' element={<Login/>} />

          <Route path='/login' element={<Login/>} />

          <Route path='/home' element={<Home />} />
    

      </Routes>

    <Footer />

  </Router>
  );
};

export default App;
