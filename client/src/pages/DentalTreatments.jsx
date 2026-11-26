import React, { useMemo, useState } from "react";
import "./styles/treatments.css";

import heroImg from "../assets/treatments-hero.png";
import cosmeticImg from "../assets/treatment-cosmetic.png";
import orthoImg from "../assets/treatment-ortho.png";
import restorativeImg from "../assets/treatment-restorative.png";
import generalImg from "../assets/gallery/case-3-after.png";
import consultImg from "../assets/gallery/case-2-after.png";

const TREATMENT_CATEGORIES = [
  { id: "All", code: "All", label: "All Categories" },
  { id: "General Dentistry", code: "A", label: "General Dentistry" },
  { id: "Cosmetic Dentistry", code: "B", label: "Cosmetic Dentistry" },
  { id: "Restorative Dentistry", code: "C", label: "Restorative Dentistry" },
  { id: "Orthodontics", code: "D", label: "Orthodontics" },
  { id: "Endodontics", code: "E", label: "Endodontics" },
  { id: "Surgical Dentistry", code: "F", label: "Surgical Dentistry" },
  { id: "Pediatric Dentistry", code: "G", label: "Pediatric Dentistry" },
  {
    id: "Gum / Periodontal Treatment",
    code: "H",
    label: "Gum / Periodontal Treatment",
  },
];

