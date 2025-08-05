import { useState } from "react";
import API from "../api";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      await API.post("/upload", formData);
      alert("File uploaded and tasks distributed");
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h3>Upload CSV</h3>
      <input type="file" accept=".csv,.xlsx,.xls" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadForm;
