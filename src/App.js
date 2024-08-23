import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Loader from './Components/Loader';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 3-second delay

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
            <Route path="/home" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
