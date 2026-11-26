import React, { useEffect, useState } from "react";
import "./styles/smileGallery.css";

import beforeWhiteningImg from "../assets/gallery/gallery-before-whitening.png";
import afterWhiteningImg from "../assets/gallery/gallery-after-whitening.png";
import beforeAlignerImg from "../assets/gallery/gallery-before-aligner.png";
import afterAlignerImg from "../assets/gallery/gallery-after-aligner.png";

const GALLERY_FILTERS = [
  "All Cases",
  "Teeth Whitening",
  "Dental Implants",
  "Veneers",
  "Orthodontics",
  "Smile Makeover",
  "Restorative Dentistry",
];

const SMILE_CASES = [
  {
    id: "SG-01",
    category: "Teeth Whitening",
    treatmentName: "In-Clinic Enamel-Safe Teeth Whitening",
    duration: "Single 60-Minute Visit",
    brief:
      "Lifted stubborn tea and coffee staining while preserving natural enamel translucency and minimizing post-visit sensitivity.",
    beforeImg: beforeWhiteningImg,
    afterImg: afterWhiteningImg,
    details: {
      patientConcern:
        "Noticeable yellowing and surface staining from daily chai and coffee intake ahead of a family milestone.",
      initialCondition:
        "Generalized extrinsic enamel discoloration (Shade A3.5) with healthy gums and intact anterior enamel.",
      dentistAssessment:
        "Dr. Ananya Sharma confirmed absence of active cavities or exposed root dentin, making the patient a suitable candidate for desensitizing whitening.",
      treatmentPerformed:
        "Ultrasonic scaling and polishing followed by two controlled cycles of pH-balanced in-clinic whitening gel and remineralizing paste.",
      treatmentStages: [
        "Pre-whitening scaling, shade mapping, and lip/gum barrier isolation",
        "Two 20-minute pH-balanced whitening gel applications",
        "Desensitizing hydroxyapatite-fluoride finish",
      ],
      finalOutcome:
        "Natural 3-shade brightening to a balanced, healthy ivory tone without chalky over-bleaching.",
      aftercare:
        "48-hour low-stain diet guidance, soft-bristle brushing, and sensitivity-safe toothpaste for one week.",
      consentDisclaimer:
        "Displayed with written patient consent. Whitening shade lift varies based on baseline enamel thickness and dietary habits.",
    },
  },
  {
    id: "SG-02",
    category: "Orthodontics",
    treatmentName: "Clear Aligner Diastema & Bite Alignment",
    duration: "6 Months",
    brief:
      "Closed a central front tooth gap and balanced upper-arch spacing using digitally planned, removable clear aligners.",
    beforeImg: beforeAlignerImg,
    afterImg: afterAlignerImg,
    details: {
      patientConcern:
        "Midline spacing between the upper front teeth and mild lower crowding without wanting visible metal brackets.",
      initialCondition:
        "2.2 mm maxillary midline diastema with mild anterior rotation and healthy periodontal support.",
      dentistAssessment:
        "Dr. Rohan Deshmukh performed a 3D intraoral scan and bite analysis, confirming clear aligner therapy could close spacing predictably.",
      treatmentPerformed:
        "14-stage custom clear aligner sequence with tooth-colored micro-attachments and final fixed/clear retention.",
      treatmentStages: [
        "3D intraoral optical scan and digital tooth-movement simulation",
        "Bi-weekly clear aligner progression with 8-week clinical checks",
        "Clear nighttime retainer delivery to stabilize alignment",
      ],
      finalOutcome:
        "Harmonious closure of the midline gap and balanced incisal alignment while keeping natural tooth edges intact.",
      aftercare:
        "Consistent nighttime retainer wear and routine 6-month hygiene checkups.",
      consentDisclaimer:
        "Displayed with written patient consent. Orthodontic duration depends on biological tooth movement and daily aligner wear.",
    },
  },
  {
    id: "SG-03",
    category: "Veneers",
    treatmentName: "Minimal-Prep Ceramic Veneers",
    duration: "2 Visits (10 Days)",
    brief:
      "Refined asymmetrical front tooth proportions and closed minor spacing with ultra-thin, shade-matched porcelain veneers.",
    beforeImg: beforeAlignerImg,
    afterImg: afterAlignerImg,
    details: {
      patientConcern:
        "Uneven front tooth edges, slight spacing, and worn enamel that did not respond to whitening alone.",
      initialCondition:
        "Mild incisal wear and minor diastema with adequate enamel thickness for conservative bonding.",
      dentistAssessment:
        "Dr. Ananya Sharma recommended ultra-thin ceramic veneers after digital smile mock-up approval.",
      treatmentPerformed:
        "Conservative enamel-preserving preparation, digital impression scan, and adhesive bonding of two E-max porcelain veneers.",
      treatmentStages: [
        "Digital smile design preview and shade selection",
        "Minimal enamel contouring and 3D intraoral scan",
        "Try-in verification and adhesive ceramic bonding",
      ],
      finalOutcome:
        "Natural surface texture and seamless gum-margin integration tailored to the patient's lip line.",
      aftercare:
        "Avoid biting hard objects with front teeth, use a nightguard if clenching, and maintain routine cleanings.",
      consentDisclaimer:
        "Displayed with written patient consent. Veneer candidacy requires adequate healthy enamel and bite stability.",
    },
  },
  {
    id: "SG-04",
    category: "Dental Implants",
    treatmentName: "Single-Tooth Guided Implant & Crown",
    duration: "4 Months (Staged Healing)",
    brief:
      "Replaced a missing upper premolar with a 3D-guided implant and custom zirconia crown without altering adjacent teeth.",
    beforeImg: beforeWhiteningImg,
    afterImg: afterWhiteningImg,
    details: {
      patientConcern:
        "Missing premolar creating chewing imbalance and concern about neighbouring teeth shifting.",
      initialCondition:
        "Healed edentulous premolar site with good bone height confirmed on 3D CBCT imaging.",
      dentistAssessment:
        "Dr. Vikram Malhotra evaluated bone density on CBCT and planned a minimally invasive guided placement.",
      treatmentPerformed:
        "Guided titanium implant placement followed by a custom-shaded screw-retained zirconia crown after bone integration.",
      treatmentStages: [
        "3D CBCT scan and surgical stent planning",
        "Gentle implant placement under local anesthesia",
        "Digital scan and final zirconia crown torque-in",
      ],
      finalOutcome:
        "Stable chewing function and natural emergence profile blending with surrounding teeth.",
      aftercare:
        "Interdental brushing around the implant crown and 6-month periodontal maintenance checks.",
      consentDisclaimer:
        "Displayed with written patient consent. Implant healing timelines vary based on individual bone density.",
    },
  },
  {
    id: "SG-05",
    category: "Smile Makeover",
    treatmentName: "Conservative Alignment & Brightening Makeover",
    duration: "5 Months",
    brief:
      "Combined short-term clear aligners with gentle whitening and micro-bonding for a refreshed, natural smile.",
    beforeImg: beforeAlignerImg,
    afterImg: afterAlignerImg,
    details: {
      patientConcern:
        "Wanted a cleaner, more balanced smile without aggressive tooth grinding or artificial-looking crowns.",
      initialCondition:
        "Mild front spacing, uneven edge wear, and mild coffee discoloration.",
      dentistAssessment:
        "Coordinated plan by Dr. Rohan Deshmukh and Dr. Ananya Sharma focusing on Align–Bleach–Bond principles.",
      treatmentPerformed:
        "Clear aligner alignment, enamel-safe whitening, and conservative composite edge smoothing.",
      treatmentStages: [
        "Digital aligner sequence to close spacing",
        "In-clinic whitening after alignment completion",
        "Micro-composite edge polishing and retainer fitting",
      ],
      finalOutcome:
        "Balanced symmetry and natural brightness achieved while keeping 100% of underlying tooth structure.",
      aftercare:
        "Nightly retainer wear and annual polishing touch-ups.",
      consentDisclaimer:
        "Displayed with written patient consent. Multi-step makeover timelines vary with case complexity.",
    },
  },
  {
    id: "SG-06",
    category: "Restorative Dentistry",
    treatmentName: "All-Ceramic Crown & Enamel Restoration",
    duration: "2 Visits (1 Week)",
    brief:
      "Restored a heavily filled, fractured tooth using a precision-milled ceramic crown matched to adjacent natural enamel.",
    beforeImg: beforeWhiteningImg,
    afterImg: afterWhiteningImg,
    details: {
      patientConcern:
        "Old, discolored filling with hairline crack lines causing cold sensitivity while chewing.",
      initialCondition:
        "Compromised restorative margin and weakened tooth cusps requiring full-coverage protection.",
      dentistAssessment:
        "Dr. Ananya Sharma confirmed vital pulp health and advised a conservative all-ceramic crown.",
      treatmentPerformed:
        "Removal of failing filling, core build-up, 3D optical scan, and bonding of a layered zirconia-ceramic crown.",
      treatmentStages: [
        "Diagnostic X-ray and gentle removal of fractured filling",
        "Digital optical scan and temporary protective crown",
        "Bite verification and final adhesive crown cementation",
      ],
      finalOutcome:
        "Eliminated chewing sensitivity and restored natural tooth contour and shade.",
      aftercare:
        "Daily flossing around crown margins and routine 6-month bite and X-ray checks.",
      consentDisclaimer:
        "Displayed with written patient consent. Restorative longevity depends on oral hygiene and bite forces.",
    },
  },
];

