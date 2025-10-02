import React from 'react';
import Header1 from './components/SchoolHeader/Header1';


function App() {
  return (
    <div>
     <Header1 
        user={{ 
          name: "Lionel Messi", 
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVTiTn7i7yJu9CZAeh5WqEz74iC21kCqhsw&s" 
        }}/>
    </div>
  );
}

export default App;
