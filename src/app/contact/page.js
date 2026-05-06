"use client";

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import Link from "next/link";

const officeInfo = [
  {
    title: "Head Office",
    city: "New Delhi",
    address: "Triphealer, 1st Floor, G51/6, Kotak Mahindra ATM, Shaheen Bagh, Jamia Nagar, New Delhi – 110025",
    flag: "🇮🇳",
  },
  {
    title: "Branch Office",
    city: "Lucknow",
    address: "Lucknow, Uttar Pradesh, India",
    flag: "🇮🇳",
  },
];

const enquiryTypes = [
  "Gulf Work Visa",
  "Overseas Recruitment / Manpower",
  "Medical Treatment in India",
  "Travel & Stay Support",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    enquiry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#0c4a6e] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sky-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <MdSupportAgent className="text-4xl text-sky-300" />
              <h1 className="text-4xl font-bold">Contact Us</h1>
            </div>
            <p className="text-sky-100 text-lg leading-relaxed">
              Have a question or need our services? Reach out to us — we are here to help with Gulf
              work visas, manpower recruitment, medical treatment in India, and travel support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6">
          <a
            href="tel:+919953889465"
            className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center mb-3">
              <FaPhone className="text-xl text-[#0369a1]" />
            </div>
            <h3 className="font-semibold text-[#0c4a6e] mb-1">Call Us</h3>
            <p className="text-slate-600 text-sm">+91 9953889465</p>
            <p className="text-slate-600 text-sm">+91 98915 42452</p>
          </a>
          <a
            href="mailto:ashhar.info1@gmail.com"
            className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center mb-3">
              <FaEnvelope className="text-xl text-[#0369a1]" />
            </div>
            <h3 className="font-semibold text-[#0c4a6e] mb-1">Email Us</h3>
            <p className="text-slate-600 text-sm">ashhar.info1@gmail.com</p>
          </a>
          <a
            href="https://wa.me/919953889465"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-3">
              <FaWhatsapp className="text-xl text-green-600" />
            </div>
            <h3 className="font-semibold text-[#0c4a6e] mb-1">WhatsApp</h3>
            <p className="text-slate-600 text-sm">Chat with us on WhatsApp</p>
            <p className="text-slate-600 text-sm">+91 9953889465</p>
          </a>
        </div>
      </section>

      {/* Form + Offices */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#0c4a6e] mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                <FaCheckCircle className="text-5xl text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-emerald-700 mb-2">Message Sent!</h3>
                <p className="text-emerald-600">
                  Thank you for contacting Triphealer. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0369a1] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 or Gulf number"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0369a1] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0369a1] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Country / Location
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. Saudi Arabia, UAE, India"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0369a1] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Type of Enquiry <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0369a1] focus:border-transparent bg-white"
                  >
                    <option value="">Select enquiry type</option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Please describe your requirement in detail..."
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0369a1] focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0c4a6e] text-white py-3 rounded-lg font-semibold hover:bg-[#082f49] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Offices */}
          <div>
            <h2 className="text-2xl font-bold text-[#0c4a6e] mb-6">Our Offices</h2>
            <div className="space-y-6">
              {officeInfo.map((office) => (
                <div
                  key={office.title}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <h3 className="font-bold text-[#0c4a6e]">{office.title}</h3>
                      <p className="text-sm text-slate-500">{office.city}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600 text-sm">
                    <FaMapMarkerAlt className="text-[#0369a1] mt-1 shrink-0" />
                    <span>{office.address}</span>
                  </div>
                </div>
              ))}

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-3">
                <h3 className="font-bold text-[#0c4a6e] mb-2">Contact Details</h3>
                <a href="tel:+919953889465" className="flex items-center gap-3 text-slate-600 text-sm hover:text-[#0369a1] transition-colors">
                  <FaPhone className="text-[#0369a1] shrink-0" />
                  +91 9953889465
                </a>
                <a href="tel:+919891542452" className="flex items-center gap-3 text-slate-600 text-sm hover:text-[#0369a1] transition-colors">
                  <FaPhone className="text-[#0369a1] shrink-0" />
                  +91 98915 42452
                </a>
                <a href="mailto:ashhar.info1@gmail.com" className="flex items-center gap-3 text-slate-600 text-sm hover:text-[#0369a1] transition-colors">
                  <FaEnvelope className="text-[#0369a1] shrink-0" />
                  ashhar.info1@gmail.com
                </a>
                <a
                  href="https://wa.me/919953889465"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 text-sm hover:text-green-600 transition-colors"
                >
                  <FaWhatsapp className="text-green-600 shrink-0" />
                  WhatsApp: +91 9953889465
                </a>
              </div>

              {/* Services Quick Links */}
              <div className="bg-[#0c4a6e] text-white rounded-xl p-6">
                <h3 className="font-bold mb-4">Our Services</h3>
                <div className="space-y-2">
                  {[
                    { href: "/gulf-visas", label: "Gulf Work Visa Services" },
                    { href: "/recruitment", label: "Overseas Recruitment" },
                    { href: "/medical-treatment", label: "Medical Treatment in India" },
                    { href: "/travel-support", label: "Travel & Support" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 text-sky-200 text-sm hover:text-white transition-colors"
                    >
                      <span className="text-sky-400">›</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
