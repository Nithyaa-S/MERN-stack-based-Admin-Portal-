import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Dashboard
        </h1>

        {/* Navigation buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Navigate to agent management */}
          <Link
            to="/agents"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg text-center shadow-md transition"
          >
            Manage Agents
          </Link>

          {/* Navigate to CSV Upload */}
          <Link
            to="/upload"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg text-center shadow-md transition"
          >
            Upload CSV
          </Link>

          {/* Navigate to Task View */}
          <Link
            to="/tasks"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 rounded-lg text-center shadow-md transition"
          >
            View Assigned Tasks
          </Link>

          {/* Logout button – goes back to login */}
          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-lg text-center shadow-md transition"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
