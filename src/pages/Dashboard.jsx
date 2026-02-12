import React from 'react';

/**
 * Dashboard Page
 * 
 * TEAM 3 (Frontend) TODO:
 * - Fetch nonprofit data from Firebase
 * - Display nonprofit cards in a grid
 * - Add search functionality
 * - Add filter buttons (All, New, Contacted, Responded)
 * - Add statistics cards
 * - Implement real-time updates with onSnapshot
 * 
 * Example Firebase query:
 * const nonprofitsRef = collection(db, 'nonprofits');
 * const q = query(nonprofitsRef, where('status', '==', 'new'));
 * const unsubscribe = onSnapshot(q, (snapshot) => {
 *   // Update state with nonprofit data
 * });
 */
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
       

        {/* Placeholder Content */}
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500 text-lg">
            📊 Dashboard content goes here
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Team 3: Implement nonprofit listing, search, and filters
          </p>
        </div>

        {/* TODO: Add your components below */}
        {/* 
          Example structure:
          
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="Search nonprofits..."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="flex gap-3 mb-8">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              All
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-lg">
              New
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonprofits.map(org => (
              <div key={org.id} className="bg-white rounded-lg shadow p-6">
                <h3>{org.name}</h3>
                <p>{org.mission}</p>
              </div>
            ))}
          </div>
        */}
        
      </div>
    </div>
  );
}
