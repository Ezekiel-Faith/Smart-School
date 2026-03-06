// import SideBar from './components/SideBarForStudent/sideBar';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Header from './components/SchoolHeader/Header';

// function App() {
//   return (
//     <div className=''>
//       <SideBar />

//       <main className=' lg:ml-64'>
//         <Header
//           user={{
//             name: 'Lionel Messi',
//             image:
//               'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVTiTn7i7yJu9CZAeh5WqEz74iC21kCqhsw&s',
//           }}
//         />

//         <Routes>
//           <Route index element={<Navigate to='/dashboard' replace />} />

//           <Route path='dashboard' element={<Dashboard />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;

import SideBar from './components/SideBarForStudent/sideBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/SchoolHeader/Header';

function App() {
  return (
    <div className=''>
      {/* Sidebar */}
      <SideBar />

      {/* Right Content Area */}
      <div className='flex flex-col flex-1 lg:ml-64'>
        <Header
          user={{
            name: 'Lionel Messi',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVTiTn7i7yJu9CZAeh5WqEz74iC21kCqhsw&s',
          }}
        />

        <main className='flex-1 p-4'>
          <Routes>
            <Route index element={<Navigate to='/dashboard' replace />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Routes>
        </main>
      </div>
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

// what to fix next
// 1. hamburger menu for mobile view
// 2. how side panel looks on mobile and tablet view
// 3. move logo to the right on sm and md
