import React, { useState } from "react";
import "./styles/dentists.css";

import teamHeroImg from "../assets/dentists/dentists-team.png";
import drAnanyaImg from "../assets/dentists/dentist-ananya.png";
import drRohanImg from "../assets/dentists/dentist-liam.png";
import drPriyaImg from "../assets/dentists/dentist-priya.png";
import drVikramImg from "../assets/dentists/dentist-arthur.png";

const SPECIALIZATIONS = [
  { id: "All", label: "All Specialists", note: "Full clinical team" },
  { id: "General Dentist", label: "General Dentist", note: "Preventive & family care" },
  { id: "Orthodontist", label: "Orthodontist", note: "Braces, aligners & bite care" },
  { id: "Endodontist", label: "Endodontist", note: "Microscopic root canals" },
  { id: "Periodontist", label: "Periodontist", note: "Gum & bone health" },
  { id: "Prosthodontist", label: "Prosthodontist", note: "Crowns, bridges & veneers" },
  {
    id: "Oral and Maxillofacial Surgeon",
    label: "Oral and Maxillofacial Surgeon",
    note: "Wisdom teeth & jaw surgery",
  },
  { id: "Pediatric Dentist", label: "Pediatric Dentist", note: "Gentle care for children" },
  {
    id: "Implantologist",
    label: "Implantologist",
    note: "Guided dental implants",
  },
];

const DENTISTS = [
  {
    slug: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    designation: "Founder & Chief General Dentist",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics) · MAIDS, New Delhi",
    specialization: "General Dentist & Restorative Care",
    specializations: ["General Dentist", "Endodontist", "Prosthodontist"],
    experience: "15+ Years",
    image: drAnanyaImg,
    bio: "Dr. Sharma leads the clinic with a calm, conservative approach—focusing on painless preventive care, biomimetic restorations, and transparent treatment plans.",
    credentials: {
      education:
        "BDS & MDS (Conservative Dentistry & Endodontics), Maulana Azad Institute of Dental Sciences (MAIDS), New Delhi",
      registration: "Delhi State Dental Council (DCI) Reg. #A-14829 · Active",
      specializationCreds:
        "MDS Specialist in Conservative & Micro-Restorative Dentistry; Aesthetic Smile Design Certification",
      memberships:
        "Indian Dental Association (IDA), Indian Endodontic Society (IES)",
      awards: "Famdent Excellence in Dentistry Award — Patient-Centric Clinic (2024)",
    },
  },
  {
    slug: "dr-rohan-deshmukh",
    name: "Dr. Rohan Deshmukh",
    designation: "Consultant Orthodontist & Implantologist",
    qualifications: "BDS, MDS (Orthodontics) · Nair Hospital Dental College, Mumbai",
    specialization: "Orthodontist & Certified Implantologist",
    specializations: ["Orthodontist", "Implantologist"],
    experience: "11+ Years",
    image: drRohanImg,
    bio: "Dr. Deshmukh combines 3D intraoral scanning with clear aligners, self-ligating braces, and digitally guided dental implants for comfortable, predictable results.",
    credentials: {
      education:
        "BDS & MDS (Orthodontics & Dentofacial Orthopaedics), Nair Hospital Dental College, Mumbai",
      registration: "Maharashtra State Dental Council (DCI) Reg. #A-22914 · Active",
      specializationCreds:
        "MDS Orthodontics; Fellowship in Oral Implantology (ISOI) & Certified Clear Aligner Provider",
      memberships:
        "Indian Orthodontic Society (IOS), Indian Society of Oral Implantologists (ISOI), IDA",
      awards: "IOS Young Clinician Recognition for Digital Aligner Planning (2023)",
    },
  },
  {
    slug: "dr-priya-nair",
    name: "Dr. Priya Nair",
    designation: "Pediatric Dentist & Microscopic Endodontist",
    qualifications: "BDS, MDS (Pedodontics) · MCODS, Manipal",
    specialization: "Pediatric Dentist & Endodontist",
    specializations: ["Pediatric Dentist", "Endodontist"],
    experience: "10+ Years",
    image: drPriyaImg,
    bio: "Known for her warm, reassuring chairside manner, Dr. Nair specializes in anxiety-free dental care for children and single-sitting microscopic root canal treatments.",
    credentials: {
      education:
        "BDS & MDS (Pedodontics & Preventive Dentistry), Manipal College of Dental Sciences (MCODS), Manipal",
      registration: "Karnataka State Dental Council (DCI) Reg. #A-19305 · Active",
      specializationCreds:
        "MDS Pediatric Dentistry; Advanced Certification in Microscopic Endodontics & Nitrous Oxide Sedation",
      memberships:
        "Indian Society of Pedodontics and Preventive Dentistry (ISPPD), Indian Endodontic Society (IES)",
      awards: "National Child-Friendly Dental Practice Honour (2024)",
    },
  },
  {
    slug: "dr-vikram-malhotra",
    name: "Dr. Vikram Malhotra",
    designation: "Senior Oral & Maxillofacial Surgeon & Periodontist",
    qualifications: "BDS, MDS (OMFS) · Saveetha Dental College, Chennai",
    specialization:
      "Oral & Maxillofacial Surgeon, Periodontist, Prosthodontist & Implantologist",
    specializations: [
      "Oral and Maxillofacial Surgeon",
      "Periodontist",
      "Prosthodontist",
      "Implantologist",
    ],
    experience: "20+ Years",
    image: drVikramImg,
    bio: "With two decades of surgical expertise, Dr. Malhotra performs painless impacted wisdom tooth removals, laser gum therapy, and full-mouth implant rehabilitation.",
    credentials: {
      education:
        "BDS & MDS (Oral & Maxillofacial Surgery), Saveetha Dental College & Hospitals, Chennai",
      registration: "Delhi State Dental Council (DCI) Reg. #A-09412 · Active",
      specializationCreds:
        "MDS Oral & Maxillofacial Surgery; Fellowship in Periodontal Microsurgery & Implant Prosthetics",
      memberships:
        "Association of Oral and Maxillofacial Surgeons of India (AOMSI), Indian Prosthodontic Society (IPS), IDA",
      awards: "20-Year Distinguished Clinical Excellence Citation — IDA (2025)",
    },
  },
];

