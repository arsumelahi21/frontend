"use client";
import { useState, useEffect } from "react";
import api from "../../utils/api";

export default function Match() {
  const [isClient, setIsClient] = useState(false);
  const [description, setDescription] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMatch = async () => {
    setLoading(true);
    const res = await api.post("/match", { description });
    setResults(res.data);
    setLoading(false);
  };

  if (!isClient) return null;

  return (
    <div className="max-w-2xl mx-auto mt-10 px-6 py-8 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Find Matching Candidates</h2>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Paste job description here..."
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
      />
      <button
        onClick={handleMatch}
        disabled={loading}
        className={`w-full mt-4 py-2 px-4 text-white rounded-lg ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Matching..." : "Find Matches"}
      </button>

      <div className="mt-8">
        <h3 className="text-xl font-medium text-gray-700 mb-2">Top Matches</h3>
        {results.length === 0 ? (
          <p className="text-gray-500">No matches found.</p>
        ) : (
          <ul className="space-y-4">
            {results.map((c, i) => (
              <li key={i} className="p-4 bg-gray-50 border rounded-lg shadow-sm">
                <p className="font-semibold text-gray-800">{c.name}</p>
                <p className="text-gray-600 text-sm mt-1">{c.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
