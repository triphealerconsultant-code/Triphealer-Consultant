import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/recruitment", label: "Recruitment Services" },
  { href: "/gulf-visas", label: "Gulf Work Visas" },
  { href: "/medical-treatment", label: "Medical Treatment in India" },
  { href: "/travel-support", label: "Travel Support" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Gulf Work Visa Services",
  "Overseas Recruitment",
  "Manpower Supply",
  "Candidate Selection",
  "Medical Treatment in India",
  "Hospital Appointment Booking",
  "Medical Visa Support",
  "Travel & Stay Assistance",
];

export default function Footer() {
  return (
    <footer className="bg-[#082f49] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <MdLocalHospital className="text-[#0c4a6e] text-2xl" />
              </div>
              <div>
                <div className="font-bold text-lg">Triphealer</div>
                <div className="text-xs text-sky-300">Medical Tourism &amp; Manpower Consultant</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              We connect Gulf employers with skilled manpower and assist Gulf families seeking medical
              treatment in India. Complete visa, travel, and support services under one roof.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://wa.me/919953889465"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-sky-700 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-300 border-b border-sky-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 text-sm hover:text-sky-300 transition-colors flex items-center gap-2"
                  >
                    <span className="text-sky-500">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-300 border-b border-sky-700 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-slate-300 text-sm flex items-center gap-2">
                  <span className="text-sky-500">›</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-300 border-b border-sky-700 pb-2">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sky-400 text-xs font-semibold uppercase tracking-wide mb-1">Head Office</p>
                <div className="flex items-start gap-2 text-slate-300 text-sm">
                  <FaMapMarkerAlt className="text-sky-400 mt-1 shrink-0" />
                  <span>
                    Triphealer 1st Floor, G51/6, Kotak Mahindra ATM, Shaheen Bagh, Jamia Nagar,
                    New Delhi – 110025
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sky-400 text-xs font-semibold uppercase tracking-wide mb-1">Lucknow Office</p>
                <div className="flex items-start gap-2 text-slate-300 text-sm">
                  <FaMapMarkerAlt className="text-sky-400 mt-1 shrink-0" />
                  <span>Lucknow, Uttar Pradesh</span>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href="tel:+919953889465"
                  className="flex items-center gap-2 text-slate-300 text-sm hover:text-sky-300 transition-colors"
                >
                  <FaPhone className="text-sky-400 shrink-0" />
                  <span>+91 9953889465</span>
                </a>
                <a
                  href="tel:+919891542452"
                  className="flex items-center gap-2 text-slate-300 text-sm hover:text-sky-300 transition-colors"
                >
                  <FaPhone className="text-sky-400 shrink-0" />
                  <span>+91 98915 42452</span>
                </a>
                <a
                  href="mailto:ashhar.info1@gmail.com"
                  className="flex items-center gap-2 text-slate-300 text-sm hover:text-sky-300 transition-colors"
                >
                  <FaEnvelope className="text-sky-400 shrink-0" />
                  <span>ashhar.info1@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sky-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Triphealer. All rights reserved.</p>
          <p>Medical Tourism &amp; Manpower Consultant</p>
        </div>
      </div>
    </footer>
  );
}
