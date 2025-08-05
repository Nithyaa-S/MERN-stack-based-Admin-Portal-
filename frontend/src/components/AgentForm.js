import { useState } from "react";
import API from "../api";

const AgentForm = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      await API.post("/agents", form);
      alert("Agent added");
    } catch (err) {
      alert("Error adding agent");
    }
  };

  return (
    <div>
      <h3>Add Agent</h3>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="mobile" onChange={handleChange} placeholder="Mobile" />
      <input name="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AgentForm;
