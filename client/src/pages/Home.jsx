import React, { useState } from 'react'
import Layout from '../layout/Layout'
import HeroImage from '../assets/HeroImage.png'
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaStethoscope, FaStar, FaUserCheck, FaSmile, FaUserMd, FaTooth, FaAward, FaUsers, FaArrowRight, FaLaptopMedical, FaShieldAlt, FaRegSmile, FaCalendarCheck,FaPhoneAlt ,FaClock, FaChevronDown, FaQuestionCircle, FaMapMarkerAlt ,FaWhatsapp ,FaDirections   } from 'react-icons/fa';
import ToothCleaning from "../assets/Tooth Cleaning.png"
import BracesAligners from "../assets/Braces & Aligners.png"
import DentalImplants from "../assets/Dental Implants.png"
import RootCanal from "../assets/Root Canal.png"
import TeethWhitening from "../assets/Teeth Whitening.png"
import Dentist from "../assets/Dentist.png"
import ClinicInterior from "../assets/Clinic Interior.png"
import Reception from "../assets/Reception.png"
import TreatmentRooms from "../assets/Treatment Rooms.png"
import Equipment from "../assets/Equipment.png"


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

const treatments = [
  {
    title: 'Teeth Cleaning',
    description: 'Professional scaling and polishing to remove plaque, tartar, and brighten your natural smile.',
    duration: '30 - 45 mins',
    image: ToothCleaning,
  },
  {
    title: 'Braces & Aligners',
    description: 'Straighten your teeth and correct bite issues with modern orthodontic solutions.',
    duration: 'Customized plan',
    image: BracesAligners,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth to restore full functionality.',
    duration: 'Multi-visit',
    image: DentalImplants,
  },
  {
    title: 'Root Canal',
    description: 'Painless modern endodontic therapy designed to save infected teeth and relieve pain.',
    duration: '1 - 2 visits',
    image: RootCanal,
  },
  {
    title: 'Teeth Whitening',
    description: 'Advanced laser and home whitening treatments to safely lift stubborn stains by shades.',
    duration: '45 - 60 mins',
    image: TeethWhitening,
  },
];

const dentist = {
  name: "Dr. Vikram Sethi",
  qualifications: "BDS, MDS (Endodontics & Conservative Dentistry)",
  experience: "15+ Years",
  specialization: "Root Canal Specialist, Conservative Dentistry",
  introduction: "Dr. Vikram is dedicated to providing gentle, expert dental care. With over 15 years in endodontics, he specializes in saving teeth through precise Root Canal therapy. His compassionate approach ensures even the most anxious patients feel comfortable and at ease during their treatment at our Delhi clinic.",
  image: Dentist
};

const reasons = [
  {
    icon: FaLaptopMedical,
    title: 'Modern Equipment',
    description: 'Equipped with state-of-the-art dental technology, digital 3D imaging, and laser tools for precise, painless procedures.',
  },
  {
    icon: FaShieldAlt,
    title: 'Hygiene & Sterilization',
    description: 'Strict hospital-grade sterilization protocols and single-use disposables to guarantee a 100% infection-free environment.',
  },
  {
    icon: FaUserCheck,
    title: 'Personalized Treatment',
    description: 'Custom care plans tailored specifically to your unique dental history, lifestyle, and aesthetic goals.',
  },
  {
    icon: FaRegSmile,
    title: 'Comfortable Environment',
    description: 'Designed from the ground up to reduce anxiety with soothing ambiance, gentle care, and patient entertainment options.',
  },
  {
    icon: FaCalendarCheck,
    title: 'Convenient Scheduling',
    description: 'Flexible morning, evening, and weekend time slots with zero waiting time and instant WhatsApp booking support.',
  },
];

const galleryItems = [
  {
    title: 'Clinic Interior',
    image: ClinicInterior,
  },
  {
    title: 'Reception',
    image: Reception,
  },
  {
    title: 'Treatment Rooms',
    image: TreatmentRooms,
  },
  {
    title: 'Equipment',
    image: Equipment,
  },
];

const contactInfo = {
    address: "123 Healthcare Boulevard, South Extension II, New Delhi, Delhi 110049",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    mapsUrl: "https://maps.google.com/?q=123+Healthcare+Boulevard+New+Delhi",
    hours: [
      { days: "Monday - Saturday", time: "9:00 AM - 8:00 PM" },
      { days: "Sunday", time: "10:00 AM - 4:00 PM (Emergency Only)" },
    ],
  };

