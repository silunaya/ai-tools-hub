'use client';
import { useState } from 'react';

export default function ToolForm({ apiPath, placeholder, label, paramName = 'text' }) {
  const [input, setInput] = useState('');
  const [out, setOut] = useState('');
  const [loading, setLoading] = useState(false);

  async function run() {
    setLoading(true);
    setOut('');
    try {
      const res = await fetch(apiPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [paramName]: input })
      });
      const data = await res.json();
      setOut(JSON.stringify(data, null, 2));
    } catch (e) {
      setOut('Error: ' + e.message);
    } finally { setLoading(false); }
  }

  return (
    <div className="card">
      <h3>{label}</h3>
      <textarea placeholder={placeholder} value={input} onChange={e => setInput(e.target.value)} />
      <div style={{marginTop:10}}>
        <button className="button" onClick={run} disabled={loading}>{loading? 'Working...' : 'Run'}</button>
      </div>
      <div className="output">{out}</div>
    </div>
  );
}
