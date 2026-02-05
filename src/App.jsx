import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Compose from './pages/Compose';

//Main Application Component

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <Routes>
          {/* Dashboard - Main page */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Compose - Email generation page */}
          <Route path="/compose" element={<Compose />} />
          <Route path="/compose/:nonprofitId" element={<Compose />} />
          
          {/* TODO: Add more routes as needed */}
          {/* 
            Examples:
            <Route path="/login" element={<Login />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
