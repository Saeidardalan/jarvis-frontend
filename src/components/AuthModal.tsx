// src/components/AuthModal.tsx
import { useState } from "react";

interface AuthModalProps {
  onLogin: (email: string) => void;
}

export default function AuthModal({ onLogin }: AuthModalProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onLogin(email);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-xl shadow-lg w-80"
      >
        <h2 className="text-xl text-white mb-4">Login with Email</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 rounded mb-4 text-black"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
}
