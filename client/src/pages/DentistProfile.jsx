import React from "react";
import { useParams } from "react-router-dom";
import "./styles/dentistProfile.css";

import drAnanyaImg from "../assets/dentists/dentist-ananya.png";
import drRohanImg from "../assets/dentists/dentist-liam.png";
import drPriyaImg from "../assets/dentists/dentist-priya.png";
import drVikramImg from "../assets/dentists/dentist-arthur.png";

const DENTIST_PROFILES = [
  {
    slug: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    title: "Founder & Chief General Dentist",
    qualifications:
      "BDS, MDS (Conservative Dentistry & Endodontics) · MAIDS, New Delhi",
    specializations: ["General Dentist", "Endodontist", "Prosthodontist"],
    registration: "Delhi State Dental Council (DCI) Reg. #A-14829 · Active",
    experience: "15+ Years",
    image: drAnanyaImg,
    biography:
      "Dr. Ananya Sharma founded our practice in 2016 with a simple conviction: dental care should feel unhurried, transparent, and deeply respectful of patient comfort. Known for her calm voice and gentle hand, she specializes in preserving natural tooth structure through conservative, evidence-based dentistry.",
    journey:
      "After graduating with honours from Maulana Azad Institute of Dental Sciences (MAIDS), New Delhi, Dr. Sharma completed her MDS in Conservative Dentistry & Endodontics and spent seven years mentoring clinicians in biomimetic restorative techniques before establishing our multi-specialty clinic.",
    clinicalInterests: [
      "Minimally Invasive Biomimetic Restorations",
      "Painless Single-Sitting Root Canal Therapy",
      "Aesthetic Composite & Ceramic Smile Design",
      "Anxiety-Free Care for Sensitive Patients",
    ],
    treatmentsProvided: [
      "Comprehensive Dental Check-ups & Digital X-Rays",
      "Tooth-Coloured Composite Fillings",
      "Microscopic Root Canal Treatment",
      "Ceramic Crowns, Inlays & Onlays",
      "Porcelain Veneers & Smile Makeovers",
      "Preventive Scaling & Enamel Remineralization",
    ],
    languages: ["English", "Hindi", "Punjabi"],
    memberships: [
      "Indian Dental Association (IDA)",
      "Indian Endodontic Society (IES)",
      "Academy of Conservative Dentistry & Endodontics",
    ],
    awardsAndCerts: [
      "Famdent Excellence in Dentistry Award — Patient-Centric Clinic (2024)",
      "Certified in Biomimetic & Micro-Restorative Dentistry",
      "Recognized for 10,000+ Gentle Patient Consultations",
    ],
    availability: [
      { day: "Monday – Friday", hours: "9:30 AM – 6:30 PM" },
      { day: "Saturday", hours: "9:30 AM – 3:00 PM" },
      { day: "Sunday", hours: "By Emergency Appointment" },
    ],
  },
  {
    slug: "dr-rohan-deshmukh",
    name: "Dr. Rohan Deshmukh",
    title: "Consultant Orthodontist & Implantologist",
    qualifications:
      "BDS, MDS (Orthodontics & Dentofacial Orthopaedics) · Nair Hospital Dental College, Mumbai",
    specializations: ["Orthodontist", "Implantologist"],
    registration: "Maharashtra State Dental Council (DCI) Reg. #A-22914 · Active",
    experience: "11+ Years",
    image: drRohanImg,
    biography:
      "Dr. Rohan Deshmukh specializes in digital orthodontics and computer-guided dental implants. Using optical 3D intraoral scanners instead of messy putty molds, he designs comfortable aligner and bite-correction plans for teens and working adults alike.",
    journey:
      "Following his BDS and MDS in Orthodontics at Nair Hospital Dental College, Mumbai, Dr. Deshmukh completed an advanced clinical fellowship in Oral Implantology (ISOI) and digital smile planning, treating over 2,400 orthodontic and implant cases.",
    clinicalInterests: [
      "Clear Aligner Therapy & Digital Smile Simulation",
      "Teen & Adult Bite Correction",
      "Computer-Guided Single & Multi-Tooth Implants",
      "Self-Ligating Ceramic Braces",
    ],
    treatmentsProvided: [
      "Clear Aligners & Invisible Braces",
      "Metal & Ceramic Self-Ligating Braces",
      "3D Guided Dental Implants",
      "Jaw Growth & Bite Alignment Guidance",
      "Post-Orthodontic Fixed & Clear Retainers",
      "Digital Intraoral 3D Scanning",
    ],
    languages: ["English", "Hindi", "Marathi"],
    memberships: [
      "Indian Orthodontic Society (IOS)",
      "Indian Society of Oral Implantologists (ISOI)",
      "Indian Dental Association (IDA)",
    ],
    awardsAndCerts: [
      "IOS Young Clinician Recognition — Digital Aligner Planning (2023)",
      "Fellowship in Oral Implantology (ISOI)",
      "Certified Provider — Digital Clear Aligner Systems",
    ],
    availability: [
      { day: "Tuesday, Thursday & Friday", hours: "10:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "10:00 AM – 5:00 PM" },
      { day: "Monday & Wednesday", hours: "Consultation by Slot" },
    ],
  },
  {
    slug: "dr-priya-nair",
    name: "Dr. Priya Nair",
    title: "Pediatric Dentist & Microscopic Endodontist",
    qualifications:
      "BDS, MDS (Pedodontics & Preventive Dentistry) · MCODS, Manipal",
    specializations: ["Pediatric Dentist", "Endodontist"],
    registration: "Karnataka State Dental Council (DCI) Reg. #A-19305 · Active",
    experience: "10+ Years",
    image: drPriyaImg,
    biography:
      "Dr. Priya Nair is loved by young patients and parents for turning first dental visits into calm, positive experiences. Alongside pediatric preventive care, she performs precision microscope-assisted root canal therapy for adults and children.",
    journey:
      "Dr. Nair earned her BDS and MDS from Manipal College of Dental Sciences (MCODS), Manipal, followed by specialized training in microscopic endodontics and pediatric nitrous-oxide relaxation techniques.",
    clinicalInterests: [
      "Child-Friendly Preventive Dentistry & Habit Counseling",
      "Microscope-Assisted Root Canal Therapy",
      "Painless Pediatric Pulp Therapy & Sealants",
      "Nitrous Oxide Inhalation Comfort Care",
    ],
    treatmentsProvided: [
      "Children's First Dental Visits & Fluoride Care",
      "Pit & Fissure Sealants",
      "Single-Sitting Microscopic Root Canals",
      "Pediatric Space Maintainers & Stainless/Zirconia Crowns",
      "Dental Trauma & Emergency Tooth Care",
      "Re-Root Canal & Micro-Endodontic Retreatment",
    ],
    languages: ["English", "Hindi", "Malayalam", "Kannada"],
    memberships: [
      "Indian Society of Pedodontics and Preventive Dentistry (ISPPD)",
      "Indian Endodontic Society (IES)",
      "Indian Dental Association (IDA)",
    ],
    awardsAndCerts: [
      "National Child-Friendly Dental Practice Honour (2024)",
      "Certified in Pediatric Nitrous Oxide Sedation",
      "Advanced Micro-Endodontics Clinical Certification",
    ],
    availability: [
      { day: "Monday, Wednesday & Friday", hours: "9:30 AM – 6:00 PM" },
      { day: "Saturday", hours: "9:30 AM – 4:00 PM" },
      { day: "Tuesday & Thursday", hours: "Morning Pediatric Slots" },
    ],
  },
  {
    slug: "dr-vikram-malhotra",
    name: "Dr. Vikram Malhotra",
    title: "Senior Oral & Maxillofacial Surgeon & Periodontist",
    qualifications:
      "BDS, MDS (Oral & Maxillofacial Surgery) · Saveetha Dental College, Chennai",
    specializations: [
      "Oral and Maxillofacial Surgeon",
      "Periodontist",
      "Prosthodontist",
      "Implantologist",
    ],
    registration: "Delhi State Dental Council (DCI) Reg. #A-09412 · Active",
    experience: "20+ Years",
    image: drVikramImg,
    biography:
      "With over two decades of surgical and prosthodontic experience, Dr. Vikram Malhotra handles impacted wisdom teeth, laser gum procedures, and full-mouth implant rehabilitation with steady precision and minimal post-operative discomfort.",
    journey:
      "After completing his BDS and MDS in Oral & Maxillofacial Surgery at Saveetha Dental College, Chennai, Dr. Malhotra trained extensively in periodontal microsurgery and full-arch implant prosthetics across leading hospital and private centers.",
    clinicalInterests: [
      "Atraumatic Impacted Wisdom Tooth Surgery",
      "Laser Periodontal & Gum Contouring",
      "Full-Arch & Immediate-Load Dental Implants",
      "Bone Grafting & Sinus Lift Procedures",
    ],
    treatmentsProvided: [
      "Impacted Wisdom Tooth Extractions",
      "Dental Implants & Full-Mouth Rehabilitation",
      "Laser Gum Therapy & Flap Surgery",
      "Bone Grafting & Ridge Augmentation",
      "Fixed Bridges & Implant-Supported Dentures",
      "Oral Cyst & Minor Maxillofacial Surgery",
    ],
    languages: ["English", "Hindi", "Tamil"],
    memberships: [
      "Association of Oral and Maxillofacial Surgeons of India (AOMSI)",
      "Indian Prosthodontic Society (IPS)",
      "Indian Society of Periodontology (ISP)",
      "Indian Dental Association (IDA)",
    ],
    awardsAndCerts: [
      "20-Year Distinguished Clinical Excellence Citation — IDA (2025)",
      "Fellowship in Implant Prosthodontics & Surgical Micro-Grafting",
      "Certified Laser Periodontal Specialist",
    ],
    availability: [
      { day: "Monday, Tuesday & Thursday", hours: "10:00 AM – 6:30 PM" },
      { day: "Saturday", hours: "10:00 AM – 2:30 PM" },
      { day: "Wednesday & Friday", hours: "Surgical Consultation Slots" },
    ],
  },
];

const DentistProfile = ()=> {
  const { slug } = useParams();
  const dentist = DENTIST_PROFILES.find((item) => item.slug === slug);

  if (!dentist) {
    return (
      <main className="profile-page min-h-screen py-20 px-4">
        <div className="mx-auto max-w-2xl profile-not-found rounded-3xl p-8 text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Dentist profile not found
          </h1>
          <p className="text-sm sm:text-base profile-subintro">
            The clinician profile you are looking for may have moved or is no
            longer listed.
          </p>
          <a
            href="/dentists"
            className="profile-btn profile-btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold"
          >
            &larr; Back to All Dentists
          </a>
        </div>
      </main>
    );
  }

  const relatedDentists = DENTIST_PROFILES.filter(
    (item) => item.slug !== dentist.slug
  ).slice(0, 3);

  return (
    <main className="profile-page min-h-screen">
      {/* ===== Top Breadcrumb & Hero Card ===== */}
      <section
        className="profile-hero relative overflow-hidden py-10 sm:py-14 lg:py-20"
        aria-labelledby="profile-name-heading"
      >
        <div className="profile-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
            <a
              href="/dentists"
              className="profile-back-link inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full"
            >
              &larr; Back to Our Dental Professionals
            </a>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Full Profile Photograph */}
            <div className="lg:col-span-5">
              <div className="profile-frame-wrap relative">
                <figure className="profile-media relative rounded-2xl sm:rounded-3xl overflow-hidden">
                  <img
                    src={dentist.image}
                    alt={`${dentist.name}, ${dentist.title}`}
                    className="profile-img w-full h-full object-cover object-top"
                  />
                  <figcaption className="profile-photo-badge px-4 py-2.5 rounded-xl flex items-center justify-between gap-3">
                    <span className="text-xs sm:text-sm font-semibold">
                      {dentist.experience} Experience
                    </span>
                    <span className="profile-verified-tag text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                      DCI Verified
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Right: Core Identity, Qualifications, Registration & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {dentist.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="profile-spec-pill px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <h1
                  id="profile-name-heading"
                  className="profile-name-heading font-semibold tracking-tight"
                >
                  {dentist.name}
                </h1>

                <p className="text-base sm:text-lg font-medium profile-title-line">
                  {dentist.title}
                </p>
              </div>

              {/* Qualifications, Registration & Languages Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="profile-info-card rounded-2xl p-4 sm:p-5">
                  <span className="profile-kicker text-[11px] font-semibold uppercase tracking-wider">
                    Qualifications
                  </span>
                  <p className="text-sm font-medium mt-1.5 leading-relaxed">
                    {dentist.qualifications}
                  </p>
                </div>

                <div className="profile-info-card rounded-2xl p-4 sm:p-5">
                  <span className="profile-kicker text-[11px] font-semibold uppercase tracking-wider">
                    Dental Registration
                  </span>
                  <p className="text-sm font-medium mt-1.5 leading-relaxed">
                    {dentist.registration}
                  </p>
                </div>

                <div className="profile-info-card rounded-2xl p-4 sm:p-5">
                  <span className="profile-kicker text-[11px] font-semibold uppercase tracking-wider">
                    Years of Experience
                  </span>
                  <p className="text-sm font-medium mt-1.5">
                    {dentist.experience} in Clinical Practice
                  </p>
                </div>

                <div className="profile-info-card rounded-2xl p-4 sm:p-5">
                  <span className="profile-kicker text-[11px] font-semibold uppercase tracking-wider">
                    Languages Spoken
                  </span>
                  <p className="text-sm font-medium mt-1.5">
                    {dentist.languages.join(" · ")}
                  </p>
                </div>
              </div>

              {/* Biography */}
              <div className="profile-bio-box rounded-2xl p-5 sm:p-6 space-y-2">
                <h2 className="text-xs font-semibold uppercase tracking-wider profile-kicker">
                  Biography
                </h2>
                <p className="text-sm sm:text-base leading-relaxed profile-intro">
                  {dentist.biography}
                </p>
              </div>

              {/* Book Appointment CTA */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`/book-appointment?dentist=${dentist.slug}`}
                  className="profile-btn profile-btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold"
                >
                  Book Appointment with {dentist.name}
                </a>
                <a
                  href="/dentists"
                  className="profile-btn profile-btn-secondary inline-flex items-center justify-center px-5 py-3.5 rounded-full text-sm font-medium"
                >
                  View All Dentists
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Detailed Clinical Profile Grid ===== */}
      <section className="profile-details py-12 sm:py-16 lg:py-20">
        <div className="profile-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {/* Professional Journey */}
          <article className="profile-section-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-3">
            <span className="profile-kicker text-xs font-semibold uppercase tracking-wider">
              Professional Journey
            </span>
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Academic Training &amp; Clinical Background
            </h2>
            <p className="text-sm sm:text-base leading-relaxed profile-intro max-w-4xl">
              {dentist.journey}
            </p>
          </article>

          {/* Areas of Clinical Interest & Treatments Provided */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <article className="profile-section-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4">
              <div>
                <span className="profile-kicker text-xs font-semibold uppercase tracking-wider">
                  Focus Areas
                </span>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mt-1">
                  Areas of Clinical Interest
                </h2>
              </div>

              <ul className="space-y-3">
                {dentist.clinicalInterests.map((interest) => (
                  <li
                    key={interest}
                    className="profile-list-item rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-medium"
                  >
                    <span className="profile-dot shrink-0" aria-hidden="true" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="profile-section-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4">
              <div>
                <span className="profile-kicker text-xs font-semibold uppercase tracking-wider">
                  Procedures
                </span>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mt-1">
                  Treatments Provided
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {dentist.treatmentsProvided.map((treatment) => (
                  <div
                    key={treatment}
                    className="profile-list-item rounded-xl px-3.5 py-3 flex items-start gap-2.5 text-xs sm:text-sm font-medium"
                  >
                    <span className="profile-dot mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{treatment}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Memberships, Awards & Clinic Availability */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article className="profile-section-card rounded-2xl sm:rounded-3xl p-6 space-y-4">
              <div>
                <span className="profile-kicker text-xs font-semibold uppercase tracking-wider">
                  Affiliations
                </span>
                <h2 className="text-lg sm:text-xl font-semibold mt-1">
                  Professional Memberships
                </h2>
              </div>
              <ul className="space-y-2.5">
                {dentist.memberships.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed profile-intro"
                  >
                    <span className="profile-dot mt-2 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="profile-section-card rounded-2xl sm:rounded-3xl p-6 space-y-4">
              <div>
                <span className="profile-kicker text-xs font-semibold uppercase tracking-wider">
                  Recognition
                </span>
                <h2 className="text-lg sm:text-xl font-semibold mt-1">
                  Awards &amp; Certifications
                </h2>
              </div>
              <ul className="space-y-2.5">
                {dentist.awardsAndCerts.map((award) => (
                  <li
                    key={award}
                    className="flex items-start gap-2.5 text-sm leading-relaxed profile-intro"
                  >
                    <span className="profile-dot mt-2 shrink-0" aria-hidden="true" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="profile-availability-card rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div>
                  <span className="profile-kicker text-xs font-semibold uppercase tracking-wider">
                    Schedule
                  </span>
                  <h2 className="text-lg sm:text-xl font-semibold mt-1">
                    Clinic Availability
                  </h2>
                </div>

                <div className="space-y-2.5">
                  {dentist.availability.map((slot) => (
                    <div
                      key={slot.day}
                      className="profile-slot-row rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-2 text-xs sm:text-sm"
                    >
                      <span className="font-semibold">{slot.day}</span>
                      <span className="profile-subintro">{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`/book-appointment?dentist=${dentist.slug}`}
                className="profile-btn profile-btn-primary w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-center"
              >
                Book Appointment
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Related Dentists ===== */}
      <section
        className="profile-related py-12 sm:py-16 lg:py-20"
        aria-labelledby="related-dentists-heading"
      >
        <div className="profile-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="profile-kicker text-xs font-semibold uppercase tracking-wider">
                Our Clinical Team
              </span>
              <h2
                id="related-dentists-heading"
                className="text-2xl sm:text-3xl font-semibold tracking-tight mt-1"
              >
                Related Dentists
              </h2>
            </div>

            <a
              href="/dentists"
              className="profile-btn profile-btn-secondary self-start sm:self-auto px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              View Full Team &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {relatedDentists.map((rel) => (
              <article
                key={rel.slug}
                className="related-card rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="related-photo-wrap relative overflow-hidden">
                    <img
                      src={rel.image}
                      alt={`${rel.name}, ${rel.title}`}
                      className="related-photo w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <span className="related-exp-tag px-2.5 py-1 rounded-full text-[11px] font-semibold">
                      {rel.experience}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-semibold">{rel.name}</h3>
                    <p className="text-xs sm:text-sm profile-subintro">
                      {rel.title}
                    </p>
                    <p className="text-xs profile-subintro line-clamp-2 pt-1">
                      {rel.qualifications}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 flex items-center gap-2.5">
                  <a
                    href={`/dentists/${rel.slug}`}
                    className="profile-btn profile-btn-secondary flex-1 inline-flex items-center justify-center px-3.5 py-2 rounded-full text-xs font-medium text-center"
                  >
                    View Profile
                  </a>
                  <a
                    href={`/book-appointment?dentist=${rel.slug}`}
                    className="profile-btn profile-btn-primary flex-1 inline-flex items-center justify-center px-3.5 py-2 rounded-full text-xs font-semibold text-center"
                  >
                    Book
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default DentistProfile