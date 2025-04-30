"use client";
import { useState, useEffect } from "react";
import api from "../../utils/api";
import toast from 'react-hot-toast';


export default function AddCandidate() {
  const [isClient, setIsClient] = useState(false);
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await api.post("/candidates", { name, summary });
      setName("");
      setSummary("");
      toast.success("Candidate added successfully!");
    } catch (error) {
      console.error("Error adding candidate:", error);
      toast.error("Failed to add candidate. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="max-w-xl mx-auto mt-10 px-6 py-8 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add a New Candidate</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Candidate Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Summary / Skills"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-2 px-4 text-white rounded-lg ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Submitting..." : "Submit Candidate"}
        </button>
      </div>
    </div>
  );
}
