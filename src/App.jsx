import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import About from './pages/About-Us';
import Academics from './pages/Academics';
import Contact from './pages/Contact-Us';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/about-us' replace />} />

        <Route path='/about-us' element={<About />} />

        <Route path='/academics' element={<Academics />} />

        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
