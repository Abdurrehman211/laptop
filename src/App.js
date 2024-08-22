import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';

import Loader from './Components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3-second delay

    // Cleanup timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader /> // Show the loader if loading is true
      ) : (
        <Router>
          <header>
            <Navbar />
          </header>
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/about" element={} /> */}
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
