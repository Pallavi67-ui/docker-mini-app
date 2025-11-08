import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("https://docker-mini-app-5.onrender.com/")
      .then(res => res.text()) // backend sends plain text
      .then(data => setMessage(data))
      .catch(err => setMessage("❌ Backend not reachable"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>Frontend + Backend + DB with Docker 🐳</h1>
      <p>Message from backend: <b>{message}</b></p>
    </div>
  );
}

export default App;
