import React, { useState } from "react";
import API from "../api"; // Axios instance configured with base URL and auth token

const Upload = () => {
  // State to store selected file
  const [file, setFile] = useState(null);
  
  // State to hold success/error messages after upload
  const [message, setMessage] = useState(null);

  // State to show loading spinner during upload
  const [loading, setLoading] = useState(false);

  // Function to handle file upload
  const handleUpload = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!file) return alert("Please select a file"); // Basic file validation

    const formData = new FormData(); // Create FormData object for file upload
    formData.append("file", file); // Append selected file to form data

    setLoading(true); // Start loading spinner
    setMessage(null); // Reset previous message

    try {
      const res = await API.post("/upload", formData); // API call to upload file

      // On success, show success message with total tasks uploaded
      setMessage({
        type: "success",
        text: `✅ ${res.data.message}. Total tasks: ${res.data.count}`,
      });

      setFile(null); // Clear selected file after successful upload
    } catch (err) {
      // On error, show appropriate message
      setMessage({
        type: "error",
        text: `❌ ${err.response?.data?.message || "Upload failed"}`,
      });
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-100 to-slate-200 px-4">
      {/* Upload Card */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          📤 Upload Task List
        </h2>

        {/* Upload Form */}
        <form onSubmit={handleUpload} className="space-y-4">
          {/* File Input with Tailwind-styled file button */}
          <input
            type="file"
            accept=".csv,.xls,.xlsx"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md
              file:border-0 file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100 transition duration-200"
          />

          {/* Display selected file name */}
          {file && (
            <p className="text-sm text-gray-600 mt-1 italic">
              Selected: <span className="font-semibold">{file.name}</span>
            </p>
          )}

          {/* Submit button with loading spinner */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-lg font-medium transition duration-300 flex items-center justify-center"
          >
            {/* Show loading spinner icon if uploading */}
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>

        {/* Upload result message (success or error) */}
        {message && (
          <div
            className={`mt-6 p-4 rounded-md text-sm flex items-start gap-2 ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.type === "success" ? "" : "❌"}
            <span>{message.text}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
