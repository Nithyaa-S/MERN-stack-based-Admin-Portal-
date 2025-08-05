import { useEffect, useState } from "react";
import API from "../api";

const AgentList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      const res = await API.get("/agents");
      setAgents(res.data);
    };
    fetchAgents();
  }, []);

  return (
    <div>
      <h3>Agents</h3>
      <ul>
        {agents.map((a) => (
          <li key={a._id}>{a.name} - {a.email} - {a.mobile}</li>
        ))}
      </ul>
    </div>
  );
};

export default AgentList;
