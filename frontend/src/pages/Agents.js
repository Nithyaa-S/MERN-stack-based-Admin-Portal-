import React, { useEffect, useState } from "react";
import API from "../api";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  // Fetch all agents from backend
  const fetchAgents = async () => {
    const res = await API.get("/agents");
    setAgents(res.data);
  };

  // Handle input field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit new agent to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/agents", form);
      alert("✅ Agent added!");
      setForm({ name: "", email: "", mobile: "", password: "" });
      fetchAgents(); // Refresh the agent list
    } catch (err) {
      alert(err.response.data.message || "Error adding agent");
    }
  };

  // Fetch agents on component load
  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Add Agent Form */}
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Add New Agent</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="mobile"
            placeholder="Mobile (+91...)"
            value={form.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Agent
          </button>
        </form>
      </div>

      {/* Agent Table List */}
      <div className="max-w-4xl mx-auto mt-10">
        <h3 className="text-xl font-semibold mb-4">All Agents</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Mobile</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((a, i) => (
                <tr key={i} className="border-t hover:bg-gray-100">
                  <td className="py-2 px-4">{a.name}</td>
                  <td className="py-2 px-4">{a.email}</td>
                  <td className="py-2 px-4">{a.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Agents;
