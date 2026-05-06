import Link from "next/link";
import {
  FaPassport,
  FaUserTie,
  FaHospital,
  FaPlane,
  FaCheckCircle,
  FaHandshake,
  FaStar,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { MdSecurity, MdSupportAgent, MdHealthAndSafety } from "react-icons/md";
import { GiAsianLantern, GiBarbarian } from "react-icons/gi";


const heroStats = [
  { value: "500+", label: "Successful Placements" },
  { value: "6", label: "Gulf Countries Covered" },
  { value: "50+", label: "Partner Hospitals" },
  { value: "1000+", label: "Happy Clients" },
];

const mainServices = [
  {
    icon: <FaPassport className="text-3xl text-[#0369a1]" />,
    title: "Gulf Work Visa Services",
    description:
      "End-to-end visa processing for Saudi Arabia, UAE, Qatar, Kuwait, Oman & Bahrain. Embassy guidance and documentation support.",
    href: "/gulf-visas",
    color: "border-sky-200",
    bg: "bg-sky-50",
  },
  {
    icon: <FaUserTie className="text-3xl text-[#0c4a6e]" />,
    title: "Overseas Recruitment",
    description:
      "Skilled & unskilled manpower supply. CV shortlisting, interviews, trade tests and complete deployment support.",
    href: "/recruitment",
    color: "border-blue-200",
    bg: "bg-blue-50",
  },
  {
    icon: <FaHospital className="text-3xl text-[#065f46]" />,
    title: "Medical Treatment in India",
    description:
      "Top hospital appointments, specialist care, medical visa guidance and full patient support for Gulf visitors.",
    href: "/medical-treatment",
    color: "border-emerald-200",
    bg: "bg-emerald-50",
  },
  {
    icon: <FaPlane className="text-3xl text-[#b45309]" />,
    title: "Travel & Joining Support",
    description:
      "Flight booking, airport pickup, hotel arrangements, insurance and departure assistance for workers and patients.",
    href: "/travel-support",
    color: "border-amber-200",
    bg: "bg-amber-50",
  },
];

const whyUs = [
  {
    icon: <FaHandshake className="text-2xl text-[#0369a1]" />,
    title: "Trusted Partner",
    desc: "Years of experience connecting Gulf employers with verified manpower and guiding Gulf patients for healthcare in India.",
  },
  {
    icon: <MdSecurity className="text-2xl text-[#0369a1]" />,
    title: "Verified & Compliant",
    desc: "All recruitment and visa processes follow proper legal channels with full documentation support.",
  },
  {
    icon: <MdSupportAgent className="text-2xl text-[#0369a1]" />,
    title: "End-to-End Support",
    desc: "From visa application to arrival, we handle every step so you can focus on what matters.",
  },
  {
    icon: <MdHealthAndSafety className="text-2xl text-[#0369a1]" />,
    title: "Dedicated Medical Help",
    desc: "Specialized team to assist Gulf patients with hospital bookings, translations and follow-up care in India.",
  },
  {
    icon: <FaGlobe className="text-2xl text-[#0369a1]" />,
    title: "Pan-Gulf Coverage",
    desc: "We cover all major Gulf countries — Saudi Arabia, UAE, Qatar, Kuwait, Oman and Bahrain.",
  },
  {
    icon: <FaStar className="text-2xl text-[#0369a1]" />,
    title: "Quality Assurance",
    desc: "Rigorous background verification and trade tests ensure only qualified candidates are placed.",
  },
];

const gulfCountries = [
  { flag: "🇸🇦", name: "Saudi Arabia" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇶🇦", name: "Qatar" },
  { flag: "🇰🇼", name: "Kuwait" },
  { flag: "🇴🇲", name: "Oman" },
  { flag: "🇧🇭", name: "Bahrain" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#0c4a6e] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0369a1] text-sky-100 text-sm px-4 py-1.5 rounded-full mb-6">
                <GiBarbarian />
                <span>Trusted Medical Tourism &amp; Manpower Consultant</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Your Complete Gulf Services Partner in India
              </h1>
              <p className="text-sky-100 text-lg leading-relaxed mb-8">
                We connect Gulf employers with skilled manpower and also assist Gulf families seeking
                medical treatment in India. Complete visa, travel, and support services under one roof.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/recruitment"
                  className="flex items-center gap-2 bg-[#059669] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#047857] transition-colors"
                >
                  Recruitment Services <FaArrowRight className="text-sm" />
                </Link>
                <Link
                  href="/medical-treatment"
                  className="flex items-center gap-2 bg-white text-[#0c4a6e] px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
                >
                  Medical Treatment <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0369a1] rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sky-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gulf Countries Banner */}
      <section className="bg-[#082f49] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sky-300 font-semibold text-sm">We Serve All Gulf Countries:</span>
            {gulfCountries.map((c) => (
              <div key={c.name} className="flex items-center gap-2 text-sm">
                <span className="text-2xl">{c.flag}</span>
                <span className="text-sky-100">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Our Core Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From Gulf work visas to medical care in India — we provide comprehensive services
              tailored to meet your every need.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className={`${service.bg} border ${service.color} rounded-xl p-6 hover:shadow-lg transition-all group`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-bold text-[#0c4a6e] text-lg mb-2 group-hover:text-[#0369a1] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-1 text-[#0369a1] text-sm font-medium mt-4">
                  Learn more <FaArrowRight className="text-xs" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Why Choose Triphealer?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Helping Gulf patients receive quality and affordable treatment in India with complete support.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0c4a6e] mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Service Highlight */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Manpower Card */}
          <div className="bg-[#0c4a6e] text-white rounded-2xl p-8">
            <FaUserTie className="text-4xl text-sky-300 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Overseas Recruitment & Manpower Supply</h3>
            <p className="text-sky-100 leading-relaxed mb-4">
              We supply verified skilled and unskilled workers across all Gulf countries. Our
              rigorous selection process ensures quality manpower for construction, hospitality,
              healthcare and more.
            </p>
            <ul className="space-y-2 text-sky-100 text-sm mb-6">
              {["Skilled & Unskilled Workers", "Construction Labor & Technicians", "Hospitality & Office Staff", "Complete CV-to-Deployment Support"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FaCheckCircle className="text-sky-400 shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link
              href="/recruitment"
              className="inline-flex items-center gap-2 bg-white text-[#0c4a6e] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-sky-50 transition-colors"
            >
              View Recruitment Services <FaArrowRight />
            </Link>
          </div>

          {/* Medical Card */}
          <div className="bg-[#065f46] text-white rounded-2xl p-8">
            <FaHospital className="text-4xl text-emerald-300 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Medical Treatment in India for Gulf Patients</h3>
            <p className="text-emerald-100 leading-relaxed mb-4">
              We help Gulf families access world-class medical care in India at affordable prices.
              From booking top specialists to arranging accommodation — we handle everything.
            </p>
            <ul className="space-y-2 text-emerald-100 text-sm mb-6">
              {["Heart, Kidney & Cancer Treatment", "IVF / Fertility & Orthopedic Care", "Medical Visa & Travel Coordination", "Arabic Interpreter & Patient Support"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-400 shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link
              href="/medical-treatment"
              className="inline-flex items-center gap-2 bg-white text-[#065f46] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-emerald-50 transition-colors"
            >
              View Medical Services <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#0369a1] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-sky-100 text-lg mb-8">
            Contact us today for Gulf work visa assistance, recruitment services, or medical treatment
            guidance in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919953889465"
              className="flex items-center gap-2 bg-white text-[#0369a1] px-6 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
            >
              <FaPhoneAlt />
              Call Now
            </a>
            <a
              href="mailto:ashhar.info1@gmail.com"
              className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0c4a6e] transition-colors"
            >
              <FaEnvelope />
              Email Us
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#065f46] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#047857] transition-colors"
            >
              Contact Page <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
