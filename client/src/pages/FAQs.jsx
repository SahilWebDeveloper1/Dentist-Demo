import React, { useMemo, useState } from "react";
import "./styles/faqs.css";

const FAQ_CATEGORIES = [
  {
    id: "general",
    title: "General Questions",
    subtitle: "Location, hours, walk-ins & contact",
    items: [
      {
        q: "Where is the clinic located?",
        a: "Serene Dental Studio is located on the Ground Floor, M-42, Main Market Road, Greater Kailash Part II, New Delhi – 110048, opposite GK-II M Block Market Park and a 5-minute ride from Greater Kailash Metro Station.",
      },
      {
        q: "What are your working hours?",
        a: "We are open Monday to Friday from 9:30 AM to 7:00 PM, and Saturday from 9:30 AM to 5:00 PM (with a midday sterilization break from 1:30 PM to 2:00 PM). Sundays are reserved for pre-scheduled urgent care only.",
      },
      {
        q: "Do you accept walk-in patients?",
        a: "We welcome walk-in patients whenever a suite is open, and we always prioritize dental emergencies. However, booking ahead is recommended so we can reserve an unhurried 60-minute slot for you.",
      },
      {
        q: "How can I contact the clinic?",
        a: "You can call us on +91 98100 00000 or +91 11 4100 0000, message us on WhatsApp (+91 98100 00000), or email care@serenedental.in.",
      },
    ],
  },
  {
    id: "appointments",
    title: "Appointments",
    subtitle: "Booking, dentist selection & schedule policies",
    items: [
      {
        q: "How do I book an appointment?",
        a: "Use our online Book Appointment form to request your preferred dentist, treatment, date, and time slot. Submitting the form creates a request—our front desk confirms your final slot via phone, WhatsApp, or email.",
      },
      {
        q: "Can I choose my dentist?",
        a: "Yes. You can select any of our BDS or MDS specialists directly on the booking form or from their individual dentist profile page. If you are unsure which specialist fits your concern, choose 'Any Available Dentist' and we will match you.",
      },
      {
        q: "How do I reschedule?",
        a: "Simply call or WhatsApp our reception desk at +91 98100 00000 at least 24 hours before your scheduled visit, and we will move your slot to another convenient time.",
      },
      {
        q: "What happens if I arrive late?",
        a: "We hold your appointment for a 15-minute grace period. If you are delayed beyond 15 minutes, we may need to shorten the consultation or reschedule so other patients are not kept waiting.",
      },
      {
        q: "Can I cancel an appointment?",
        a: "Yes. You may cancel without any fee by notifying us at least 24 hours in advance via phone, WhatsApp, or email.",
      },
    ],
  },
  {
    id: "treatments",
    title: "Treatments",
    subtitle: "Comfort, timelines & suitability",
    items: [
      {
        q: "Does a root canal hurt?",
        a: "Modern root canal therapy is performed under effective local anesthesia so you feel gentle pressure rather than sharp pain. Using operating microscopes and rotary instruments, most routine cases are completed comfortably in 1–2 visits.",
      },
      {
        q: "How long does teeth whitening take?",
        a: "In-clinic desensitizing whitening typically takes about 60 minutes in a single visit. Individual shade lift depends on baseline enamel color and staining habits.",
      },
      {
        q: "How do dental implants work?",
        a: "A biocompatible titanium or ceramic post is gently placed into the jawbone after 3D CBCT planning. Once the bone integrates around it over a healing period, a custom ceramic crown is attached to restore natural chewing.",
      },
      {
        q: "How often should I visit a dentist?",
        a: "Most adults and children benefit from a preventive checkup and scaling every 6 months, though patients managing gum disease or implants may be advised to visit every 3–4 months.",
      },
      {
        q: "Are braces suitable for adults?",
        a: "Yes. Healthy teeth can be aligned at any age. Many working adults choose clear aligners or tooth-colored ceramic braces for discreet, comfortable bite and smile alignment.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    subtitle: "UPI, cards, estimates & insurance support",
    items: [
      {
        q: "What payment methods are accepted?",
        a: "We accept UPI (Google Pay, PhonePe, Paytm), Visa/Mastercard/RuPay credit and debit cards, NetBanking, and cash at the reception desk.",
      },
      {
        q: "Do you provide treatment estimates?",
        a: "Yes. After your clinical exam and any necessary digital X-rays, you receive an itemized written treatment plan and cost estimate before any procedure begins.",
      },
      {
        q: "Are payment plans available?",
        a: "For multi-stage treatments such as orthodontics, clear aligners, or dental implants, payments are structured in transparent stage-wise milestones—and eligible cardholders can opt for EMI options.",
      },
      {
        q: "Do you accept dental insurance?",
        a: "Most Indian health insurance policies offer limited dental coverage (primarily for accidental trauma or specific inpatient procedures). We provide complete itemized invoices, diagnostic notes, and receipts so you can file reimbursement claims with your insurer.",
      },
    ],
  },
  {
    id: "first-time",
    title: "First-Time Patients",
    subtitle: "Preparing for your first visit",
    items: [
      {
        q: "What should I bring?",
        a: "Please bring a valid government photo ID, a list of any current medications or allergies, and any recent dental X-rays or prescriptions if you have them.",
      },
      {
        q: "How long does the first consultation take?",
        a: "Plan for 45 to 60 minutes. We never rush first visits—this allows time for digital registration, unhurried conversation, an exam, and reviewing any scans together.",
      },
      {
        q: "Will I receive a treatment plan?",
        a: "Yes. You will leave with a clear, jargon-free summary of your oral health findings, prioritized options, expected visits, and transparent pricing.",
      },
      {
        q: "Do I need previous dental records?",
        a: "They are helpful if you have recent X-rays (within the last 6 months), but they are not required—we can capture low-dose digital X-rays or 3D scans on-site if clinically needed.",
      },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Dentistry",
    subtitle: "Clinically reviewed urgent dental guidance",
    items: [
      {
        q: "What should I do if I have severe tooth pain?",
        a: "Rinse your mouth gently with lukewarm salt water and check for trapped food using floss. Avoid placing aspirin directly on the tooth or gums (it can burn tissue). Call our clinic immediately for a priority assessment—never ignore pain accompanied by facial swelling or fever.",
      },
      {
        q: "What should I do if a tooth gets knocked out?",
        a: "Time is critical—ideally see a dentist within 30–60 minutes. Hold the tooth only by the white crown (never touch the root), gently rinse with milk or saline if dirty without scrubbing, and place it back into the socket if possible—or store it in cold milk or inside your cheek (for adults) while heading straight to the clinic.",
      },
      {
        q: "How can I contact the clinic during an emergency?",
        a: "Call +91 98100 00000 directly or message our WhatsApp emergency line. During clinic hours we reserve daily urgent-care slots; outside hours, our team will advise whether to come in for priority care or go straight to a hospital emergency department.",
      },
    ],
  },
];

export default function FAQs() {
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openKey, setOpenKey] = useState("general-0");

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return FAQ_CATEGORIES.filter(
      (cat) => activeCategoryId === "all" || cat.id === activeCategoryId
    )
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            !query ||
            item.q.toLowerCase().includes(query) ||
            item.a.toLowerCase().includes(query)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [activeCategoryId, searchQuery]);

  const toggleItem = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <main className="faqs-page min-h-screen">
      {/* ===== Hero & Search ===== */}
      <section
        className="faqs-hero relative overflow-hidden py-12 sm:py-16 lg:py-20"
        aria-labelledby="faqs-hero-heading"
      >
        <div className="faqs-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="faqs-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="faqs-eyebrow-dot" aria-hidden="true" />
                Patient Help Center
              </span>

              <h1
                id="faqs-hero-heading"
                className="faqs-hero-title font-semibold tracking-tight"
              >
                Frequently Asked Questions
              </h1>

              <p className="faqs-intro text-base sm:text-lg leading-relaxed">
                Browse clear answers organized by topic—from first-time visits
                and payment methods to clinically reviewed emergency guidance.
              </p>
            </div>

            <div className="w-full lg:w-80">
              <label htmlFor="faq-search" className="sr-only">
                Search FAQs
              </label>
              <div className="relative">
                <input
                  id="faq-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions (e.g. root canal, UPI)..."
                  className="faqs-search-input w-full rounded-full px-4 py-2.5 pl-10 text-sm"
                />
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-4 h-4 faqs-search-icon"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div
            className="flex flex-wrap gap-2 mt-8"
            role="tablist"
            aria-label="Filter FAQs by category"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategoryId === "all"}
              onClick={() => setActiveCategoryId("all")}
              className={`faqs-tab-pill px-4 py-2 rounded-full text-xs sm:text-sm font-medium ${
                activeCategoryId === "all" ? "is-active" : ""
              }`}
            >
              All Categories
            </button>
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`faqs-tab-pill px-4 py-2 rounded-full text-xs sm:text-sm font-medium ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Categorized FAQ Accordions ===== */}
      <section className="faqs-body py-12 sm:py-16 lg:py-20">
        <div className="faqs-container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div
                key={category.id}
                className="faqs-category-block rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b faqs-divider">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-xs sm:text-sm faqs-subintro mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                  <span className="faqs-count-pill px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-auto">
                    {category.items.length} Questions
                  </span>
                </div>

                {/* Clinical Hospital-Care Red-Flag Box inside Emergency Dentistry */}
                {category.id === "emergency" && (
                  <div className="faqs-emergency-alert rounded-2xl p-4 sm:p-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider">
                      Clinically Reviewed Safety Notice · When Immediate Hospital
                      Care Is Necessary
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed faqs-intro">
                      Go directly to the nearest hospital emergency department
                      (or call <strong>112 / 108</strong> in India) instead of
                      waiting for a dental appointment if you experience:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm faqs-intro pt-1">
                      <li>• Difficulty breathing or swallowing</li>
                      <li>• Rapidly spreading facial, eye, or neck swelling</li>
                      <li>• Uncontrolled oral bleeding after 20+ mins of pressure</li>
                      <li>• High fever with jaw stiffness or suspected jaw fracture</li>
                    </ul>
                  </div>
                )}

                <div className="space-y-3">
                  {category.items.map((item, idx) => {
                    const key = `${category.id}-${idx}`;
                    const isOpen = openKey === key;
                    return (
                      <div key={key} className="faqs-item rounded-2xl overflow-hidden">
                        <button
                          type="button"
                          onClick={() => toggleItem(key)}
                          aria-expanded={isOpen}
                          className="faqs-item-btn w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-sm sm:text-base font-semibold"
                        >
                          <span>{item.q}</span>
                          <span aria-hidden="true" className="text-lg leading-none">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 text-sm leading-relaxed faqs-subintro">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="faqs-empty rounded-2xl sm:rounded-3xl p-8 text-center space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold">
                No matching questions found
              </h2>
              <p className="text-sm faqs-subintro">
                Try another keyword or reset back to all categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategoryId("all");
                }}
                className="faqs-btn faqs-btn-primary px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Bottom Help CTA */}
          <div className="faqs-cta-banner rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Still have a question?
              </h2>
              <p className="text-sm faqs-intro">
                Speak with our reception team or schedule a consultation with a
                dentist.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="/contact"
                className="faqs-btn faqs-btn-secondary px-5 py-3 rounded-full text-sm font-medium"
              >
                Contact Clinic
              </a>
              <a
                href="/book-appointment"
                className="faqs-btn faqs-btn-primary px-5 py-3 rounded-full text-sm font-semibold"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}