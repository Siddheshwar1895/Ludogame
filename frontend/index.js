import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

function App() {
  useEffect(() => {
    // Call your backend API once on component mount
    axios.get("https://ludo-backend-2vug.onrender.com/api/start")
      .then(response => {
        console.log("Backend response:", response.data);
      })
      .catch(error => {
        console.error("Error connecting to backend:", error);
      });
  }, []);

  return (
    <div>
      <h1>Online Multiplayer Ludo Game</h1>
      <p>Coming soon... Stay tuned!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
