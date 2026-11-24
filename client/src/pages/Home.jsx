import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import clinicImage from "../assets/clinic-hero.png"
import clinicInterior from "../assets/clinic-interior.png"
import dentist1 from "../assets/dentists/dentist1.png"
import dentist2 from "../assets/dentists/dentist2.png"
import dentist3 from "../assets/dentists/dentist3.png"
import consultationRoom from '../assets/facility/consultation-room.png'
import dentalEquipment from '../assets/facility/dental-equipment.png'
import sterilizationArea from '../assets/facility/sterilization-area.png'
import reception from '../assets/facility/reception.png'
import waitingArea from '../assets/facility/waiting-area.png'
import treatmentRoom from '../assets/facility/treatment-room.png'
import case1Before from '../assets/gallery/case-1-before.png'
import case2Before from '../assets/gallery/case-2-before.png'
import case3Before from '../assets/gallery/case-3-before.png'
import case1After from '../assets/gallery/case-1-after.png'
import case2After from '../assets/gallery/case-2-after.png'
import case3After from '../assets/gallery/case-3-after.png'
import preventiveHygiene from '../assets/blog/preventive-hygiene.png'
import clearAlignersGuide from '../assets/blog/clear-aligners-guide.png'
import firstVisitGuide from '../assets/blog/first-visit-guide.png'
import './styles/home.css'

