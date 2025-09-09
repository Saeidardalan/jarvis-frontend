// src/components/VoiceInterface.tsx
import { useState, useEffect, useRef } from "react";

export default function VoiceInterface() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.warn("Speech recognition not supported in this browser.");
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          setTranscript((prev) => prev + result[0].transcript + " ");
        } else {
          interimTranscript += result[0].transcript;
        }
      }
    };

    recognitionRef.current = recognition;
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Voice Assistant</h2>
      <button
        onClick={toggleListening}
        className={`px-6 py-3 rounded-full text-white transition ${
          isListening ? "bg-red-500 hover:bg-red-600" : "bg-cyan-500 hover:bg-cyan-600"
        }`}
      >
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>

      <div className="mt-6 text-left max-w-xl mx-auto">
        <h3 className="font-semibold text-lg">Transcript:</h3>
        <p className="mt-2 p-4 bg-gray-800 text-cyan-400 rounded-xl min-h-[100px] whitespace-pre-wrap">
          {transcript || "Say something..."}
        </p>
      </div>
    </div>
  );
}
