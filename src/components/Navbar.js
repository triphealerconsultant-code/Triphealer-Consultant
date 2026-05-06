"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/recruitment", label: "Recruitment Services" },
  { href: "/gulf-visas", label: "Gulf Work Visas" },
  { href: "/medical-treatment", label: "Medical Treatment in India" },
  { href: "/travel-support", label: "Travel Support" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full">
      {/* Top info bar */}
      <div className="bg-[#082f49] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+919953889465" className="flex items-center gap-1 hover:text-sky-300 transition-colors">
              <FaPhone className="text-xs" />
              <span>+91 9953889465</span>
            </a>
            <a href="tel:+919891542452" className="flex items-center gap-1 hover:text-sky-300 transition-colors">
              <FaPhone className="text-xs" />
              <span>+91 98915 42452</span>
            </a>
          </div>
          <a href="mailto:ashhar.info1@gmail.com" className="flex items-center gap-1 hover:text-sky-300 transition-colors">
            <FaEnvelope className="text-xs" />
            <span>ashhar.info1@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-[#0c4a6e] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MdLocalHospital className="text-[#0c4a6e] text-2xl" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-lg tracking-wide">Triphealer</div>
                <div className="text-xs text-sky-200 hidden sm:block">Medical Tourism &amp; Manpower Consultant</div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors whitespace-nowrap ${
                    pathname === link.href
                      ? "bg-[#0369a1] text-white"
                      : "text-sky-100 hover:bg-[#0369a1] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded text-sky-100 hover:bg-[#0369a1] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#082f49] border-t border-sky-700">
            <div className="px-4 py-2 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-3 rounded text-sm font-medium transition-colors border-b border-sky-800 last:border-0 ${
                    pathname === link.href
                      ? "text-sky-300 font-semibold"
                      : "text-sky-100 hover:text-sky-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
