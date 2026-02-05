import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navigation Bar Component
 * 
 * TODO for students:
 * - Add authentication state
 * - Add user profile dropdown
 * - Add logout functionality
 * - Customize logo and styling
 */
export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'hover:bg-gray-300' : 'hover:bg-gray-300';
  };

  return (
    <nav className="text-gray-800 shadow-lg" style={{ backgroundColor: '#ebebec' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">GDSC Outreach</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')}`}
            >
              Dashboard
            </Link>
            <Link
              to="/compose"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/compose')}`}
            >
              Compose
            </Link>
            
            {/* TODO: Add more navigation items as needed */}
          </div>
        </div>
      </div>
    </nav>
  );
}
