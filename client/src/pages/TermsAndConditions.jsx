import React from "react";
import "./styles/LegalUtility.css";

export default function TermsAndConditions() {
  return (
    <main className="lu-page min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="lu-container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="lu-header space-y-3">
          <span className="lu-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-wide">
            <span className="lu-dot" aria-hidden="true" />
            Legal &amp; Terms
          </span>
          <h1 className="lu-title font-semibold tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm lu-subintro">
            Effective Date: 27 November 2026 · Serene Dental Studio
          </p>
        </header>

        <div className="lu-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              1. Website Usage
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              By accessing this website, you agree to use it solely for lawful
              informational and appointment-request purposes. Automated scraping,
              misuse of contact forms, or attempts to disrupt site availability
              are prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              2. Appointment Request Conditions
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              Submitting an online booking form creates an{" "}
              <strong>appointment request</strong>, not a guaranteed slot.
              Appointments are confirmed only after our reception team verifies
              dentist availability and notifies you via phone, WhatsApp, or
              email.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              3. Cancellation &amp; Rescheduling Policy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              We kindly request at least 24 hours&apos; notice if you need to
              cancel or reschedule your confirmed appointment. Late arrivals
              beyond 15 minutes may need to be rescheduled so other patients are
              not delayed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              4. Website Content Disclaimer
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              All treatment descriptions, timelines, and Dental Journal articles
              are provided for general patient education only and do not
              constitute a personalized diagnosis or binding treatment plan.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              5. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              To the fullest extent permitted by applicable law in India, Serene
              Dental Studio shall not be liable for indirect or consequential
              damages arising from temporary website downtime, third-party
              linkages, or reliance on general online educational content.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              6. Intellectual Property
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              All clinic branding, original photography, clinical case
              documentation, and written content on this website belong to
              Serene Dental Studio and may not be reproduced or redistributed
              without written permission.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}