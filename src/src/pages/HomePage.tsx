import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import VoiceInterface from "../components/VoiceInterface";

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div className="h-screen flex items-center justify-center bg-black text-cyan-400">
        <VoiceInterface />
      </div>
    </ProtectedRoute>
  );
}
