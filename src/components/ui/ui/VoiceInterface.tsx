import React from "react";

export default function VoiceInterface() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-cyan-400">
      <h1 className="text-3xl font-bold mb-4">🎙️ JARVIS Voice Assistant</h1>
      <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full">
        Start Listening
      </button>
    </div>
  );
}