const faqs = [
    {
      question: "How often should I visit the dentist for a routine checkup?",
      answer: "We recommend visiting Demo Dental Studio every 6 months for a professional cleaning and routine examination. Regular visits help us catch minor issues like plaque buildup or early cavities before they turn into major dental concerns."
    },
    {
      question: "Are your dental procedures and root canals painful?",
      answer: "Not at all! Modern dentistry has evolved significantly. We use advanced local anesthesia and state-of-the-art painless techniques to ensure your root canal or surgical procedure is completely comfortable and stress-free."
    },
    {
      question: "What sterilization and hygiene protocols do you follow?",
      answer: "Your safety is our top priority. We follow strict hospital-grade sterilization protocols, autoclave instrument packaging, and use single-use disposables wherever possible to maintain a 100% infection-free clinic environment."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, we handle dental emergencies such as severe toothaches, broken teeth, knocked-out teeth, or lost fillings. Please call our clinic directly for immediate priority assistance."
    },
    {
      question: "What payment and insurance options are available?",
      answer: "We accept all major credit/debit cards, digital UPI payments, and cash. We also work with select corporate insurance partners. Feel free to contact our front desk to check your specific coverage."
    }
  ];

const Home = () => {
const [activeIndex, setActiveIndex] = useState(0);

const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

      {/* Our Treatments */}
      <section className="w-full bg-slate-50 py-16 px-6 md:px-12 font-sans">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 text-sky-600 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4"
              >
                <FaTooth className="text-sky-500" />
                <span>World-Class Dental Care</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl font-extrabold text-[#051B2E] tracking-tight"
              >
                Explore Our Popular Treatments
              </motion.h2>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 bg-white border border-slate-200 hover:border-sky-500 text-[#051B2E] hover:text-sky-600 text-sm font-semibold px-6 py-3 rounded-full shadow-sm transition-all"
            >
              <span>View All Treatments</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Treatments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Treatment Image Placeholder */}
                  <div className="w-full h-48 bg-slate-200 relative overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                      {treatment.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#051B2E] mb-2 group-hover:text-sky-600 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer / Action */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100/80">
                  <span className="text-xs font-semibold text-sky-600 group-hover:underline cursor-pointer flex items-center gap-1.5">
                    Learn More <FaArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Mobile View All Button Box (or fallback card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center text-white shadow-md md:hidden"
            >
              <FaTooth className="w-10 h-10 mb-4 text-sky-200" />
              <h3 className="text-lg font-bold mb-2">Looking for something else?</h3>
              <p className="text-xs text-sky-100 mb-6">Browse through our complete list of specialized dental procedures.</p>
              <button className="bg-white text-sky-600 hover:bg-sky-50 text-xs font-semibold px-6 py-3 rounded-full shadow transition-all flex items-center gap-2">
                <span>View All Treatments</span>
                <FaArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          </div>

          {/* Mobile View All Button Bottom */}
          <div className="mt-10 flex justify-center md:hidden">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 text-[#051B2E] text-sm font-semibold px-6 py-3 rounded-full shadow-sm">
              <span>View All Treatments</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Meet Our Dentist */}
      <section className="w-full bg-slate-50 py-16 px-6 md:px-12 font-sans relative overflow-hidden">
        {/* Decorative background element (blurred dental light swoosh) */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-sky-100/30 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Dentist Photograph */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Main Photo Container */}
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative z-10 object-left">
              <img
                src={dentist.image}
                alt={`${dentist.name} - ${dentist.specialization}`}
                className="w-full h-full object-cover object-center"
              />
            </div>

          </motion.div>

          {/* Right Column: Details & Content */}
          <div className="lg:col-span-7 flex flex-col items-start">

            {/* Section Heading Badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 bg-sky-500/10 border border-sky-400/20 text-sky-600 text-xs font-semibold px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaTooth className="text-sky-500" />
              <span>Meet Our Expert Dentist</span>
            </motion.div>

            {/* Name & Qualifications */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#051B2E] tracking-tight leading-tight">
                {dentist.name}
              </h2>
              <p className="text-sm font-medium text-slate-600 mt-2">
                {dentist.qualifications}
              </p>
            </motion.div>

            {/* Experience & Specialization (Stats) */}
            <motion.div
              className="grid grid-cols-2 gap-6 w-full max-w-lg mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Experience Box */}
              <div className="flex flex-col gap-1.5 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                <span className="text-sm font-semibold text-sky-600">Experience</span>
                <div className="flex items-center gap-2">
                  <FaUserMd className="text-sky-400 w-5 h-5" />
                  <span className="text-2xl font-bold text-slate-900">{dentist.experience}</span>
                </div>
              </div>

              {/* Specialization Box */}
              <div className="flex flex-col gap-1.5 p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
                <span className="text-sm font-semibold text-sky-600">Specialization</span>
                <div className="flex items-center gap-2">
                  <FaSmile className="text-sky-400 w-5 h-5" />
                  <span className="text-sm font-bold text-slate-900 leading-snug">{dentist.specialization}</span>
                </div>
              </div>
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              className="text-base sm:text-lg text-slate-700 leading-relaxed mb-10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {dentist.introduction}
            </motion.p>

            {/* Meet Our Dentist CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(14, 165, 233, 0.2)' }}
                whileTap={{ scale: 0.97 }}
                className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-10 py-4 rounded-full shadow-lg shadow-sky-100 transition-all flex items-center gap-3"
              >
                <span>Meet Dr. Vikram</span>
                <span className="text-xs font-medium text-sky-100">Book Session</span>
              </motion.button>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full bg-white py-16 px-6 md:px-12 font-sans relative overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 text-sky-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
            >
              <FaTooth className="text-sky-500" />
              <span>The Demo Dental Difference</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#051B2E] tracking-tight mb-4"
            >
              Why Choose Demo Dental Studio?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed"
            >
              We combine expert dental professionals with advanced technology and a patient-first philosophy to deliver exceptional results every single time.
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-sky-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon Header */}
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 group-hover:bg-sky-500 group-hover:text-white text-sky-600 flex items-center justify-center mb-6 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-[#051B2E] mb-3 group-hover:text-sky-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle Accent Line / Footer */}
                  <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-sky-500 transition-colors">
                      Demo Standard Care
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white group-hover:bg-sky-500 text-slate-400 group-hover:text-white flex items-center justify-center shadow-sm transition-all">
                      <FaArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Callout Card (Fills the 6th grid slot nicely) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-[#051B2E] to-blue-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-sky-400 flex items-center justify-center mb-6">
                  <FaTooth className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ready for a healthier, brighter smile?</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Book your initial consultation today and experience world-class dental care firsthand.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold py-3.5 px-6 rounded-full shadow-md flex items-center justify-center gap-2 transition-all w-full"
              >
                <span>Book Appointment Now</span>
                <FaArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="w-full bg-slate-100 py-16 px-6 md:px-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 text-sky-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
          >
            <FaTooth className="text-sky-500" />
            <span>Our State-of-the-Art Facility</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#051B2E] tracking-tight mb-4"
          >
            Clinic Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Explore the modern facilities and welcoming environment of Demo Dental Studio.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md bg-white border border-slate-200"
            >
              {/* Image Placeholder */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors" />

              {/* Title Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-center">
                <h3 className="text-lg font-bold text-white tracking-wide uppercase drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl p-6 sm:px-10 shadow-sm border border-slate-200/80 gap-4"
        >
          <p className="text-sm font-medium text-slate-700 text-center sm:text-left">
            Experience our world-class clinic environment in person.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md shadow-sky-100 flex items-center gap-2 transition-all shrink-0"
          >
            <span>Book An Appointment</span>
            <FaArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </motion.div>

      </div>
    </section>

    {/* Appointment CTA */}
    <section className="w-full bg-slate-900 py-16 px-6 md:px-12 font-sans relative overflow-hidden">
      {/* Background Subtle Glowing Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 bg-gradient-to-br from-[#0B253E] to-[#051B2E] border border-slate-700/60 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl text-center flex flex-col items-center">
        
        {/* Top Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6"
        >
          <FaTooth className="text-sky-400" />
          <span>Easy & Fast Booking</span>
        </motion.div>

        {/* Clear Appointment Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mb-4"
        >
          Ready for Your Healthiest, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">Brighter Smile?</span>
        </motion.h2>

        {/* Short Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mb-10"
        >
          Schedule your consultation today with our experienced dental team. We offer flexible slots, zero waiting time, and personalized care tailored to your comfort.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10"
        >
          {/* Book Appointment Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-sky-500/25 flex items-center justify-center gap-3 transition-all"
          >
            <FaCalendarAlt className="w-4 h-4" />
            <span>Book Appointment</span>
          </motion.button>

          {/* Call Clinic Button */}
          <motion.a
            href="tel:+919876543210"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-600/80 hover:border-sky-400 text-sm font-semibold px-8 py-4 rounded-full shadow-sm flex items-center justify-center gap-3 transition-all"
          >
            <FaPhoneAlt className="w-4 h-4 text-sky-400" />
            <span>Call Clinic (+91 98765 43210)</span>
          </motion.a>
        </motion.div>

        {/* Quick Micro-Trust Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 border-t border-slate-700/60 pt-6 w-full max-w-lg"
        >
          <div className="flex items-center gap-2">
            <FaClock className="text-sky-400" />
            <span>Instant Confirmation</span>
          </div>
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-emerald-400" />
            <span>Safe & Sterilized</span>
          </div>
        </motion.div>

      </div>
    </section>

    {/* FAQs */}
<section className="w-full bg-slate-50 py-16 px-6 md:px-12 font-sans relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 text-sky-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
          >
            <FaTooth className="text-sky-500" />
            <span>Got Questions?</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-[#051B2E] tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Find clear, honest answers to common questions about our treatments, safety standards, and clinic policies.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`bg-white rounded-2xl border transition-all overflow-hidden shadow-sm ${
                  isOpen ? 'border-sky-400 shadow-md ring-1 ring-sky-400/20' : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-sky-500 text-white' : 'bg-sky-500/10 text-sky-600'
                    }`}>
                      <FaQuestionCircle className="w-4 h-4" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-[#051B2E]">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 bg-sky-500 text-white' : ''
                  }`}>
                    <FaChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* Answer Expandable Area */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        <p className="pl-11">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Support Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center bg-sky-50/60 border border-sky-100 rounded-2xl p-6"
        >
          <p className="text-sm font-medium text-slate-700">
            Have a specific question that isn't listed here?{' '}
            <a href="tel:+919876543210" className="text-sky-600 font-bold hover:underline">
              Give us a call
            </a>{' '}
            or drop by our clinic!
          </p>
        </motion.div>

      </div>
    </section>

    {/* Location & Contact */}
    <section className="w-full bg-white py-16 px-6 md:px-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 text-sky-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
          >
            <FaTooth className="text-sky-500" />
            <span>Visit Our Studio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#051B2E] tracking-tight mb-4"
          >
            Location & Contact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            We are conveniently located in central New Delhi. Drop by for a consultation or reach out to us directly through phone or WhatsApp.
          </motion.p>
        </div>

        {/* Grid Container: Contact Info (Left) & Google Maps (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Clinic Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-6">
              
              {/* Address Box */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0 border border-sky-400/20">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#051B2E] leading-snug">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Opening Hours Box */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0 border border-sky-400/20">
                  <FaClock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
                    Opening Hours
                  </h3>
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {contactInfo.hours.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-slate-200/60 pb-1 last:border-0">
                        <span className="font-medium text-slate-600">{item.days}:</span>
                        <span className="font-bold text-[#051B2E]">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone & WhatsApp Section */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Phone Call Button */}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2.5 bg-white border border-slate-200 hover:border-sky-500 text-[#051B2E] hover:text-sky-600 text-xs sm:text-sm font-bold py-3.5 px-4 rounded-2xl shadow-sm transition-all group"
                >
                  <FaPhoneAlt className="text-sky-500 group-hover:scale-110 transition-transform" />
                  <span>Call Us</span>
                </a>

                {/* WhatsApp Chat Button */}
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-2xl shadow-sm shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Get Directions Button */}
            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#051B2E] hover:bg-sky-600 text-white text-sm font-semibold py-4 px-6 rounded-2xl shadow-md flex items-center justify-center gap-2.5 transition-all"
                >
                  <FaDirections className="w-4 h-4 text-sky-400" />
                  <span>Get Directions</span>
                </motion.button>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[400px] lg:h-auto min-h-[380px] rounded-3xl overflow-hidden shadow-sm border border-slate-200 relative bg-slate-100"
          >
            {/* Interactive Google Map Embed */}
            <iframe
              title="Demo Dental Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.88756306509!2d77.2140445!3d28.5631688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce24316a3c61d%3A0x2880e66b44a29a07!2sSouth%20Extension%20II%2C%20New%20Delhi%2C%20Delhi%20110049!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale flex contrast-[1.05] opacity-90 hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

        </div>

      </div>
    </section>
    </Layout>
  )
}

export default Home