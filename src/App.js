import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/contact"> Contact </Link>
          <Link to="/about"> About </Link>
          <Link to="/home"> Home </Link>
       </ul>
      </nav> 
      <Routes>
       <Route path='contact' element={<Contact />} />
       <Route path='about' element={<About />} />
       <Route path='home' element={<Home />} /> 
      </Routes> 
    </div>
  );
}

export default App;