// Set `offered: false` for any procedure not currently offered at your clinic
const TREATMENTS = [
  // A. General Dentistry
  {
    slug: "dental-checkup",
    name: "Dental Checkup",
    category: "General Dentistry",
    description:
      "Comprehensive oral examination with digital X-rays and an unhurried, clear review of your dental health.",
    image: consultImg,
    featured: true,
    popular: true,
    offered: true,
  },
  {
    slug: "teeth-cleaning-scaling",
    name: "Teeth Cleaning / Scaling",
    category: "General Dentistry",
    description:
      "Gentle ultrasonic scaling and polishing to remove plaque, tartar, and surface stains comfortably.",
    image: generalImg,
    featured: false,
    popular: true,
    offered: true,
  },
  {
    slug: "tooth-colored-fillings",
    name: "Tooth-Colored Fillings",
    category: "General Dentistry",
    description:
      "Metal-free composite resin restorations shade-matched to blend seamlessly with natural enamel.",
    image: cosmeticImg,
    featured: false,
    popular: true,
    offered: true,
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction",
    category: "General Dentistry",
    description:
      "Careful, numb-first removal of severely decayed or non-restorable teeth with calm aftercare guidance.",
    image: generalImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "gum-care",
    name: "Gum Care",
    category: "General Dentistry",
    description:
      "Early-stage gingival care to soothe bleeding gums, reduce inflammation, and protect tooth support.",
    image: consultImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "preventive-dentistry",
    name: "Preventive Dentistry",
    category: "General Dentistry",
    description:
      "Proactive enamel protection, hygiene coaching, and routine screenings to prevent complex issues.",
    image: generalImg,
    featured: false,
    popular: false,
    offered: true,
  },

  // B. Cosmetic Dentistry
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    description:
      "Enamel-safe in-clinic and custom tray whitening designed to brighten your smile with minimal sensitivity.",
    image: cosmeticImg,
    featured: true,
    popular: true,
    offered: true,
  },
  {
    slug: "dental-veneers",
    name: "Dental Veneers",
    category: "Cosmetic Dentistry",
    description:
      "Ultra-thin porcelain and composite shells crafted to refine tooth shape, shade, and symmetry.",
    image: cosmeticImg,
    featured: true,
    popular: false,
    offered: true,
  },
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    category: "Cosmetic Dentistry",
    description:
      "Digitally previewed combination of whitening, bonding, veneers, or alignment tailored to your facial harmony.",
    image: cosmeticImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "dental-bonding",
    name: "Dental Bonding",
    category: "Cosmetic Dentistry",
    description:
      "Conservative single-visit sculpting to repair chipped edges, small gaps, or worn tooth contours.",
    image: cosmeticImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "tooth-reshaping",
    name: "Tooth Reshaping",
    category: "Cosmetic Dentistry",
    description:
      "Gentle micro-enameloplasty to smooth uneven edges and balance your smile line without anesthesia.",
    image: cosmeticImg,
    featured: false,
    popular: false,
    offered: true,
  },

  // C. Restorative Dentistry
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    category: "Restorative Dentistry",
    description:
      "Precision-milled zirconia and E-max ceramic caps that restore strength and natural translucency.",
    image: restorativeImg,
    featured: true,
    popular: true,
    offered: true,
  },
  {
    slug: "dental-bridges",
    name: "Dental Bridges",
    category: "Restorative Dentistry",
    description:
      "Fixed, natural-looking prosthetic spans to replace one or more missing teeth and stabilize your bite.",
    image: restorativeImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Restorative Dentistry",
    description:
      "3D CBCT-guided titanium and ceramic root replacements engineered for lifelong chewing stability.",
    image: restorativeImg,
    featured: true,
    popular: true,
    offered: true,
  },
  {
    slug: "dentures",
    name: "Dentures",
    category: "Restorative Dentistry",
    description:
      "Comfortable, custom-fitted full, partial, and implant-retained dentures built for natural speech and chewing.",
    image: restorativeImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "inlays-and-onlays",
    name: "Inlays and Onlays",
    category: "Restorative Dentistry",
    description:
      "Conservative lab-crafted ceramic restorations that repair larger cavities while preserving healthy tooth walls.",
    image: restorativeImg,
    featured: false,
    popular: false,
    offered: true,
  },

  // D. Orthodontics
  {
    slug: "metal-braces",
    name: "Metal Braces",
    category: "Orthodontics",
    description:
      "Modern low-profile brackets offering reliable, cost-effective alignment for teens and adults.",
    image: orthoImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "ceramic-braces",
    name: "Ceramic Braces",
    category: "Orthodontics",
    description:
      "Tooth-colored aesthetic brackets that blend discreetly while delivering full orthodontic control.",
    image: orthoImg,
    featured: false,
    popular: true,
    offered: true,
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    category: "Orthodontics",
    description:
      "Removable, virtually invisible 3D-printed aligner trays planned from comfortable digital intraoral scans.",
    image: orthoImg,
    featured: true,
    popular: true,
    offered: true,
  },
  {
    slug: "retainers",
    name: "Retainers",
    category: "Orthodontics",
    description:
      "Custom clear and bonded retainers designed to lock in your orthodontic results long term.",
    image: orthoImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "bite-correction",
    name: "Bite Correction",
    category: "Orthodontics",
    description:
      "Targeted correction for overbite, underbite, crossbite, and jaw alignment comfort.",
    image: orthoImg,
    featured: false,
    popular: false,
    offered: true,
  },

  // E. Endodontics
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    category: "Endodontics",
    description:
      "Comfortable, microscope-assisted single-sitting therapy to relieve toothache and save your natural tooth.",
    image: generalImg,
    featured: true,
    popular: true,
    offered: true,
  },
  {
    slug: "retreatment-of-root-canal",
    name: "Re-treatment of Root Canal",
    category: "Endodontics",
    description:
      "Precision endodontic retreatment under high magnification to resolve persistent infection or complex canals.",
    image: generalImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "pulp-therapy",
    name: "Pulp Therapy",
    category: "Endodontics",
    description:
      "Gentle vital pulp preservation and pulpotomy care to protect developing or mildly inflamed teeth.",
    image: generalImg,
    featured: false,
    popular: false,
    offered: true,
  },

  // F. Surgical Dentistry
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    category: "Surgical Dentistry",
    description:
      "Atraumatic removal of impacted or painful third molars with 3D imaging and calm post-op recovery support.",
    image: heroImg,
    featured: false,
    popular: true,
    offered: true,
  },
  {
    slug: "surgical-tooth-extraction",
    name: "Surgical Tooth Extraction",
    category: "Surgical Dentistry",
    description:
      "Specialized oral surgical removal for fractured roots or complex teeth with gentle tissue handling.",
    image: heroImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "dental-implant-surgery",
    name: "Dental Implant Surgery",
    category: "Surgical Dentistry",
    description:
      "Minimally invasive, computer-guided surgical placement of dental implants by our MDS surgical team.",
    image: restorativeImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "bone-grafting-ridge-preservation",
    name: "Bone Grafting & Ridge Preservation",
    category: "Surgical Dentistry",
    description:
      "Biocompatible bone augmentation to rebuild jaw volume safely for future dental implants.",
    image: restorativeImg,
    featured: false,
    popular: false,
    offered: true,
  },

  // G. Pediatric Dentistry
  {
    slug: "childrens-dental-checkups",
    name: "Children's Dental Checkups",
    category: "Pediatric Dentistry",
    description:
      "Warm, unhurried checkups tailored for kids to build lifelong confidence and healthy brushing habits.",
    image: consultImg,
    featured: false,
    popular: true,
    offered: true,
  },
  {
    slug: "fluoride-treatment",
    name: "Fluoride Treatment",
    category: "Pediatric Dentistry",
    description:
      "Quick, pleasant-tasting mineral varnish applications that strengthen young enamel against cavities.",
    image: consultImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "dental-sealants",
    name: "Dental Sealants",
    category: "Pediatric Dentistry",
    description:
      "Painless protective shields placed over deep molar grooves to block decay in growing teeth.",
    image: consultImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "childrens-fillings",
    name: "Children's Fillings",
    category: "Pediatric Dentistry",
    description:
      "Gentle, tooth-colored pediatric restorations delivered with calm distraction and comfort-first pacing.",
    image: cosmeticImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "pediatric-preventive-dental-care",
    name: "Preventive Dental Care (Pediatric)",
    category: "Pediatric Dentistry",
    description:
      "Growth monitoring, habit counseling, and early cavity prevention tailored for children and teens.",
    image: consultImg,
    featured: false,
    popular: false,
    offered: true,
  },

  // H. Gum / Periodontal Treatment
  {
    slug: "scaling-and-root-planing",
    name: "Scaling and Root Planing",
    category: "Gum / Periodontal Treatment",
    description:
      "Deep, numbed periodontal cleaning beneath the gumline to clear tartar and help gums heal snugly.",
    image: generalImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "gum-disease-management",
    name: "Gum Disease Management",
    category: "Gum / Periodontal Treatment",
    description:
      "Structured non-surgical and laser protocols to halt gingivitis and periodontitis progression.",
    image: generalImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "periodontal-maintenance",
    name: "Periodontal Maintenance",
    category: "Gum / Periodontal Treatment",
    description:
      "Scheduled supportive cleanings and pocket checks to protect bone levels and treated gums.",
    image: generalImg,
    featured: false,
    popular: false,
    offered: true,
  },
  {
    slug: "laser-gum-surgery",
    name: "Gum Surgery & Laser Contouring",
    category: "Gum / Periodontal Treatment",
    description:
      "Precise soft-tissue laser contouring and periodontal flap care with minimal bleeding and faster healing.",
    image: heroImg,
    featured: false,
    popular: false,
    offered: true,
  },
];

