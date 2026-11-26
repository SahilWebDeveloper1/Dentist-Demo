import React from "react";
import "./FloatingCallButton.css";

export default function FloatingCallButton({
  phoneNumber = "+919810000000",
  displayLabel = "Call Clinic",
}) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="floating-call-btn fixed z-50 inline-flex items-center gap-2.5 rounded-full px-4 py-3 sm:px-5 sm:py-3.5"
      aria-label={`Call clinic at ${phoneNumber}`}
      title={`Call ${phoneNumber}`}
    >
      <span className="floating-call-icon inline-flex items-center justify-center w-8 h-8 rounded-full shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </span>

      <span className="floating-call-text hidden sm:inline-block text-xs sm:text-sm font-semibold tracking-tight">
        {displayLabel}
      </span>
    </a>
  );
}