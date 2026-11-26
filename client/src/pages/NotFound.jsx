import React from "react";
import "./styles/LegalUtility.css";

export default function NotFound() {
  return (
    <main className="lu-page min-h-screen flex items-center justify-center py-16 px-4">
      <div className="lu-card max-w-xl w-full rounded-3xl p-8 sm:p-10 text-center space-y-5">
        <span className="lu-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider">
          <span className="lu-dot" aria-hidden="true" />
          Error 404
        </span>

        <h1 className="lu-title font-semibold tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base leading-relaxed lu-subintro">
          The page you are looking for may have moved, been renamed, or is
          temporarily unavailable.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="/"
            className="lu-btn lu-btn-primary px-6 py-3 rounded-full text-sm font-semibold"
          >
            Back to Home
          </a>
          <a
            href="/treatments"
            className="lu-btn lu-btn-secondary px-5 py-3 rounded-full text-sm font-medium"
          >
            Explore Treatments
          </a>
          <a
            href="/book-appointment"
            className="lu-btn lu-btn-secondary px-5 py-3 rounded-full text-sm font-medium"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </main>
  );
}