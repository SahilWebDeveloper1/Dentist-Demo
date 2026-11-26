import React from "react";
import "./styles/LegalUtility.css";

export default function PrivacyPolicy() {
  return (
    <main className="lu-page min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="lu-container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="lu-header space-y-3">
          <span className="lu-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-wide">
            <span className="lu-dot" aria-hidden="true" />
            Legal &amp; Privacy
          </span>
          <h1 className="lu-title font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm lu-subintro">
            Last Updated: 27 November 2026 · Serene Dental Studio, New Delhi
          </p>
        </header>

        <div className="lu-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              1. Information Collected
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              When you submit an appointment request, contact form, or feedback
              form on our website, we may collect your name, phone number,
              email address, patient type (new or existing), preferred dentist,
              selected treatment, and scheduling notes. We intentionally avoid
              collecting detailed medical histories through public web forms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              2. Why Information Is Collected
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              We collect only the contact and preference details needed to
              coordinate dental appointments, respond to your questions, verify
              patient feedback, and share clinic updates if you explicitly opt
              in.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              3. How Information Is Used
            </h2>
            <ul className="space-y-1.5 text-sm sm:text-base lu-intro list-disc pl-5">
              <li>Reviewing dentist availability and confirming requested slots</li>
              <li>Sending appointment confirmations, rescheduling updates, or reminders</li>
              <li>Responding to general inquiries submitted via our Contact form</li>
              <li>Moderating and verifying patient feedback before optional display</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              4. Data Storage
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              Submitted contact and scheduling information is stored with
              restricted clinic staff access and reasonable administrative and
              technical safeguards in alignment with applicable Indian data
              protection standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              5. Third-Party Services
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              Our website may link to third-party platforms such as Google Maps
              for clinic directions, WhatsApp for patient messaging, and
              external review platforms (Google Reviews, Practo, Justdial).
              Interactions on those platforms are governed by their respective
              privacy policies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              6. Cookies and Analytics
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              Essential cookies support basic site navigation and preference
              storage. Optional analytics cookies are used only if enabled in
              your{" "}
              <a href="/cookie-preferences" className="underline font-medium">
                Cookie Preferences
              </a>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              7. Data Retention
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              Inquiry and appointment request details are retained only as long
              as necessary to manage your visit, follow up on care, or meet
              statutory healthcare recordkeeping obligations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              8. Patient Rights
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              You have the right to request access to, correction of, or
              deletion of your personal contact details, and to withdraw consent
              for marketing communications or public smile-gallery display at any
              time.
            </p>
          </section>

          <section className="lu-callout rounded-2xl p-5 space-y-1.5">
            <h2 className="text-base sm:text-lg font-semibold">
              9. Contact Information for Privacy Requests
            </h2>
            <p className="text-sm lu-intro">
              Email:{" "}
              <a
                href="mailto:care@serenedental.in"
                className="underline font-medium"
              >
                care@serenedental.in
              </a>{" "}
              · Phone: +91 98100 00000 · Address: Ground Floor, M-42, Greater
              Kailash Part II, New Delhi – 110048
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}