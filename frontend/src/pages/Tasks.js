import React, { useEffect, useState } from "react";
import API from "../api"; // Axios instance for API calls with token support

const Tasks = () => {
  // State to hold all tasks fetched from the backend
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend when component mounts
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks"); // API call to fetch tasks
      setTasks(res.data); // Set tasks to state
    } catch (err) {
      console.error(err); // Log error if API call fails
    }
  };

  // useEffect to fetch tasks on initial render
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      {/* Main container for task list display */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          📋 Agent Task Distribution
        </h2>

        {/* If no tasks are available, show message */}
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks assigned yet.</p>
        ) : (
          <div className="overflow-x-auto">
            {/* Table displaying tasks */}
            <table className="w-full table-auto border-collapse text-left">
              <thead>
                <tr className="bg-blue-100 text-blue-800">
                  <th className="px-4 py-2">Agent</th>
                  <th className="px-4 py-2">First Name</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {/* Loop over each task and display details */}
                {tasks.map((task, i) => (
                  <tr key={i} className="border-t hover:bg-slate-50">
                    <td className="px-4 py-2 font-medium text-slate-700">
                      {/* Display agent name if available, else show N/A */}
                      {task.agentId?.name || "N/A"}
                    </td>
                    <td className="px-4 py-2">{task.firstName}</td>
                    <td className="px-4 py-2">{task.phone}</td>
                    <td className="px-4 py-2">{task.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks; // Exporting Tasks component
