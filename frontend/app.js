import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({ status: 'Loading...' });

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setData({ status: 'Error connecting to backend' }));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>🚀 Real-World DevOps Enterprise Project 🚀</h1>
      <div style={{ padding: '20px', border: '1px solid #ccc', display: 'inline-block' }}>
        <h3>System Status: {data.status}</h3>
        {data.db_time && <p>Database Time: {data.db_time}</p>}
        <p>{data.message}</p>
      </div>
    </div>
  );
}
export default App;
