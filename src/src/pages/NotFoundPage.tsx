import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="h-screen grid place-items-center bg-black text-cyan-400">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p>Page not found.</p>
        <Link
          to="/"
          className="inline-block px-4 py-2 rounded-md border border-cyan/40 hover:bg-cyan/10 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
