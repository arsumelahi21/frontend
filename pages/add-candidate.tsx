import { useState } from 'react';
import api from '../utils/api';

export default function AddCandidate() {
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await api.post('/candidates', { name, summary });
    setName('');
    setSummary('');
    setLoading(false);
    alert('Candidate added!');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Candidate</h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Candidate Name"
      /><br/>
      <textarea
        value={summary}
        onChange={e => setSummary(e.target.value)}
        placeholder="Summary / Skills"
      /><br/>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Candidate'}
      </button>
    </div>
  );
}