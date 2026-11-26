import React, { useState } from "react";
import "./styles/contactUs.css";

import clinicHeroImg from "../assets/about-clinic-hero.png";

const OPENING_HOURS = [
  {
    day: "Monday",
    hours: "9:30 AM – 7:00 PM",
    breakTime: "1:30 PM – 2:00 PM",
    note: "Regular Clinic Hours",
  },
  {
    day: "Tuesday",
    hours: "9:30 AM – 7:00 PM",
    breakTime: "1:30 PM – 2:00 PM",
    note: "Regular Clinic Hours",
  },
  {
    day: "Wednesday",
    hours: "9:30 AM – 7:00 PM",
    breakTime: "1:30 PM – 2:00 PM",
    note: "Regular Clinic Hours",
  },
  {
    day: "Thursday",
    hours: "9:30 AM – 7:00 PM",
    breakTime: "1:30 PM – 2:00 PM",
    note: "Regular Clinic Hours",
  },
  {
    day: "Friday",
    hours: "9:30 AM – 7:00 PM",
    breakTime: "1:30 PM – 2:00 PM",
    note: "Regular Clinic Hours",
  },
  {
    day: "Saturday",
    hours: "9:30 AM – 5:00 PM",
    breakTime: "1:30 PM – 2:00 PM",
    note: "Full Specialist Team",
  },
  {
    day: "Sunday",
    hours: "Closed (Urgent Care Only)",
    breakTime: "—",
    note: "Appointment-Only Emergency",
  },
];

