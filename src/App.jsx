import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("❌ Backend not reachable"));
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-cyan-400">
      <h1 className="text-4xl font-bold">JARVIS AI Assistant</h1>
      <p className="mt-4">{message}</p>
    </div>
  );
}

export default App;
