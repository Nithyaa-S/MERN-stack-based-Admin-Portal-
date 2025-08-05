import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import Upload from "./pages/Upload";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard view */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Agent management page */}
        <Route path="/agents" element={<Agents />} />

        {/* CSV Upload and distribution page */}
        <Route path="/upload" element={<Upload />} />

        {/* View assigned tasks */}
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
