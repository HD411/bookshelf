import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Routes,
} from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/Home';
import Add from './pages/add';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
