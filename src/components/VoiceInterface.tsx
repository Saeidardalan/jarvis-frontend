// src/components/VoiceInterface.tsx
import { useState } from "react";

export default function VoiceInterface() {
  const [isListening, setIsListening] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Voice Interface</h2>
      <button
        onClick={toggleListening}
        className="px-6 py-3 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition"
      >
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
    </div>
  );
}
