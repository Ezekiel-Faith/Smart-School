import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About-Us';
import Academics from './pages/Academics';
import Contact from './pages/Contact-Us';
import NavBar from './pages/NavBar';
import Admission from './pages/Admission';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/admission' element={<Admission />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
