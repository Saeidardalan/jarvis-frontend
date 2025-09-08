import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// گرفتن آدرس بک‌اند از متغیر محیطی Netlify
const API_URL = import.meta.env.VITE_BACKEND_URL;

// تست اتصال (فقط برای لاگ کنسول)
fetch(`${API_URL}/health`)
  .then((res) => res.text())
  .then((data) => console.log("✅ Backend Response:", data))
  .catch((err) => console.error("❌ Error connecting to backend:", err));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
