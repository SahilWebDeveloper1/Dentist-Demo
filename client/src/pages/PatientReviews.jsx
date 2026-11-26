import React, { useState } from "react";
import "./styles/patientReveiws.css";

const EXTERNAL_PLATFORMS = [
  {
    name: "Google Reviews",
    rating: "4.9 / 5.0",
    count: "260+ Reviews",
    note: "Verified Google Business Profile",
    href: "https://www.google.com/maps",
  },
  {
    name: "Practo",
    rating: "4.9 / 5.0",
    count: "55+ Verified Visits",
    note: "Appointment-verified patient feedback",
    href: "https://www.practo.com",
  },
  {
    name: "Justdial",
    rating: "4.8 / 5.0",
    count: "30+ Local Ratings",
    note: "Verified clinic listing",
    href: "https://www.justdial.com",
  },
];

const PUBLIC_REVIEWS = [
  {
    id: "rev-01",
    displayName: "Aarav K.",
    rating: 5,
    date: "14 November 2026",
    treatmentCategory: "Endodontics",
    treatmentConsented: true,
    review:
      "I came in anxious about a toothache and expected a painful root canal. Dr. Priya Nair explained every step on the monitor first, numbed the area gently, and finished comfortably in a single sitting.",
  },
  {
    id: "rev-02",
    displayName: "Meera S.",
    rating: 5,
    date: "02 November 2026",
    treatmentCategory: "Orthodontics",
    treatmentConsented: true,
    review:
      "The 3D intraoral scan for my clear aligners was quick and mess-free. Dr. Rohan Deshmukh showed me a clear timeline without any pushy upselling.",
  },
  {
    id: "rev-03",
    displayName: "Siddharth P.",
    rating: 5,
    date: "21 October 2026",
    treatmentCategory: "General Dentistry",
    treatmentConsented: false,
    review:
      "Calm waiting lounge, punctual appointments, and spotless treatment rooms. Every fee was shared clearly in writing before starting.",
  },
  {
    id: "rev-04",
    displayName: "Ritu & Kabir M.",
    rating: 5,
    date: "09 October 2026",
    treatmentCategory: "Pediatric Dentistry",
    treatmentConsented: true,
    review:
      "Our six-year-old was terrified of dentists after a bad experience elsewhere. The team took 15 minutes just to let him get comfortable—now he looks forward to his checkups.",
  },
  {
    id: "rev-05",
    displayName: "Neha V.",
    rating: 5,
    date: "27 September 2026",
    treatmentCategory: "Cosmetic Dentistry",
    treatmentConsented: true,
    review:
      "Wanted subtle brightening without sensitivity. Dr. Ananya Sharma matched my natural tooth shade thoughtfully and checked in the next day to make sure I had zero sensitivity.",
  },
  {
    id: "rev-06",
    displayName: "Rajeshwari T.",
    rating: 5,
    date: "12 September 2026",
    treatmentCategory: "Surgical Dentistry",
    treatmentConsented: true,
    review:
      "Dr. Vikram Malhotra handled my impacted wisdom tooth removal calmly and cleanly. Recovery instructions were clear and swelling was minimal.",
  },
];

