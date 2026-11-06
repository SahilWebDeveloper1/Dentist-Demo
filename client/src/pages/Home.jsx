import React from 'react'
import Layout from '../layout/Layout'
import HeroImage from '../assets/HeroImage.png'
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaStethoscope, FaStar, FaUserCheck, FaSmile, FaUserMd, FaTooth , FaAward , FaUsers   } from 'react-icons/fa';

const stats = [
  {
    icon: FaUserMd,
    value: '15+ Years',
    label: 'Expert Dentist Experience',
    description: 'Specialized care led by senior specialists',
  },
  {
    icon: FaTooth,
    value: '25+ Offered',
    label: 'Advanced Treatments',
    description: 'From routine cleaning to full implants',
  },
  {
    icon: FaAward,
    value: 'ISO 9001:2015',
    label: 'Certified Dental Clinic',
    description: 'Strict sterilization & safety protocols',
  },
  {
    icon: FaUsers,
    value: '10,000+',
    label: 'Happy Patients Treated',
    description: 'Verified 4.9★ rating across reviews',
  },
];

const Home = () => {


  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden font-sans">
        {/* Background Image Container with Gradient Overlay for Contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImage} // Replace with your generated background image path
            alt="Modern Dental Clinic Interior"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark to light gradient overlay to ensure UI elements are easily readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051B2E]/90 via-[#051B2E]/70 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Text, CTAs & Trust Indicators */}
          <div className="lg:col-span-7 flex flex-col items-start text-left text-white">

            {/* Badge Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-md"
            >
              <FaSmile className="text-sky-400" />
              <span>Welcome to Demo Dental Studio</span>
            </motion.div>

            {/* Strong Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6"
            >
              Modern Dental Care with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">Gentle Touch.</span>
            </motion.h1>

            {/* Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8"
            >
              Experience world-class dental treatments tailored for your comfort. From routine checkups to advanced cosmetic transformations, we create smiles that last a lifetime.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Book Appointment Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2.5 transition-all"
              >
                <FaCalendarAlt className="w-4 h-4" />
                <span>Book Appointment</span>
              </motion.button>

              {/* Explore Treatments Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md text-sm font-semibold px-7 py-3.5 rounded-full shadow-sm flex items-center justify-center gap-2.5 transition-all"
              >
                <FaStethoscope className="w-4 h-4 text-sky-400" />
                <span>Explore Treatments</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators Divider */}
            <div className="w-full h-[1px] bg-slate-700/60 my-8" />

            {/* Small Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-md"
            >
              {/* Indicator 1 */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                  <FaStar />
                  <span className="font-bold text-white text-sm">4.9/5</span>
                </div>
                <span className="text-xs text-slate-400">1,200+ Reviews</span>
              </div>

              {/* Indicator 2 */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-sky-400 text-xs mb-1">
                  <FaUserCheck />
                  <span className="font-bold text-white text-sm">15+ Yrs</span>
                </div>
                <span className="text-xs text-slate-400">Expert Care</span>
              </div>

              {/* Indicator 3 */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-emerald-400 text-xs mb-1">
                  <FaSmile />
                  <span className="font-bold text-white text-sm">10k+</span>
                </div>
                <span className="text-xs text-slate-400">Happy Smiles</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Statistics bar */}
      <section className="w-full bg-[#051B2E] text-white border-y border-slate-800/80 py-10 px-6 md:px-12 font-sans relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start gap-4 ${index !== 0 ? 'sm:pl-6 pt-6 sm:pt-0' : ''
                    }`}
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center shrink-0 text-sky-400">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <span className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-sm font-semibold text-sky-300 mb-0.5">
                      {stat.label}
                    </span>
                    <span className="text-xs text-slate-400 leading-relaxed">
                      {stat.description}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home