import React, { useMemo, useState } from "react";
import "./styles/bookAppointment.css";

const DENTIST_OPTIONS = [
  { slug: "any", label: "Any Available Dentist" },
  { slug: "dr-ananya-sharma", label: "Dr. Ananya Sharma (General & Restorative)" },
  { slug: "dr-rohan-deshmukh", label: "Dr. Rohan Deshmukh (Orthodontist & Implants)" },
  { slug: "dr-priya-nair", label: "Dr. Priya Nair (Pediatric & Endodontist)" },
  { slug: "dr-vikram-malhotra", label: "Dr. Vikram Malhotra (Oral Surgeon & Periodontist)" },
];

const TREATMENT_OPTIONS = [
  { slug: "dental-consultation", label: "General Dental Consultation" },
  { slug: "dental-checkup", label: "Dental Checkup & Digital X-Rays" },
  { slug: "teeth-cleaning-scaling", label: "Teeth Cleaning / Scaling" },
  { slug: "tooth-colored-fillings", label: "Tooth-Colored Fillings" },
  { slug: "teeth-whitening", label: "Teeth Whitening" },
  { slug: "dental-veneers", label: "Dental Veneers" },
  { slug: "dental-crowns", label: "Dental Crowns & Bridges" },
  { slug: "dental-implants", label: "Dental Implants" },
  { slug: "clear-aligners", label: "Clear Aligners" },
  { slug: "metal-braces", label: "Metal / Ceramic Braces" },
  { slug: "root-canal-treatment", label: "Root Canal Treatment" },
  { slug: "wisdom-tooth-removal", label: "Wisdom Tooth Removal" },
  { slug: "childrens-dental-checkups", label: "Children's Dental Checkup" },
  { slug: "gum-disease-management", label: "Gum / Periodontal Care" },
];

const TIME_SLOTS = [
  "09:30 AM",
  "10:30 AM",
  "11:30 AM",
  "02:00 PM",
  "04:00 PM",
  "05:30 PM",
];