const Home = () => {
  const TRUST_INDICATORS = [
    {
      id: 'qualifications',
      label: 'Qualifications',
      value: '[Verified MDS / BDS Specialists]',
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      id: 'experience',
      label: 'Experience',
      value: '[XX+ Years Clinical Experience]',
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      id: 'certification',
      label: 'Certification',
      value: '[Clinic Accreditation / ISO]',
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'satisfaction',
      label: 'Patient Satisfaction',
      value: '[X.X/5 Patient Rating · XXX+ Reviews]',
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  const showEmergency = true;
  const showLocation = true;

  const CREDIBILITY_STRIP_ITEMS = [
    {
      id: 'dentist-qualifications',
      title: 'Dentist Qualifications',
      example: '[Example: Licensed BDS & MDS clinicians with verified registrations.]',
      enabled: true,
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 15l-3.5 2 .7-3.9L6.4 10.3l3.9-.6L12 6l1.7 3.7 3.9.6-2.8 2.8.7 3.9z" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
    },
    {
      id: 'specialist-availability',
      title: 'Specialist Availability',
      example: '[Example: Endodontist, orthodontist & implant specialist consultations.]',
      enabled: true,
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 'modern-equipment',
      title: 'Modern Equipment',
      example: '[Example: Digital intraoral scanning & low-dose X-ray diagnostics.]',
      enabled: true,
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      id: 'sterilization-protocols',
      title: 'Sterilization Protocols',
      example: '[Example: Multi-stage autoclave cycles & sealed instrument pouches.]',
      enabled: true,
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'personalized-treatment',
      title: 'Personalized Treatment',
      example: '[Example: Individualized care plans with clear, upfront options.]',
      enabled: true,
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      id: 'patient-first-approach',
      title: 'Patient-First Approach',
      example: '[Example: Calm, unhurried visits tailored around your comfort.]',
      enabled: true,
      icon: (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
  ];

  const activeCredibilityItems = CREDIBILITY_STRIP_ITEMS.filter((item) => item.enabled);

  const FEATURED_TREATMENTS = [
    {
      name: 'Dental Implants',
      to: '/treatments/dental-implants',
      description: 'Permanent, natural-looking replacements for missing teeth that restore full bite strength.',
      illustration: (
        <svg className="treatment-illustration w-11 h-11" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 10c-3.5 0-6 2.8-6 6.5 0 3.5 1.8 6.5 3.5 8.5h21c1.7-2 3.5-5 3.5-8.5C38 12.8 35.5 10 32 10c-2.5 0-4.5 1.3-8 1.3S18.5 10 16 10Z" fill="#FCFAF6" />
          <path d="M19 25v12a5 5 0 0 0 10 0V25" />
          <line x1="19" y1="29" x2="29" y2="29" stroke="#B99B72" />
          <line x1="19" y1="33" x2="29" y2="33" stroke="#B99B72" />
        </svg>
      ),
    },
    {
      name: 'Teeth Whitening',
      to: '/treatments/teeth-whitening',
      description: 'Safe, enamel-friendly brightening treatments for visibly fresher, even-toned smiles.',
      illustration: (
        <svg className="treatment-illustration w-11 h-11" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 12c-3.5 0-6 2.8-6 6.5 0 4.5 1.8 9 3 13 .8 2.8 1.8 5.5 3.4 5.5 1.5 0 2.2-2.6 3.5-5 .8-1.5 1.8-2.3 3.1-2.3s2.3.8 3.1 2.3c1.3 2.4 2 5 3.5 5 1.6 0 2.6-2.7 3.4-5.5 1.2-4 3-8.5 3-13 0-3.7-2.5-6.5-6-6.5-2.3 0-4.2 1.2-7 1.9-2.8-.7-4.7-1.9-7-1.9Z" fill="#FCFAF6" />
          <path d="M36 9v6M33 12h6" stroke="#B99B72" strokeWidth="2" />
          <path d="M10 10v4M8 12h4" stroke="#B99B72" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Root Canal Treatment',
      to: '/treatments/root-canal-treatment',
      description: 'Gentle, precision endodontic therapy to relieve pain and preserve your natural tooth.',
      illustration: (
        <svg className="treatment-illustration w-11 h-11" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 11c-3.5 0-6 2.8-6 6.5 0 4.5 1.8 9 3 13 .8 2.8 1.8 5.5 3.4 5.5 1.5 0 2.2-2.6 3.5-5 .8-1.5 1.8-2.3 3.1-2.3s2.3.8 3.1 2.3c1.3 2.4 2 5 3.5 5 1.6 0 2.6-2.7 3.4-5.5 1.2-4 3-8.5 3-13 0-3.7-2.5-6.5-6-6.5-2.3 0-4.2 1.2-7 1.9-2.8-.7-4.7-1.9-7-1.9Z" fill="#FCFAF6" />
          <path d="M24 17v10M20 21l4 6 4-6" stroke="#B99B72" />
        </svg>
      ),
    },
    {
      name: 'Dental Braces',
      to: '/treatments/dental-braces',
      description: 'Structured orthodontic alignment for balanced bites and long-term dental harmony.',
      illustration: (
        <svg className="treatment-illustration w-11 h-11" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="8" y="16" width="12" height="16" rx="4" fill="#FCFAF6" />
          <rect x="28" y="16" width="12" height="16" rx="4" fill="#FCFAF6" />
          <line x1="6" y1="24" x2="42" y2="24" stroke="#B99B72" strokeWidth="2" />
          <rect x="12" y="21" width="4" height="6" rx="1" fill="#B99B72" stroke="none" />
          <rect x="32" y="21" width="4" height="6" rx="1" fill="#B99B72" stroke="none" />
        </svg>
      ),
    },
    {
      name: 'Invisalign / Clear Aligners',
      to: '/treatments/clear-aligners',
      description: 'Removable, nearly invisible trays custom-mapped for discreet, comfortable alignment.',
      illustration: (
        <svg className="treatment-illustration w-11 h-11" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 21c0-5 5-9 14-9s14 4 14 9v6c0 4-5 7-14 7s-14-3-14-7v-6Z" fill="#FCFAF6" />
          <path d="M15 22c2 2 5 3 9 3s7-1 9-3" stroke="#B99B72" />
        </svg>
      ),
    },
    {
      name: 'Dental Veneers',
      to: '/treatments/dental-veneers',
      description: 'Ultra-thin porcelain shells crafted to refine tooth shape, symmetry, and shade.',
      illustration: (
        <svg className="treatment-illustration w-11 h-11" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="14" y="10" width="20" height="26" rx="6" fill="#FCFAF6" />
          <path d="M18 14c4-1 8-1 12 0" stroke="#B99B72" strokeWidth="2" />
          <path d="M19 30c3 1 7 1 10 0" stroke="#B99B72" />
        </svg>
      ),
    },
    {
      name: 'Smile Makeover',
      to: '/treatments/smile-makeover',
      description: 'Coordinated cosmetic and restorative planning tailored to your facial proportions.',
      illustration: (
        <svg className="treatment-illustration w-11 h-11" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 20c3 9 8 14 14 14s11-5 14-14" />
          <path d="M13 21c3 2.5 6.5 3.5 11 3.5s8-1 11-3.5" stroke="#B99B72" />
          <path d="M24 10v4M22 12h4" stroke="#B99B72" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Teeth Cleaning',
      to: '/treatments/teeth-cleaning',
      description: 'Thorough ultrasonic scaling and polishing to keep gums healthy and prevent buildup.',
      illustration: (
        <svg className="treatment-illustration w-11 h-11" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 13c-3 0-5.5 2.5-5.5 6 0 4 1.5 8 2.8 11.5.7 2.2 1.5 4.5 3 4.5 1.3 0 2-2.2 3.1-4.2.7-1.3 1.5-2 2.6-2s1.9.7 2.6 2c1.1 2 1.8 4.2 3.1 4.2 1.5 0 2.3-2.3 3-4.5 1.3-3.5 2.8-7.5 2.8-11.5 0-3.5-2.5-6-5.5-6-2 0-3.6 1-6 1.7-2.4-.7-4-1.7-6-1.7Z" fill="#FCFAF6" />
          <circle cx="35" cy="14" r="2.5" stroke="#B99B72" />
          <circle cx="13" cy="11" r="1.8" stroke="#B99B72" />
        </svg>
      ),
    },
    {
      name: 'Crowns and Bridges',
      to: '/treatments/crowns-and-bridges',
      description: 'Custom ceramic restorations that protect weakened teeth and bridge gaps seamlessly.',
      illustration: (
        <svg className="treatment-illustration w-11 h-11" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 20l4-6 10 4 10-4 4 6v10a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V20Z" fill="#FCFAF6" />
          <line x1="14" y1="26" x2="34" y2="26" stroke="#B99B72" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: 'Pediatric Dentistry',
      to: '/treatments/pediatric-dentistry',
      description: 'Gentle, kid-friendly checkups and preventive care that build confident lifelong habits.',
      illustration: (
        <svg className="treatment-illustration w-11 h-11" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="24" cy="24" r="13" fill="#FCFAF6" />
          <circle cx="19" cy="21" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="29" cy="21" r="1.5" fill="currentColor" stroke="none" />
          <path d="M18.5 27c1.5 2 3.5 3 5.5 3s4-1 5.5-3" stroke="#B99B72" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  const DENTISTS_PREVIEW = [
    {
      slug: 'dentist-1',
      photo: dentist1,
      fullName: 'Dr. Ravi Kumar',
      designation: 'Lead Dentist & Founder',
      qualifications: 'BDS, MDS (Prosthodontics)',
      specialization: 'Prosthodontics & Implantology',
      experience: '15+ Years Experience',
      introduction:
        'Dedicated to restoring confident smiles through precision implantology and full-mouth rehabilitation. Known for a gentle, transparent approach that prioritizes long-term oral function and patient comfort.',
    },
    {
      slug: 'dentist-2',
      photo: dentist2,
      fullName: 'Dr. Ananya Sharma',
      designation: 'Senior Orthodontist',
      qualifications: 'BDS, MDS (Orthodontics)',
      specialization: 'Orthodontics & Clear Aligners',
      experience: '10+ Years Experience',
      introduction:
        'Specializes in digital smile design, invisible aligners, and modern braces for teens and adults. Focuses on customized, minimally invasive treatment plans tailored to each patient’s lifestyle.',
    },
    {
      slug: 'dentist-3',
      photo: dentist3,
      fullName: 'Dr. Lavanya Shukla',
      designation: 'Associate Dentist',
      qualifications: 'BDS, MDS (Conservative Dentistry)',
      specialization: 'Endodontics & Restorative Care',
      experience: '7+ Years Experience',
      introduction:
        'Experienced in painless single-sitting root canals, micro-endodontics, and aesthetic tooth-colored restorations. Committed to saving natural teeth and creating a stress-free experience for anxious patients.',
    },
  ];

  const WHY_CHOOSE_REASONS = [
    {
      number: '01',
      title: 'Experienced Dental Professionals',
      description: 'Care led by qualified general dentists and specialists across restorative, orthodontic, and preventive care.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Modern Dental Technology',
      description: 'Digital intraoral scanning and low-radiation imaging for more accurate diagnoses and comfortable visits.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Personalized Treatment Plans',
      description: 'Every care plan is tailored to your oral health goals, timeline, and comfort—never a one-size-fits-all approach.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Patient Comfort',
      description: 'Gentle clinical techniques, calm treatment rooms, and unhurried pacing designed to ease dental anxiety.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Transparent Treatment Discussions',
      description: 'Clear explanations of findings, alternatives, and upfront cost breakdowns before you decide on any procedure.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      number: '06',
      title: 'Sterilization & Hygiene Standards',
      description: 'Multi-stage autoclave sterilization, sealed instrument pouches, and strict infection-control protocols.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      number: '07',
      title: 'Convenient Appointment Scheduling',
      description: 'Flexible weekday and weekend slots with straightforward online booking and timely reminders.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      number: '08',
      title: 'Dedicated Follow-Up Care',
      description: 'Post-treatment check-ins, clear recovery guidance, and ongoing preventive support after your visit.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  const FACILITY_SPACES = [
    {
      id: 'reception',
      badge: 'Reception',
      title: 'Welcoming Reception Desk',
      image: reception,
      description: 'Smooth check-ins, clear scheduling support, and a calm first impression from the moment you arrive.',
    },
    {
      id: 'waiting-area',
      badge: 'Waiting Area',
      title: 'Calm Patient Lounge',
      image: waitingArea,
      description: 'Comfortable seating, natural daylight, and minimal wait times in a quiet, unhurried lounge.',
    },
    {
      id: 'treatment-rooms',
      badge: 'Treatment Rooms',
      title: 'Private Dental Suites',
      image: treatmentRoom,
      description: 'Ergonomic chairs, acoustic privacy, and sunlit rooms designed to keep every procedure comfortable.',
    },
    {
      id: 'consultation-room',
      badge: 'Consultation Room',
      title: 'Dedicated Consultation Suite',
      image: consultationRoom,
      description: 'Private discussion space to review digital scans, treatment options, and timelines without rushing.',
    },
    {
      id: 'dental-equipment',
      badge: 'Technology',
      title: 'Modern Dental Equipment',
      image: dentalEquipment,
      description: 'Digital 3D intraoral scanners and low-dose imaging for accurate, impression-free diagnostics.',
    },
    {
      id: 'sterilization-area',
      badge: 'Hygiene & Safety',
      title: 'Dedicated Sterilization Bay',
      image: sterilizationArea,
      description: 'Multi-stage autoclave sterilization and sealed instrument pouches following strict infection-control standards.',
    },
  ];

  // Customize with your clinic's actual accessibility features
  const ACCESSIBILITY_FEATURES = [
    '[Step-free / Wheelchair-accessible entrance]',
    '[Elevator or ground-floor treatment suite access]',
    '[Accessible patient restroom]',
    '[Reserved nearby parking / drop-off zone]',
  ];

  const PATIENT_JOURNEY_STEPS = [
    {
      step: '01',
      title: 'Book an Appointment',
      description: 'Schedule online, by phone, or via WhatsApp at a time that fits your week.',
    },
    {
      step: '02',
      title: 'Visit the Clinic',
      description: 'Check in at our calm reception lounge with straightforward, paper-light registration.',
    },
    {
      step: '03',
      title: 'Initial Dental Examination',
      description: 'A thorough, gentle check of your teeth, gums, and digital imaging when clinically needed.',
    },
    {
      step: '04',
      title: 'Diagnosis & Consultation',
      description: 'Your dentist walks you through clear findings and answers every question without rushing.',
    },
    {
      step: '05',
      title: 'Treatment Plan Discussion',
      description: 'Review tailored options, timelines, and transparent cost estimates before deciding.',
    },
    {
      step: '06',
      title: 'Treatment',
      description: 'Receive comfort-focused care delivered with modern techniques and strict hygiene standards.',
    },
    {
      step: '07',
      title: 'Follow-Up & Maintenance',
      description: 'Post-visit check-ins and routine preventive care to protect your long-term oral health.',
    },
  ];

  const SMILE_TRANSFORMATIONS = [
    {
      id: 'case-1',
      category: 'Clear Aligners',
      beforePhoto: case1Before,
      afterPhoto: case1After,
      description: '[Brief case description: e.g., Crowding correction and arch alignment using custom clear aligners.]',
      duration: '[Verified duration, e.g., X months]',
      consentVerified: true,
    },
    {
      id: 'case-2',
      category: 'Porcelain Veneers',
      beforePhoto: case2Before,
      afterPhoto: case2After,
      description: '[Brief case description: e.g., Enamel wear and spacing addressed with conservative ceramic veneers.]',
      duration: '[Verified duration, e.g., X visits]',
      consentVerified: true,
    },
    {
      id: 'case-3',
      category: 'Dental Implants & Crowns',
      beforePhoto: case3Before,
      afterPhoto: case3After,
      description: '[Brief case description: e.g., Single-tooth implant and shade-matched crown restoration.]',
      duration: '', // Leave empty if duration is not verified
      consentVerified: true,
    },
  ];

  const [activeViews, setActiveViews] = useState({});

  const toggleCaseView = (caseId, view) => {
    setActiveViews((prev) => ({ ...prev, [caseId]: view }));
  };

  const FAQS_PREVIEW = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book online anytime through our Book Appointment page, call our front desk directly, or message us on WhatsApp to request a preferred date and time.',
  },
  {
    question: 'What should I bring to my first consultation?',
    answer: 'Please bring a valid photo ID, a list of any current medications or medical conditions, and any recent dental X-rays or records if you have them.',
  },
  {
    question: 'Do you accept walk-in patients?',
    answer: '[Clinic policy: e.g., We prioritize scheduled appointments to keep wait times minimal, and reserve same-day slots for urgent dental needs—please call ahead before arriving.]',
  },
  {
    question: 'How long does a dental consultation take?',
    answer: '[Clinic duration: e.g., Most initial consultations take 30 to 45 minutes, allowing time for a thorough examination, imaging if needed, and clear discussion of your options.]',
  },
  {
    question: 'Do you offer payment options?',
    answer: '[Payment details: e.g., We accept major cards, UPI/bank transfers, and offer phased payment plans for select treatments—our team reviews all costs upfront.]',
  },
  {
    question: 'Where is the clinic located?',
    answer: '[Clinic Address, Landmark, City — include parking or transit notes and a link to the Contact page for directions.]',
  },
];

const [openFaqIndex, setOpenFaqIndex] = useState(0);

const toggleFaq = (index) => {
  setOpenFaqIndex((prev) => (prev === index ? null : index));
};

const LATEST_ARTICLES = [
  {
    slug: 'what-happens-during-a-preventive-checkup',
    category: 'Preventive Care',
    thumbnail: preventiveHygiene,
    title: 'What Happens During a Routine Dental Checkup & Cleaning?',
    excerpt: 'A step-by-step look at how regular exams, gum checks, and gentle scaling help catch small issues early.',
    date: 'November 18, 2026',
  },
  {
    slug: 'clear-aligners-vs-braces-how-to-choose',
    category: 'Orthodontics',
    thumbnail: clearAlignersGuide,
    title: 'Clear Aligners vs. Traditional Braces: Key Differences Explained',
    excerpt: 'Understand how aligner trays and fixed braces compare for comfort, daily cleaning, and alignment goals.',
    date: 'November 10, 2026',
  },
  {
    slug: 'preparing-for-your-first-dental-consultation',
    category: 'Patient Guide',
    thumbnail: firstVisitGuide,
    title: 'How to Prepare for Your First Dental Consultation',
    excerpt: 'What to bring, which questions to ask your dentist, and how transparent treatment planning works.',
    date: 'November 2, 2026',
  },
];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative py-12 sm:py-16 lg:py-20" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Value Proposition, CTAs & Optional Info */}
            <div className="lg:col-span-6 min-w-0 flex flex-col items-start">
              <div className="hero-eyebrow hero-animate hero-animate--1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5">
                <span className="hero-eyebrow-dot shrink-0" aria-hidden="true" />
                <span>Patient-First Dental Care</span>
              </div>

              <h1
                id="hero-heading"
                className="hero-title hero-animate hero-animate--2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.14] mb-5"
              >
                Thoughtful, modern dentistry built around your comfort.
              </h1>

              <p className="hero-description hero-animate hero-animate--3 text-base sm:text-lg leading-relaxed max-w-xl mb-7">
                From routine preventive checkups to restorative and cosmetic care, our team combines gentle techniques with transparent treatment plans in a calm, unhurried setting.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="hero-animate hero-animate--4 flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-7">
                <Link
                  to="/book-appointment"
                  className="hero-cta-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold w-full sm:w-auto"
                >
                  <span>Book an Appointment</span>
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>

                <Link
                  to="/treatments"
                  className="hero-cta-secondary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold w-full sm:w-auto"
                >
                  <span>Explore Treatments</span>
                </Link>
              </div>

              {/* Optional Emergency Care & Location Info */}
              {(showEmergency || showLocation) && (
                <div className="hero-meta hero-animate hero-animate--5 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-5 w-full pt-4">
                  {showEmergency && (
                    <a
                      href="tel:+0000000000"
                      className="hero-meta-item inline-flex items-center gap-2 text-xs sm:text-sm font-medium min-w-0"
                    >
                      <span className="hero-meta-badge shrink-0 px-2 py-0.5 rounded-md text-[11px] font-semibold">
                        Emergency Care
                      </span>
                      <span className="truncate">Same-day urgent dental slots available</span>
                    </a>
                  )}

                  {showLocation && (
                    <Link
                      to="/contact"
                      className="hero-meta-item inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium min-w-0"
                    >
                      <svg className="hero-meta-icon w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="truncate">[Clinic Address, City]</span>
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Clinic Photograph & Floating Verification Card */}
            <div className="lg:col-span-6 min-w-0 hero-animate hero-animate--3">
              <div className="hero-media-wrapper relative p-3 sm:p-4 rounded-3xl">
                <div className="hero-image-frame overflow-hidden rounded-2xl aspect-4/3">
                  <img
                    src={clinicImage}
                    alt="Modern, sunlit dental clinic treatment suite"
                    className="hero-image w-full h-full object-cover cursor-pointer"
                    loading="eager"
                  />
                </div>

                <div className="hero-floating-card mt-3 sm:mt-0 sm:absolute sm:-bottom-4 sm:left-6 sm:right-6 rounded-2xl px-4 py-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="hero-floating-icon flex items-center justify-center w-9 h-9 rounded-xl shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="hero-floating-title text-xs sm:text-sm font-semibold truncate">
                        [Verified MDS / BDS Specialists]
                      </p>
                      <p className="hero-floating-sub text-[11px] sm:text-xs truncate">
                        [Clinic Accreditation / ISO]
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/dentists"
                    className="hero-floating-link shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap"
                  >
                    Meet Team
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators Bar */}
          <div className="hero-trust-grid hero-animate hero-animate--5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-12 sm:mt-14">
            {TRUST_INDICATORS.map((item) => (
              <div key={item.id} className="hero-trust-card rounded-2xl p-4 flex items-start gap-3 min-w-0">
                <span className="hero-trust-icon flex items-center justify-center w-9 h-9 rounded-xl shrink-0">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="hero-trust-label text-[11px] font-semibold uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="hero-trust-value text-sm font-semibold mt-0.5 wrap-break-words">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility Strip */}
      {activeCredibilityItems.length > 0 && (
        <section className="credibility-strip py-8 sm:py-10" aria-label="Clinic standards and credibility">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
              {activeCredibilityItems.map((item) => (
                <div
                  key={item.id}
                  className="credibility-item rounded-2xl p-4 flex flex-col gap-2.5 min-w-0 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="credibility-icon flex items-center justify-center w-8 h-8 rounded-xl shrink-0">
                      {item.icon}
                    </span>
                    <h2 className="credibility-title text-sm font-semibold leading-snug">
                      {item.title}
                    </h2>
                  </div>
                  <p className="credibility-text text-xs leading-relaxed">
                    {item.example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About the Clinic Preview */}
      <section className="about-preview-section py-14 sm:py-20" aria-labelledby="about-preview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Clinic Interior Photograph */}
            <div className="lg:col-span-6 min-w-0 order-2 lg:order-1">
              <div className="about-preview-media p-3 sm:p-4 rounded-3xl">
                <div className="about-preview-image-frame overflow-hidden rounded-2xl aspect-4/3">
                  <img
                    src={clinicInterior}
                    alt="Calm, sunlit reception and patient lounge inside the dental clinic"
                    className="about-preview-image w-full h-full object-cover cursor-pointer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Introduction, Philosophy, Differentiators & About Us Link */}
            <div className="lg:col-span-6 min-w-0 order-1 lg:order-2 flex flex-col items-start">
              <span className="about-preview-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
                About the Clinic
              </span>

              <h2
                id="about-preview-heading"
                className="about-preview-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4"
              >
                A calmer dental experience, designed around you.
              </h2>

              {/* Short Introduction */}
              <p className="about-preview-intro text-base leading-relaxed mb-6">
                [Short clinic introduction: e.g., Founded to replace rushed appointments with thoughtful, transparent care, our clinic brings general and specialist dentistry together under one roof.]
              </p>

              {/* Clinic Philosophy */}
              <div className="about-philosophy-card rounded-2xl p-4 sm:p-5 w-full mb-6">
                <p className="about-philosophy-label text-xs font-semibold uppercase tracking-wider mb-1.5">
                  Our Philosophy
                </p>
                <p className="about-philosophy-text text-sm leading-relaxed">
                  [Clinic philosophy: e.g., We believe in conservative, preventive-first dentistry—preserving natural tooth structure and explaining every option clearly before any treatment begins.]
                </p>
              </div>

              {/* What Makes the Clinic Different */}
              <div className="w-full flex flex-col gap-2.5 mb-7">
                <div className="about-diff-item rounded-xl p-3.5 flex items-start gap-3">
                  <span className="about-diff-icon flex items-center justify-center w-8 h-8 rounded-lg shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="about-diff-title text-sm font-semibold">Unhurried Appointments</h3>
                    <p className="about-diff-desc text-xs sm:text-sm mt-0.5">
                      Dedicated time to listen, answer questions, and plan comfortably.
                    </p>
                  </div>
                </div>

                <div className="about-diff-item rounded-xl p-3.5 flex items-start gap-3">
                  <span className="about-diff-icon flex items-center justify-center w-8 h-8 rounded-lg shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="about-diff-title text-sm font-semibold">Transparent Treatment Plans</h3>
                    <p className="about-diff-desc text-xs sm:text-sm mt-0.5">
                      Clear diagnostics and upfront pricing with zero surprise recommendations.
                    </p>
                  </div>
                </div>

                <div className="about-diff-item rounded-xl p-3.5 flex items-start gap-3">
                  <span className="about-diff-icon flex items-center justify-center w-8 h-8 rounded-lg shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="about-diff-title text-sm font-semibold">Comfort-Focused Care</h3>
                    <p className="about-diff-desc text-xs sm:text-sm mt-0.5">
                      Gentle techniques and a calm, welcoming environment for anxious patients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Link to About Us */}
              <Link
                to="/about"
                className="about-preview-link inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold"
              >
                <span>Learn More About Us</span>
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dental Treatments */}
      <section className="treatments-section py-14 sm:py-20" aria-labelledby="treatments-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div className="max-w-2xl">
              <span className="treatments-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
                Our Services
              </span>
              <h2
                id="treatments-heading"
                className="treatments-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              >
                Featured Dental Treatments
              </h2>
              <p className="treatments-subtitle text-sm sm:text-base mt-2.5 leading-relaxed">
                Comprehensive preventive, restorative, and cosmetic care tailored to your goals.
              </p>
            </div>

            <Link
              to="/treatments"
              className="treatments-all-link inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold shrink-0 self-start sm:self-auto"
            >
              <span>View All Treatments</span>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Treatments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {FEATURED_TREATMENTS.map((treatment) => (
              <article key={treatment.to} className="treatment-card rounded-2xl overflow-hidden flex flex-col">
                <div className="treatment-media h-28 flex items-center justify-center p-4">
                  {treatment.illustration}
                </div>

                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <h3 className="treatment-name text-base font-semibold leading-snug mb-2">
                    {treatment.name}
                  </h3>
                  <p className="treatment-desc text-xs sm:text-sm leading-relaxed mb-4 flex-1">
                    {treatment.description}
                  </p>
                  <Link
                    to={treatment.to}
                    className="treatment-learn-more pt-3 inline-flex items-center justify-between text-xs sm:text-sm font-semibold"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Dentists */}
      <section className="dentists-section py-14 sm:py-20" aria-labelledby="dentists-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div className="max-w-2xl">
              <span className="dentists-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
                Our Clinical Team
              </span>
              <h2
                id="dentists-heading"
                className="dentists-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              >
                Meet Our Dentists
              </h2>
              <p className="dentists-subtitle text-sm sm:text-base mt-2.5 leading-relaxed">
                Experienced, qualified clinicians committed to gentle care and clear communication.
              </p>
            </div>

            <Link
              to="/dentists"
              className="dentists-all-link inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold shrink-0 self-start sm:self-auto"
            >
              <span>Meet All Dentists</span>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Dentists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DENTISTS_PREVIEW.map((dentist) => (
              <article key={dentist.slug} className="dentist-card rounded-3xl overflow-hidden flex flex-col">
                {/* Dentist Photograph */}
                <div className="dentist-photo-wrap relative aspect-4/3 flex items-center justify-center overflow-hidden">
                  {dentist.photo ? (
                    <img
                      src={dentist.photo}
                      alt={`${dentist.fullName} — ${dentist.designation}`}
                      className="dentist-photo w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="dentist-placeholder-avatar flex flex-col items-center justify-center gap-2 p-6 text-center">
                      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span className="text-xs font-medium">Dentist Photo</span>
                    </div>
                  )}

                  {/* Verified Years of Experience Badge */}
                  {dentist.experience && (
                    <span className="dentist-experience-badge absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold">
                      {dentist.experience}
                    </span>
                  )}
                </div>

                {/* Dentist Details */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <h3 className="dentist-name text-lg sm:text-xl font-bold leading-snug">
                      {dentist.fullName}
                    </h3>
                    <p className="dentist-designation text-xs sm:text-sm font-medium mt-0.5">
                      {dentist.designation}
                    </p>
                  </div>

                  {/* Qualifications & Specialization */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="dentist-meta-pill px-2.5 py-1 rounded-lg text-xs font-semibold">
                      {dentist.qualifications}
                    </span>
                    <span className="dentist-meta-pill px-2.5 py-1 rounded-lg text-xs font-medium">
                      {dentist.specialization}
                    </span>
                  </div>

                  {/* Short Introduction */}
                  <p className="dentist-intro text-sm leading-relaxed mb-6 flex-1">
                    {dentist.introduction}
                  </p>

                  {/* View Profile CTA */}
                  <Link
                    to={`/dentists/${dentist.slug}`}
                    className="dentist-profile-cta inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold w-full"
                  >
                    <span>View Profile</span>
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Clinic */}
      <section className="why-choose-section py-14 sm:py-20" aria-labelledby="why-choose-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="why-choose-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
              Why Choose Us
            </span>
            <h2
              id="why-choose-heading"
              className="why-choose-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
            >
              Why Choose Our Clinic?
            </h2>
            <p className="why-choose-subtitle text-sm sm:text-base mt-2.5 leading-relaxed">
              Every detail of your visit is built around clinical precision, safety, and honest communication.
            </p>
          </div>

          {/* 8 Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CHOOSE_REASONS.map((reason) => (
              <article key={reason.number} className="why-choose-card cursor-pointer rounded-2xl p-5 sm:p-6 flex flex-col gap-4 min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <span className="why-choose-icon flex items-center justify-center w-10 h-10 rounded-xl shrink-0">
                    {reason.icon}
                  </span>
                  <span className="why-choose-number text-xs font-bold tracking-wider">
                    {reason.number}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="why-choose-card-title text-base font-semibold leading-snug mb-2">
                    {reason.title}
                  </h3>
                  <p className="why-choose-card-desc text-xs sm:text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Experience / Our Facility */}
      <section className="facility-section py-14 sm:py-20" aria-labelledby="facility-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="facility-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
              Our Facility
            </span>
            <h2
              id="facility-heading"
              className="facility-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
            >
              Clinic Experience &amp; Facility
            </h2>
            <p className="facility-subtitle text-sm sm:text-base mt-2.5 leading-relaxed">
              Take a look inside our spaces—purpose-built for clinical safety, modern diagnostics, and patient comfort.
            </p>
          </div>

          {/* Facility Spaces Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {FACILITY_SPACES.map((space) => (
              <article key={space.id} className="facility-card rounded-3xl overflow-hidden flex flex-col">
                <div className="facility-media relative aspect-4/3 overflow-hidden">
                  <img
                    src={space.image}
                    alt={`${space.title} inside the dental clinic`}
                    className="facility-image w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="facility-badge absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold">
                    {space.badge}
                  </span>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="facility-card-title text-base sm:text-lg font-bold leading-snug mb-2">
                    {space.title}
                  </h3>
                  <p className="facility-card-desc text-xs sm:text-sm leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Accessibility Information Card */}
          <div className="facility-accessibility-card rounded-2xl p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5 min-w-0 max-w-xl">
              <span className="facility-accessibility-icon flex items-center justify-center w-10 h-10 rounded-xl shrink-0 mt-0.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="4.5" r="1.5" />
                  <path d="M12 8v5l4 2" />
                  <path d="M9 13a4.5 4.5 0 1 0 6.5 4" />
                  <path d="M8 10h8" />
                </svg>
              </span>
              <div className="min-w-0">
                <h3 className="facility-accessibility-title text-base font-bold">
                  Accessibility Information
                </h3>
                <p className="facility-accessibility-desc text-xs sm:text-sm mt-1 leading-relaxed">
                  We strive to make every visit comfortable and accessible. Contact our front desk ahead of your appointment if you need mobility or sensory accommodations.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
              {ACCESSIBILITY_FEATURES.map((feature) => (
                <span
                  key={feature}
                  className="facility-accessibility-pill px-3 py-1.5 rounded-xl text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Patient Journey */}
      <section className="journey-section py-14 sm:py-20" aria-labelledby="journey-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="journey-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
              How It Works
            </span>
            <h2
              id="journey-heading"
              className="journey-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
            >
              Your Patient Journey
            </h2>
            <p className="journey-subtitle text-sm sm:text-base mt-2.5 leading-relaxed">
              What to expect from the moment you reach out to your ongoing preventive care.
            </p>
          </div>

          {/* 7-Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
            {PATIENT_JOURNEY_STEPS.map((item) => (
              <article key={item.step} className="journey-step-card cursor-pointer rounded-2xl p-5 flex flex-col gap-3 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="journey-step-num inline-flex items-center justify-center px-3 py-1 rounded-lg text-xs font-bold tracking-wider">
                    Step {item.step}
                  </span>
                </div>

                <div className="min-w-0">
                  <h3 className="journey-step-title text-base font-bold leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="journey-step-desc text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Important Individualized Care Note */}
          <div className="journey-note-card rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 min-w-0">
              <span className="journey-note-icon flex items-center justify-center w-9 h-9 rounded-xl shrink-0 mt-0.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </span>
              <p className="journey-note-text text-xs sm:text-sm leading-relaxed">
                <strong className="font-semibold">Please note:</strong> Not every patient requires every step or the same treatment sequence. Your dentist will recommend only the steps and care appropriate for your individual needs.
              </p>
            </div>

            <Link
              to="/book-appointment"
              className="journey-cta-btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold shrink-0 self-start md:self-auto"
            >
              <span>Book Your Visit</span>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Smile Transformation / Before & After */}
      <section className="transformations-section py-14 sm:py-20" aria-labelledby="transformations-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div className="max-w-2xl">
              <span className="transformations-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
                Smile Gallery
              </span>
              <h2
                id="transformations-heading"
                className="transformations-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              >
                Smile Transformations
              </h2>
              <p className="transformations-subtitle text-sm sm:text-base mt-2.5 leading-relaxed">
                Documented before-and-after clinical cases shared with patient permission.
              </p>
            </div>

            <Link
              to="/smile-gallery"
              className="transformations-all-link inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold shrink-0 self-start sm:self-auto"
            >
              <span>View Smile Gallery</span>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Before & After Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {SMILE_TRANSFORMATIONS.map((item) => {
              const currentView = activeViews[item.id] || 'after';
              const activePhoto = currentView === 'before' ? item.beforePhoto : item.afterPhoto;

              return (
                <article key={item.id} className="transformation-card rounded-3xl overflow-hidden flex flex-col">
                  {/* Before / After Photo Area */}
                  <div className="transformation-media relative aspect-4/3 p-3 flex items-center justify-center">
                    {activePhoto ? (
                      <img
                        src={activePhoto}
                        alt={`${item.category} — ${currentView === 'before' ? 'Before' : 'After'} treatment`}
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                      />
                    ) : (
                      <div className="transformation-photo-slot w-full h-full rounded-2xl flex flex-col items-center justify-center gap-1.5 p-4 text-center">
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {currentView === 'before' ? 'Before Treatment' : 'After Treatment'}
                        </span>
                        <span className="text-xs opacity-75">
                          [Add consented {currentView} photograph]
                        </span>
                      </div>
                    )}

                    {/* Before / After Toggle */}
                    <div
                      className="transformation-toggle-group absolute bottom-5 left-5 inline-flex items-center p-1 rounded-xl"
                      role="group"
                      aria-label={`Toggle before and after view for ${item.category}`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleCaseView(item.id, 'before')}
                        className={`transformation-toggle-btn px-3 py-1 rounded-lg text-xs font-semibold ${currentView === 'before' ? 'transformation-toggle-btn--active' : ''
                          }`}
                      >
                        Before
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleCaseView(item.id, 'after')}
                        className={`transformation-toggle-btn px-3 py-1 rounded-lg text-xs font-semibold ${currentView === 'after' ? 'transformation-toggle-btn--active' : ''
                          }`}
                      >
                        After
                      </button>
                    </div>
                  </div>

                  {/* Case Details */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="transformation-category px-3 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>

                      {item.duration && (
                        <span className="transformation-duration text-xs font-medium">
                          Duration: {item.duration}
                        </span>
                      )}
                    </div>

                    <p className="transformation-desc text-sm leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>

                    {/* Patient Consent */}
                    {item.consentVerified && (
                      <div className="transformation-consent pt-3 flex items-center gap-2 text-xs font-medium">
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <span>Shared with verified patient consent</span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Clinical Disclaimer */}
          <div className="transformation-disclaimer rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed">
            <strong className="font-semibold">Clinical Disclaimer:</strong> Individual treatment outcomes vary between patients depending on oral health, clinical suitability, and adherence to care instructions. Photographs represent specific documented cases and do not guarantee identical results.
          </div>
        </div>
      </section>

      {/* Appointment Booking CTA */}
      <section className="booking-cta-section py-14 sm:py-20" aria-labelledby="booking-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="booking-cta-card rounded-3xl p-7 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left Content: Heading & Supporting Text */}
            <div className="max-w-2xl min-w-0">
              <span className="booking-cta-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
                Schedule Your Visit
              </span>
              <h2
                id="booking-cta-heading"
                className="booking-cta-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3"
              >
                Ready for calm, thoughtful dental care?
              </h2>
              <p className="booking-cta-desc text-sm sm:text-base leading-relaxed">
                Book your consultation online in under a minute, or reach our front desk directly by phone or WhatsApp for help choosing the right appointment slot.
              </p>
            </div>

            {/* Right Actions: Book Appointment, Phone, WhatsApp */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center gap-3 shrink-0">
              <Link
                to="/book-appointment"
                className="booking-cta-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold whitespace-nowrap"
              >
                <span>Book Appointment</span>
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>

              <a
                href="tel:+919876543210"
                className="booking-cta-secondary inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold whitespace-nowrap"
                aria-label="Call clinic"
              >
                <svg className="booking-cta-icon w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>[+91 987-654-3210]</span>
              </a>

              <a
                href="https://wa.me/9876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="booking-cta-secondary inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold whitespace-nowrap"
                aria-label="Chat on WhatsApp"
              >
                <svg className="booking-cta-icon w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.76 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.19-1.18-1.57-1.18-2.99 0-1.43.75-2.13 1.01-2.42.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.13.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.7-.17 1.38Z" />
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Preview */}
      <section className="faqs-section py-14 sm:py-20" aria-labelledby="faqs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Intro Column */}
            <div className="lg:col-span-4 min-w-0">
              <span className="faqs-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
                Common Questions
              </span>
              <h2
                id="faqs-heading"
                className="faqs-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3"
              >
                Frequently Asked Questions
              </h2>
              <p className="faqs-subtitle text-sm sm:text-base leading-relaxed mb-6">
                Quick answers to help you prepare for your first visit or consultation.
              </p>
              <Link
                to="/faqs"
                className="faqs-all-link inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
              >
                <span>View All FAQs</span>
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Right Accordion Column */}
            <div className="lg:col-span-8 min-w-0 flex flex-col gap-3">
              {FAQS_PREVIEW.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.question}
                    className={`faq-item rounded-2xl overflow-hidden ${isOpen ? 'faq-item--open' : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="faq-trigger w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-semibold leading-snug">
                        {faq.question}
                      </span>
                      <span className="faq-chevron flex items-center justify-center w-8 h-8 rounded-xl shrink-0" aria-hidden="true">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>

                    <div className="faq-answer-wrap">
                      <div className="faq-answer-inner">
                        <p className="faq-answer px-5 pb-4 pt-3 text-xs sm:text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="location-section py-14 sm:py-20" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-10">
            <span className="location-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
              Visit Us
            </span>
            <h2
              id="location-heading"
              className="location-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
            >
              Location &amp; Clinic Hours
            </h2>
            <p className="location-subtitle text-sm sm:text-base mt-2.5 leading-relaxed">
              Conveniently located with clear parking and transit access for your scheduled visit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Address, Hours, Phone & Get Directions */}
            <div className="lg:col-span-5 min-w-0 flex flex-col justify-between gap-6">
              <div className="location-info-card rounded-3xl p-6 sm:p-7 flex flex-col">
                {/* Full Clinic Address */}
                <div className="location-detail-row pb-5 flex items-start gap-3.5">
                  <span className="location-icon flex items-center justify-center w-10 h-10 rounded-xl shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="location-label text-xs font-semibold uppercase tracking-wider mb-1">
                      Clinic Address
                    </p>
                    <p className="location-value text-sm sm:text-base font-medium leading-relaxed">
                      [Building / Suite Number, Street Name]
                      <br />
                      [Neighborhood, City, Postal Code]
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="location-detail-row py-5 flex items-start gap-3.5">
                  <span className="location-icon flex items-center justify-center w-10 h-10 rounded-xl shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <div className="min-w-0 w-full">
                    <p className="location-label text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Opening Hours
                    </p>
                    <dl className="location-value text-sm space-y-1">
                      <div className="flex justify-between gap-4">
                        <dt className="font-medium">Mon – Fri</dt>
                        <dd>[9:00 AM – 7:00 PM]</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="font-medium">Saturday</dt>
                        <dd>[9:00 AM – 5:00 PM]</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="font-medium">Sunday</dt>
                        <dd>[Closed / By Appointment]</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* Contact Number */}
                <div className="location-detail-row pt-5 flex items-start gap-3.5">
                  <span className="location-icon flex items-center justify-center w-10 h-10 rounded-xl shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="location-label text-xs font-semibold uppercase tracking-wider mb-1">
                      Contact Number
                    </p>
                    <a
                      href="tel:+0000000000"
                      className="location-value text-sm sm:text-base font-semibold hover:underline underline-offset-4"
                    >
                      [+XX XXX-XXX-XXXX]
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=[Clinic+Address+City]"
                target="_blank"
                rel="noopener noreferrer"
                className="location-directions-btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold w-full"
              >
                <span>Get Directions</span>
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="lg:col-span-7 min-w-0">
              <div className="location-map-card rounded-3xl p-3 sm:p-4 h-full">
                <div className="location-map-frame rounded-2xl overflow-hidden w-full h-full min-h-80 sm:min-h-95">
                  <iframe
                    title="Dental Clinic Location Map"
                    src="https://www.google.com/maps?q=[Clinic+Address+City]&output=embed"
                    className="w-full h-full min-h-80 sm:min-h-95 border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Dental Education Preview */}
      <section className="blog-section py-14 sm:py-20" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div className="max-w-2xl">
              <span className="blog-eyebrow inline-flex items-center px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
                Dental Journal
              </span>
              <h2
                id="blog-heading"
                className="blog-title text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              >
                Dental Education &amp; Guides
              </h2>
              <p className="blog-subtitle text-sm sm:text-base mt-2.5 leading-relaxed">
                Clear, evidence-based articles to help you make informed decisions about your oral health.
              </p>
            </div>

            <Link
              to="/blog"
              className="blog-all-link inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold shrink-0 self-start sm:self-auto"
            >
              <span>View All Articles</span>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Latest Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LATEST_ARTICLES.map((article) => (
              <article key={article.slug} className="blog-card rounded-3xl overflow-hidden flex flex-col">
                {/* Article Thumbnail */}
                <Link to={`/blog/${article.slug}`} className="blog-media block aspect-4/3 overflow-hidden">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="blog-thumbnail w-full h-full object-cover"
                    loading="lazy"
                  />
                </Link>

                {/* Article Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="blog-category px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <time className="blog-date text-xs font-medium" dateTime={article.date}>
                      {article.date}
                    </time>
                  </div>

                  <h3 className="blog-card-title text-base sm:text-lg font-bold leading-snug mb-2">
                    <Link to={`/blog/${article.slug}`} className="hover:underline underline-offset-4">
                      {article.title}
                    </Link>
                  </h3>

                  <p className="blog-excerpt text-xs sm:text-sm leading-relaxed mb-5 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Read More CTA */}
                  <Link
                    to={`/blog/${article.slug}`}
                    className="blog-read-more pt-3.5 inline-flex items-center justify-between text-xs sm:text-sm font-semibold"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home