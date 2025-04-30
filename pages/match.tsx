import { useState } from 'react';
import api from '../utils/api';

export default function Match() {
  const [description, setDescription] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleMatch = async () => {
    setLoading(true);
    const res = await api.post('/match', { description });
    setResults(res.data);
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Match Candidates</h2>
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Paste job description here"
      /><br/>
      <button onClick={handleMatch} disabled={loading}>
        {loading ? 'Matching...' : 'Find Matches'}
      </button>

      <div style={{ marginTop: 20 }}>
        <h3>Top Matches</h3>
        {results.length === 0 ? (
          <p>No matches found.</p>
        ) : (
          <ul>
            {results.map((c, i) => (
              <li key={i}><strong>{c.name}</strong>: {c.summary}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