export default function BookAppointment() {
  const initialParams = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const dentistParam = params.get("dentist") || "any";
    const treatmentParam = params.get("treatment") || "dental-consultation";

    const validDentist = DENTIST_OPTIONS.some((d) => d.slug === dentistParam)
      ? dentistParam
      : "any";
    const validTreatment = TREATMENT_OPTIONS.some((t) => t.slug === treatmentParam)
      ? treatmentParam
      : "dental-consultation";

    return { validDentist, validTreatment };
  }, []);

  const todayISO = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    patientType: "New Patient",
    dentist: initialParams.validDentist,
    treatment: initialParams.validTreatment,
    preferredDate: "",
    preferredTime: "10:30 AM",
    alternativeTime: "Flexible / Any Available",
    assistanceNote: "",
    message: "",
    privacyAccepted: false,
    contactConsent: false,
    marketingConsent: false,
  });

  const [confirmedRequest, setConfirmedRequest] = useState(null);

  const selectedDentistLabel =
    DENTIST_OPTIONS.find((d) => d.slug === formData.dentist)?.label ||
    "Any Available Dentist";

  const selectedTreatmentLabel =
    TREATMENT_OPTIONS.find((t) => t.slug === formData.treatment)?.label ||
    "General Dental Consultation";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacyAccepted || !formData.contactConsent) return;

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setConfirmedRequest({
      referenceNumber: `REQ-2026-${randomCode}`,
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      patientType: formData.patientType,
      dentist: selectedDentistLabel,
      treatment: selectedTreatmentLabel,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      alternativeTime: formData.alternativeTime,
      assistanceNote: formData.assistanceNote,
      status: "Pending Clinic Confirmation",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="book-page min-h-screen">
      {/* ===== 9.1 Booking Hero ===== */}
      <section
        className="book-hero relative overflow-hidden py-12 sm:py-16"
        aria-labelledby="book-hero-heading"
      >
        <div className="book-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="book-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="book-eyebrow-dot" aria-hidden="true" />
                Appointment Request
              </span>

              <h1
                id="book-hero-heading"
                className="book-hero-title font-semibold tracking-tight"
              >
                Book Your Appointment
              </h1>

              <p className="book-intro text-base sm:text-lg leading-relaxed">
                Submit your preferred dentist, treatment, and time slot below.
                Please note that submitting this form creates an{" "}
                <strong>appointment request</strong>—our front-desk team checks
                clinician availability and confirms your final slot directly.
              </p>
            </div>

            {/* Phone & WhatsApp Alternatives */}
            <div className="book-quick-contact rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+919810000000"
                className="book-btn book-btn-secondary inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium"
              >
                Call: +91 98100 00000
              </a>
              <a
                href="https://wa.me/919810000000"
                target="_blank"
                rel="noopener noreferrer"
                className="book-btn book-btn-primary inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
              >
                WhatsApp Clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Main Content: Confirmation OR Booking Form + Info ===== */}
      <section className="book-main py-10 sm:py-14 lg:py-16">
        <div className="book-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {confirmedRequest ? (
            /* ===== 9.7 Booking Confirmation ===== */
            <div className="max-w-3xl mx-auto book-confirm-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b book-divider">
                <div>
                  <span className="book-status-badge inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    <span className="book-eyebrow-dot" aria-hidden="true" />
                    {confirmedRequest.status}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3">
                    Appointment Request Received
                  </h2>
                </div>

                <div className="book-ref-box rounded-2xl px-4 py-3 text-left sm:text-right">
                  <span className="text-[11px] font-semibold uppercase tracking-wider book-kicker block">
                    Booking Reference
                  </span>
                  <span className="text-base sm:text-lg font-semibold">
                    {confirmedRequest.referenceNumber}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="book-summary-box rounded-2xl p-4 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider book-kicker">
                    Patient
                  </span>
                  <p className="text-sm font-semibold">
                    {confirmedRequest.fullName} ({confirmedRequest.patientType})
                  </p>
                  <p className="text-xs book-subintro">
                    {confirmedRequest.phone} · {confirmedRequest.email}
                  </p>
                </div>

                <div className="book-summary-box rounded-2xl p-4 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider book-kicker">
                    Requested Dentist
                  </span>
                  <p className="text-sm font-semibold">
                    {confirmedRequest.dentist}
                  </p>
                  <p className="text-xs book-subintro">
                    {confirmedRequest.treatment}
                  </p>
                </div>

                <div className="book-summary-box rounded-2xl p-4 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider book-kicker">
                    Requested Date &amp; Time
                  </span>
                  <p className="text-sm font-semibold">
                    {confirmedRequest.preferredDate} at{" "}
                    {confirmedRequest.preferredTime}
                  </p>
                  <p className="text-xs book-subintro">
                    Alternative: {confirmedRequest.alternativeTime}
                  </p>
                </div>

                <div className="book-summary-box rounded-2xl p-4 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider book-kicker">
                    Clinic Contact
                  </span>
                  <p className="text-sm font-semibold">+91 98100 00000</p>
                  <p className="text-xs book-subintro">
                    Mon–Sat · 9:30 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* What Happens Next & 9.8 Notification Flow */}
              <div className="book-next-box rounded-2xl p-5 space-y-2.5">
                <h3 className="text-sm font-semibold uppercase tracking-wider book-kicker">
                  What Happens Next
                </h3>
                <ul className="space-y-2 text-sm book-intro">
                  <li>
                    1. Our reception team reviews your requested slot against
                    dentist availability.
                  </li>
                  <li>
                    2. You will receive a confirmation call, WhatsApp, or email
                    once your appointment is finalized (or an alternative slot if
                    the requested time is full).
                  </li>
                  <li>
                    3. Any rescheduling updates or optional appointment
                    reminders are sent using your chosen contact details.
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setConfirmedRequest(null)}
                  className="book-btn book-btn-secondary px-5 py-3 rounded-full text-sm font-medium"
                >
                  Submit Another Request
                </button>
                <a
                  href="/treatments"
                  className="book-btn book-btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold"
                >
                  Explore Treatments
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* ===== Left: 9.2 Appointment Form + 9.3 Preferences + 9.6 Consent ===== */}
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-7 book-form-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6"
              >
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    Request an Appointment
                  </h2>
                  <p className="text-xs sm:text-sm book-subintro">
                    Please avoid entering detailed medical histories here—our
                    clinician will review your health details privately in person.
                  </p>
                </div>

                {/* Patient Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="book-fullname"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="book-fullname"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Aarav Kapoor"
                      className="book-input w-full rounded-xl px-4 py-2.5 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="book-phone"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="book-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98XXX XXXXX"
                      className="book-input w-full rounded-xl px-4 py-2.5 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="book-email"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="book-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="book-input w-full rounded-xl px-4 py-2.5 text-sm"
                    />
                  </div>

                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Patient Type *
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {["New Patient", "Existing Patient"].map((type) => {
                        const isActive = formData.patientType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, patientType: type })
                            }
                            aria-pressed={isActive}
                            className={`book-toggle-pill py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium ${
                              isActive ? "is-active" : ""
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 9.3 Appointment Preferences */}
                <div className="pt-2 border-t book-divider space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider book-kicker">
                    Appointment Preferences
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="book-dentist"
                        className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      >
                        Preferred Dentist
                      </label>
                      <select
                        id="book-dentist"
                        value={formData.dentist}
                        onChange={(e) =>
                          setFormData({ ...formData, dentist: e.target.value })
                        }
                        className="book-input w-full rounded-xl px-4 py-2.5 text-sm"
                      >
                        {DENTIST_OPTIONS.map((d) => (
                          <option key={d.slug} value={d.slug}>
                            {d.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="book-treatment"
                        className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      >
                        Treatment or Consultation
                      </label>
                      <select
                        id="book-treatment"
                        value={formData.treatment}
                        onChange={(e) =>
                          setFormData({ ...formData, treatment: e.target.value })
                        }
                        className="book-input w-full rounded-xl px-4 py-2.5 text-sm"
                      >
                        {TREATMENT_OPTIONS.map((t) => (
                          <option key={t.slug} value={t.slug}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="book-date"
                        className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      >
                        Preferred Date *
                      </label>
                      <input
                        id="book-date"
                        type="date"
                        min={todayISO}
                        required
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredDate: e.target.value,
                          })
                        }
                        className="book-input w-full rounded-xl px-4 py-2.5 text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="book-alt-time"
                        className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      >
                        Alternative Time (If Needed)
                      </label>
                      <select
                        id="book-alt-time"
                        value={formData.alternativeTime}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            alternativeTime: e.target.value,
                          })
                        }
                        className="book-input w-full rounded-xl px-4 py-2.5 text-sm"
                      >
                        <option value="Flexible / Any Available">
                          Flexible / Any Available
                        </option>
                        <option value="Morning (9:30 AM – 12:30 PM)">
                          Morning (9:30 AM – 12:30 PM)
                        </option>
                        <option value="Afternoon (2:00 PM – 4:30 PM)">
                          Afternoon (2:00 PM – 4:30 PM)
                        </option>
                        <option value="Evening (4:30 PM – 7:00 PM)">
                          Evening (4:30 PM – 7:00 PM)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Available Time Slots */}
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider mb-2">
                      Preferred Time Slot *
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = formData.preferredTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, preferredTime: slot })
                            }
                            aria-pressed={isSelected}
                            className={`book-slot-pill py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium ${
                              isSelected ? "is-active" : ""
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Accessibility & Optional Message */}
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="book-assistance"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Accessibility or Assistance Request (Optional)
                    </label>
                    <input
                      id="book-assistance"
                      type="text"
                      value={formData.assistanceNote}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          assistanceNote: e.target.value,
                        })
                      }
                      placeholder="e.g. Wheelchair-accessible suite, ground-floor support"
                      className="book-input w-full rounded-xl px-4 py-2.5 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="book-message"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Additional Note (Optional)
                    </label>
                    <textarea
                      id="book-message"
                      rows="3"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly share scheduling notes (please omit sensitive medical records)."
                      className="book-input w-full rounded-xl px-4 py-2.5 text-sm"
                    />
                  </div>
                </div>

                {/* 9.6 Consent & Privacy */}
                <div className="pt-3 border-t book-divider space-y-3">
                  <label className="flex items-start gap-3 text-xs sm:text-sm book-subintro cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacyAccepted}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          privacyAccepted: e.target.checked,
                        })
                      }
                      className="mt-1 book-checkbox"
                    />
                    <span>
                      I acknowledge the clinic&apos;s{" "}
                      <a href="/privacy-policy" className="underline font-medium">
                        Privacy Policy
                      </a>{" "}
                      and understand this is an appointment request pending
                      clinic confirmation. *
                    </span>
                  </label>

                  <label className="flex items-start gap-3 text-xs sm:text-sm book-subintro cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.contactConsent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactConsent: e.target.checked,
                        })
                      }
                      className="mt-1 book-checkbox"
                    />
                    <span>
                      I consent to be contacted via phone, WhatsApp, or email
                      regarding my appointment confirmation, rescheduling, and
                      reminders. *
                    </span>
                  </label>

                  <label className="flex items-start gap-3 text-xs sm:text-sm book-subintro cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.marketingConsent}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          marketingConsent: e.target.checked,
                        })
                      }
                      className="mt-1 book-checkbox"
                    />
                    <span>
                      Optional: Send me seasonal dental hygiene tips and clinic
                      updates.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="book-btn book-btn-primary w-full py-3.5 px-6 rounded-full text-sm font-semibold"
                >
                  Request Appointment Slot
                </button>
              </form>

              {/* ===== Right: 9.4 Patient Info & 9.5 Booking Policies ===== */}
              <aside className="lg:col-span-5 space-y-6">
                {/* 9.4 Patient Information */}
                <div className="book-info-card rounded-2xl sm:rounded-3xl p-6 space-y-4">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Patient Information
                  </h2>
                  <ul className="space-y-3 text-sm book-intro">
                    <li>
                      <strong>First-Time Patients:</strong> Please arrive 10
                      minutes early for calm, paperless registration and a
                      unhurried introductory chat.
                    </li>
                    <li>
                      <strong>What to Bring:</strong> A valid photo ID, any
                      recent dental X-rays or prescriptions, and your current
                      medication list.
                    </li>
                    <li>
                      <strong>Appointment Instructions:</strong> Eat a light
                      meal before routine visits unless advised otherwise by
                      our surgical team.
                    </li>
                    <li>
                      <strong>Accessibility Requests:</strong> Step-free ground
                      entry and wheelchair-friendly suites are available—note any
                      needs in the form.
                    </li>
                  </ul>
                </div>

                {/* 9.5 Booking Policies */}
                <div className="book-policy-card rounded-2xl sm:rounded-3xl p-6 space-y-4">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Booking Policies
                  </h2>
                  <ul className="space-y-3 text-sm book-intro">
                    <li>
                      <strong>Confirmation Procedure:</strong> All web requests
                      remain pending until verified and confirmed by our
                      reception desk.
                    </li>
                    <li>
                      <strong>Cancellation &amp; Rescheduling:</strong> Please
                      inform us at least 24 hours in advance if you need to move
                      or cancel your slot.
                    </li>
                    <li>
                      <strong>Late Arrival Policy:</strong> We hold slots for a
                      15-minute grace period so other patients are not delayed.
                    </li>
                    <li>
                      <strong>Advance Payment Policy:</strong> No advance
                      deposit is required for standard consultations. Any
                      procedure deposit is discussed transparently after your
                      in-person diagnosis.
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}