import Link from "next/link";
import {
  FaPassport,
  FaFileAlt,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaClock,
} from "react-icons/fa";
import { MdVerified, MdSupportAgent } from "react-icons/md";

const gulfCountries = [
  {
    flag: "🇸🇦",
    name: "Saudi Arabia",
    title: "Saudi Work Visa",
    desc: "Work visas for construction, healthcare, oil & gas, hospitality and other sectors in the Kingdom of Saudi Arabia.",
    color: "border-green-200 bg-green-50",
    iconBg: "bg-green-100",
  },
  {
    flag: "🇦🇪",
    name: "UAE",
    title: "UAE Employment Visa",
    desc: "Employment visas for Dubai, Abu Dhabi, Sharjah and all Emirates. Covering skilled and unskilled categories.",
    color: "border-red-200 bg-red-50",
    iconBg: "bg-red-100",
  },
  {
    flag: "🇶🇦",
    name: "Qatar",
    title: "Qatar Work Visa",
    desc: "Work permits for Qatar's booming infrastructure, hospitality, construction and industrial sectors.",
    color: "border-purple-200 bg-purple-50",
    iconBg: "bg-purple-100",
  },
  {
    flag: "🇰🇼",
    name: "Kuwait",
    title: "Kuwait Work Visa",
    desc: "Employment visas for Kuwait covering oil & gas, healthcare, engineering and general labor categories.",
    color: "border-sky-200 bg-sky-50",
    iconBg: "bg-sky-100",
  },
  {
    flag: "🇴🇲",
    name: "Oman",
    title: "Oman Work Visa",
    desc: "Work visas for Oman's construction, tourism, retail and industrial sectors with full documentation support.",
    color: "border-orange-200 bg-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    flag: "🇧🇭",
    name: "Bahrain",
    title: "Bahrain Work Visa",
    desc: "Employment permits for Bahrain covering finance, hospitality, construction and skilled trade positions.",
    color: "border-amber-200 bg-amber-50",
    iconBg: "bg-amber-100",
  },
];

const visaProcess = [
  {
    step: "01",
    title: "Document Preparation",
    desc: "We guide you to gather all necessary documents — passport, photos, educational certificates, and medical reports.",
  },
  {
    step: "02",
    title: "Application Submission",
    desc: "We submit the visa application to the respective embassy with accurate information and complete documentation.",
  },
  {
    step: "03",
    title: "Embassy Processing",
    desc: "We track your application status and liaise with the embassy for any additional requirements or clarifications.",
  },
  {
    step: "04",
    title: "Visa Stamping",
    desc: "Once approved, we guide you through passport submission and visa stamping at the respective Gulf consulate.",
  },
  {
    step: "05",
    title: "Pre-Departure Support",
    desc: "We provide orientation on travel documents, medical fitness certificates, and joining instructions.",
  },
];

const docServices = [
  "Visa Application Filing",
  "Embassy Cover Letter Drafting",
  "Document Attestation Guidance",
  "Medical Fitness Certificate Assistance",
  "Police Clearance Certificate Support",
  "Contract Verification",
  "Work Permit Assistance",
  "Consulate Appointment Booking",
];

export default function GulfVisasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#0c4a6e] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sky-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Gulf Work Visas</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <FaPassport className="text-4xl text-sky-300" />
              <h1 className="text-4xl font-bold">Gulf Work Visa Services</h1>
            </div>
            <p className="text-sky-100 text-lg leading-relaxed">
              Complete work visa processing for all major Gulf countries. We handle every step — from
              documentation to embassy submission — so you can focus on your new opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Country Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Countries We Cover</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We process work visas for all 6 major Gulf Cooperation Council (GCC) countries.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gulfCountries.map((country) => (
              <div
                key={country.name}
                className={`rounded-xl border p-6 ${country.color} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 ${country.iconBg} rounded-full flex items-center justify-center text-2xl`}>
                    {country.flag}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0c4a6e] text-lg">{country.title}</h3>
                    <p className="text-sm text-slate-500">{country.name}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{country.desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-[#0369a1] text-sm font-medium mt-4 hover:underline"
                >
                  Enquire Now <FaArrowRight className="text-xs" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Our Visa Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              A simple, transparent step-by-step process to get your Gulf work visa approved.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {visaProcess.map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center">
                <div className="w-12 h-12 bg-[#0c4a6e] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#0c4a6e] mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Support */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-4">Visa Documentation Support</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Proper documentation is the key to a successful visa application. Our experienced team
              ensures every document is correctly prepared, attested and submitted.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {docServices.map((service) => (
                <div key={service} className="flex items-center gap-2 text-slate-700 text-sm">
                  <FaCheckCircle className="text-[#059669] shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 flex gap-4">
              <FaFileAlt className="text-3xl text-[#0369a1] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#0c4a6e] mb-2">Embassy Process Guidance</h3>
                <p className="text-slate-600 text-sm">
                  We guide you through the exact requirements for each Gulf country's embassy — saving
                  you time and avoiding rejections.
                </p>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 flex gap-4">
              <MdVerified className="text-3xl text-[#059669] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#0c4a6e] mb-2">High Approval Rate</h3>
                <p className="text-slate-600 text-sm">
                  Our thorough pre-submission checks and expert knowledge of Gulf visa requirements
                  ensure a high visa approval success rate.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex gap-4">
              <FaClock className="text-3xl text-[#b45309] shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-[#0c4a6e] mb-2">Fast Processing</h3>
                <p className="text-slate-600 text-sm">
                  We work efficiently to ensure your application is processed as quickly as possible
                  without compromising on accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#0c4a6e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <MdSupportAgent className="text-5xl text-sky-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Need Visa Assistance?</h2>
          <p className="text-sky-100 mb-6">
            Contact our visa experts today. We'll guide you through the entire process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919953889465"
              className="flex items-center gap-2 bg-white text-[#0c4a6e] px-5 py-2.5 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
            >
              <FaPhone /> +91 9953889465
            </a>
            <a
              href="mailto:ashhar.info1@gmail.com"
              className="flex items-center gap-2 border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#0369a1] transition-colors"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