const OurDentists = ()=> {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedCredSlug, setSelectedCredSlug] = useState(DENTISTS[0].slug);

  const filteredDentists =
    selectedSpecialty === "All"
      ? DENTISTS
      : DENTISTS.filter((d) => d.specializations.includes(selectedSpecialty));

  const activeCredentialDentist =
    DENTISTS.find((d) => d.slug === selectedCredSlug) || DENTISTS[0];

  const handleSpecialtySelect = (specialtyId) => {
    setSelectedSpecialty(specialtyId);
    const listEl = document.getElementById("dentist-listing");
    if (listEl && specialtyId !== "All") {
      listEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <main className="dentists-page min-h-screen">
      {/* ===== 5.1 Page Hero ===== */}
      <section
        className="dentists-hero relative overflow-hidden"
        aria-labelledby="dentists-hero-heading"
      >
        <div className="dentists-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="dentists-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="dentists-eyebrow-dot" aria-hidden="true" />
                Meet the Team
              </span>

              <h1
                id="dentists-hero-heading"
                className="dentists-hero-title font-semibold tracking-tight"
              >
                Our Dental Professionals
              </h1>

              <p className="dentists-intro text-base sm:text-lg leading-relaxed max-w-xl">
                Our practice brings together experienced BDS &amp; MDS
                specialists under one calm roof—so families receive coordinated,
                ethical care without visiting multiple clinics.
              </p>

              <p className="dentists-subintro text-sm sm:text-base leading-relaxed max-w-xl">
                Every clinician is DCI-registered and committed to unhurried
                listening, gentle treatment, and clear, upfront guidance.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="#dentist-listing"
                  className="dentists-btn dentists-btn-primary inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold"
                >
                  Browse Dentists
                </a>
                <a
                  href="/book-appointment"
                  className="dentists-btn dentists-btn-secondary inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium"
                >
                  Book a Consultation
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <figure className="dentists-hero-media relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src={teamHeroImg}
                  alt="Our Dental Professionals team standing together in the sunlit clinic lounge"
                  className="dentists-hero-img w-full h-full object-cover"
                  loading="eager"
                />
                <figcaption className="dentists-hero-caption flex flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-5 sm:py-3.5">
                  <span className="text-xs sm:text-sm font-medium">
                    Multi-Specialty MDS &amp; BDS Team
                  </span>
                  <span className="dentists-caption-tag text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
                    DCI Registered · 8 Disciplines
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5.3 Specializations (Interactive Filter Bar) ===== */}
      <section
        className="dentists-specializations py-12 sm:py-16"
        aria-labelledby="specializations-heading"
      >
        <div className="dentists-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7 sm:mb-9">
            <div className="max-w-2xl space-y-2.5">
              <span className="dentists-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="dentists-eyebrow-dot" aria-hidden="true" />
                Specializations
              </span>
              <h2
                id="specializations-heading"
                className="dentists-section-heading font-semibold tracking-tight"
              >
                Comprehensive expertise across every dental discipline.
              </h2>
              <p className="text-sm sm:text-base dentists-subintro">
                Select a specialization to filter our dentists below.
              </p>
            </div>

            {selectedSpecialty !== "All" && (
              <button
                type="button"
                onClick={() => setSelectedSpecialty("All")}
                className="dentists-reset-btn self-start md:self-auto px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
              >
                Show All Dentists
              </button>
            )}
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
            role="tablist"
            aria-label="Filter dentists by specialization"
          >
            {SPECIALIZATIONS.map((spec) => {
              const isActive = selectedSpecialty === spec.id;
              return (
                <button
                  key={spec.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleSpecialtySelect(spec.id)}
                  className={`specialty-card text-left rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between gap-3 ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  <div>
                    <p className="text-sm sm:text-base font-semibold">
                      {spec.label}
                    </p>
                    <p className="text-xs dentists-subintro mt-0.5">{spec.note}</p>
                  </div>
                  <span className="specialty-dot shrink-0" aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 5.2 Dentist Listing ===== */}
      <section
        id="dentist-listing"
        className="dentists-listing py-14 sm:py-20"
        aria-labelledby="dentist-listing-heading"
      >
        <div className="dentists-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-9 sm:mb-12">
            <div className="space-y-2.5">
              <span className="dentists-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="dentists-eyebrow-dot" aria-hidden="true" />
                Dentist Directory
              </span>
              <h2
                id="dentist-listing-heading"
                className="dentists-section-heading font-semibold tracking-tight"
              >
                {selectedSpecialty === "All"
                  ? "Meet Our Dentists"
                  : `${selectedSpecialty} Specialists`}
              </h2>
            </div>
            <span className="text-xs sm:text-sm font-medium dentists-subintro">
              Showing {filteredDentists.length} of {DENTISTS.length} clinicians
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredDentists.map((dentist) => (
              <article
                key={dentist.slug}
                className="dentist-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col sm:flex-row"
              >
                <div className="dentist-photo-wrap sm:w-2/5 relative shrink-0 overflow-hidden">
                  <img
                    src={dentist.image}
                    alt={`${dentist.name}, ${dentist.designation}`}
                    className="dentist-photo w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <span className="dentist-exp-badge px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold">
                    {dentist.experience} Exp.
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-2.5">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {dentist.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium dentist-designation mt-0.5">
                        {dentist.designation}
                      </p>
                    </div>

                    <div className="dentist-meta-box rounded-xl p-3 space-y-1.5 text-xs">
                      <p>
                        <strong className="font-semibold">Qualifications:</strong>{" "}
                        {dentist.qualifications}
                      </p>
                      <p>
                        <strong className="font-semibold">Specialization:</strong>{" "}
                        {dentist.specialization}
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed dentists-subintro">
                      {dentist.bio}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <a
                      href={`/dentists/${dentist.slug}`}
                      className="dentists-btn dentists-btn-secondary flex-1 min-w-32.5 inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-center"
                    >
                      View Profile
                    </a>
                    <a
                      href={`/book-appointment?dentist=${dentist.slug}`}
                      className="dentists-btn dentists-btn-primary flex-1 min-w-35 inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-center"
                    >
                      Book with Dentist
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5.4 Professional Credentials ===== */}
      <section
        className="dentists-credentials py-14 sm:py-20"
        aria-labelledby="credentials-heading"
      >
        <div className="dentists-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8 sm:mb-10">
            <div className="max-w-2xl space-y-2.5">
              <span className="dentists-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="dentists-eyebrow-dot" aria-hidden="true" />
                Professional Credentials
              </span>
              <h2
                id="credentials-heading"
                className="dentists-section-heading font-semibold tracking-tight"
              >
                Verified DCI registrations, degrees, and clinical honors.
              </h2>
              <p className="text-sm sm:text-base dentists-subintro">
                Select a dentist to inspect their educational qualifications,
                State Dental Council registration, memberships, and awards.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {DENTISTS.map((d) => {
                const isActive = d.slug === activeCredentialDentist.slug;
                return (
                  <button
                    key={d.slug}
                    type="button"
                    onClick={() => setSelectedCredSlug(d.slug)}
                    aria-pressed={isActive}
                    className={`cred-tab-btn px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium ${
                      isActive ? "is-active" : ""
                    }`}
                  >
                    {d.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={activeCredentialDentist.slug}
            className="cred-panel rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b cred-panel-header">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {activeCredentialDentist.name}
                </h3>
                <p className="text-xs sm:text-sm dentists-subintro mt-0.5">
                  {activeCredentialDentist.designation}
                </p>
              </div>
              <a
                href={`/dentists/${activeCredentialDentist.slug}`}
                className="dentists-btn dentists-btn-secondary self-start sm:self-auto px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
              >
                View Profile &rarr;
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="cred-item-card rounded-2xl p-4 sm:p-5">
                <span className="cred-label text-[11px] font-semibold uppercase tracking-wider">
                  Educational Qualifications
                </span>
                <p className="text-sm font-medium mt-2 leading-relaxed">
                  {activeCredentialDentist.credentials.education}
                </p>
              </div>

              <div className="cred-item-card rounded-2xl p-4 sm:p-5">
                <span className="cred-label text-[11px] font-semibold uppercase tracking-wider">
                  Dental Registration
                </span>
                <p className="text-sm font-medium mt-2 leading-relaxed">
                  {activeCredentialDentist.credentials.registration}
                </p>
              </div>

              <div className="cred-item-card rounded-2xl p-4 sm:p-5">
                <span className="cred-label text-[11px] font-semibold uppercase tracking-wider">
                  Specialization Credentials
                </span>
                <p className="text-sm font-medium mt-2 leading-relaxed">
                  {activeCredentialDentist.credentials.specializationCreds}
                </p>
              </div>

              <div className="cred-item-card rounded-2xl p-4 sm:p-5">
                <span className="cred-label text-[11px] font-semibold uppercase tracking-wider">
                  Professional Memberships
                </span>
                <p className="text-sm font-medium mt-2 leading-relaxed">
                  {activeCredentialDentist.credentials.memberships}
                </p>
              </div>

              <div className="cred-item-card rounded-2xl p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
                <span className="cred-label text-[11px] font-semibold uppercase tracking-wider">
                  Verified Awards
                </span>
                <p className="text-sm font-medium mt-2 leading-relaxed">
                  {activeCredentialDentist.credentials.awards}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5.5 CTA ===== */}
      <section
        className="dentists-cta py-12 sm:py-16 lg:py-20"
        aria-labelledby="dentists-cta-heading"
      >
        <div className="dentists-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="dentists-cta-banner rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2.5">
                <span className="dentists-cta-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                  <span className="dentists-eyebrow-dot" aria-hidden="true" />
                  Schedule Your Visit
                </span>

                <h2
                  id="dentists-cta-heading"
                  className="dentists-section-heading font-semibold tracking-tight"
                >
                  Book a consultation with a dentist.
                </h2>

                <p className="text-sm sm:text-base dentists-intro leading-relaxed">
                  Not sure which specialist is right for you? Start with a calm
                  comprehensive consultation and we&apos;ll guide you clearly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="/book-appointment"
                  className="dentists-btn dentists-btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-center"
                >
                  Book Consultation
                </a>
                <a
                  href="/treatments"
                  className="dentists-btn dentists-btn-secondary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium text-center"
                >
                  Explore Treatments
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OurDentists