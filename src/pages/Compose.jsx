import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Compose() {
  const { nonprofitId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:text-blue-700 mb-6 flex items-center"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Cold Email Agent
          </h1>
          {nonprofitId && (
            <p className="text-gray-600 mt-2">
              Nonprofit ID: {nonprofitId}
            </p>
          )}
        </div>

        {/* Placeholder Content */}
        <div className="space-y-6">
          
          {/* Nonprofit Info Card - TODO: Fetch real data */}
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500">
              Nonprofit information will be displayed here
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Team 3: Fetch and display nonprofit details from Firebase
            </p>
          </div>

          {/* AI Generation Section - TODO: Implement */}
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500">
              AI email generation button goes here
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Team 2: Implement AI-powered email generation
            </p>
          </div>

          {/* Email Editor - TODO: Implement */}
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 mb-4">
              Email editor interface goes here
            </p>
            <p className="text-gray-400 text-sm">
              Team 3: Create subject line input, email body textarea, and action buttons
            </p>
          </div>

        </div>

        {/* TODO: Add your components below */}
        {/* 
          Example structure:

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              {nonprofit.name}
            </h2>
            <p className="text-gray-600">{nonprofit.mission}</p>
          </div>

          <button 
            onClick={handleGenerateEmail}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg"
          >
            ✨ Generate Email with AI
          </button>

          <div className="bg-white rounded-lg shadow p-6">
            <label className="block mb-2">Subject</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg"
            />

            <label className="block mb-2 mt-4">Email Body</label>
            <textarea 
              rows={12}
              className="w-full px-4 py-2 border rounded-lg"
            />

            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
              Send Email
            </button>
          </div>
        */}

      </div>
    </div>
  );
}
