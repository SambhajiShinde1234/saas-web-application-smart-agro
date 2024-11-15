import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