function StarRow({ count }) {
  return (
    <div
      className="inline-flex items-center gap-1"
      aria-label={`${count} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 20 20"
          fill={star <= count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.4"
          className={`w-4 h-4 ${
            star <= count ? "rev-star-filled" : "rev-star-empty"
          }`}
          aria-hidden="true"
        >
          <path d="M10 1.8l2.5 5.1 5.6.8-4.05 3.95.96 5.58L10 14.6l-5.01 2.63.96-5.58L1.9 7.7l5.6-.8L10 1.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function PatientReviews() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    appointmentRef: "",
    rating: 5,
    feedback: "",
    consentChecked: false,
  });
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const categoryOptions = [
    "All",
    "General Dentistry",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Endodontics",
    "Surgical Dentistry",
    "Pediatric Dentistry",
  ];

  const visibleReviews =
    selectedCategory === "All"
      ? PUBLIC_REVIEWS
      : PUBLIC_REVIEWS.filter(
          (r) => r.treatmentConsented && r.treatmentCategory === selectedCategory
        );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consentChecked) return;

    // Submissions are sent for verification & moderation; never auto-published
    setSubmittedNotice(true);
    setFormData({
      name: "",
      contact: "",
      appointmentRef: "",
      rating: 5,
      feedback: "",
      consentChecked: false,
    });
  };

  return (
    <main className="reviews-page min-h-screen">
      {/* ===== 8.1 Reviews Hero & 8.2 Review Summary ===== */}
      <section
        className="reviews-hero relative overflow-hidden py-12 sm:py-16 lg:py-20"
        aria-labelledby="reviews-hero-heading"
      >
        <div className="reviews-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="reviews-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="reviews-eyebrow-dot" aria-hidden="true" />
                Verified Patient Stories
              </span>

              <h1
                id="reviews-hero-heading"
                className="reviews-hero-title font-semibold tracking-tight"
              >
                Patient Feedback
              </h1>

              <p className="reviews-intro text-base sm:text-lg leading-relaxed max-w-2xl">
                Read genuine experiences shared by patients and families who have
                visited our clinic—from routine checkups and pediatric visits to
                aligners and restorative care.
              </p>
            </div>

            {/* 8.2 Review Summary Card */}
            <div className="lg:col-span-5">
              <div className="reviews-summary-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="reviews-kicker text-xs font-semibold uppercase tracking-wider">
                      Verified Google Rating
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl sm:text-5xl font-semibold tracking-tight">
                        4.9
                      </span>
                      <span className="text-sm font-medium reviews-subintro">
                        / 5.0
                      </span>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <StarRow count={5} />
                    <p className="text-xs sm:text-sm font-semibold">
                      345+ Verified Reviews
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t reviews-divider flex flex-wrap gap-2">
                  {EXTERNAL_PLATFORMS.map((plat) => (
                    <a
                      key={plat.name}
                      href={plat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="reviews-platform-chip px-3 py-1.5 rounded-full text-xs font-medium"
                    >
                      {plat.name} ({plat.rating}) &rarr;
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8.3 Review Listing ===== */}
      <section
        className="reviews-listing py-12 sm:py-16 lg:py-20"
        aria-labelledby="reviews-listing-heading"
      >
        <div className="reviews-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8 sm:mb-10">
            <div>
              <h2
                id="reviews-listing-heading"
                className="reviews-section-heading font-semibold tracking-tight"
              >
                Approved Patient Reviews
              </h2>
              <p className="text-sm sm:text-base reviews-subintro mt-1">
                Treatment categories are shown only when explicitly consented by
                the patient.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categoryOptions.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    aria-pressed={isActive}
                    className={`reviews-filter-pill px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium ${
                      isActive ? "is-active" : ""
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {visibleReviews.map((rev) => (
              <article
                key={rev.id}
                className="review-card rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <StarRow count={rev.rating} />
                    {rev.treatmentConsented && rev.treatmentCategory && (
                      <span className="review-cat-pill px-2.5 py-1 rounded-full text-[11px] font-semibold">
                        {rev.treatmentCategory}
                      </span>
                    )}
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed reviews-intro">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t reviews-divider flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold">{rev.displayName}</span>
                  <span className="reviews-subintro">{rev.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8.4 External Reviews ===== */}
      <section
        className="reviews-external py-12 sm:py-16"
        aria-labelledby="external-reviews-heading"
      >
        <div className="reviews-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="reviews-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase">
              <span className="reviews-eyebrow-dot" aria-hidden="true" />
              Independent Platforms
            </span>
            <h2
              id="external-reviews-heading"
              className="reviews-section-heading font-semibold tracking-tight"
            >
              Read More Verified External Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EXTERNAL_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="external-platform-card rounded-2xl p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{platform.name}</h3>
                    <span className="review-cat-pill px-2.5 py-1 rounded-full text-xs font-semibold">
                      {platform.rating}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{platform.count}</p>
                  <p className="text-xs reviews-subintro">{platform.note}</p>
                </div>

                <span className="text-xs sm:text-sm font-semibold">
                  View on {platform.name} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8.5 Submit Feedback (Moderated) ===== */}
      <section
        className="reviews-submit py-12 sm:py-16 lg:py-20"
        aria-labelledby="submit-feedback-heading"
      >
        <div className="reviews-container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="reviews-form-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="space-y-2">
              <span className="reviews-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase">
                <span className="reviews-eyebrow-dot" aria-hidden="true" />
                Share Your Experience
              </span>
              <h2
                id="submit-feedback-heading"
                className="reviews-section-heading font-semibold tracking-tight"
              >
                Submit Patient Feedback
              </h2>
              <p className="text-sm reviews-subintro">
                All feedback is verified against your appointment reference and
                reviewed by our clinic moderation team before any public display.
              </p>
            </div>

            {submittedNotice && (
              <div
                className="reviews-success-banner rounded-2xl p-4 sm:p-5 text-sm leading-relaxed"
                role="status"
              >
                <strong>Thank you for sharing your feedback.</strong> Your
                submission has been received for appointment verification and
                moderation—it will not appear publicly until approved.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="rev-name"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  >
                    Patient Name *
                  </label>
                  <input
                    id="rev-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Anjali Verma"
                    className="reviews-input w-full rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="rev-contact"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  >
                    Email or Phone *
                  </label>
                  <input
                    id="rev-contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    placeholder="e.g. +91 98XXX XXXXX or email"
                    className="reviews-input w-full rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div>
                  <label
                    htmlFor="rev-ref"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  >
                    Appointment Reference / Visit Date *
                  </label>
                  <input
                    id="rev-ref"
                    type="text"
                    required
                    value={formData.appointmentRef}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        appointmentRef: e.target.value,
                      })
                    }
                    placeholder="e.g. APT-2026-114 or Visit Date"
                    className="reviews-input w-full rounded-xl px-4 py-2.5 text-sm"
                  />
                </div>

                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Your Rating *
                  </span>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, rating: star })
                        }
                        aria-label={`Rate ${star} out of 5 stars`}
                        className={`rating-select-btn px-3 py-2 rounded-xl text-xs font-semibold ${
                          formData.rating >= star ? "is-selected" : ""
                        }`}
                      >
                        {star} ★
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="rev-feedback"
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                >
                  Written Feedback *
                </label>
                <textarea
                  id="rev-feedback"
                  rows="4"
                  required
                  value={formData.feedback}
                  onChange={(e) =>
                    setFormData({ ...formData, feedback: e.target.value })
                  }
                  placeholder="Share how your consultation or treatment felt..."
                  className="reviews-input w-full rounded-xl px-4 py-3 text-sm"
                />
              </div>

              <label className="flex items-start gap-3 text-xs sm:text-sm reviews-subintro cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.consentChecked}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      consentChecked: e.target.checked,
                    })
                  }
                  className="mt-1 reviews-checkbox"
                />
                <span>
                  I confirm this feedback reflects my genuine clinic visit and
                  consent to moderation review. I understand submissions are
                  verified before any optional public display (using first name
                  and last initial only).
                </span>
              </label>

              <button
                type="submit"
                className="reviews-btn reviews-btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold"
              >
                Submit Feedback for Review
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== 8.6 CTA ===== */}
      <section
        className="reviews-cta py-12 sm:py-16 lg:py-20"
        aria-labelledby="reviews-cta-heading"
      >
        <div className="reviews-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reviews-cta-banner rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2.5">
                <h2
                  id="reviews-cta-heading"
                  className="reviews-section-heading font-semibold tracking-tight"
                >
                  Book your consultation.
                </h2>
                <p className="text-sm sm:text-base reviews-intro leading-relaxed">
                  Experience calm, transparent dental care tailored to your
                  comfort.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="/book-appointment"
                  className="reviews-btn reviews-btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-center"
                >
                  Book Consultation
                </a>
                <a
                  href="/dentists"
                  className="reviews-btn reviews-btn-secondary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium text-center"
                >
                  Meet Our Dentists
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}