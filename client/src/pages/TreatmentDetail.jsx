import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/treatmentDetail.css";

import restorativeImg from "../assets/treatment-restorative.png";
import orthoImg from "../assets/treatment-ortho.png";
import cosmeticImg from "../assets/treatment-cosmetic.png";
import generalImg from "../assets/about-treatment.png";
import consultImg from "../assets/about-consultation.png";
import heroImg from "../assets/treatments-hero.png";

import drAnanyaImg from "../assets/dentists/dentist-ananya.png";
import drRohanImg from "../assets/dentists/dentist-arthur.png";
import drPriyaImg from "../assets/dentists/dentist-priya.png";
import drVikramImg from "../assets/dentists/dentist-liam.png";

const DENTISTS_BY_SLUG = {
  "dr-ananya-sharma": {
    slug: "dr-ananya-sharma",
    name: "Dr. Ananya Sharma",
    designation: "Founder & Chief General Dentist",
    qualifications: "BDS, MDS (Conservative Dentistry & Endodontics)",
    registration: "Delhi State Dental Council Reg. #A-14829",
    image: drAnanyaImg,
  },
  "dr-rohan-deshmukh": {
    slug: "dr-rohan-deshmukh",
    name: "Dr. Rohan Deshmukh",
    designation: "Consultant Orthodontist & Implantologist",
    qualifications: "BDS, MDS (Orthodontics)",
    registration: "Maharashtra State Dental Council Reg. #A-22914",
    image: drRohanImg,
  },
  "dr-priya-nair": {
    slug: "dr-priya-nair",
    name: "Dr. Priya Nair",
    designation: "Pediatric Dentist & Microscopic Endodontist",
    qualifications: "BDS, MDS (Pedodontics)",
    registration: "Karnataka State Dental Council Reg. #A-19305",
    image: drPriyaImg,
  },
  "dr-vikram-malhotra": {
    slug: "dr-vikram-malhotra",
    name: "Dr. Vikram Malhotra",
    designation: "Senior Oral & Maxillofacial Surgeon & Periodontist",
    qualifications: "BDS, MDS (Oral & Maxillofacial Surgery)",
    registration: "Delhi State Dental Council Reg. #A-09412",
    image: drVikramImg,
  },
};

