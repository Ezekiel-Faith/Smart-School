// import React from 'react';
// import SideBar from './components/SideBarForStudent/sideBar';
// import Dashboard from './pages/Dashboard';

// function App() {
//   return (
//     <div className='flex '>
//       <SideBar />
//       <Dashboard />
//     </div>
//   );
// }

// export default App;

import SideBar from './components/SideBarForStudent/sideBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='flex'>
      <SideBar />

      <main className='flex-1 lg:ml-60'>
        <Routes>
          <Route index element={<Dashboard />} />

          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// what to fix later on
// 1. Message when quiz is completed
// 2. Grading system
// 3. Generate results summary per subject selected
// 4. Make question and options random, not static
// 5. confirmation question when the go back btn is pressed while quiz is active
// 6. expand quiz area
