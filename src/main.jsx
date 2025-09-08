const backendUrl = import.meta.env.VITE_BACKEND_URL;

fetch(`${backendUrl}/commands`)
  .then(res => res.json())
  .then(data => console.log("✅ Commands:", data))
  .catch(err => console.error("❌ Backend not reachable", err));