const TREATMENT_SUMMARIES = {
  "dental-implants": { name: "Dental Implants", category: "Restorative Dentistry", image: restorativeImg, dentistSlug: "dr-vikram-malhotra" },
  "dental-crowns": { name: "Dental Crowns", category: "Restorative Dentistry", image: restorativeImg, dentistSlug: "dr-ananya-sharma" },
  "dental-bridges": { name: "Dental Bridges", category: "Restorative Dentistry", image: restorativeImg, dentistSlug: "dr-vikram-malhotra" },
  "dentures": { name: "Dentures", category: "Restorative Dentistry", image: restorativeImg, dentistSlug: "dr-vikram-malhotra" },
  "inlays-and-onlays": { name: "Inlays and Onlays", category: "Restorative Dentistry", image: restorativeImg, dentistSlug: "dr-ananya-sharma" },
  "clear-aligners": { name: "Clear Aligners", category: "Orthodontics", image: orthoImg, dentistSlug: "dr-rohan-deshmukh" },
  "metal-braces": { name: "Metal Braces", category: "Orthodontics", image: orthoImg, dentistSlug: "dr-rohan-deshmukh" },
  "ceramic-braces": { name: "Ceramic Braces", category: "Orthodontics", image: orthoImg, dentistSlug: "dr-rohan-deshmukh" },
  "retainers": { name: "Retainers", category: "Orthodontics", image: orthoImg, dentistSlug: "dr-rohan-deshmukh" },
  "bite-correction": { name: "Bite Correction", category: "Orthodontics", image: orthoImg, dentistSlug: "dr-rohan-deshmukh" },
  "root-canal-treatment": { name: "Root Canal Treatment", category: "Endodontics", image: generalImg, dentistSlug: "dr-priya-nair" },
  "retreatment-of-root-canal": { name: "Re-treatment of Root Canal", category: "Endodontics", image: generalImg, dentistSlug: "dr-priya-nair" },
  "pulp-therapy": { name: "Pulp Therapy", category: "Endodontics", image: generalImg, dentistSlug: "dr-priya-nair" },
  "dental-checkup": { name: "Dental Checkup", category: "General Dentistry", image: consultImg, dentistSlug: "dr-ananya-sharma" },
  "teeth-cleaning-scaling": { name: "Teeth Cleaning / Scaling", category: "General Dentistry", image: generalImg, dentistSlug: "dr-ananya-sharma" },
  "tooth-colored-fillings": { name: "Tooth-Colored Fillings", category: "General Dentistry", image: cosmeticImg, dentistSlug: "dr-ananya-sharma" },
  "tooth-extraction": { name: "Tooth Extraction", category: "General Dentistry", image: generalImg, dentistSlug: "dr-vikram-malhotra" },
  "gum-care": { name: "Gum Care", category: "General Dentistry", image: consultImg, dentistSlug: "dr-vikram-malhotra" },
  "preventive-dentistry": { name: "Preventive Dentistry", category: "General Dentistry", image: generalImg, dentistSlug: "dr-ananya-sharma" },
  "teeth-whitening": { name: "Teeth Whitening", category: "Cosmetic Dentistry", image: cosmeticImg, dentistSlug: "dr-ananya-sharma" },
  "dental-veneers": { name: "Dental Veneers", category: "Cosmetic Dentistry", image: cosmeticImg, dentistSlug: "dr-ananya-sharma" },
  "smile-makeover": { name: "Smile Makeover", category: "Cosmetic Dentistry", image: cosmeticImg, dentistSlug: "dr-ananya-sharma" },
  "dental-bonding": { name: "Dental Bonding", category: "Cosmetic Dentistry", image: cosmeticImg, dentistSlug: "dr-ananya-sharma" },
  "tooth-reshaping": { name: "Tooth Reshaping", category: "Cosmetic Dentistry", image: cosmeticImg, dentistSlug: "dr-ananya-sharma" },
  "wisdom-tooth-removal": { name: "Wisdom Tooth Removal", category: "Surgical Dentistry", image: heroImg, dentistSlug: "dr-vikram-malhotra" },
  "surgical-tooth-extraction": { name: "Surgical Tooth Extraction", category: "Surgical Dentistry", image: heroImg, dentistSlug: "dr-vikram-malhotra" },
  "dental-implant-surgery": { name: "Dental Implant Surgery", category: "Surgical Dentistry", image: restorativeImg, dentistSlug: "dr-vikram-malhotra" },
  "bone-grafting-ridge-preservation": { name: "Bone Grafting & Ridge Preservation", category: "Surgical Dentistry", image: restorativeImg, dentistSlug: "dr-vikram-malhotra" },
  "childrens-dental-checkups": { name: "Children's Dental Checkups", category: "Pediatric Dentistry", image: consultImg, dentistSlug: "dr-priya-nair" },
  "fluoride-treatment": { name: "Fluoride Treatment", category: "Pediatric Dentistry", image: consultImg, dentistSlug: "dr-priya-nair" },
  "dental-sealants": { name: "Dental Sealants", category: "Pediatric Dentistry", image: consultImg, dentistSlug: "dr-priya-nair" },
  "childrens-fillings": { name: "Children's Fillings", category: "Pediatric Dentistry", image: cosmeticImg, dentistSlug: "dr-priya-nair" },
  "pediatric-preventive-dental-care": { name: "Preventive Dental Care (Pediatric)", category: "Pediatric Dentistry", image: consultImg, dentistSlug: "dr-priya-nair" },
  "scaling-and-root-planing": { name: "Scaling and Root Planing", category: "Gum / Periodontal Treatment", image: generalImg, dentistSlug: "dr-vikram-malhotra" },
  "gum-disease-management": { name: "Gum Disease Management", category: "Gum / Periodontal Treatment", image: generalImg, dentistSlug: "dr-vikram-malhotra" },
  "periodontal-maintenance": { name: "Periodontal Maintenance", category: "Gum / Periodontal Treatment", image: generalImg, dentistSlug: "dr-vikram-malhotra" },
  "laser-gum-surgery": { name: "Gum Surgery & Laser Contouring", category: "Gum / Periodontal Treatment", image: heroImg, dentistSlug: "dr-vikram-malhotra" },
};