// Optional notice banner for temporary closures or holiday hours
const CLINIC_SCHEDULE_NOTICE = {
  holidayNotice:
    "National & Festival Holidays: Open for pre-scheduled urgent care only. Please call ahead before visiting.",
  temporaryClosure: null, // Example: "Closed on 15 Aug for Independence Day."
};

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) return;
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
      consent: false,
    });
  };

  return (
    <main className="contact-page min-h-screen">
      {/* ===== 10.1 Contact Hero ===== */}
      <section
        className="contact-hero relative overflow-hidden py-12 sm:py-16 lg:py-20"
        aria-labelledby="contact-hero-heading"
      >
        <div className="contact-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="contact-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="contact-eyebrow-dot" aria-hidden="true" />
                Get In Touch
              </span>

              <h1
                id="contact-hero-heading"
                className="contact-hero-title font-semibold tracking-tight"
              >
                Contact Our Clinic
              </h1>

              <p className="contact-intro text-base sm:text-lg leading-relaxed max-w-xl">
                Have a question about a treatment, need help finding us, or want
                to check dentist availability? Reach out by phone, WhatsApp, or
                the message form below.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="/book-appointment"
                  className="contact-btn contact-btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold"
                >
                  Book Appointment
                </a>
                <a
                  href="https://wa.me/919810000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn contact-btn-secondary inline-flex items-center justify-center px-5 py-3.5 rounded-full text-sm font-medium"
                >
                  WhatsApp Clinic
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <figure className="contact-hero-media relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src={clinicHeroImg}
                  alt="Serene Dental Studio reception and waiting lounge"
                  className="contact-hero-img w-full h-full object-cover"
                />
                <figcaption className="contact-hero-caption px-4 py-3 sm:px-5 sm:py-3.5 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-medium">
                    Serene Dental Studio · Greater Kailash II
                  </span>
                  <span className="contact-caption-tag px-2.5 py-1 rounded-full text-[11px] font-medium">
                    Ground-Floor Access
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 10.2 Contact Information & 10.3 Opening Hours ===== */}
      <section className="contact-details py-12 sm:py-16 lg:py-20">
        <div className="contact-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 10.2 Contact Information */}
            <div className="lg:col-span-5 space-y-5">
              <div className="contact-info-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-5">
                <div>
                  <span className="contact-kicker text-xs font-semibold uppercase tracking-wider">
                    Clinic Details
                  </span>
                  <h2 className="text-xl sm:text-2xl font-semibold mt-1">
                    Serene Dental Studio
                  </h2>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="contact-info-row rounded-xl p-3.5">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider contact-kicker">
                      Complete Address
                    </span>
                    <p className="font-medium mt-1 leading-relaxed">
                      Ground Floor, M-42, Main Market Road, Greater Kailash
                      Part II, New Delhi – 110048, India
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="contact-info-row rounded-xl p-3.5">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider contact-kicker">
                        Primary Phone
                      </span>
                      <a
                        href="tel:+919810000000"
                        className="font-semibold mt-1 inline-block hover:underline"
                      >
                        +91 98100 00000
                      </a>
                    </div>

                    <div className="contact-info-row rounded-xl p-3.5">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider contact-kicker">
                        Secondary Phone
                      </span>
                      <a
                        href="tel:+911141000000"
                        className="font-semibold mt-1 inline-block hover:underline"
                      >
                        +91 11 4100 0000
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="contact-info-row rounded-xl p-3.5">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider contact-kicker">
                        Email Address
                      </span>
                      <a
                        href="mailto:care@serenedental.in"
                        className="font-semibold mt-1 inline-block hover:underline break-all"
                      >
                        care@serenedental.in
                      </a>
                    </div>

                    <div className="contact-info-row rounded-xl p-3.5">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider contact-kicker">
                        WhatsApp Number
                      </span>
                      <a
                        href="https://wa.me/919810000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold mt-1 inline-block hover:underline"
                      >
                        +91 98100 00000
                      </a>
                    </div>
                  </div>
                </div>

                {/* 10.7 Social Media */}
                <div className="pt-4 border-t contact-divider space-y-3">
                  <span className="block text-xs font-semibold uppercase tracking-wider contact-kicker">
                    Follow Us
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-pill inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 10.3 Opening Hours */}
            <div className="lg:col-span-7">
              <div className="contact-hours-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="contact-kicker text-xs font-semibold uppercase tracking-wider">
                      Clinic Schedule
                    </span>
                    <h2 className="text-xl sm:text-2xl font-semibold mt-1">
                      Opening Hours
                    </h2>
                  </div>
                  <span className="contact-break-pill px-3 py-1 rounded-full text-xs font-medium self-start sm:self-auto">
                    Sterilization Break: 1:30 – 2:00 PM
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b contact-divider text-xs uppercase tracking-wider contact-kicker">
                        <th className="py-3 pr-3 font-semibold">Day</th>
                        <th className="py-3 px-3 font-semibold">Opening Hours</th>
                        <th className="py-3 px-3 font-semibold">Break</th>
                        <th className="py-3 pl-3 font-semibold">Availability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {OPENING_HOURS.map((row) => (
                        <tr
                          key={row.day}
                          className="border-b contact-divider last:border-b-0"
                        >
                          <td className="py-3 pr-3 font-semibold">{row.day}</td>
                          <td className="py-3 px-3">{row.hours}</td>
                          <td className="py-3 px-3 contact-subintro">
                            {row.breakTime}
                          </td>
                          <td className="py-3 pl-3 contact-subintro">
                            {row.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Holiday, Temporary Closure & Appointment-Only Notes */}
                <div className="contact-notice-box rounded-2xl p-4 space-y-1.5 text-xs sm:text-sm">
                  <p>
                    <strong>Special Holiday Hours:</strong>{" "}
                    {CLINIC_SCHEDULE_NOTICE.holidayNotice}
                  </p>
                  {CLINIC_SCHEDULE_NOTICE.temporaryClosure && (
                    <p>
                      <strong>Temporary Closure Notice:</strong>{" "}
                      {CLINIC_SCHEDULE_NOTICE.temporaryClosure}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 10.4 Google Maps & 10.5 Contact Form ===== */}
      <section className="contact-map-form py-12 sm:py-16 lg:py-20">
        <div className="contact-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* 10.4 Google Maps */}
            <div className="lg:col-span-6 space-y-5">
              <div className="contact-map-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="contact-kicker text-xs font-semibold uppercase tracking-wider">
                      Clinic Location
                    </span>
                    <h2 className="text-xl sm:text-2xl font-semibold mt-0.5">
                      Find Us on Google Maps
                    </h2>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Greater+Kailash+Part+2+New+Delhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-btn contact-btn-primary px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
                  >
                    Get Directions &rarr;
                  </a>
                </div>

                <div className="contact-map-frame rounded-2xl overflow-hidden">
                  <iframe
                    title="Serene Dental Studio Location Map"
                    src="https://maps.google.com/maps?q=Greater%20Kailash%20Part%202%20New%20Delhi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-72 sm:h-80 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="contact-info-row rounded-xl p-3.5">
                    <strong className="block mb-1">Nearby Landmarks</strong>
                    <span className="contact-subintro">
                      Opposite GK-II M Block Market Park, 200m from Savitri
                      Cinema Flyover.
                    </span>
                  </div>
                  <div className="contact-info-row rounded-xl p-3.5">
                    <strong className="block mb-1">Parking Information</strong>
                    <span className="contact-subintro">
                      Reserved patient bay at gate + M-Block municipal parking
                      adjacent.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 10.5 Contact Form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleSubmit}
                className="contact-form-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-5"
              >
                <div>
                  <span className="contact-kicker text-xs font-semibold uppercase tracking-wider">
                    Send a Message
                  </span>
                  <h2 className="text-xl sm:text-2xl font-semibold mt-1">
                    Contact Form
                  </h2>
                </div>

                {submitted && (
                  <div
                    className="contact-success-banner rounded-2xl p-4 text-sm leading-relaxed"
                    role="status"
                  >
                    <strong>Message received!</strong> Our front-desk team will
                    reply during clinic hours. For urgent toothaches, please
                    call{" "}
                    <a href="tel:+919810000000" className="underline font-semibold">
                      +91 98100 00000
                    </a>
                    .
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="c-name"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="contact-input w-full rounded-xl px-4 py-2.5 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="c-phone"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Phone *
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98XXX XXXXX"
                      className="contact-input w-full rounded-xl px-4 py-2.5 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="c-email"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="contact-input w-full rounded-xl px-4 py-2.5 text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="c-subject"
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    >
                      Subject *
                    </label>
                    <input
                      id="c-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Treatment inquiry, Parking"
                      className="contact-input w-full rounded-xl px-4 py-2.5 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="c-message"
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="c-message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How can our team assist you?"
                    className="contact-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs sm:text-sm contact-subintro cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData({ ...formData, consent: e.target.checked })
                    }
                    className="mt-1 contact-checkbox"
                  />
                  <span>
                    I consent to Serene Dental Studio contacting me via phone,
                    WhatsApp, or email to respond to this inquiry. *
                  </span>
                </label>

                <button
                  type="submit"
                  className="contact-btn contact-btn-primary w-full py-3.5 px-6 rounded-full text-sm font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 10.6 Additional Information ===== */}
      <section
        className="contact-extra py-12 sm:py-16 lg:py-20"
        aria-labelledby="additional-info-heading"
      >
        <div className="contact-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 space-y-2">
            <span className="contact-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase">
              <span className="contact-eyebrow-dot" aria-hidden="true" />
              Visitor Guide
            </span>
            <h2
              id="additional-info-heading"
              className="contact-section-heading font-semibold tracking-tight"
            >
              Additional Clinic Information
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <article className="contact-extra-card rounded-2xl p-5 space-y-2">
              <h3 className="text-base font-semibold">Parking Availability</h3>
              <p className="text-xs sm:text-sm leading-relaxed contact-subintro">
                Dedicated patient drop-off bay at the entrance plus shaded
                market parking within 40 meters.
              </p>
            </article>

            <article className="contact-extra-card rounded-2xl p-5 space-y-2">
              <h3 className="text-base font-semibold">Public Transport</h3>
              <p className="text-xs sm:text-sm leading-relaxed contact-subintro">
                5-minute auto ride from Greater Kailash Metro Station (Magenta
                Line) and Nehru Enclave Metro.
              </p>
            </article>

            <article className="contact-extra-card rounded-2xl p-5 space-y-2">
              <h3 className="text-base font-semibold">Accessibility</h3>
              <p className="text-xs sm:text-sm leading-relaxed contact-subintro">
                Step-free ground-floor entrance, wide doorways, wheelchair-ready
                suites, and accessible restrooms.
              </p>
            </article>

            <article className="contact-extra-card rounded-2xl p-5 space-y-2">
              <h3 className="text-base font-semibold">Nearby Landmarks</h3>
              <p className="text-xs sm:text-sm leading-relaxed contact-subintro">
                GK-II M Block Market, Savitri Cinema Flyover, and Alaknanda
                crossing.
              </p>
            </article>

            <article className="contact-extra-card contact-emergency-card rounded-2xl p-5 space-y-2 sm:col-span-2 lg:col-span-1">
              <h3 className="text-base font-semibold">Emergency Instructions</h3>
              <p className="text-xs sm:text-sm leading-relaxed contact-intro">
                For severe toothache, swelling, or knocked-out tooth, call{" "}
                <a href="tel:+919810000000" className="underline font-semibold">
                  +91 98100 00000
                </a>{" "}
                immediately for priority urgent care.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}