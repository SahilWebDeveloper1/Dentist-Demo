import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTooth, FaPhoneAlt, FaChevronDown, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', hasDropdown: false },
    { name: 'Treatments', hasDropdown: true },
    { name: 'About', hasDropdown: false },
    { name: 'Testimonials', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  return (
    <div className="w-full bg-slate-100 p-4 md:p-6 flex justify-center items-center font-sans">
      <header className="w-full max-w-7xl bg-white rounded-full shadow-md px-6 py-3 flex items-center justify-between border border-gray-100">
        
        {/* Brand Logo Section */}
        <motion.div 
          className="flex items-center gap-3 pr-6 border-r border-gray-200 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex items-center justify-center text-sky-500">
            <FaTooth className="w-8 h-8 text-sky-500" />
            {/* Swoosh ring accent around tooth */}
            <span className="absolute w-10 h-3 border-b-2 border-sky-400 rounded-full transform -rotate-12 translate-y-1" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#0B3B60] leading-none">Demo</span>
            <span className="text-xs text-gray-400 font-normal mt-0.5">Dental Studio</span>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 relative">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button
                onClick={() => setActiveTab(item.name)}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 ${
                  activeTab === item.name ? 'text-sky-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.name}
                {item.hasDropdown && <FaChevronDown className="w-2.5 h-2.5 text-slate-500" />}
                
                {/* Active Underline Bar */}
                {activeTab === item.name && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </div>
          ))}
        </nav>

        {/* Right Action Area */}
        <motion.div 
          className="flex items-center gap-6 pl-6 border-l border-gray-200"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Phone Number */}
          <a 
            href="tel:+919876543210" 
            className="hidden md:flex items-center gap-2 text.slate-700 hover:text-sky-600 transition-colors text-sm font-semibold text-slate-800"
          >
            <FaPhoneAlt className="w-4 h-4 text-sky-500" />
            <span>+91 98765 43210</span>
          </a>

          {/* Book Appointment Pill Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-md flex items-center gap-2 transition-all"
          >
            <FaCalendarAlt className="w-3.5 h-3.5" />
            <span>Book Appointment</span>
            <FaArrowRight className="w-3 h-3 ml-0.5" />
          </motion.button>
        </motion.div>

      </header>
    </div>
  );
};

export default Header;