const DETAILED_TREATMENTS = {
  "dental-implants": {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Restorative Dentistry",
    image: restorativeImg,
    dentistSlug: "dr-vikram-malhotra",
    heroSummary:
      "A biocompatible titanium or ceramic root replacement designed to support a natural-looking crown, bridge, or denture without grinding down neighbouring healthy teeth.",
    whatIsIt:
      "A dental implant is a small, medical-grade titanium or zirconia post gently placed into the jawbone where a natural tooth root is missing. Once the bone integrates around the post (osseointegration), an abutment and custom-shaded ceramic crown are attached to restore function and aesthetics.",
    whoNeedsIt: [
      "Adults missing one or more teeth due to decay, fracture, or gum disease",
      "Patients seeking a fixed alternative to removable partial or full dentures",
      "Individuals with sufficient jawbone volume (or eligibility for bone grafting) and stable general health",
      "Patients who want to preserve adjacent healthy teeth rather than preparing them for a traditional bridge",
    ],
    symptoms: [
      "Difficulty chewing comfortably on one side of the mouth",
      "Visible gap affecting confidence when smiling or speaking",
      "Loose, slipping, or uncomfortable removable dentures",
      "Shifting or tilting of neighbouring teeth into an empty space",
    ],
    causes: [
      "Deep tooth decay or failed root canal leading to extraction",
      "Advanced periodontal (gum) disease causing bone loss around teeth",
      "Sports injury, trauma, or vertical root fracture",
      "Congenitally missing permanent teeth",
    ],
    benefits: [
      "Functions and feels close to a natural tooth during chewing",
      "Helps stimulate jawbone and reduce post-extraction bone shrinkage",
      "Does not require trimming adjacent healthy teeth",
      "Custom ceramic crown matched to your natural enamel shade",
    ],
    howItWorks:
      "Using 3D Cone Beam CT (CBCT) imaging and digital intraoral scanning, our surgical team maps bone density and nerve pathways before placement. The implant is positioned under local anesthesia using a minimally invasive surgical guide, followed by a healing phase before final crown attachment.",
    stepByStep: [
      { step: "01", title: "3D CBCT & Digital Scan", detail: "High-precision 3D imaging evaluates bone width, height, and sinus/nerve position." },
      { step: "02", title: "Guided Implant Placement", detail: "Under local anesthesia, the implant post is gently placed into the prepared site." },
      { step: "03", title: "Healing & Integration", detail: "The bone naturally bonds with the implant surface over a monitored healing window." },
      { step: "04", title: "Custom Crown Delivery", detail: "A digital scan captures your bite to mill and fit your final ceramic crown." },
    ],
    consultationDiagnosis:
      "Your evaluation includes a full oral exam, gum health screening, 3D CBCT scan, medical history review (such as diabetes or smoking habits), and a written treatment plan outlining suitable options.",
    preparation: [
      "Complete any recommended scaling, fillings, or gum treatment beforehand",
      "Share a complete list of medications (including blood thinners or bone-health drugs)",
      "Follow any clinician-advised pre-procedure meal or hygiene instructions",
    ],
    duringTreatment:
      "The area is thoroughly numbed with local anesthesia so you feel gentle pressure rather than sharp pain. Most single-implant placements take 45–75 minutes in a calm, sterile suite.",
    recoveryAftercare: [
      "Expect mild swelling or tenderness for 2–4 days, managed with prescribed medication and cold compresses",
      "Stick to soft, cool-to-lukewarm foods for the first few days and avoid chewing directly on the site",
      "Maintain gentle oral hygiene with clinician-recommended rinses and attend scheduled suture checks",
    ],
    risksLimitations: [
      "Not every patient is an immediate candidate; uncontrolled diabetes, heavy smoking, or severe bone loss may require prior stabilization or grafting",
      "Possible surgical risks include temporary swelling, bruising, infection, sinus irritation, or rare failure of bone integration",
      "Clinical outcomes depend on individual biology, bone quality, and long-term oral hygiene maintenance",
    ],
    timeline:
      "While straightforward cases typically span 3 to 6 months from placement to final crown (to allow bone integration), timelines vary per patient—especially if extractions or bone grafting are required first.",
    costFactors: [
      "Number of implants and type of prosthetic restoration (single crown vs. multi-unit bridge)",
      "Implant system and crown material chosen (e.g., zirconia vs. porcelain-fused)",
      "Need for preliminary procedures such as 3D CBCT scans, extractions, or bone grafting",
      "Complexity of surgical guide fabrication and restorative appointments",
    ],
    faqs: [
      {
        q: "Is dental implant placement painful?",
        a: "The procedure is performed under effective local anesthesia, so you should not feel sharp pain during placement. Mild post-procedure soreness is common for a few days and is typically well managed with standard medication.",
      },
      {
        q: "Can everyone get a dental implant?",
        a: "Suitability depends on bone volume, gum health, and systemic factors like blood sugar control. A 3D CBCT scan and clinical consultation are essential before confirming eligibility.",
      },
      {
        q: "How long do dental implants last?",
        a: "With consistent home care, routine professional checkups, and healthy gums, implants are designed for long-term durability—though individual longevity varies and cannot be guaranteed.",
      },
    ],
    relatedSlugs: ["dental-crowns", "dental-bridges", "bone-grafting-ridge-preservation"],
    patientCases: [
      {
        caseId: "Case #IM-104 (Shared with Patient Consent)",
        title: "Single Molar Replacement Following Vertical Root Fracture",
        summary:
          "38-year-old patient presented with pain on biting in the lower right first molar. After atraumatic extraction and healing, a 3D-guided implant and zirconia crown restored comfortable chewing.",
      },
      {
        caseId: "Case #IM-118 (Shared with Patient Consent)",
        title: "Upper Premolar Gap Restored Without Trimming Adjacent Teeth",
        summary:
          "45-year-old patient sought a fixed replacement for a missing premolar. A single implant supported a shade-matched ceramic crown while leaving neighbouring virgin teeth untouched.",
      },
    ],
  },
};

