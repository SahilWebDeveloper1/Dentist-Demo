import React from "react";
import { useParams } from "react-router-dom";
import "./styles/blogPost.css";

import heroImg from "../assets/treatments-hero.png";
import cosmeticImg from "../assets/treatment-cosmetic.png";
import orthoImg from "../assets/treatment-ortho.png";
import restorativeImg from "../assets/treatment-restorative.png";
import generalImg from "../assets/about-treatment.png";
import consultImg from "../assets/about-consultation.png";
import equipmentImg from "../assets/facility/dental-equipment.png";

const BLOG_INDEX = {
  "what-to-expect-at-your-first-preventive-dental-checkup": {
    slug: "what-to-expect-at-your-first-preventive-dental-checkup",
    title: "What Happens During an Unhurried Preventive Dental Checkup?",
    category: "Preventive Dentistry",
    coverImage: consultImg,
    inlineImage: generalImg,
    author: "Serene Dental Editorial Team",
    reviewer: "Dr. Ananya Sharma, BDS, MDS (Reg. #A-14829)",
    publishedAt: "18 November 2026",
    updatedAt: "24 November 2026",
    readTime: "4 min read",
    relatedTreatmentSlugs: [
      { slug: "dental-checkup", label: "Dental Checkup" },
      { slug: "teeth-cleaning-scaling", label: "Teeth Cleaning / Scaling" },
      { slug: "preventive-dentistry", label: "Preventive Dentistry" },
    ],
  },
  "how-often-should-you-schedule-scaling-and-polishing": {
    slug: "how-often-should-you-schedule-scaling-and-polishing",
    title: "How Often Do You Actually Need Professional Teeth Scaling?",
    category: "Dental Hygiene",
    coverImage: generalImg,
    inlineImage: consultImg,
    author: "Serene Dental Editorial Team",
    reviewer: "Dr. Ananya Sharma, BDS, MDS (Reg. #A-14829)",
    publishedAt: "11 November 2026",
    updatedAt: "20 November 2026",
    readTime: "5 min read",
    relatedTreatmentSlugs: [
      { slug: "teeth-cleaning-scaling", label: "Teeth Cleaning / Scaling" },
      { slug: "scaling-and-root-planing", label: "Scaling & Root Planing" },
    ],
  },
  "clear-aligners-vs-ceramic-braces-for-working-adults": {
    slug: "clear-aligners-vs-ceramic-braces-for-working-adults",
    title: "Clear Aligners vs. Ceramic Braces: Choosing What Fits Your Routine",
    category: "Orthodontics",
    coverImage: orthoImg,
    inlineImage: equipmentImg,
    author: "Serene Dental Editorial Team",
    reviewer: "Dr. Rohan Deshmukh, BDS, MDS (Reg. #A-22914)",
    publishedAt: "04 November 2026",
    updatedAt: "15 November 2026",
    readTime: "6 min read",
    relatedTreatmentSlugs: [
      { slug: "clear-aligners", label: "Clear Aligners" },
      { slug: "ceramic-braces", label: "Ceramic Braces" },
      { slug: "retainers", label: "Retainers" },
    ],
  },
  "understanding-3d-cbct-guided-dental-implants": {
    slug: "understanding-3d-cbct-guided-dental-implants",
    title: "How 3D CBCT Imaging Makes Dental Implant Planning Safer",
    category: "Dental Implants",
    coverImage: restorativeImg,
    inlineImage: equipmentImg,
    author: "Serene Dental Editorial Team",
    reviewer: "Dr. Vikram Malhotra, BDS, MDS (Reg. #A-09412)",
    publishedAt: "26 October 2026",
    updatedAt: "10 November 2026",
    readTime: "5 min read",
    relatedTreatmentSlugs: [
      { slug: "dental-implants", label: "Dental Implants" },
      { slug: "dental-implant-surgery", label: "Dental Implant Surgery" },
    ],
  },
  "childs-first-dental-visit-anxiety-free-guide": {
    slug: "childs-first-dental-visit-anxiety-free-guide",
    title: "Preparing Your Child for a Calm, Fear-Free First Dental Visit",
    category: "Children's Dental Health",
    coverImage: consultImg,
    inlineImage: heroImg,
    author: "Serene Dental Editorial Team",
    reviewer: "Dr. Priya Nair, BDS, MDS (Reg. #A-19305)",
    publishedAt: "19 October 2026",
    updatedAt: "05 November 2026",
    readTime: "4 min read",
    relatedTreatmentSlugs: [
      { slug: "childrens-dental-checkups", label: "Children's Dental Checkups" },
      { slug: "fluoride-treatment", label: "Fluoride Treatment" },
      { slug: "dental-sealants", label: "Dental Sealants" },
    ],
  },
  "enamel-safe-whitening-sensitivity-guide": {
    slug: "enamel-safe-whitening-sensitivity-guide",
    title: "Teeth Whitening Without Sensitivity: What Actually Protects Enamel",
    category: "Cosmetic Dentistry",
    coverImage: cosmeticImg,
    inlineImage: consultImg,
    author: "Serene Dental Editorial Team",
    reviewer: "Dr. Ananya Sharma, BDS, MDS (Reg. #A-14829)",
    publishedAt: "10 October 2026",
    updatedAt: "01 November 2026",
    readTime: "4 min read",
    relatedTreatmentSlugs: [
      { slug: "teeth-whitening", label: "Teeth Whitening" },
      { slug: "dental-veneers", label: "Dental Veneers" },
    ],
  },
  "early-signs-of-gum-inflammation-you-should-not-ignore": {
    slug: "early-signs-of-gum-inflammation-you-should-not-ignore",
    title: "Bleeding Gums While Brushing? Early Signs of Gingivitis Explained",
    category: "Gum Health",
    coverImage: heroImg,
    inlineImage: generalImg,
    author: "Serene Dental Editorial Team",
    reviewer: "Dr. Vikram Malhotra, BDS, MDS (Reg. #A-09412)",
    publishedAt: "01 October 2026",
    updatedAt: "25 October 2026",
    readTime: "5 min read",
    relatedTreatmentSlugs: [
      { slug: "gum-disease-management", label: "Gum Disease Management" },
      { slug: "periodontal-maintenance", label: "Periodontal Maintenance" },
    ],
  },
  "intraoral-3d-scanners-replacing-putty-impressions": {
    slug: "intraoral-3d-scanners-replacing-putty-impressions",
    title: "Inside Digital Dentistry: How Optical Scanners Replace Putty Molds",
    category: "Dental Technology",
    coverImage: equipmentImg,
    inlineImage: restorativeImg,
    author: "Serene Dental Editorial Team",
    reviewer: "Dr. Rohan Deshmukh, BDS, MDS (Reg. #A-22914)",
    publishedAt: "22 September 2026",
    updatedAt: "14 October 2026",
    readTime: "4 min read",
    relatedTreatmentSlugs: [
      { slug: "clear-aligners", label: "Clear Aligners" },
      { slug: "dental-crowns", label: "Dental Crowns" },
    ],
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const article = BLOG_INDEX[slug];

  if (!article) {
    return (
      <main className="bp-page min-h-screen py-20 px-4">
        <div className="mx-auto max-w-2xl bp-not-found rounded-3xl p-8 text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Article not found
          </h1>
          <p className="text-sm sm:text-base bp-subintro">
            The Dental Journal article you requested could not be found.
          </p>
          <a
            href="/blog"
            className="bp-btn bp-btn-primary inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold"
          >
            &larr; Back to Dental Journal
          </a>
        </div>
      </main>
    );
  }

  const sections = [
    {
      id: "why-it-matters",
      heading: "Why Preventive Clarity Matters",
      body: `Many patients delay visiting a dentist until pain appears—yet most common dental concerns begin silently. Understanding ${article.category.toLowerCase()} through clear diagnostics helps protect natural enamel and avoid complex, urgent procedures later.`,
    },
    {
      id: "what-happens-clinically",
      heading: "What Your Dentist Evaluates",
      body: "During a structured clinical evaluation, your dentist checks tooth enamel integrity, existing fillings, gum pocket health, and bite balance. Where clinically indicated, low-dose digital X-rays or 3D optical scans reveal hidden areas between teeth and beneath the gumline.",
    },
    {
      id: "practical-next-steps",
      heading: "Practical Care & Home Habits",
      body: "Daily gentle brushing with a soft-bristled brush, cleaning between teeth once a day, limiting frequent sugary or acidic snacks, and keeping routine 6-month checkups form the foundation of lasting oral comfort.",
    },
    {
      id: "when-to-book",
      heading: "When to Schedule a Consultation",
      body: "If you notice lingering sensitivity, bleeding gums while brushing, food trapping between teeth, or simply haven't had a checkup in over six months, booking an unhurried evaluation is the safest first step.",
    },
  ];

  const relatedArticles = Object.values(BLOG_INDEX)
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  const references = [
    "Indian Dental Association (IDA) — Preventive Oral Health & Hygiene Guidelines",
    "Dental Council of India (DCI) — Clinical Standards & Patient Care Advisory",
    "World Health Organization (WHO) — Global Oral Health Clinical Fact Sheet",
  ];

  return (
    <main className="bp-page min-h-screen">
      {/* ===== Article Header & Cover Image ===== */}
      <article>
        <header className="bp-hero relative overflow-hidden py-10 sm:py-14 lg:py-16">
          <div className="bp-container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-6">
            <nav aria-label="Breadcrumb">
              <a
                href="/blog"
                className="bp-back-link inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full"
              >
                &larr; Back to Dental Journal
              </a>
            </nav>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="bp-cat-pill px-3 py-1 rounded-full font-semibold">
                  {article.category}
                </span>
                <span className="bp-subintro">{article.readTime}</span>
              </div>

              <h1 className="bp-title font-semibold tracking-tight">
                {article.title}
              </h1>

              {/* Author, Medical Reviewer, Published & Updated Dates */}
              <div className="bp-meta-bar rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="block font-semibold uppercase tracking-wider bp-kicker">
                    Author
                  </span>
                  <span className="font-medium mt-0.5 block">{article.author}</span>
                </div>
                <div>
                  <span className="block font-semibold uppercase tracking-wider bp-kicker">
                    Medical Reviewer
                  </span>
                  <span className="font-medium mt-0.5 block">
                    {article.reviewer}
                  </span>
                </div>
                <div>
                  <span className="block font-semibold uppercase tracking-wider bp-kicker">
                    Published
                  </span>
                  <span className="font-medium mt-0.5 block">
                    {article.publishedAt}
                  </span>
                </div>
                <div>
                  <span className="block font-semibold uppercase tracking-wider bp-kicker">
                    Last Updated
                  </span>
                  <span className="font-medium mt-0.5 block">
                    {article.updatedAt}
                  </span>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <figure className="bp-cover-media rounded-2xl sm:rounded-3xl overflow-hidden">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover block"
              />
            </figure>
          </div>
        </header>

        {/* ===== Table of Contents + Article Body ===== */}
        <section className="bp-body py-10 sm:py-14 lg:py-16">
          <div className="bp-container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Sidebar: Table of Contents & Relevant Treatments */}
              <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
                <nav
                  className="bp-toc-card rounded-2xl p-5 space-y-3"
                  aria-label="Table of contents"
                >
                  <h2 className="text-xs font-semibold uppercase tracking-wider bp-kicker">
                    Table of Contents
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {sections.map((sec, idx) => (
                      <li key={sec.id}>
                        <a href={`#${sec.id}`} className="bp-toc-link">
                          {idx + 1}. {sec.heading}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="#medical-references" className="bp-toc-link">
                        {sections.length + 1}. References &amp; Sources
                      </a>
                    </li>
                  </ul>
                </nav>

                {/* Relevant Treatment Links */}
                <div className="bp-treatments-box rounded-2xl p-5 space-y-3">
                  <h2 className="text-xs font-semibold uppercase tracking-wider bp-kicker">
                    Relevant Treatments
                  </h2>
                  <div className="flex flex-col gap-2">
                    {article.relatedTreatmentSlugs.map((tr) => (
                      <a
                        key={tr.slug}
                        href={`/treatments/${tr.slug}`}
                        className="bp-treatment-link rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium flex items-center justify-between"
                      >
                        <span>{tr.label}</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Right: Article Content, Inline Image & References */}
              <div className="lg:col-span-8 space-y-8">
                <div className="bp-disclaimer-box rounded-2xl p-4 text-xs sm:text-sm leading-relaxed">
                  <strong>Educational Guidance:</strong> This article is
                  reviewed by a qualified DCI-registered dentist for general
                  awareness and does not replace an in-person clinical diagnosis.
                </div>

                {sections.slice(0, 2).map((sec) => (
                  <section key={sec.id} id={sec.id} className="space-y-2.5">
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {sec.heading}
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed bp-intro">
                      {sec.body}
                    </p>
                  </section>
                ))}

                {/* Inline Clinical Illustration / Photo */}
                <figure className="bp-inline-media rounded-2xl overflow-hidden">
                  <img
                    src={article.inlineImage}
                    alt={`Clinical suite illustration for ${article.category}`}
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-3 text-xs bp-subintro bp-inline-caption">
                    Calm, modern clinical care focused on patient comfort and
                    clear communication.
                  </figcaption>
                </figure>

                {sections.slice(2).map((sec) => (
                  <section key={sec.id} id={sec.id} className="space-y-2.5">
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                      {sec.heading}
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed bp-intro">
                      {sec.body}
                    </p>
                  </section>
                ))}

                {/* References / Medical Sources */}
                <section
                  id="medical-references"
                  className="bp-references-box rounded-2xl p-5 sm:p-6 space-y-3"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-wider bp-kicker">
                    References &amp; Medical Sources
                  </h2>
                  <ul className="space-y-2 text-xs sm:text-sm bp-subintro">
                    {references.map((ref) => (
                      <li key={ref} className="flex items-start gap-2">
                        <span className="bp-dot mt-1.5 shrink-0" aria-hidden="true" />
                        <span>{ref}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Book Appointment CTA */}
                <div className="bp-cta-banner rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="space-y-1.5">
                    <h2 className="text-xl sm:text-2xl font-semibold">
                      Have questions about your smile?
                    </h2>
                    <p className="text-sm bp-intro">
                      Book an unhurried consultation with our dental team.
                    </p>
                  </div>
                  <a
                    href="/book-appointment"
                    className="bp-btn bp-btn-primary px-6 py-3 rounded-full text-sm font-semibold text-center shrink-0"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* ===== Related Articles ===== */}
      <section className="bp-related py-12 sm:py-16">
        <div className="bp-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 mb-7">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Related Articles
            </h2>
            <a
              href="/blog"
              className="bp-btn bp-btn-secondary px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
            >
              All Articles &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <article
                key={rel.slug}
                className="bp-related-card rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="bp-related-media overflow-hidden">
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider bp-kicker">
                      {rel.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold leading-snug">
                      {rel.title}
                    </h3>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <a
                    href={`/blog/${rel.slug}`}
                    className="bp-btn bp-btn-secondary w-full inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold"
                  >
                    Read More &rarr;
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