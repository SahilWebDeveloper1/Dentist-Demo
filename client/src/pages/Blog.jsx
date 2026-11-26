import React, { useMemo, useState } from "react";
import "./styles/blog.css";

import heroImg from "../assets/treatments-hero.png";
import cosmeticImg from "../assets/treatment-cosmetic.png";
import orthoImg from "../assets/treatment-ortho.png";
import restorativeImg from "../assets/treatment-restorative.png";
import generalImg from "../assets/about-treatment.png";
import consultImg from "../assets/about-consultation.png";
import equipmentImg from "../assets/facility/dental-equipment.png";

const BLOG_CATEGORIES = [
  "All Articles",
  "Dental Hygiene",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Orthodontics",
  "Children's Dental Health",
  "Gum Health",
  "Preventive Dentistry",
  "Dental Technology",
];

const BLOG_ARTICLES = [
  {
    slug: "what-to-expect-at-your-first-preventive-dental-checkup",
    title: "What Happens During an Unhurried Preventive Dental Checkup?",
    excerpt:
      "A step-by-step look at how digital X-rays, gum screening, and clear visual walkthroughs help catch small enamel issues early.",
    category: "Preventive Dentistry",
    author: "Reviewed by Dr. Ananya Sharma, MDS",
    publishedAt: "18 November 2026",
    readTime: "4 min read",
    thumbnail: consultImg,
    featured: true,
  },
  {
    slug: "how-often-should-you-schedule-scaling-and-polishing",
    title: "How Often Do You Actually Need Professional Teeth Scaling?",
    excerpt:
      "Separating myths from clinical evidence—why ultrasonic scaling protects enamel and how your gum health determines your ideal interval.",
    category: "Dental Hygiene",
    author: "Reviewed by Dr. Ananya Sharma, MDS",
    publishedAt: "11 November 2026",
    readTime: "5 min read",
    thumbnail: generalImg,
    featured: false,
  },
  {
    slug: "clear-aligners-vs-ceramic-braces-for-working-adults",
    title: "Clear Aligners vs. Ceramic Braces: Choosing What Fits Your Routine",
    excerpt:
      "An honest comparison of comfort, cleaning, appointment intervals, and bite-correction suitability for adults.",
    category: "Orthodontics",
    author: "Reviewed by Dr. Rohan Deshmukh, MDS",
    publishedAt: "04 November 2026",
    readTime: "6 min read",
    thumbnail: orthoImg,
    featured: false,
  },
  {
    slug: "understanding-3d-cbct-guided-dental-implants",
    title: "How 3D CBCT Imaging Makes Dental Implant Planning Safer",
    excerpt:
      "See how low-dose 3D scans map bone density and nerve pathways before placement for predictable healing.",
    category: "Dental Implants",
    author: "Reviewed by Dr. Vikram Malhotra, MDS",
    publishedAt: "26 October 2026",
    readTime: "5 min read",
    thumbnail: restorativeImg,
    featured: false,
  },
  {
    slug: "childs-first-dental-visit-anxiety-free-guide",
    title: "Preparing Your Child for a Calm, Fear-Free First Dental Visit",
    excerpt:
      "Practical tips for parents—when to book the first checkup, what words to avoid, and how pediatric sealants prevent cavities.",
    category: "Children's Dental Health",
    author: "Reviewed by Dr. Priya Nair, MDS",
    publishedAt: "19 October 2026",
    readTime: "4 min read",
    thumbnail: consultImg,
    featured: false,
  },
  {
    slug: "enamel-safe-whitening-sensitivity-guide",
    title: "Teeth Whitening Without Sensitivity: What Actually Protects Enamel",
    excerpt:
      "Why pH-balanced whitening and pre-treatment cavity checks matter more than quick over-the-counter strips.",
    category: "Cosmetic Dentistry",
    author: "Reviewed by Dr. Ananya Sharma, MDS",
    publishedAt: "10 October 2026",
    readTime: "4 min read",
    thumbnail: cosmeticImg,
    featured: false,
  },
  {
    slug: "early-signs-of-gum-inflammation-you-should-not-ignore",
    title: "Bleeding Gums While Brushing? Early Signs of Gingivitis Explained",
    excerpt:
      "Why painless gum bleeding is your body's earliest signal for periodontal care—and how timely cleaning reverses it.",
    category: "Gum Health",
    author: "Reviewed by Dr. Vikram Malhotra, MDS",
    publishedAt: "01 October 2026",
    readTime: "5 min read",
    thumbnail: heroImg,
    featured: false,
  },
  {
    slug: "intraoral-3d-scanners-replacing-putty-impressions",
    title: "Inside Digital Dentistry: How Optical Scanners Replace Putty Molds",
    excerpt:
      "Discover how wireless 3D intraoral cameras capture micron-accurate tooth models in minutes without gagging.",
    category: "Dental Technology",
    author: "Reviewed by Dr. Rohan Deshmukh, MDS",
    publishedAt: "22 September 2026",
    readTime: "4 min read",
    thumbnail: equipmentImg,
    featured: false,
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredArticle =
    BLOG_ARTICLES.find((a) => a.featured) || BLOG_ARTICLES[0];

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return BLOG_ARTICLES.filter((article) => {
      const matchesCat =
        selectedCategory === "All Articles" ||
        article.category === selectedCategory;
      const matchesQuery =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="blog-page min-h-screen">
      {/* ===== 12.1 Blog Hero + Featured Article ===== */}
      <section
        className="blog-hero relative overflow-hidden py-12 sm:py-16 lg:py-20"
        aria-labelledby="blog-hero-heading"
      >
        <div className="blog-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="blog-eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide uppercase">
                <span className="blog-eyebrow-dot" aria-hidden="true" />
                Patient Education
              </span>

              <h1
                id="blog-hero-heading"
                className="blog-hero-title font-semibold tracking-tight"
              >
                Dental Journal
              </h1>

              <p className="blog-intro text-base sm:text-lg leading-relaxed">
                Clinician-reviewed guides on preventive hygiene, modern dental
                technology, and everyday oral care—written in plain language.
              </p>
            </div>

            {/* Search */}
            <div className="w-full lg:w-80">
              <label htmlFor="blog-search" className="sr-only">
                Search dental journal articles
              </label>
              <div className="relative">
                <input
                  id="blog-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="blog-search-input w-full rounded-full px-4 py-2.5 pl-10 text-sm"
                />
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-4 h-4 blog-search-icon"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Featured Article Spotlight */}
          <article className="blog-featured-card rounded-2xl sm:rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 blog-featured-media relative overflow-hidden">
              <img
                src={featuredArticle.thumbnail}
                alt={featuredArticle.title}
                className="blog-featured-img w-full h-full object-cover"
              />
              <span className="blog-featured-badge px-3 py-1 rounded-full text-xs font-semibold">
                Featured Article
              </span>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="blog-cat-pill px-3 py-1 rounded-full font-semibold">
                  {featuredArticle.category}
                </span>
                <span className="blog-subintro">{featuredArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-sm sm:text-base leading-relaxed blog-intro">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t blog-divider">
                <div className="text-xs space-y-0.5">
                  <p className="font-semibold">{featuredArticle.author}</p>
                  <p className="blog-subintro">{featuredArticle.publishedAt}</p>
                </div>

                <a
                  href={`/blog/${featuredArticle.slug}`}
                  className="blog-btn blog-btn-primary inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ===== 12.2 Categories & 12.3 Blog Listing ===== */}
      <section
        className="blog-listing py-12 sm:py-16 lg:py-20"
        aria-labelledby="blog-articles-heading"
      >
        <div className="blog-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
            <div>
              <h2
                id="blog-articles-heading"
                className="blog-section-heading font-semibold tracking-tight"
              >
                Browse by Category
              </h2>
            </div>
            <span className="text-xs sm:text-sm font-medium blog-subintro">
              Showing {filteredArticles.length} of {BLOG_ARTICLES.length} articles
            </span>
          </div>

          {/* 12.2 Category Filter Pills */}
          <div
            className="flex flex-wrap gap-2 mb-9"
            role="tablist"
            aria-label="Filter articles by category"
          >
            {BLOG_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`blog-cat-tab px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* 12.3 Blog Listing Cards */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="blog-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="blog-card-media relative overflow-hidden">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="blog-card-img w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="blog-card-cat px-3 py-1 rounded-full text-[11px] font-semibold">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-5 sm:p-6 space-y-2.5">
                      <div className="flex items-center justify-between gap-2 text-xs blog-subintro">
                        <span>{article.publishedAt}</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-sm leading-relaxed blog-subintro">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t blog-divider flex items-center justify-between gap-3">
                    <span className="text-xs font-medium blog-subintro truncate">
                      {article.author}
                    </span>

                    <a
                      href={`/blog/${article.slug}`}
                      className="blog-btn blog-btn-secondary shrink-0 px-4 py-2 rounded-full text-xs font-semibold"
                    >
                      Read More &rarr;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="blog-empty rounded-2xl sm:rounded-3xl p-8 text-center space-y-4">
              <h3 className="text-lg font-semibold">No matching articles found</h3>
              <p className="text-sm blog-subintro">
                Try clearing your search or selecting All Articles.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Articles");
                }}
                className="blog-btn blog-btn-primary px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}