function buildFallbackDetail(slug) {
  const base = TREATMENT_SUMMARIES[slug];
  if (!base) return null;

  return {
    slug,
    name: base.name,
    category: base.category,
    image: base.image,
    dentistSlug: base.dentistSlug,
    heroSummary: `${base.name} is delivered with conservative clinical precision, gentle local comfort measures, and transparent step-by-step communication.`,
    whatIsIt: `${base.name} is a structured ${base.category.toLowerCase()} procedure aimed at restoring oral health, comfort, and function while preserving as much natural tooth and gum tissue as possible.`,
    whoNeedsIt: [
      `Patients advised to consider ${base.name.toLowerCase()} following a comprehensive dental examination`,
      "Individuals experiencing discomfort, functional difficulty, or preventive care needs",
      "Patients seeking evidence-based care tailored to their medical and dental history",
    ],
    symptoms: [
      "Localized tooth sensitivity, discomfort, or pain while chewing",
      "Visible wear, chipping, decay, or gum inflammation",
      "Concerns identified during routine digital X-rays or checkups",
    ],
    causes: [
      "Untreated dental decay, plaque accumulation, or enamel wear",
      "Gum inflammation, bite imbalance, or prior dental trauma",
      "Delayed preventive dental visits",
    ],
    benefits: [
      "Supports long-term oral health and everyday comfort",
      "Planned using clear digital diagnostics and conservative techniques",
      "Tailored pacing for anxious or sensitive patients",
    ],
    howItWorks: `During your consultation, your dentist evaluates your teeth and digital radiographs to confirm whether ${base.name.toLowerCase()} is clinically appropriate and explains all available alternatives.`,
    stepByStep: [
      { step: "01", title: "Clinical Exam & Diagnostics", detail: "Visual checkup and digital imaging to assess tooth and gum health." },
      { step: "02", title: "Personalized Care Plan", detail: "Clear explanation of options, expected visits, and written cost estimate." },
      { step: "03", title: "Gentle Clinical Care", detail: "Treatment performed in a calm suite with comfort-first pacing." },
      { step: "04", title: "Follow-Up & Maintenance", detail: "Aftercare instructions and scheduled preventive check-ins." },
    ],
    consultationDiagnosis:
      "Includes a thorough oral examination, review of medical history, digital X-rays or intraoral scans where indicated, and discussion of alternative treatments.",
    preparation: [
      "Share any current medications, allergies, or medical conditions",
      "Eat a light meal prior to your appointment unless advised otherwise",
      "Brush and floss gently before arriving at the clinic",
    ],
    duringTreatment:
      "Where numbing is required, local anesthesia is applied gently before starting. Your clinician checks on your comfort throughout and pauses whenever you signal.",
    recoveryAftercare: [
      "Follow the written post-visit hygiene and dietary guidance provided by your dentist",
      "Temporary mild sensitivity may occur depending on the procedure",
      "Contact the clinic promptly if you notice unexpected swelling or persistent discomfort",
    ],
    risksLimitations: [
      "Individual suitability and clinical outcomes vary based on tooth structure, gum health, and healing response",
      "Some cases may require staged visits or complementary treatments before completion",
      "No dental procedure carries a guaranteed universal result",
    ],
    timeline:
      "Many routine appointments are completed in 1–2 visits, though exact duration and healing intervals depend on your individual clinical findings.",
    costFactors: [
      "Complexity of the clinical condition and number of teeth involved",
      "Materials, lab work, or specialized technology required",
      "Any preparatory diagnostics or follow-up care needed",
    ],
    faqs: [
      {
        q: `How do I know if ${base.name} is right for me?`,
        a: "Only an in-person clinical examination and diagnostic imaging by a qualified dentist can confirm whether this treatment suits your specific oral health needs.",
      },
      {
        q: "Will I receive a clear cost estimate before starting?",
        a: "Yes. After diagnosis, we provide a transparent written treatment plan before any procedure begins.",
      },
    ],
    relatedSlugs: Object.keys(TREATMENT_SUMMARIES)
      .filter((k) => k !== slug && TREATMENT_SUMMARIES[k].category === base.category)
      .slice(0, 3),
    patientCases: [
      {
        caseId: "Clinical Case Summary (Shared with Patient Consent)",
        title: `Conservative ${base.name} Care Plan`,
        summary:
          "Patient presented for a routine consultation and completed a tailored treatment plan with positive functional comfort and scheduled preventive follow-up.",
      },
    ],
  };
}

