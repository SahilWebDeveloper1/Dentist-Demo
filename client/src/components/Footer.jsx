import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTooth, 
  FaInstagram, 
  FaYoutube, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaWhatsapp, 
  FaRegClock, 
  FaChevronRight, 
  FaArrowRight 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const quickLinks = ['Home', 'Treatments', 'About', 'Testimonials', 'Contact'];
  const treatments = ['Teeth Cleaning', 'Braces', 'Root Canal', 'Dental Implants', 'Teeth Whitening'];

  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaXTwitter, href: '#', label: 'X' },
  ];

  return (
    <footer className="w-full bg-[#051B2E] text-white pt-12 pb-6 px-6 md:px-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center text-sky-400">
                  <FaTooth className="w-8 h-8 text-sky-400" />
                  <span className="absolute w-10 h-3 border-b-2 border-sky-300 rounded-full transform -rotate-12 translate-y-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white leading-tight">Demo</span>
                  <span className="text-xs text-sky-400 font-medium">Dental Studio</span>
                </div>
              </div>

              <p className="text-xs text-sky-200 font-medium mt-3">
                Healthy Smiles. Brighter Futures.
              </p>
              
              <p className="text-xs text-slate-400 leading-relaxed mt-3">
                Modern dental care with a gentle touch for a healthier, happier you.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-600 transition-all text-xs"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:border-l lg:border-slate-800/80 lg:pl-6">
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-xs text-slate-300 hover:text-sky-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{link}</span>
                    <FaChevronRight className="w-2.5 h-2.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Treatments */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Our Treatments</h3>
            <ul className="space-y-2.5">
              {treatments.map((treatment) => (
                <li key={treatment}>
                  <a
                    href="#"
                    className="text-xs text-slate-300 hover:text-sky-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{treatment}</span>
                    <FaChevronRight className="w-2.5 h-2.5 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>123 Wellness Street, Green Park, New Delhi – 110016</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-sky-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:hello@smilecare.in" className="hover:text-sky-400 transition-colors">
                  hello@smilecare.in
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium flex items-center gap-2 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Opening Hours & Directions */}
          <div className="lg:border-l lg:border-slate-800/80 lg:pl-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                <FaRegClock className="w-4 h-4 text-sky-400" />
                <span>Opening Hours</span>
              </div>
              
              <div className="space-y-2 text-xs">
                <div>
                  <p className="text-slate-400">Mon – Sat</p>
                  <p className="text-slate-200 font-medium">9:00 AM – 8:00 PM</p>
                </div>
                <div className="pt-1">
                  <p className="text-slate-400">Sun</p>
                  <p className="text-slate-200 font-medium">10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 border border-slate-600 hover:border-sky-400 hover:bg-sky-500/10 text-white text-xs font-medium py-2.5 px-4 rounded-full flex items-center justify-center gap-2 transition-all"
            >
              <FaMapMarkerAlt className="w-3 h-3 text-sky-400" />
              <span>Get Directions</span>
              <FaArrowRight className="w-2.5 h-2.5 ml-1" />
            </motion.a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Demo Dental Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-200 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;