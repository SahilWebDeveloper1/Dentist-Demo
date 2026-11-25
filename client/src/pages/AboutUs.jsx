import React, { useEffect, useState } from "react";
import "./styles/about.css";

import clinicHeroImg from "../assets/about-clinic-hero.png";
import founderImg from "../assets/about-founder.png";
import receptionImg from "../assets/facility/reception.png";
import waitingAreaImg from "../assets/facility/waiting-area.png";
import consultationImg from "../assets/facility/consultation-room.png";
import treatmentImg from "../assets/facility/treatment-room.png";
import sterilizationImg from "../assets/facility/sterilization-area.png";
import equipmentImg from "../assets/facility/dental-equipment.png";

export default function About() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSpaceId, setActiveSpaceId] = useState("reception");
  const [activeAccessId, setActiveAccessId] = useState("step-free");
  const [selectedTechId, setSelectedTechId] = useState("digital-xrays");
  const [activeSterileStep, setActiveSterileStep] = useState(0);
  const [activeReasonId, setActiveReasonId] = useState("patient-experience");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const storyMilestones = [
    {
      year: "2016",
      title: "Doors Opened",
      description:
        "Established as a two-chair neighborhood practice built around unhurried 60-minute new-patient appointments.",
    },
    {
      year: "2019",
      title: "Digital & Gentle Tech",
      description:
        "Introduced low-radiation 3D CBCT imaging and optical scanners to eliminate messy traditional impressions.",
    },
    {
      year: "2022",
      title: "Expanded Care Suites",
      description:
        "Grew into a six-suite calm care studio adding specialist endodontics, periodontal therapy, and acoustic privacy.",
    },
    {
      year: "2025",
      title: "10,000+ Smiles Cared For",
      description:
        "Recognized for patient-first transparency and preventive care across families, professionals, and anxious visitors.",
    },
  ];

  const coreValues = [
    {
      title: "Calm & Empathy First",
      description:
        "We listen before we examine, pace every appointment around your comfort, and never rush a question.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12 21s-7-4.35-9-9.2C1.4 7.9 4.2 4.5 7.8 4.5c2 0 3.4 1 4.2 2.2.8-1.2 2.2-2.2 4.2-2.2 3.6 0 6.4 3.4 4.8 7.3C19 16.65 12 21 12 21z" />
        </svg>
      ),
    },
    {
      title: "Honest Transparency",
      description:
        "Clear visuals, plain-language explanations, and upfront written estimates before any treatment begins.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M9 12l2 2 4-4" />
          <path d="M12 3l7 4v5c0 5-3.5 8.5-7 9.5-3.5-1-7-4.5-7-9.5V7l7-4z" />
        </svg>
      ),
    },
    {
      title: "Conservative Precision",
      description:
        "Evidence-based, minimally invasive dentistry focused on preserving natural tooth structure long term.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Continuous Learning",
      description:
        "Ongoing clinical education and gentle digital diagnostics so every patient benefits from proven modern care.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path d="M12 3v18" />
          <path d="M5 8l7-5 7 5" />
          <path d="M5 16l7 5 7-5" />
        </svg>
      ),
    },
  ];

  const philosophyPillars = [
    {
      number: "01",
      title: "Patient-First Dentistry",
      tag: "Comfort & Pace",
      description:
        "Your comfort, questions, and schedule guide the appointment. We book generous time slots so you never feel hurried or unheard in the chair.",
    },
    {
      number: "02",
      title: "Ethical Treatment Recommendations",
      tag: "Zero Pressure",
      description:
        "We recommend only what genuinely supports your long-term oral health—never upselling unnecessary cosmetic or invasive procedures.",
    },
    {
      number: "03",
      title: "Personalized Care",
      tag: "Tailored Plans",
      description:
        "Every smile, sensitivity level, and health history is different. We adapt numbing techniques, pacing, and care plans to fit you.",
    },
    {
      number: "04",
      title: "Preventive Dental Care",
      tag: "Early Detection",
      description:
        "Stopping small concerns early protects natural enamel and avoids complex, costly treatments down the road.",
    },
    {
      number: "05",
      title: "Patient Education",
      tag: "Clear Visuals",
      description:
        "Using chairside intraoral photos and plain language, we walk through what we see together so every decision feels informed and clear.",
    },
  ];

  const founderHighlights = [
    {
      label: "Qualifications",
      value: "DDS · FAGD · Biomimetic Cert.",
      detail: "University of Michigan School of Dentistry",
    },
    {
      label: "Experience",
      value: "15+ Years",
      detail: "Over 10,000 gentle patient visits",
    },
    {
      label: "Specialization",
      value: "Restorative & Calm Care",
      detail: "Minimally invasive & aesthetic dentistry",
    },
  ];

  const spaceFilters = ["All", "Guest Comfort", "Clinical & Tech", "Safety"];

  const clinicSpaces = [
    {
      id: "reception",
      category: "Guest Comfort",
      title: "Reception",
      tag: "Warm Welcome",
      image: receptionImg,
      alt: "Clinic reception desk for calm check-in",
      summary:
        "A calm, paperless check-in desk designed to greet you by name without clinical clutter or long queues.",
      highlights: [
        "Digital tablet check-in & transparent billing desk",
        "Dedicated care coordinator for scheduling & insurance",
        "Soft acoustic paneling for a quiet arrival",
      ],
    },
    {
      id: "waiting-lounge",
      category: "Guest Comfort",
      title: "Waiting Lounge",
      tag: "Sunlit Calm",
      image: waitingAreaImg,
      alt: "Comfortable clinic waiting lounge",
      summary:
        "Natural daylight, indoor greenery, and comfortable seating that feel more like a living room than a clinic.",
      highlights: [
        "Herbal tea, infused water & quiet reading corner",
        "Fresh HEPA-filtered air with calm ambient lighting",
        "Minimal wait times with on-schedule appointments",
      ],
    },
    {
      id: "consultation-rooms",
      category: "Guest Comfort",
      title: "Consultation Rooms",
      tag: "Private & Clear",
      image: consultationImg,
      alt: "Private dental consultation room",
      summary:
        "Private, non-clinical conversation rooms where we review your scans and treatment options together.",
      highlights: [
        "Chairside-free setting for relaxed discussions",
        "HD display for reviewing 3D scans and X-rays",
        "Written, itemized care plans with zero pressure",
      ],
    },
    {
      id: "treatment-rooms",
      category: "Clinical & Tech",
      title: "Treatment Rooms",
      tag: "Private Suites",
      image: treatmentImg,
      alt: "Modern sunlit dental treatment room",
      summary:
        "Sound-insulated private operatories equipped with memory-foam chairs and natural daylight.",
      highlights: [
        "Noise-canceling headphones & ceiling entertainment",
        "Ergonomic, heated memory-foam treatment chairs",
        "Acoustic doors for complete patient privacy",
      ],
    },
    {
      id: "sterilization-facilities",
      category: "Safety",
      title: "Sterilization Facilities",
      tag: "Hospital-Grade",
      image: sterilizationImg,
      alt: "Dental sterilization and instrument processing area",
      summary:
        "A dedicated central processing bay following strict Class-B vacuum autoclave and spore-testing protocols.",
      highlights: [
        "Class-B vacuum autoclaves with digital cycle logs",
        "Individually sealed, barcoded instrument pouches",
        "One-way dirty-to-sterile workflow separation",
      ],
    },
    {
      id: "dental-equipment",
      category: "Clinical & Tech",
      title: "Dental Equipment",
      tag: "Digital Precision",
      image: equipmentImg,
      alt: "Modern 3D dental imaging and digital scanner equipment",
      summary:
        "Low-radiation 3D imaging and optical scanners that replace uncomfortable putty impressions.",
      highlights: [
        "Low-dose 3D CBCT & digital X-ray diagnostics",
        "Wireless intraoral 3D scanner for crowns & aligners",
        "Gentle ultrasonic scalers & electric handpieces",
      ],
    },
  ];

  const accessibilityFeatures = [
    {
      id: "step-free",
      label: "Step-Free Entry",
      title: "Barrier-Free Arrival & Ground Access",
      detail:
        "Zero-threshold entrance, wide automatic doors, and elevator access directly from patient drop-off and parking.",
      specs: [
        "36-inch+ wide corridors",
        "Non-slip matte flooring",
        "Dedicated accessible parking",
      ],
    },
    {
      id: "wheelchair-suites",
      label: "Wheelchair Suites",
      title: "Spacious Operatories & Transfer Support",
      detail:
        "Treatment suites engineered with generous turning radiuses and adjustable dental chairs for effortless transfers.",
      specs: [
        "5-foot turning clearance",
        "Accessible ground-floor restroom",
        "Companion seating in every suite",
      ],
    },
    {
      id: "sensory-comfort",
      label: "Sensory & Anxiety Care",
      title: "Calm Lighting, Sound & Pacing Controls",
      detail:
        "Tailored sensory accommodations for neurodivergent patients, anxious visitors, and light- or sound-sensitive guests.",
      specs: [
        "Dimmable warm lighting",
        "Noise-canceling headphones",
        "Hand-signal pause protocol",
      ],
    },
    {
      id: "communication",
      label: "Visual & Hearing Support",
      title: "Clear Communication for Every Patient",
      detail:
        "Large-print digital forms, visual treatment walkthroughs on screen, and quiet acoustic rooms for clear conversation.",
      specs: [
        "Large-font tablet intake",
        "Written step-by-step summaries",
        "Multilingual care support",
      ],
    },
  ];

  const clinicTechnology = [
    {
      id: "digital-xrays",
      available: true,
      name: "Digital X-Rays",
      category: "Low-Dose Diagnostics",
      benefit: "Up to 80% less radiation",
      summary:
        "High-definition digital sensors capture instant radiographs in seconds without uncomfortable sharp film edges.",
      patientImpact: [
        "Instant chairside viewing on HD monitors",
        "Significantly lower radiation exposure than film",
        "Enhanced contrast for spotting early enamel changes",
      ],
    },
    {
      id: "intraoral-scanners",
      available: true,
      name: "Intraoral Scanners",
      category: "Impression-Free",
      benefit: "Zero messy putty trays",
      summary:
        "Compact optical cameras create a true-color 3D digital map of your teeth and gums in just a few minutes.",
      patientImpact: [
        "Eliminates gag-inducing traditional molds",
        "Micron-level accuracy for crowns and aligners",
        "Live 3D smile preview right during your visit",
      ],
    },
    {
      id: "digital-imaging",
      available: true,
      name: "Digital Imaging",
      category: "3D CBCT & Photo",
      benefit: "360° diagnostic clarity",
      summary:
        "3D Cone Beam CT and high-resolution clinical photography map bone density, nerve pathways, and root anatomy.",
      patientImpact: [
        "Safer, precisely guided implant placement",
        "Clear visual walkthroughs during consultations",
        "Comprehensive baseline tracking over time",
      ],
    },
    {
      id: "operating-microscopes",
      available: true,
      name: "Dental Operating Microscopes",
      category: "Micro-Dentistry",
      benefit: "Up to 25× magnification",
      summary:
        "Illuminated optical magnification reveals hairline fractures and microscopic canals invisible to the naked eye.",
      patientImpact: [
        "Higher precision in root canal and restorative care",
        "Preserves more healthy natural tooth structure",
        "Fewer missed micro-details and repeat procedures",
      ],
    },
    {
      id: "cad-cam",
      available: true,
      name: "CAD/CAM Technology",
      category: "Digital Restorations",
      benefit: "Precision-milled ceramics",
      summary:
        "Computer-aided design and milling craft custom-shaded ceramic crowns, inlays, and onlays with tight marginal seals.",
      patientImpact: [
        "Fewer appointments and minimal temporary crowns",
        "Natural translucency matched to surrounding teeth",
        "Consistent digital fit and long-term durability",
      ],
    },
    {
      id: "laser-dentistry",
      available: true,
      name: "Laser Dentistry Equipment",
      category: "Soft-Tissue Care",
      benefit: "Gentle, suture-free healing",
      summary:
        "Focused dental lasers perform delicate gum contouring and periodontal care with minimal bleeding or vibration.",
      patientImpact: [
        "Reduced discomfort and often less need for anesthesia",
        "Faster, cleaner recovery with minimal swelling",
        "Quiet operation without traditional drill noise",
      ],
    },
  ];

  const sterilizationSteps = [
    {
      step: "01",
      title: "Instrument Cleaning",
      badge: "Ultrasonic & Enzymatic",
      summary:
        "Every reusable instrument undergoes immediate pre-soaking and ultrasonic bath cleaning to remove microscopic debris before sterilization.",
      checks: [
        "Enzymatic detergent pre-soak immediately after care",
        "Medical-grade ultrasonic cavitation wash cycle",
        "Magnified visual inspection prior to packaging",
      ],
    },
    {
      step: "02",
      title: "Packaging and Sterilization",
      badge: "Sealed & Barcoded",
      summary:
        "Cleaned instruments are dried, sealed in individual medical pouches with chemical indicator strips, and batch-tracked.",
      checks: [
        "Single-use self-sealing sterilization pouches",
        "External & internal color-change indicator strips",
        "Date and cycle-number tracking on every pack",
      ],
    },
    {
      step: "03",
      title: "Autoclave Procedures",
      badge: "Class-B Vacuum Cycle",
      summary:
        "Pouches are processed in Class-B pre-vacuum steam autoclaves at validated temperature and pressure, with weekly biological spore testing.",
      checks: [
        "134°C pressurized steam vacuum sterilization",
        "Automated digital cycle log verification",
        "Independent weekly biological spore-test audits",
      ],
    },
    {
      step: "04",
      title: "Infection-Control Protocols",
      badge: "Between Every Visit",
      summary:
        "Treatment suites, chairs, light handles, and air are disinfected between every patient using hospital-grade EPA-registered solutions.",
      checks: [
        "EPA-registered surface disinfection between visits",
        "HEPA air filtration & dental waterline purification",
        "Protective barrier wraps on switches & imaging sensors",
      ],
    },
    {
      step: "05",
      title: "Disposable Equipment Practices",
      badge: "Single-Use Only",
      summary:
        "Items that cannot be autoclaved—including gloves, masks, suction tips, needles, and barrier films—are strictly single-use and safely disposed of.",
      checks: [
        "100% single-use needles, gloves, bibs & saliva ejectors",
        "Sealed instruments opened chairside in your presence",
        "Certified medical-waste containment & disposal",
      ],
    },
  ];

  const chooseUsReasons = [
    {
      id: "patient-experience",
      number: "01",
      title: "Patient Experience",
      metric: "Unhurried 60-Min Visits",
      summary:
        "Calm sunlit rooms, minimal waiting, noise-canceling headphones, and a team that checks on your comfort at every step.",
      proof: "98% of patients report feeling relaxed during their first appointment.",
    },
    {
      id: "professional-expertise",
      number: "02",
      title: "Professional Expertise",
      metric: "15+ Years Clinical Care",
      summary:
        "Experienced, fellowship-trained clinicians committed to continuous education and conservative, evidence-based dentistry.",
      proof: "Led by Dr. Elena Vance, DDS, FAGD with multi-specialty support.",
    },
    {
      id: "technology",
      number: "03",
      title: "Technology",
      metric: "Low-Dose Digital 3D",
      summary:
        "Intraoral 3D scanners, low-radiation digital X-rays, and operating microscopes for faster, gentler, impression-free visits.",
      proof: "Up to 80% less radiation than traditional film radiographs.",
    },
    {
      id: "hygiene",
      number: "04",
      title: "Hygiene",
      metric: "Class-B Autoclave",
      summary:
        "Hospital-grade sterilization, weekly biological spore testing, HEPA air filtration, and sealed packs opened chairside.",
      proof: "100% single-use disposables and barcoded sterile instrument pouches.",
    },
    {
      id: "personalized-treatment",
      number: "05",
      title: "Personalized Treatment",
      metric: "Tailored & Transparent",
      summary:
        "No one-size-fits-all plans—every recommendation is customized to your goals, comfort level, and written upfront estimate.",
      proof: "Clear visual walkthroughs before any procedure begins.",
    },
  ];

  const filteredSpaces =
    activeFilter === "All"
      ? clinicSpaces
      : clinicSpaces.filter((space) => space.category === activeFilter);

  const activeSpace =
    clinicSpaces.find((space) => space.id === activeSpaceId) || clinicSpaces[0];

  const activeIndex = filteredSpaces.findIndex((s) => s.id === activeSpace.id);

  const activeAccess =
    accessibilityFeatures.find((item) => item.id === activeAccessId) ||
    accessibilityFeatures[0];

  const availableTechnology = clinicTechnology.filter((item) => item.available);
  const activeTech =
    availableTechnology.find((item) => item.id === selectedTechId) ||
    availableTechnology[0];

  const currentSterile =
    sterilizationSteps[activeSterileStep] || sterilizationSteps[0];

  const activeReason =
    chooseUsReasons.find((r) => r.id === activeReasonId) || chooseUsReasons[0];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    const nextList =
      filter === "All"
        ? clinicSpaces
        : clinicSpaces.filter((s) => s.category === filter);
    if (nextList.length > 0 && !nextList.some((s) => s.id === activeSpaceId)) {
      setActiveSpaceId(nextList[0].id);
    }
  };

  const handleStepSpace = (direction) => {
    if (filteredSpaces.length === 0) return;
    const currentIdx = activeIndex >= 0 ? activeIndex : 0;
    const nextIdx =
      (currentIdx + direction + filteredSpaces.length) % filteredSpaces.length;
    setActiveSpaceId(filteredSpaces[nextIdx].id);
  };

  return (
    <main className="about-page min-h-screen">
      {/* ===== 1. About Hero Section ===== */}
      <section
        className="about-hero relative overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        <div className="about-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
              <span className="about-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="about-eyebrow-dot" aria-hidden="true" />
                About Our Practice
              </span>

              <h1
                id="about-hero-heading"
                className="about-hero-title font-semibold tracking-tight"
              >
                Thoughtful dentistry shaped around calm, clarity, and lasting comfort.
              </h1>

              <p className="about-hero-intro text-base sm:text-lg leading-relaxed max-w-xl">
                We built our clinic to feel nothing like a rushed waiting room.
                From unhurried consultations and transparent treatment plans to
                gentle clinical precision, every detail of your visit is designed
                to put you at ease.
              </p>

              <p className="about-hero-subintro text-sm sm:text-base leading-relaxed max-w-xl">
                Combining evidence-based care with a warm, sunlit environment,
                our team focuses on preventive health and conservative
                restorations that respect your natural smile.
              </p>
            </div>

            <div className="lg:col-span-6">
              <figure className="about-hero-media relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src={clinicHeroImg}
                  alt="Sunlit reception and consultation lounge at our dental clinic"
                  className="about-hero-img w-full h-full object-cover"
                  loading="eager"
                />
                <figcaption className="about-hero-caption flex flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-5 sm:py-3.5">
                  <span className="text-xs sm:text-sm font-medium">
                    Calm, Sunlight-Filled Care Suites
                  </span>
                  <span className="about-caption-tag text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
                    Patient-First Space
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2. Our Story Section ===== */}
      <section
        className="about-story relative overflow-hidden py-14 sm:py-20 lg:py-24"
        aria-labelledby="our-story-heading"
      >
        <div className="about-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 reveal-on-scroll">
              <figure className="story-media relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src={consultationImg}
                  alt="Warm natural-light dental consultation room"
                  className="story-img w-full h-full object-cover"
                  loading="lazy"
                />
                <figcaption className="story-est-badge px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium">
                  Est. 2016 · 9+ Years of Calm Care
                </figcaption>
              </figure>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 sm:space-y-6">
              <div className="reveal-on-scroll space-y-3">
                <span className="about-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                  <span className="about-eyebrow-dot" aria-hidden="true" />
                  Our Story
                </span>

                <h2
                  id="our-story-heading"
                  className="story-title font-semibold tracking-tight"
                >
                  Founded in 2016 to replace rushed visits with unhurried trust.
                </h2>
              </div>

              <div className="reveal-on-scroll story-delay-1 space-y-4 text-sm sm:text-base leading-relaxed">
                <p className="about-hero-intro">
                  <strong>Why we started:</strong> Too many patients told us they
                  avoided the dentist not because of the treatment itself, but
                  because of cold waiting rooms, rushed 10-minute checkups, and
                  confusing treatment estimates. We established the clinic in
                  2016 to offer a calmer, transparent alternative.
                </p>
                <p className="about-hero-subintro">
                  <strong>Our journey:</strong> What began as a quiet two-chair
                  practice with three team members has grown organically through
                  word of mouth into a six-suite, multi-specialty studio—without
                  ever losing our one-patient-at-a-time rhythm.
                </p>
              </div>

              <blockquote className="reveal-on-scroll story-delay-2 story-vision-card rounded-2xl p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2 story-vision-label">
                  Founder&apos;s Vision
                </p>
                <p className="text-base sm:text-lg font-medium leading-relaxed">
                  &ldquo;Great dentistry should feel like a thoughtful
                  conversation—where you understand every option, never feel
                  pressured, and leave feeling genuinely cared for.&rdquo;
                </p>
                <footer className="mt-3 text-xs sm:text-sm story-vision-author">
                  — Dr. Elena Vance, DDS · Founder &amp; Lead Clinician
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="mt-14 sm:mt-16 lg:mt-20">
            <div className="reveal-on-scroll flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7 sm:mb-9">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Key Milestones
                </h3>
                <p className="text-sm sm:text-base about-hero-subintro mt-1">
                  How our practice evolved alongside the community we serve.
                </p>
              </div>
              <span className="text-xs sm:text-sm font-medium story-timeline-span">
                2016 — Present
              </span>
            </div>

            <div className="story-timeline-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {storyMilestones.map((item, index) => (
                <article
                  key={item.year}
                  className="reveal-on-scroll story-milestone-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="story-year-pill inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        {item.year}
                      </span>
                      <span className="story-milestone-dot" aria-hidden="true" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed about-hero-subintro">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. Our Mission & Vision Section ===== */}
      <section
        className="about-mission relative overflow-hidden py-14 sm:py-20 lg:py-24"
        aria-labelledby="mission-vision-heading"
      >
        <div className="about-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-on-scroll max-w-2xl mb-10 sm:mb-12 space-y-3">
            <span className="about-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
              <span className="about-eyebrow-dot" aria-hidden="true" />
              Our Mission &amp; Vision
            </span>

            <h2
              id="mission-vision-heading"
              className="mission-heading font-semibold tracking-tight"
            >
              Guided by purpose, grounded in everyday care.
            </h2>

            <p className="text-sm sm:text-base about-hero-subintro leading-relaxed">
              Every appointment, material choice, and conversation is shaped by
              what we stand for as a clinical team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            <article className="reveal-on-scroll mission-card mission-card-soft rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="mission-pill inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Our Mission
                  </span>
                  <span className="mission-icon-wrap inline-flex items-center justify-center w-10 h-10 rounded-xl">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="M12 2l3 7h7l-5.5 4.2L18.5 21 12 16.8 5.5 21l2-7.8L2 9h7l3-7z" />
                    </svg>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
                  Deliver gentle, transparent dentistry without the rush.
                </h3>

                <p className="text-sm sm:text-base leading-relaxed about-hero-intro">
                  To provide preventive and restorative dental care in a calm,
                  welcoming setting—where patients feel heard, understand every
                  option clearly, and experience comfort at every step.
                </p>
              </div>
            </article>

            <article className="reveal-on-scroll story-delay-1 mission-card mission-card-light rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="mission-pill inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Our Vision
                  </span>
                  <span className="mission-icon-wrap inline-flex items-center justify-center w-10 h-10 rounded-xl">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
                  Make lifelong oral health something people look forward to.
                </h3>

                <p className="text-sm sm:text-base leading-relaxed about-hero-intro">
                  To set a new neighborhood standard for anxiety-free dental
                  care—combining conservative clinical excellence with spaces
                  that restore calm and build generational trust.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-12 sm:mt-14 lg:mt-16">
            <div className="reveal-on-scroll mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Our Core Values
              </h3>
              <p className="text-sm sm:text-base about-hero-subintro mt-1">
                Four principles our entire team practices every day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {coreValues.map((value, index) => (
                <article
                  key={value.title}
                  className="reveal-on-scroll value-card rounded-2xl p-5 sm:p-6 flex flex-col"
                  style={{ transitionDelay: `${index * 85}ms` }}
                >
                  <div className="value-icon-box inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed about-hero-subintro">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. Our Philosophy Section ===== */}
      <section
        className="about-philosophy relative overflow-hidden py-14 sm:py-20 lg:py-24"
        aria-labelledby="our-philosophy-heading"
      >
        <div className="about-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
              <div className="reveal-on-scroll space-y-3">
                <span className="about-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                  <span className="about-eyebrow-dot" aria-hidden="true" />
                  Our Philosophy
                </span>

                <h2
                  id="our-philosophy-heading"
                  className="philosophy-heading font-semibold tracking-tight"
                >
                  Care built on restraint, clarity, and respect.
                </h2>

                <p className="text-sm sm:text-base about-hero-subintro leading-relaxed">
                  Five everyday commitments that shape how we diagnose,
                  communicate, and care for every patient who walks in.
                </p>
              </div>

              <div className="reveal-on-scroll story-delay-1 philosophy-promise-box rounded-2xl p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2 philosophy-promise-label">
                  Our Clinical Standard
                </p>
                <p className="text-sm sm:text-base leading-relaxed about-hero-intro">
                  We treat every patient the way we would advise a close family
                  member—prioritizing natural tooth preservation and calm,
                  predictable outcomes.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {philosophyPillars.map((pillar, index) => (
                <article
                  key={pillar.number}
                  className={`reveal-on-scroll philosophy-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between ${
                    index === philosophyPillars.length - 1 ? "sm:col-span-2" : ""
                  }`}
                  style={{ transitionDelay: `${index * 85}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="philosophy-num-badge inline-flex items-center justify-center px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wider">
                        {pillar.number}
                      </span>
                      <span className="philosophy-tag text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-sm leading-relaxed about-hero-subintro">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="philosophy-card-bar mt-5" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. Meet the Founder Section ===== */}
      <section
        className="about-founder relative overflow-hidden py-14 sm:py-20 lg:py-24"
        aria-labelledby="meet-founder-heading"
      >
        <div className="about-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 reveal-on-scroll">
              <div className="founder-frame-wrap relative">
                <figure className="founder-media relative rounded-2xl sm:rounded-3xl overflow-hidden">
                  <img
                    src={founderImg}
                    alt="Dr. Elena Vance, DDS, Founder and Lead Clinician"
                    className="founder-img w-full h-full object-cover object-top"
                    loading="lazy"
                  />

                  <figcaption className="founder-caption flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5">
                    <div>
                      <p className="text-sm sm:text-base font-semibold leading-tight">
                        Dr. Elena Vance, DDS
                      </p>
                      <p className="text-xs about-hero-subintro mt-0.5">
                        Founder &amp; Lead Clinician
                      </p>
                    </div>
                    <span className="founder-exp-pill text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full shrink-0">
                      15+ Yrs Exp.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="reveal-on-scroll space-y-3">
                <span className="about-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                  <span className="about-eyebrow-dot" aria-hidden="true" />
                  Meet the Founder
                </span>

                <h2
                  id="meet-founder-heading"
                  className="founder-heading font-semibold tracking-tight"
                >
                  Dr. Elena Vance, DDS
                </h2>

                <p className="text-sm sm:text-base font-medium founder-role-line">
                  Founder · Restorative &amp; Preventive Dentistry · 15+ Years of Experience
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {founderHighlights.map((item, index) => (
                  <article
                    key={item.label}
                    className="reveal-on-scroll founder-stat-card rounded-2xl p-4 sm:p-5"
                    style={{ transitionDelay: `${index * 85}ms` }}
                  >
                    <span className="founder-stat-label text-[11px] font-semibold uppercase tracking-wider">
                      {item.label}
                    </span>
                    <p className="text-sm sm:text-base font-semibold mt-1.5">
                      {item.value}
                    </p>
                    <p className="text-xs leading-relaxed about-hero-subintro mt-1">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>

              <div className="reveal-on-scroll story-delay-1 founder-journey-box rounded-2xl p-5 sm:p-6 space-y-2.5">
                <h3 className="text-sm font-semibold uppercase tracking-wider founder-section-kicker">
                  Professional Journey
                </h3>
                <p className="text-sm sm:text-base leading-relaxed about-hero-intro">
                  After earning her Doctor of Dental Surgery degree with honors
                  from the University of Michigan, Dr. Vance completed advanced
                  fellowship training in biomimetic restorative care and
                  chairside anxiety management. Before opening our clinic in
                  2016, she spent seven years mentoring clinicians in
                  conservative, enamel-preserving techniques across hospital and
                  private-practice settings.
                </p>
              </div>

              <blockquote className="reveal-on-scroll story-delay-2 founder-message-card rounded-2xl p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider mb-2 founder-section-kicker">
                  A Personal Message
                </p>
                <p className="text-sm sm:text-base leading-relaxed about-hero-intro italic">
                  &ldquo;I know how vulnerable it can feel to sit in a dental
                  chair—especially if past visits felt rushed or overwhelming.
                  My promise to you is simple: we will always move at your pace,
                  explain everything openly, and care for your smile with the
                  gentlest touch possible.&rdquo;
                </p>
                <footer className="mt-3 text-xs sm:text-sm font-medium founder-signature">
                  — Warmly, Dr. Elena Vance
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. Our Clinic & Infrastructure Section ===== */}
      <section
        className="about-infra relative overflow-hidden py-14 sm:py-20 lg:py-24"
        aria-labelledby="clinic-infra-heading"
      >
        <div className="about-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-on-scroll flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-2xl space-y-3">
              <span className="about-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="about-eyebrow-dot" aria-hidden="true" />
                Our Clinic &amp; Infrastructure
              </span>

              <h2
                id="clinic-infra-heading"
                className="infra-heading font-semibold tracking-tight"
              >
                Explore every space built for your comfort and safety.
              </h2>

              <p className="text-sm sm:text-base about-hero-subintro leading-relaxed">
                Filter by category or select any space below to inspect our
                rooms, sterilization standards, and accessibility features.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter clinic spaces"
            >
              {spaceFilters.map((filter) => {
                const isSelected = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleFilterChange(filter)}
                    className={`infra-filter-btn px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium ${
                      isSelected ? "is-active" : ""
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={activeSpace.id}
            className="reveal-on-scroll rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-6">
                <div className="infra-spotlight-media relative rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src={activeSpace.image}
                    alt={activeSpace.alt}
                    className="infra-spotlight-img w-full h-full object-cover"
                  />
                  <span className="infra-spotlight-tag px-3 py-1 rounded-full text-xs font-semibold">
                    {activeSpace.tag}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="infra-cat-pill text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    {activeSpace.category}
                  </span>
                  <span className="text-xs font-medium infra-counter">
                    {String((activeIndex >= 0 ? activeIndex : 0) + 1).padStart(2, "0")}{" "}
                    / {String(filteredSpaces.length).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    {activeSpace.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed about-hero-intro mt-2">
                    {activeSpace.summary}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-1">
                  {activeSpace.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed about-hero-intro"
                    >
                      <span className="infra-check-dot mt-1.5 shrink-0" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleStepSpace(-1)}
                    className="infra-nav-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                    aria-label="Previous clinic space"
                  >
                    &larr; Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStepSpace(1)}
                    className="infra-nav-btn infra-nav-btn-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                    aria-label="Next clinic space"
                  >
                    Next Space &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredSpaces.map((space, index) => {
              const isSelected = space.id === activeSpace.id;
              return (
                <button
                  key={space.id}
                  type="button"
                  onClick={() => setActiveSpaceId(space.id)}
                  aria-pressed={isSelected}
                  className={`infra-card text-left rounded-2xl overflow-hidden flex flex-col ${
                    isSelected ? "is-selected" : ""
                  }`}
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <div className="infra-card-media relative w-full overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.alt}
                      className="infra-card-img w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="infra-card-pill text-[11px] font-medium px-2.5 py-1 rounded-full">
                      {space.tag}
                    </span>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between w-full">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider infra-card-cat">
                        {space.category}
                      </span>
                      <h4 className="text-base sm:text-lg font-semibold mt-1">
                        {space.title}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed about-hero-subintro mt-1.5 line-clamp-2">
                        {space.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t infra-card-footer flex items-center justify-between text-xs font-medium">
                      <span>{isSelected ? "Viewing Details" : "Inspect Space"}</span>
                      <span className="infra-card-arrow" aria-hidden="true">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="reveal-on-scroll infra-access-panel rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 mt-8 sm:mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-5 space-y-3">
                <span className="infra-cat-pill inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  Accessibility &amp; Inclusive Design
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  Thoughtfully accessible for every guest.
                </h3>
                <p className="text-sm leading-relaxed about-hero-subintro">
                  Select an accessibility feature to view how our clinic
                  supports mobility, sensory comfort, and communication needs.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {accessibilityFeatures.map((item) => {
                    const isActive = item.id === activeAccess.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveAccessId(item.id)}
                        aria-pressed={isActive}
                        className={`infra-access-tab px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium ${
                          isActive ? "is-active" : ""
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                key={activeAccess.id}
                className="lg:col-span-7 infra-access-detail rounded-2xl p-5 sm:p-6 space-y-4"
              >
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold">
                    {activeAccess.title}
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed about-hero-intro mt-1.5">
                    {activeAccess.detail}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {activeAccess.specs.map((spec) => (
                    <div
                      key={spec}
                      className="infra-access-spec rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium flex items-center gap-2"
                    >
                      <span className="infra-check-dot shrink-0" aria-hidden="true" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. Technology & Equipment Section ===== */}
      <section
        className="about-tech relative overflow-hidden py-14 sm:py-20 lg:py-24"
        aria-labelledby="tech-equipment-heading"
      >
        <div className="about-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="about-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="about-eyebrow-dot" aria-hidden="true" />
                Technology &amp; Equipment
              </span>

              <h2
                id="tech-equipment-heading"
                className="tech-heading font-semibold tracking-tight"
              >
                Modern tools chosen for gentler, more accurate care.
              </h2>

              <p className="text-sm sm:text-base about-hero-subintro leading-relaxed">
                Every piece of equipment below is actively installed and used
                on-site in our clinic—select any technology to see how it
                improves your visit.
              </p>
            </div>

            <span className="tech-verified-badge inline-flex items-center gap-2 self-start md:self-auto px-3.5 py-2 rounded-full text-xs font-semibold">
              <span className="tech-verified-dot" aria-hidden="true" />
              On-Site Clinic Equipment ({availableTechnology.length})
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {availableTechnology.map((tech, index) => {
                const isSelected = activeTech && tech.id === activeTech.id;
                return (
                  <button
                    key={tech.id}
                    type="button"
                    onClick={() => setSelectedTechId(tech.id)}
                    aria-pressed={isSelected}
                    className={`reveal-on-scroll tech-card text-left rounded-2xl p-5 flex flex-col justify-between ${
                      isSelected ? "is-selected" : ""
                    }`}
                    style={{ transitionDelay: `${index * 70}ms` }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="tech-cat-pill text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {tech.category}
                        </span>
                        <span className="tech-status-dot" aria-hidden="true" />
                      </div>

                      <h3 className="text-base sm:text-lg font-semibold">
                        {tech.name}
                      </h3>

                      <p className="text-xs sm:text-sm leading-relaxed about-hero-subintro mt-1.5">
                        {tech.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t tech-card-footer flex items-center justify-between text-xs font-medium">
                      <span>{tech.benefit}</span>
                      <span className="tech-card-arrow" aria-hidden="true">
                        &rarr;
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {activeTech && (
              <aside
                key={activeTech.id}
                className="lg:col-span-5 lg:sticky lg:top-24 tech-detail-panel rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-5"
                aria-live="polite"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="tech-detail-pill text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    Available In-Clinic
                  </span>
                  <span className="text-xs font-medium tech-detail-cat">
                    {activeTech.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                    {activeTech.name}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed about-hero-intro mt-2">
                    {activeTech.summary}
                  </p>
                </div>

                <div className="tech-benefit-highlight rounded-xl px-4 py-3 flex items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-wider font-semibold tech-benefit-label">
                    Key Advantage
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">
                    {activeTech.benefit}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider tech-benefit-label">
                    How It Helps You
                  </p>
                  <ul className="space-y-2.5">
                    {activeTech.patientImpact.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-relaxed about-hero-intro"
                      >
                        <span className="infra-check-dot mt-1.5 shrink-0" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* ===== 8. Hygiene & Sterilization Section ===== */}
      <section
        className="about-hygiene relative overflow-hidden py-14 sm:py-20 lg:py-24"
        aria-labelledby="hygiene-sterilization-heading"
      >
        <div className="about-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-on-scroll flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10 sm:mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="about-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="about-eyebrow-dot" aria-hidden="true" />
                Hygiene &amp; Sterilization
              </span>

              <h2
                id="hygiene-sterilization-heading"
                className="hygiene-heading font-semibold tracking-tight"
              >
                Hospital-grade sterilization you can see and trust.
              </h2>

              <p className="text-sm sm:text-base about-hero-subintro leading-relaxed">
                From ultrasonic cleaning to sealed single-use disposables,
                click any stage below to inspect our five-step safety protocol.
              </p>
            </div>

            <div className="hygiene-trust-pill inline-flex items-center gap-2.5 self-start lg:self-auto px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium">
              <span className="hygiene-shield-dot" aria-hidden="true" />
              <span>100% Sealed Packs Opened Chairside</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-6 sm:mb-8">
            {sterilizationSteps.map((item, index) => {
              const isSelected = index === activeSterileStep;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveSterileStep(index)}
                  aria-pressed={isSelected}
                  className={`reveal-on-scroll hygiene-step-card text-left rounded-2xl p-4 sm:p-5 flex flex-col justify-between ${
                    isSelected ? "is-selected" : ""
                  }`}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="hygiene-step-num inline-flex items-center justify-center px-2.5 py-1 rounded-lg text-xs font-semibold">
                        Step {item.step}
                      </span>
                      <span className="hygiene-step-dot" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[11px] sm:text-xs font-medium hygiene-step-badge mt-3 pt-2.5 border-t">
                    {item.badge}
                  </p>
                </button>
              );
            })}
          </div>

          <div
            key={currentSterile.step}
            className="hygiene-detail-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8"
            aria-live="polite"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="hygiene-active-pill text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    Stage {currentSterile.step} · {currentSterile.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {currentSterile.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed about-hero-intro">
                  {currentSterile.summary}
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 gap-2.5">
                {currentSterile.checks.map((check) => (
                  <div
                    key={check}
                    className="hygiene-check-row rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-medium"
                  >
                    <span className="infra-check-dot shrink-0" aria-hidden="true" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. Why Patients Choose Us Section ===== */}
      <section
        className="about-choose relative overflow-hidden py-14 sm:py-20 lg:py-24"
        aria-labelledby="why-choose-heading"
      >
        <div className="about-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal-on-scroll flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-10 sm:mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="about-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="about-eyebrow-dot" aria-hidden="true" />
                Why Patients Choose Us
              </span>

              <h2
                id="why-choose-heading"
                className="choose-heading font-semibold tracking-tight"
              >
                Thoughtful care built around trust, precision, and peace of mind.
              </h2>

              <p className="text-sm sm:text-base about-hero-subintro leading-relaxed">
                Select any pillar below to see how our clinical standards
                translate into a calmer dental experience.
              </p>
            </div>

            {activeReason && (
              <div
                key={activeReason.id}
                className="choose-live-banner rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 max-w-md"
                aria-live="polite"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider choose-live-label">
                  {activeReason.title} · {activeReason.metric}
                </p>
                <p className="text-xs sm:text-sm font-medium mt-0.5">
                  {activeReason.proof}
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5">
            {chooseUsReasons.map((reason, index) => {
              const isSelected = reason.id === activeReasonId;
              const colSpanClass =
                index < 2 ? "md:col-span-3" : "md:col-span-3 lg:col-span-2";
              const lastTabletSpan =
                index === 4 ? "md:col-span-6 lg:col-span-2" : colSpanClass;

              return (
                <button
                  key={reason.id}
                  type="button"
                  onClick={() => setActiveReasonId(reason.id)}
                  aria-pressed={isSelected}
                  className={`reveal-on-scroll choose-card text-left rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between ${lastTabletSpan} ${
                    isSelected ? "is-selected" : ""
                  }`}
                  style={{ transitionDelay: `${index * 75}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="choose-num-pill inline-flex items-center justify-center px-2.5 py-1 rounded-lg text-xs font-semibold">
                        {reason.number}
                      </span>
                      <span className="choose-metric-pill text-[11px] sm:text-xs font-medium px-3 py-1 rounded-full">
                        {reason.metric}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2">
                      {reason.title}
                    </h3>

                    <p className="text-sm leading-relaxed about-hero-subintro">
                      {reason.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t choose-card-footer flex items-center justify-between gap-2 text-xs font-medium">
                    <span>{reason.proof}</span>
                    <span className="choose-arrow shrink-0" aria-hidden="true">
                      &rarr;
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 10. CTA Section ===== */}
      <section
        className="about-cta py-12 sm:py-16 lg:py-20"
        aria-labelledby="about-cta-heading"
      >
        <div className="about-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="cta-banner rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-6 space-y-3">
                <span className="cta-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                  <span className="about-eyebrow-dot" aria-hidden="true" />
                  Plan Your Visit
                </span>

                <h2
                  id="about-cta-heading"
                  className="cta-heading font-semibold tracking-tight"
                >
                  Ready for calm, thoughtful dental care?
                </h2>

                <p className="text-sm sm:text-base about-hero-intro leading-relaxed max-w-xl">
                  Meet the clinicians behind our practice, browse our
                  conservative treatments, or reserve an unhurried visit at a
                  time that works for you.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-col sm:flex-row lg:justify-end flex-wrap gap-3">
                <a
                  href="/book-appointment"
                  className="cta-btn cta-btn-primary inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-center"
                >
                  Book Appointment
                </a>

                <a
                  href="/dentists"
                  className="cta-btn cta-btn-secondary inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium text-center"
                >
                  Meet Our Dentists
                </a>

                <a
                  href="/treatments"
                  className="cta-btn cta-btn-secondary inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-medium text-center"
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