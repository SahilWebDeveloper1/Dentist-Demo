import React, { useMemo } from "react";
import "./styles/LegalUtility.css";

export default function BookingConfirmation() {
  const details = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return {
      ref: params.get("ref") || "REQ-2026-4821",
      dentist: params.get("dentist") || "Any Available Dentist",
      date: params.get("date") || "Requested Slot Under Review",
      time: params.get("time") || "Preferred Window",
    };
  }, []);

  return (
    <main className="lu-page min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="lu-container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="lu-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b lu-divider">
            <div>
              <span className="lu-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wider">
                <span className="lu-dot" aria-hidden="true" />
                Pending Clinic Confirmation
              </span>
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3">
                Booking Request Summary
              </h1>
            </div>
            <div className="lu-callout rounded-2xl px-4 py-2.5 text-left sm:text-right">
              <span className="block text-[11px] font-semibold uppercase tracking-wider lu-kicker">
                Reference No.
              </span>
              <span className="text-base font-semibold">{details.ref}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="lu-callout rounded-2xl p-4">
              <span className="block text-xs font-semibold uppercase tracking-wider lu-kicker">
                Requested Dentist
              </span>
              <p className="font-semibold mt-1">{details.dentist}</p>
            </div>
            <div className="lu-callout rounded-2xl p-4">
              <span className="block text-xs font-semibold uppercase tracking-wider lu-kicker">
                Requested Date &amp; Time
              </span>
              <p className="font-semibold mt-1">
                {details.date} · {details.time}
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed lu-intro">
            Our reception team will verify dentist availability and confirm
            your final slot via phone, WhatsApp, or email. Need to make a
            change? Call{" "}
            <a href="tel:+919810000000" className="underline font-semibold">
              +91 98100 00000
            </a>
            .
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/treatments"
              className="lu-btn lu-btn-primary px-6 py-3 rounded-full text-sm font-semibold"
            >
              Explore Treatments
            </a>
            <a
              href="/booking-cancellation"
              className="lu-btn lu-btn-secondary px-5 py-3 rounded-full text-sm font-medium"
            >
              Need to Cancel?
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}