export default function SmileGallery() {
  const [selectedFilter, setSelectedFilter] = useState("All Cases");
  const [activeCase, setActiveCase] = useState(null);
  const [sliderPos, setSliderPos] = useState(50);

  const filteredCases =
    selectedFilter === "All Cases"
      ? SMILE_CASES
      : SMILE_CASES.filter((item) => item.category === selectedFilter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveCase(null);
    };
    if (activeCase) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCase]);

  const openCaseModal = (caseItem) => {
    setSliderPos(50);
    setActiveCase(caseItem);
  };

  return (
    <main className="gallery-page min-h-screen">
      {/* ===== 7.1 Gallery Hero ===== */}
      <section
        className="gallery-hero relative overflow-hidden py-12 sm:py-16 lg:py-20"
        aria-labelledby="smile-gallery-heading"
      >
        <div className="gallery-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <span className="gallery-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
              <span className="gallery-eyebrow-dot" aria-hidden="true" />
              Clinical Documentation
            </span>

            <h1
              id="smile-gallery-heading"
              className="gallery-hero-title font-semibold tracking-tight"
            >
              Smile Gallery
            </h1>

            <p className="gallery-intro text-base sm:text-lg leading-relaxed">
              Explore documented clinical cases from our practice—highlighting
              conservative, natural-looking improvements in comfort, alignment,
              and oral health.
            </p>

            {/* Outcome Disclaimer */}
            <div className="gallery-disclaimer rounded-2xl p-4 text-xs sm:text-sm leading-relaxed">
              <strong>Outcome Disclaimer:</strong> Every patient&apos;s oral
              health, bone density, and enamel structure is unique. Individual
              treatment results and durations vary and are confirmed only after
              an in-person clinical examination.
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7.2 Treatment Filters & 7.3 Transformation Gallery ===== */}
      <section
        className="gallery-grid-section py-12 sm:py-16 lg:py-20"
        aria-labelledby="gallery-cases-heading"
      >
        <div className="gallery-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8 sm:mb-10">
            <div>
              <h2
                id="gallery-cases-heading"
                className="gallery-section-heading font-semibold tracking-tight"
              >
                Transformation Gallery
              </h2>
              <p className="text-sm sm:text-base gallery-subintro mt-1">
                Filter by treatment type or select any case for full clinical
                details.
              </p>
            </div>

            <span className="text-xs sm:text-sm font-medium gallery-subintro">
              Showing {filteredCases.length} of {SMILE_CASES.length} documented cases
            </span>
          </div>

          {/* 7.2 Treatment Filters */}
          <div
            className="flex flex-wrap gap-2 mb-8 sm:mb-10"
            role="tablist"
            aria-label="Filter smile gallery cases"
          >
            {GALLERY_FILTERS.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedFilter(filter)}
                  className={`gallery-filter-pill px-4 py-2 rounded-full text-xs sm:text-sm font-medium ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* 7.3 Transformation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((item) => (
              <article
                key={item.id}
                className="gallery-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Side-by-Side Before & After Photographs */}
                  <div className="grid grid-cols-2 gap-0.5 gallery-ba-grid">
                    <figure className="relative gallery-ba-frame overflow-hidden">
                      <img
                        src={item.beforeImg}
                        alt={`${item.treatmentName} before treatment`}
                        className="gallery-ba-img w-full h-full object-cover"
                        loading="lazy"
                      />
                      <figcaption className="gallery-ba-label gallery-ba-before px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                        Before
                      </figcaption>
                    </figure>

                    <figure className="relative gallery-ba-frame overflow-hidden">
                      <img
                        src={item.afterImg}
                        alt={`${item.treatmentName} after treatment`}
                        className="gallery-ba-img w-full h-full object-cover"
                        loading="lazy"
                      />
                      <figcaption className="gallery-ba-label gallery-ba-after px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                        After
                      </figcaption>
                    </figure>
                  </div>

                  {/* Case Info */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="gallery-cat-pill px-2.5 py-1 rounded-full text-[11px] font-semibold">
                        {item.category}
                      </span>
                      {item.duration && (
                        <span className="text-xs font-medium gallery-subintro">
                          {item.duration}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                      {item.treatmentName}
                    </h3>

                    <p className="text-sm leading-relaxed gallery-subintro">
                      {item.brief}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1">
                  <button
                    type="button"
                    onClick={() => openCaseModal(item)}
                    className="gallery-btn gallery-btn-primary w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
                  >
                    View Case Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7.5 Patient Consent & Privacy Section ===== */}
      <section
        className="gallery-consent py-12 sm:py-16 lg:py-20"
        aria-labelledby="patient-consent-heading"
      >
        <div className="gallery-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="gallery-consent-box rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="max-w-2xl space-y-2.5">
              <span className="gallery-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase">
                <span className="gallery-eyebrow-dot" aria-hidden="true" />
                Ethics &amp; Privacy
              </span>
              <h2
                id="patient-consent-heading"
                className="gallery-section-heading font-semibold tracking-tight"
              >
                Patient Consent &amp; Clinical Photography Standards
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="consent-item-card rounded-2xl p-5 space-y-1.5">
                <h3 className="text-sm sm:text-base font-semibold">
                  Explicit Permission for Photographs
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed gallery-subintro">
                  Every clinical photograph is captured only after signed,
                  informed consent from the patient or legal guardian.
                </p>
              </div>

              <div className="consent-item-card rounded-2xl p-5 space-y-1.5">
                <h3 className="text-sm sm:text-base font-semibold">
                  Permission for Public Display
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed gallery-subintro">
                  Separate written approval is obtained specifically for
                  educational website and in-clinic gallery display.
                </p>
              </div>

              <div className="consent-item-card rounded-2xl p-5 space-y-1.5">
                <h3 className="text-sm sm:text-base font-semibold">
                  Privacy Protection
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed gallery-subintro">
                  Patients may withdraw display permission at any time, and
                  original clinical records remain strictly confidential.
                </p>
              </div>

              <div className="consent-item-card rounded-2xl p-5 space-y-1.5">
                <h3 className="text-sm sm:text-base font-semibold">
                  No Identifying Information
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed gallery-subintro">
                  Close-up dental framing and anonymized case IDs ensure no
                  names, contact details, or unnecessary facial identifiers appear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7.4 Individual Case Details Modal ===== */}
      {activeCase && (
        <div
          className="gallery-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-modal-title"
          onClick={() => setActiveCase(null)}
        >
          <div
            className="gallery-modal w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b gallery-modal-header">
              <div>
                <span className="gallery-cat-pill px-3 py-1 rounded-full text-xs font-semibold">
                  Case #{activeCase.id} · {activeCase.category}
                </span>
                <h2
                  id="case-modal-title"
                  className="text-xl sm:text-2xl font-semibold tracking-tight mt-2"
                >
                  {activeCase.treatmentName}
                </h2>
                {activeCase.duration && (
                  <p className="text-xs sm:text-sm gallery-subintro mt-0.5">
                    Treatment Duration: {activeCase.duration}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setActiveCase(null)}
                className="gallery-close-btn px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold"
                aria-label="Close case details"
              >
                Close &times;
              </button>
            </div>

            {/* Interactive Before / After Comparison Slider */}
            <div className="space-y-2.5">
              <div className="relative gallery-slider-box rounded-2xl overflow-hidden select-none">
                <img
                  src={activeCase.afterImg}
                  alt={`${activeCase.treatmentName} after`}
                  className="w-full h-full object-cover block"
                />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <img
                    src={activeCase.beforeImg}
                    alt={`${activeCase.treatmentName} before`}
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div
                  className="gallery-slider-divider"
                  style={{ left: `${sliderPos}%` }}
                  aria-hidden="true"
                />
                <span className="gallery-ba-label gallery-ba-before px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  Before
                </span>
                <span className="gallery-ba-label gallery-ba-after px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  After
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium gallery-subintro shrink-0">
                  Drag to compare:
                </span>
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  aria-label="Compare before and after photographs"
                  className="gallery-range w-full"
                />
              </div>
            </div>

            {/* 7.4 Structured Clinical Case Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="case-detail-box rounded-2xl p-4 sm:p-5 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider gallery-kicker">
                  Patient Concern
                </h3>
                <p className="text-sm leading-relaxed gallery-intro">
                  {activeCase.details.patientConcern}
                </p>
              </div>

              <div className="case-detail-box rounded-2xl p-4 sm:p-5 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider gallery-kicker">
                  Initial Condition
                </h3>
                <p className="text-sm leading-relaxed gallery-intro">
                  {activeCase.details.initialCondition}
                </p>
              </div>

              <div className="case-detail-box rounded-2xl p-4 sm:p-5 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider gallery-kicker">
                  Dentist&apos;s Assessment
                </h3>
                <p className="text-sm leading-relaxed gallery-intro">
                  {activeCase.details.dentistAssessment}
                </p>
              </div>

              <div className="case-detail-box rounded-2xl p-4 sm:p-5 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider gallery-kicker">
                  Treatment Performed
                </h3>
                <p className="text-sm leading-relaxed gallery-intro">
                  {activeCase.details.treatmentPerformed}
                </p>
              </div>
            </div>

            <div className="case-detail-box rounded-2xl p-4 sm:p-5 space-y-2.5">
              <h3 className="text-xs font-semibold uppercase tracking-wider gallery-kicker">
                Treatment Stages
              </h3>
              <ul className="space-y-2">
                {activeCase.details.treatmentStages.map((stage) => (
                  <li key={stage} className="flex items-start gap-2.5 text-sm gallery-intro">
                    <span className="gallery-dot mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{stage}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="case-detail-box case-detail-soft rounded-2xl p-4 sm:p-5 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider gallery-kicker">
                  Final Outcome
                </h3>
                <p className="text-sm leading-relaxed gallery-intro">
                  {activeCase.details.finalOutcome}
                </p>
              </div>

              <div className="case-detail-box rounded-2xl p-4 sm:p-5 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider gallery-kicker">
                  Aftercare
                </h3>
                <p className="text-sm leading-relaxed gallery-intro">
                  {activeCase.details.aftercare}
                </p>
              </div>
            </div>

            <div className="gallery-disclaimer rounded-2xl p-4 text-xs sm:text-sm">
              <strong>Consent &amp; Outcome Disclaimer:</strong>{" "}
              {activeCase.details.consentDisclaimer}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-1">
              <a
                href="/book-appointment"
                className="gallery-btn gallery-btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}