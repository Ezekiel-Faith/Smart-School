import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Import all your page components
// Ensure these paths match your actual file structure (e.g., About-Us.jsx vs About.jsx)
import About from './pages/About-Us'; // Assuming you renamed About-Us.jsx to About.jsx as per standard
import Academics from './pages/Academics';

// You might create a simple Home component for the root path, or redirect.
// For now, let's assume a simple Home component or a redirect to About.
// Example of a simple Home component:
// function Home() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-gray-800">Welcome to Our School!</h1>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/about-us' replace />} />

        <Route path='/about-us' element={<About />} />

        <Route path='/academics' element={<Academics />} />
      </Routes>
    </Router>
  );
}

export default App;
