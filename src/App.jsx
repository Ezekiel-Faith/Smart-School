import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About-Us';
import Gallery from './pages/Gallery';
import Admissions from './pages/Admission'; // Fix if typo exists
import Academics from './pages/Academics';
import Contact from './pages/Contact-Us';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About-Us" element={<About />} caseSensitive />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Admission" element={<Admissions />} />
          <Route path="/Academics" element={<Academics />} />
          <Route path="/Contact-Us" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;