import React from "react";
import "./styles/LegalUtility.css";

export default function MedicalDisclaimer() {
  return (
    <main className="lu-page min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="lu-container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="lu-header space-y-3">
          <span className="lu-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-wide">
            <span className="lu-dot" aria-hidden="true" />
            Clinical Notice
          </span>
          <h1 className="lu-title font-semibold tracking-tight">
            Medical Disclaimer
          </h1>
          <p className="text-sm lu-subintro">
            Clinically Reviewed Patient Education Policy · Serene Dental Studio
          </p>
        </header>

        <div className="lu-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6">
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              1. Educational Content Only
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              All text, treatment guides, FAQs, Smile Gallery cases, and Dental
              Journal articles on this website are provided strictly for general
              educational and informational purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              2. Does Not Replace Clinical Examination
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              Online information never substitutes for an in-person oral
              examination, diagnostic radiographs, or medical history review by
              a qualified, DCI-registered dentist.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              3. Professional Assessment Required
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              Every treatment decision—including suitability for dental
              implants, root canal therapy, orthodontics, or cosmetic
              procedures—requires an individualized clinical assessment and
              informed consent discussion.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-semibold">
              4. Individual Outcomes Vary
            </h2>
            <p className="text-sm sm:text-base leading-relaxed lu-intro">
              Clinical results, healing durations, and aesthetic outcomes vary
              from person to person based on bone quality, enamel thickness,
              systemic health, and aftercare. No guaranteed results are promised
              or implied.
            </p>
          </section>

          <section className="lu-emergency-box rounded-2xl p-5 sm:p-6 space-y-2">
            <h2 className="text-lg font-semibold">
              5. Emergency Instructions
            </h2>
            <p className="text-sm leading-relaxed lu-intro">
              For urgent tooth pain or a knocked-out tooth, call our clinic at{" "}
              <a href="tel:+919810000000" className="underline font-semibold">
                +91 98100 00000
              </a>{" "}
              immediately.{" "}
              <strong>
                If you experience difficulty breathing or swallowing, rapidly
                spreading facial or neck swelling, uncontrolled bleeding, or
                suspected jaw trauma, go straight to the nearest hospital
                emergency department or dial 112 / 108.
              </strong>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}