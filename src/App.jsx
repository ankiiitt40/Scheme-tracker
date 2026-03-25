import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import About from './pages/About';
import AllSchemes from './pages/AllSchemes';
import AdminPanel from './pages/AdminPanel';

import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scheme/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/schemes" element={<AllSchemes />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