export default function TreatmentDetail() {
  const { slug } = useParams();
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const treatment = DETAILED_TREATMENTS[slug] || buildFallbackDetail(slug);

  if (!treatment) {
    return (
      <main className="td-page min-h-screen py-20 px-4">
        <div className="mx-auto max-w-2xl td-not-found rounded-3xl p-8 text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Treatment not found
          </h1>
          <p className="text-sm sm:text-base td-subintro">
            The treatment page you requested could not be located.
          </p>
          <a
            href="/treatments"
            className="td-btn td-btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold"
          >
            &larr; Browse All Treatments
          </a>
        </div>
      </main>
    );
  }

  const responsibleDentist =
    DENTISTS_BY_SLUG[treatment.dentistSlug] || DENTISTS_BY_SLUG["dr-ananya-sharma"];

  const relatedList = (treatment.relatedSlugs || [])
    .map((relSlug) => ({ slug: relSlug, ...TREATMENT_SUMMARIES[relSlug] }))
    .filter((item) => item.name);

  return (
    <main className="td-page min-h-screen">
      {/* ===== 1. Treatment Hero ===== */}
      <section className="td-hero relative overflow-hidden py-10 sm:py-14 lg:py-20">
        <div className="td-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
            <a
              href="/treatments"
              className="td-back-link inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full"
            >
              &larr; Back to All Treatments
            </a>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="td-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="td-eyebrow-dot" aria-hidden="true" />
                {treatment.category}
              </span>

              <h1 className="td-hero-title font-semibold tracking-tight">
                {treatment.name}
              </h1>

              <p className="td-intro text-base sm:text-lg leading-relaxed max-w-xl">
                {treatment.heroSummary}
              </p>

              {/* Medical Review Notice */}
              <div className="td-review-note rounded-2xl p-4 text-xs sm:text-sm leading-relaxed">
                <strong>Clinical Review Note:</strong> Information below is
                reviewed by a qualified DCI-registered dentist for patient
                education. Outcomes, suitability, and timelines vary per
                individual and cannot be guaranteed.
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={`/book-appointment?treatment=${treatment.slug}`}
                  className="td-btn td-btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold"
                >
                  Book Consultation
                </a>
                <a
                  href="#treatment-faqs"
                  className="td-btn td-btn-secondary inline-flex items-center justify-center px-5 py-3.5 rounded-full text-sm font-medium"
                >
                  Read FAQs
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <figure className="td-hero-media relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  className="td-hero-img w-full h-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Main 20-Section Clinical Guide ===== */}
      <section className="td-body py-12 sm:py-16 lg:py-20">
        <div className="td-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {/* 2. What is this treatment? & 7. How the procedure works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <article className="td-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-3">
              <span className="td-kicker text-xs font-semibold uppercase tracking-wider">
                Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold">
                What is {treatment.name}?
              </h2>
              <p className="text-sm sm:text-base leading-relaxed td-intro">
                {treatment.whatIsIt}
              </p>
            </article>

            <article className="td-card td-card-soft rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-3">
              <span className="td-kicker text-xs font-semibold uppercase tracking-wider">
                Clinical Approach
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold">
                How the Procedure Works
              </h2>
              <p className="text-sm sm:text-base leading-relaxed td-intro">
                {treatment.howItWorks}
              </p>
            </article>
          </div>

          {/* 3. Who may need it? | 4. Common symptoms | 5. Causes | 6. Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="td-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Who May Need It?
              </h2>
              <ul className="space-y-2.5">
                {treatment.whoNeedsIt.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm td-intro">
                    <span className="td-dot mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="td-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Common Symptoms &amp; Consultation Triggers
              </h2>
              <ul className="space-y-2.5">
                {treatment.symptoms.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm td-intro">
                    <span className="td-dot mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="td-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Causes &amp; Underlying Dental Problems
              </h2>
              <ul className="space-y-2.5">
                {treatment.causes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm td-intro">
                    <span className="td-dot mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="td-card td-card-soft rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Treatment Benefits
              </h2>
              <ul className="space-y-2.5">
                {treatment.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm td-intro">
                    <span className="td-dot mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* 8. Step-by-step treatment process */}
          <article className="td-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <span className="td-kicker text-xs font-semibold uppercase tracking-wider">
                Care Pathway
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold mt-1">
                Step-by-Step Treatment Process
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {treatment.stepByStep.map((s) => (
                <div key={s.step} className="td-step-box rounded-2xl p-5 space-y-2">
                  <span className="td-step-pill inline-flex px-2.5 py-1 rounded-lg text-xs font-semibold">
                    Step {s.step}
                  </span>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed td-subintro">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 9. Consultation & Diagnosis | 10. Preparation | 11. During Treatment | 12. Recovery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="td-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Consultation &amp; Diagnosis
              </h2>
              <p className="text-sm leading-relaxed td-intro">
                {treatment.consultationDiagnosis}
              </p>
            </article>

            <article className="td-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                What Happens During Treatment?
              </h2>
              <p className="text-sm leading-relaxed td-intro">
                {treatment.duringTreatment}
              </p>
            </article>

            <article className="td-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Preparation Before Treatment
              </h2>
              <ul className="space-y-2">
                {treatment.preparation.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm td-intro">
                    <span className="td-dot mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="td-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Recovery &amp; Aftercare
              </h2>
              <ul className="space-y-2">
                {treatment.recoveryAftercare.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm td-intro">
                    <span className="td-dot mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* 13. Risks & Limitations | 14. Expected Timeline | 15. Cost Factors */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article className="td-card rounded-2xl sm:rounded-3xl p-6 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Potential Risks &amp; Limitations
              </h2>
              <ul className="space-y-2">
                {treatment.risksLimitations.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm td-intro">
                    <span className="td-dot mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="td-card td-card-soft rounded-2xl sm:rounded-3xl p-6 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Expected Treatment Timeline
              </h2>
              <p className="text-sm leading-relaxed td-intro">
                {treatment.timeline}
              </p>
              <p className="text-xs td-subintro pt-1">
                *Timelines are general clinical estimates and vary based on
                individual diagnosis and healing.
              </p>
            </article>

            <article className="td-card rounded-2xl sm:rounded-3xl p-6 space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold">
                Factors Affecting Treatment Cost
              </h2>
              <ul className="space-y-2">
                {treatment.costFactors.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm td-intro">
                    <span className="td-dot mt-1.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* 16. Frequently Asked Questions */}
          <article
            id="treatment-faqs"
            className="td-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-5"
          >
            <div>
              <span className="td-kicker text-xs font-semibold uppercase tracking-wider">
                Patient Questions
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {treatment.faqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div key={faq.q} className="td-faq-item rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                      className="td-faq-btn w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base"
                    >
                      <span>{faq.q}</span>
                      <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-sm leading-relaxed td-subintro">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </article>

          {/* 17. Dentist Responsible & 19. Relevant Patient Cases (with consent) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <article className="lg:col-span-5 td-card td-card-soft rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between gap-5">
              <div className="space-y-4">
                <span className="td-kicker text-xs font-semibold uppercase tracking-wider">
                  Clinician Responsible
                </span>

                <div className="flex items-center gap-4">
                  <img
                    src={responsibleDentist.image}
                    alt={responsibleDentist.name}
                    className="td-dentist-avatar rounded-2xl object-cover object-top shrink-0"
                  />
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold">
                      {responsibleDentist.name}
                    </h2>
                    <p className="text-xs sm:text-sm td-subintro">
                      {responsibleDentist.designation}
                    </p>
                    <p className="text-xs td-subintro mt-1">
                      {responsibleDentist.qualifications}
                    </p>
                    <p className="text-[11px] td-subintro mt-0.5">
                      {responsibleDentist.registration}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href={`/dentists/${responsibleDentist.slug}`}
                  className="td-btn td-btn-secondary flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-center"
                >
                  View Profile
                </a>
                <a
                  href={`/book-appointment?dentist=${responsibleDentist.slug}&treatment=${treatment.slug}`}
                  className="td-btn td-btn-primary flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-center"
                >
                  Book with Dentist
                </a>
              </div>
            </article>

            <article className="lg:col-span-7 td-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 space-y-4">
              <div>
                <span className="td-kicker text-xs font-semibold uppercase tracking-wider">
                  Clinical Examples (Shared With Informed Patient Consent)
                </span>
                <h2 className="text-xl font-semibold mt-1">
                  Relevant Patient Cases
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {treatment.patientCases.map((c) => (
                  <div key={c.caseId} className="td-case-box rounded-2xl p-4 sm:p-5 space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider td-kicker">
                      {c.caseId}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed td-subintro">
                      {c.summary}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* 18. Related Treatments */}
          {relatedList.length > 0 && (
            <div className="space-y-5 pt-2">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Related Treatments
                </h2>
                <a
                  href="/treatments"
                  className="td-btn td-btn-secondary px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                >
                  All Treatments &rarr;
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedList.map((rel) => (
                  <article
                    key={rel.slug}
                    className="td-related-card rounded-2xl overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="td-related-media overflow-hidden">
                        <img
                          src={rel.image}
                          alt={rel.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-[11px] font-semibold uppercase tracking-wider td-kicker">
                          {rel.category}
                        </span>
                        <h3 className="text-lg font-semibold mt-1">{rel.name}</h3>
                      </div>
                    </div>
                    <div className="px-5 pb-5">
                      <a
                        href={`/treatments/${rel.slug}`}
                        className="td-btn td-btn-secondary w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium"
                      >
                        Learn More &rarr;
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* 20. Book Consultation CTA */}
          <div className="td-cta-banner rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2.5">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Considering {treatment.name}?
                </h2>
                <p className="text-sm sm:text-base td-intro leading-relaxed">
                  Schedule an in-person clinical consultation for an accurate
                  diagnosis, personalized timeline, and written treatment plan.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={`/book-appointment?treatment=${treatment.slug}`}
                  className="td-btn td-btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-center"
                >
                  Book Consultation
                </a>
                <a
                  href="/contact"
                  className="td-btn td-btn-secondary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium text-center"
                >
                  Contact Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}