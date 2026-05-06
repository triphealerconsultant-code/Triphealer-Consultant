import Link from "next/link";
import {
  FaUserTie,
  FaHardHat,
  FaTools,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaClipboardList,
  FaUserCheck,
} from "react-icons/fa";
import { MdEngineering, MdBusiness, MdSupportAgent } from "react-icons/md";
import { GiWelder, GiElectric } from "react-icons/gi";

const workerCategories = [
  {
    icon: <FaHardHat className="text-2xl text-amber-600" />,
    title: "Construction Labor",
    workers: ["Masons & Carpenters", "Civil Workers", "Steel Fixers", "Scaffolders", "Laborers & Helpers"],
    bg: "bg-amber-50 border-amber-200",
  },
  {
    icon: <MdEngineering className="text-2xl text-sky-600" />,
    title: "Skilled Technicians",
    workers: ["Electricians", "Plumbers", "Welders", "Mechanics", "AC Technicians"],
    bg: "bg-sky-50 border-sky-200",
  },
  {
    icon: <FaTools className="text-2xl text-slate-600" />,
    title: "Drivers & Operators",
    workers: ["Heavy Vehicle Drivers", "Light Drivers", "Crane Operators", "Forklift Operators", "Equipment Operators"],
    bg: "bg-slate-50 border-slate-200",
  },
  {
    icon: <MdBusiness className="text-2xl text-purple-600" />,
    title: "Office & Admin Staff",
    workers: ["Office Assistants", "Data Entry Operators", "Receptionists", "HR Assistants", "Admin Executives"],
    bg: "bg-purple-50 border-purple-200",
  },
  {
    icon: <FaUserTie className="text-2xl text-blue-600" />,
    title: "Hospitality Staff",
    workers: ["Hotel Housekeeping", "Cleaners & Janitors", "Cooks & Helpers", "Laundry Staff", "Waiters"],
    bg: "bg-blue-50 border-blue-200",
  },
  {
    icon: <GiElectric className="text-2xl text-green-600" />,
    title: "Unskilled Workers",
    workers: ["General Helpers", "Warehouse Workers", "Loading/Unloading Staff", "Agricultural Workers", "Security Guards"],
    bg: "bg-green-50 border-green-200",
  },
];

const selectionProcess = [
  {
    icon: <FaClipboardList className="text-2xl text-[#0369a1]" />,
    title: "CV Shortlisting",
    desc: "We review and shortlist candidates based on job requirements, experience and qualifications.",
  },
  {
    icon: <FaUserCheck className="text-2xl text-[#0369a1]" />,
    title: "Interview Scheduling",
    desc: "We coordinate online or in-person interviews between candidates and Gulf employers.",
  },
  {
    icon: <FaTools className="text-2xl text-[#0369a1]" />,
    title: "Trade Test",
    desc: "Skilled workers undergo practical trade tests to verify their technical competency.",
  },
  {
    icon: <MdSupportAgent className="text-2xl text-[#0369a1]" />,
    title: "Background Verification",
    desc: "Complete background and reference checks to ensure candidates meet employer expectations.",
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

const docServices = [
  "Offer Letter Preparation",
  "Employment Contract Review",
  "Visa Application Filing",
  "Medical Fitness Examination",
  "Police Clearance Certificate",
  "Document Attestation",
  "Emigration Clearance (ECR)",
  "Insurance Enrollment",
];

export default function RecruitmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#0c4a6e] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sky-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Recruitment Services</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <FaUserTie className="text-4xl text-sky-300" />
              <h1 className="text-4xl font-bold">Overseas Recruitment &amp; Manpower Supply</h1>
            </div>
            <p className="text-sky-100 text-lg leading-relaxed">
              Reliable manpower supply for Gulf employers. We source, screen and deploy skilled and
              unskilled workers across all major Gulf countries with full documentation support.
            </p>
          </div>
        </div>
      </section>

      {/* Countries We Recruit For */}
      <section className="py-8 px-4 bg-[#082f49] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sky-300 font-semibold text-sm">Recruiting For:</span>
            {gulfCountries.map((c) => (
              <div key={c.name} className="flex items-center gap-2 text-sm">
                <span className="text-2xl">{c.flag}</span>
                <span className="text-sky-100">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worker Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Categories We Supply</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We supply manpower across a wide range of industries — from construction and
              technical trades to office and hospitality sectors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workerCategories.map((cat) => (
              <div key={cat.title} className={`rounded-xl border p-6 ${cat.bg} hover:shadow-md transition-shadow`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-[#0c4a6e] text-lg">{cat.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {cat.workers.map((worker) => (
                    <li key={worker} className="flex items-center gap-2 text-slate-600 text-sm">
                      <FaCheckCircle className="text-[#059669] shrink-0 text-xs" />
                      {worker}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Selection Process */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Candidate Selection Process</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our rigorous selection process ensures you receive only the most qualified and
              verified candidates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionProcess.map((step, i) => (
              <div key={step.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-[#0c4a6e] text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex justify-center mb-3">{step.icon}</div>
                <h3 className="font-semibold text-[#0c4a6e] text-center mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm text-center leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-4">Documentation Services</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We handle all the paperwork from contract preparation to emigration clearance, ensuring
              a smooth and hassle-free deployment process for both employers and workers.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {docServices.map((service) => (
                <div key={service} className="flex items-center gap-2 text-slate-700 text-sm">
                  <FaCheckCircle className="text-[#059669] shrink-0" />
                  {service}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0c4a6e] text-white px-5 py-2.5 rounded-lg font-semibold mt-6 hover:bg-[#082f49] transition-colors"
            >
              Contact Us for Manpower <FaArrowRight />
            </Link>
          </div>
          <div className="bg-[#0c4a6e] text-white rounded-2xl p-8">
            <GiWelder className="text-5xl text-sky-300 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Why Employers Choose Us</h3>
            <ul className="space-y-3">
              {[
                "Large database of pre-screened candidates",
                "Quick turnaround time for manpower mobilization",
                "Transparent process with regular updates",
                "All candidates medically fit and legally cleared",
                "Post-deployment support and follow-up",
                "Competitive and transparent pricing",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sky-100 text-sm">
                  <FaCheckCircle className="text-sky-300 shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#065f46] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Looking for Manpower? Contact Us Today</h2>
          <p className="text-emerald-100 mb-6">
            Tell us your requirements and we will match you with the right candidates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919953889465"
              className="flex items-center gap-2 bg-white text-[#065f46] px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              <FaPhone /> +91 9953889465
            </a>
            <a
              href="mailto:ashhar.info1@gmail.com"
              className="flex items-center gap-2 border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#047857] transition-colors"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
