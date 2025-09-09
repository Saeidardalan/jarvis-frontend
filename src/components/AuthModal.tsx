import React from "react";

export default function AuthModal() {
  return (
    <div className="p-6 bg-gray-900 text-cyan-400 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Email OTP Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <button className="mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded">
        Send OTP
      </button>
    </div>
  );
}
