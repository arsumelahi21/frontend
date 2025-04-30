import { useState } from 'react';
import api from '../utils/api';

export default function AddJob() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await api.post('/jobs', { title, description });
    setTitle('');
    setDescription('');
    setLoading(false);
    alert('Job added!');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Job</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Job Title"
      /><br/>
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Job Description"
      /><br/>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Job'}
      </button>
    </div>
  );
}