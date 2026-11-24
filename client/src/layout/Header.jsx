import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const DEFAULT_TREATMENTS = [
  { label: 'All Dental Treatments', to: '/treatments', badge: 'Overview' },
  { label: 'Teeth Whitening', to: '/treatments/teeth-whitening' },
  { label: 'Dental Implants', to: '/treatments/dental-implants' },
  { label: 'Clear Aligners & Braces', to: '/treatments/orthodontics' },
  { label: 'Porcelain Veneers', to: '/treatments/veneers' },
  { label: 'Preventive & Hygiene', to: '/treatments/preventive-care' },
];

const NAV_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Dentists', to: '/dentists' },
  { label: 'Smile Gallery', to: '/smile-gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
];

function Header({
  clinicName = 'Demo',
  clinicTagline = 'Dental Care',
  phoneDisplay = '+91 98765 43210',
  phoneHref = 'tel:+0000000000',
  whatsappHref = 'https://wa.me/9876543210',
  showAnnouncement = true,
  announcementText = 'Now welcoming new patients — same-week appointments & Saturday hours available.',
  announcementLinkText = 'Book now',
  announcementLinkTo = '/book-appointment',
  treatments = DEFAULT_TREATMENTS,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(showAnnouncement);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);

  const dropdownRef = useRef(null);
  const closeTimerRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTreatmentsOpen(false);
  }, [location.pathname]);

  // Sticky scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setTreatmentsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setTreatmentsOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setTreatmentsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setTreatmentsOpen(false);
    }, 150);
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      {/* Optional Announcement Bar */}
      {showAnnouncement && announcementVisible && (
        <div className="announcement-bar" role="region" aria-label="Clinic updates">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 py-2 text-xs sm:text-sm">
            <div className="flex items-center gap-2 min-w-0 flex-1 justify-center text-center">
              <span className="announcement-dot shrink-0" aria-hidden="true" />
              <p className="truncate font-medium">
                {announcementText}{' '}
                {announcementLinkTo && (
                  <Link to={announcementLinkTo} className="announcement-link underline underline-offset-2 ml-1 font-semibold">
                    {announcementLinkText} &rarr;
                  </Link>
                )}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setAnnouncementVisible(false)}
              className="announcement-close shrink-0 p-1 rounded-full transition-colors"
              aria-label="Dismiss announcement"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <div className="header-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="header-inner flex items-center justify-between gap-3">
            {/* Clinic Logo & Brand Name */}
            <Link to="/" className="brand-link flex items-center gap-2.5 shrink-0 min-w-0 group" aria-label={`${clinicName} home`}>
              <span className="brand-mark flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 3.5C4.8 3.5 3.5 5.3 3.5 7.7c0 2.6 1 5.1 1.8 8 .5 1.8 1.1 4.8 2.4 4.8 1 0 1.4-1.8 2.2-3.5.5-1.1 1.1-1.7 2.1-1.7s1.6.6 2.1 1.7c.8 1.7 1.2 3.5 2.2 3.5 1.3 0 1.9-3 2.4-4.8.8-2.9 1.8-5.4 1.8-8 0-2.4-1.3-4.2-3.5-4.2-1.5 0-2.7.9-4 1.5-1.3-.6-2.5-1.5-4-1.5Z" />
                </svg>
              </span>
              <span className="flex flex-col leading-tight min-w-0">
                <span className="brand-name text-base sm:text-lg font-bold tracking-tight truncate">
                  {clinicName}
                </span>
                <span className="brand-tagline text-[11px] font-medium tracking-wider uppercase truncate">
                  {clinicTagline}
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
              {/* Treatments Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setTreatmentsOpen((prev) => !prev)}
                  className={`nav-link nav-dropdown-trigger flex items-center gap-1 px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                    location.pathname.startsWith('/treatments') ? 'nav-link--active' : ''
                  }`}
                  aria-expanded={treatmentsOpen}
                  aria-haspopup="true"
                >
                  <span>Treatments</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${treatmentsOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  className={`dropdown-panel ${treatmentsOpen ? 'dropdown-panel--open' : ''}`}
                  role="menu"
                  aria-label="Dental treatments"
                >
                  <div className="py-1.5">
                    {treatments.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/treatments'}
                        role="menuitem"
                        className={({ isActive }) =>
                          `dropdown-item flex items-center justify-between gap-3 px-4 py-2.5 text-sm ${
                            isActive ? 'dropdown-item--active' : ''
                          }`
                        }
                      >
                        <span className="font-medium">{item.label}</span>
                        {item.badge && (
                          <span className="dropdown-badge text-[11px] font-semibold px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link px-2.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                      isActive ? 'nav-link--active' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions: Phone, WhatsApp, Book Appointment CTA, Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Click-to-call Phone */}
              <a
                href={phoneHref}
                className="action-phone hidden sm:inline-flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors"
                aria-label={`Call us at ${phoneDisplay}`}
                title={`Call ${phoneDisplay}`}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="hidden xl:inline">{phoneDisplay}</span>
              </a>

              {/* WhatsApp Shortcut */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="action-whatsapp inline-flex items-center justify-center w-9 h-9 rounded-full transition-transform"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.76 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.19-1.18-1.57-1.18-2.99 0-1.43.75-2.13 1.01-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.13.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
                </svg>
              </a>

              {/* Book Appointment CTA */}
              <Link
                to="/book-appointment"
                className="cta-button hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap"
              >
                <span>Book Appointment</span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="mobile-toggle lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-drawer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                <span className={`hamburger-icon ${mobileMenuOpen ? 'hamburger-icon--open' : ''}`} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-drawer lg:hidden ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-inner max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
          {/* Mobile Treatments Accordion */}
          <div className="mobile-accordion">
            <button
              type="button"
              onClick={() => setMobileTreatmentsOpen((prev) => !prev)}
              className="mobile-nav-item w-full flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium"
              aria-expanded={mobileTreatmentsOpen}
            >
              <span>Treatments</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileTreatmentsOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div className={`mobile-sublist ${mobileTreatmentsOpen ? 'mobile-sublist--open' : ''}`}>
              <div className="pl-3 pr-1 pb-2 flex flex-col gap-1">
                {treatments.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/treatments'}
                    className={({ isActive }) =>
                      `mobile-subitem px-3 py-2 rounded-lg text-sm font-medium ${
                        isActive ? 'mobile-subitem--active' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `mobile-nav-item px-3 py-3 rounded-xl text-base font-medium ${
                  isActive ? 'mobile-nav-item--active' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile Quick Actions */}
          <div className="mobile-actions mt-3 pt-4 flex flex-col gap-2.5">
            <a
              href={phoneHref}
              className="mobile-phone-btn flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call {phoneDisplay}</span>
            </a>

            <Link
              to="/book-appointment"
              className="cta-button flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
            >
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;