import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Smile Gallery', to: '/smile-gallery' },
  { label: 'Patient Reviews', to: '/reviews' },
  { label: 'Dental Journal', to: '/blog' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Book Appointment', to: '/book-appointment' },
  { label: 'Contact Us', to: '/contact' },
];

const TREATMENT_LINKS = [
  { label: 'All Treatments', to: '/treatments' },
  { label: 'Dental Implants', to: '/treatments/dental-implants' },
  { label: 'Teeth Whitening', to: '/treatments/teeth-whitening' },
  { label: 'Clear Aligners', to: '/treatments/clear-aligners' },
  { label: 'Root Canal Treatment', to: '/treatments/root-canal-treatment' },
  { label: 'Dental Veneers', to: '/treatments/dental-veneers' },
  { label: 'Pediatric Dentistry', to: '/treatments/pediatric-dentistry' },
];

const DEFAULT_DENTIST_LINKS = [
  { label: 'Meet All Dentists', to: '/dentists' },
  { label: '[Dr. Full Name — Lead Dentist]', to: '/dentists/dentist-1' },
  { label: '[Dr. Full Name — Orthodontist]', to: '/dentists/dentist-2' },
  { label: '[Dr. Full Name — Endodontist]', to: '/dentists/dentist-3' },
];

function Footer({
  clinicName = '[Clinic Name]',
  clinicTagline = 'Dental Care',
  description = 'Thoughtful, evidence-based dentistry delivered in a calm, unhurried setting—focused on prevention, transparency, and long-term patient comfort.',
  address = '[Building / Suite Number, Street Name, City, Postal Code]',
  phoneDisplay = '[+XX XXX-XXX-XXXX]',
  phoneHref = 'tel:+0000000000',
  email = '[clinic@example.com]',
  whatsappHref = 'https://wa.me/0000000000',
  hours = [
    { day: 'Mon – Fri', time: '[9:00 AM – 7:00 PM]' },
    { day: 'Saturday', time: '[9:00 AM – 5:00 PM]' },
    { day: 'Sunday', time: '[Closed / By Appointment]' },
  ],
  dentistLinks = DEFAULT_DENTIST_LINKS,
  socialLinks = {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Clinic Logo, Description & Social Media */}
          <div className="lg:col-span-4 min-w-0 flex flex-col items-start">
            <Link to="/" className="footer-brand inline-flex items-center gap-2.5 mb-4 group" aria-label={`${clinicName} home`}>
              <span className="footer-brand-mark flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 3.5C4.8 3.5 3.5 5.3 3.5 7.7c0 2.6 1 5.1 1.8 8 .5 1.8 1.1 4.8 2.4 4.8 1 0 1.4-1.8 2.2-3.5.5-1.1 1.1-1.7 2.1-1.7s1.6.6 2.1 1.7c.8 1.7 1.2 3.5 2.2 3.5 1.3 0 1.9-3 2.4-4.8.8-2.9 1.8-5.4 1.8-8 0-2.4-1.3-4.2-3.5-4.2-1.5 0-2.7.9-4 1.5-1.3-.6-2.5-1.5-4-1.5Z" />
                </svg>
              </span>
              <span className="flex flex-col leading-tight min-w-0">
                <span className="footer-brand-name text-lg font-bold tracking-tight">
                  {clinicName}
                </span>
                <span className="footer-brand-tagline text-[11px] font-medium tracking-wider uppercase">
                  {clinicTagline}
                </span>
              </span>
            </Link>

            <p className="footer-description text-sm leading-relaxed max-w-sm mb-6">
              {description}
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn flex items-center justify-center w-9 h-9 rounded-xl"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              )}

              {socialLinks.facebook && (
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn flex items-center justify-center w-9 h-9 rounded-xl"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              )}

              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn flex items-center justify-center w-9 h-9 rounded-xl"
                  aria-label="Subscribe on YouTube"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              )}

              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn flex items-center justify-center w-9 h-9 rounded-xl"
                  aria-label="Connect on LinkedIn"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 min-w-0">
            <h2 className="footer-heading text-xs font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatment Links & Dentist Links */}
          <div className="lg:col-span-3 min-w-0 flex flex-col gap-7">
            <div>
              <h2 className="footer-heading text-xs font-bold uppercase tracking-wider mb-4">
                Treatments
              </h2>
              <ul className="space-y-2.5">
                {TREATMENT_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer-link text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="footer-heading text-xs font-bold uppercase tracking-wider mb-3">
                Our Dentists
              </h2>
              <ul className="space-y-2">
                {dentistLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer-link text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Details & Opening Hours */}
          <div className="lg:col-span-3 min-w-0">
            <h2 className="footer-heading text-xs font-bold uppercase tracking-wider mb-4">
              Visit &amp; Contact
            </h2>

            <div className="footer-contact-card rounded-2xl p-4 sm:p-5 space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="footer-contact-icon w-4 h-4 shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="footer-contact-text text-xs sm:text-sm leading-relaxed">
                  {address}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="footer-contact-icon w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href={phoneHref} className="footer-link text-xs sm:text-sm font-semibold">
                  {phoneDisplay}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 min-w-0">
                <svg className="footer-contact-icon w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href={`mailto:${email}`} className="footer-link text-xs sm:text-sm truncate">
                  {email}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="pt-1">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-whatsapp-btn inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold w-full"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.76 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.19-1.18-1.57-1.18-2.99 0-1.43.75-2.13 1.01-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.13.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
                  </svg>
                  <span>WhatsApp Clinic</span>
                </a>
              </div>

              {/* Opening Hours */}
              <div className="footer-hours pt-3">
                <p className="footer-hours-title text-[11px] font-bold uppercase tracking-wider mb-2">
                  Opening Hours
                </p>
                <dl className="space-y-1 text-xs">
                  {hours.map((row) => (
                    <div key={row.day} className="flex justify-between gap-3">
                      <dt className="font-medium">{row.day}</dt>
                      <dd className="footer-hours-time">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="footer-copyright text-center sm:text-left">
            &copy; {currentYear} {clinicName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/privacy-policy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="footer-legal-link">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;