const DentalTreatments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quickFilter, setQuickFilter] = useState("all"); // "all" | "featured" | "popular"

  const offeredTreatments = useMemo(
    () => TREATMENTS.filter((item) => item.offered),
    []
  );

  const filteredTreatments = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return offeredTreatments.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesQuick =
        quickFilter === "all" ||
        (quickFilter === "featured" && item.featured) ||
        (quickFilter === "popular" && item.popular);
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuick && matchesQuery;
    });
  }, [offeredTreatments, searchQuery, selectedCategory, quickFilter]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setQuickFilter("all");
  };

  return (
    <main className="treatments-page min-h-screen">
      {/* ===== 6.1 Treatments Hero ===== */}
      <section
        className="treatments-hero relative overflow-hidden"
        aria-labelledby="treatments-hero-heading"
      >
        <div className="treatments-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <span className="treatments-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="treatments-eyebrow-dot" aria-hidden="true" />
                Our Clinical Services
              </span>

              <h1
                id="treatments-hero-heading"
                className="treatments-hero-title font-semibold tracking-tight"
              >
                Comprehensive dental treatments tailored to your comfort.
              </h1>

              <p className="treatments-intro text-base sm:text-lg leading-relaxed max-w-xl">
                From routine preventive checkups and painless root canals to
                clear aligners and 3D-guided implants, every procedure is
                delivered with clear visual explanations and zero pressure.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="/book-appointment"
                  className="treatments-btn treatments-btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold"
                >
                  Book Consultation
                </a>
                <a
                  href="#treatment-catalog"
                  className="treatments-btn treatments-btn-secondary inline-flex items-center justify-center px-5 py-3.5 rounded-full text-sm font-medium"
                >
                  Browse Treatments
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <figure className="treatments-hero-media relative rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  src={heroImg}
                  alt="Calm sunlit dental treatment suite with ergonomic chair and pale eucalyptus cabinetry"
                  className="treatments-hero-img w-full h-full object-cover"
                  loading="eager"
                />
                <figcaption className="treatments-hero-caption flex flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-5 sm:py-3.5">
                  <span className="text-xs sm:text-sm font-medium">
                    Evidence-Based Multi-Specialty Care
                  </span>
                  <span className="treatments-caption-tag text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
                    {offeredTreatments.length} Treatments · 8 Categories
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6.2 Categories & 6.4 Search / Filter + 6.3 Listing Cards ===== */}
      <section
        id="treatment-catalog"
        className="treatments-catalog py-14 sm:py-20"
        aria-labelledby="treatments-catalog-heading"
      >
        <div className="treatments-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header + Search + Quick Filters */}
          <div className="space-y-6 mb-8 sm:mb-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <div className="max-w-2xl space-y-2.5">
                <span className="treatments-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                  <span className="treatments-eyebrow-dot" aria-hidden="true" />
                  Treatment Directory
                </span>

                <h2
                  id="treatments-catalog-heading"
                  className="treatments-section-heading font-semibold tracking-tight"
                >
                  Explore treatments by category or name.
                </h2>
              </div>

              {/* Search Input */}
              <div className="w-full lg:w-80">
                <label htmlFor="treatment-search" className="sr-only">
                  Search treatments by name
                </label>
                <div className="relative">
                  <input
                    id="treatment-search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search treatment (e.g. Implants, Braces)..."
                    className="treatments-search-input w-full rounded-full px-4 py-2.5 pl-10 text-sm"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="w-4 h-4 treatments-search-icon"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.5-3.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Featured & Popular Quick Toggles + Count */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQuickFilter("all")}
                  aria-pressed={quickFilter === "all"}
                  className={`quick-filter-pill px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium ${quickFilter === "all" ? "is-active" : ""
                    }`}
                >
                  All Treatments
                </button>
                <button
                  type="button"
                  onClick={() => setQuickFilter("featured")}
                  aria-pressed={quickFilter === "featured"}
                  className={`quick-filter-pill px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium ${quickFilter === "featured" ? "is-active" : ""
                    }`}
                >
                  Featured Treatments
                </button>
                <button
                  type="button"
                  onClick={() => setQuickFilter("popular")}
                  aria-pressed={quickFilter === "popular"}
                  className={`quick-filter-pill px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium ${quickFilter === "popular" ? "is-active" : ""
                    }`}
                >
                  Popular Treatments
                </button>
              </div>

              <span className="text-xs sm:text-sm font-medium treatments-subintro">
                Showing {filteredTreatments.length} of {offeredTreatments.length} treatments
              </span>
            </div>

            {/* 6.2 Category Filter Pills (A–H) */}
            <div
              className="flex flex-wrap gap-2 pt-1"
              role="tablist"
              aria-label="Filter by treatment category"
            >
              {TREATMENT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`category-pill px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium ${isActive ? "is-active" : ""
                      }`}
                  >
                    {cat.code !== "All" ? `${cat.code}. ${cat.label}` : cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 6.3 Treatment Listing Cards */}
          {filteredTreatments.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredTreatments.map((treatment) => (
                <article
                  key={treatment.slug}
                  className="treatment-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="treatment-media relative overflow-hidden">
                      <img
                        src={treatment.image}
                        alt={treatment.name}
                        className="treatment-img w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="treatment-cat-badge px-3 py-1 rounded-full text-[11px] font-semibold">
                        {treatment.category}
                      </span>
                    </div>

                    <div className="p-5 sm:p-6 space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                          {treatment.name}
                        </h3>
                        {(treatment.featured || treatment.popular) && (
                          <span className="treatment-tag-pill shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider">
                            {treatment.featured ? "Featured" : "Popular"}
                          </span>
                        )}
                      </div>

                      <p className="text-sm leading-relaxed treatments-subintro">
                        {treatment.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 flex flex-wrap items-center gap-2.5">
                    <a
                      href={`/treatments/${treatment.slug}`}
                      className="treatments-btn treatments-btn-secondary flex-1 min-w-30 inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-center"
                    >
                      Learn More
                    </a>
                    <a
                      href={`/book-appointment?treatment=${treatment.slug}`}
                      className="treatments-btn treatments-btn-primary flex-1 min-w-35 inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-center"
                    >
                      Book Consultation
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="treatments-empty rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">
                No matching treatments found
              </h3>
              <p className="text-sm treatments-subintro max-w-md mx-auto">
                Try clearing your search term or switching back to all
                categories.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="treatments-btn treatments-btn-primary px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== 6.5 Treatment CTA ===== */}
      <section
        className="treatments-cta py-12 sm:py-16 lg:py-20"
        aria-labelledby="treatments-cta-heading"
      >
        <div className="treatments-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="treatments-cta-banner rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2.5">
                <span className="treatments-cta-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                  <span className="treatments-eyebrow-dot" aria-hidden="true" />
                  Need Guidance?
                </span>

                <h2
                  id="treatments-cta-heading"
                  className="treatments-section-heading font-semibold tracking-tight"
                >
                  Unsure which treatment you need?
                </h2>

                <p className="text-sm sm:text-base treatments-intro leading-relaxed">
                  Book a dental consultation for a gentle assessment and clear
                  options—or contact the clinic and our care coordinator will
                  help you choose the right slot.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="/book-appointment"
                  className="treatments-btn treatments-btn-primary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-center"
                >
                  Book a Dental Consultation
                </a>
                <a
                  href="/contact"
                  className="treatments-btn treatments-btn-secondary inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium text-center"
                >
                  Contact the Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DentalTreatments