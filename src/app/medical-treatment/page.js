import Link from "next/link";
import {
  FaHospital,
  FaHeartbeat,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaUserMd,
  FaAmbulance,
  FaFlask,
  FaStar,
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdLocalHospital,
  MdSupportAgent,
  MdTranslate,
} from "react-icons/md";
import { GiKidneys, GiBrain } from "react-icons/gi";

const treatments = [
  {
    icon: <FaHeartbeat className="text-3xl text-red-500" />,
    title: "Heart Treatment",
    desc: "Cardiac surgery, bypass, angioplasty and heart valve replacement at India's top cardiac centers.",
    bg: "bg-red-50 border-red-200",
  },
  {
    icon: <GiKidneys className="text-3xl text-yellow-600" />,
    title: "Kidney Treatment",
    desc: "Kidney transplant, dialysis management and nephrology consultations at expert centers.",
    bg: "bg-yellow-50 border-yellow-200",
  },
  {
    icon: <GiBrain className="text-3xl text-purple-600" />,
    title: "Cancer Consultation",
    desc: "Oncology treatment including chemotherapy, radiation therapy and surgical oncology.",
    bg: "bg-purple-50 border-purple-200",
  },
  {
    icon: <FaUserMd className="text-3xl text-sky-600" />,
    title: "Orthopedic Treatment",
    desc: "Joint replacement, spine surgery, sports injuries and orthopedic rehabilitation.",
    bg: "bg-sky-50 border-sky-200",
  },
  {
    icon: <FaFlask className="text-3xl text-pink-600" />,
    title: "IVF / Fertility Support",
    desc: "In vitro fertilization, fertility evaluations and reproductive health treatments.",
    bg: "bg-pink-50 border-pink-200",
  },
  {
    icon: <FaHospital className="text-3xl text-emerald-600" />,
    title: "General Surgery",
    desc: "Appendectomy, hernia repair, gallbladder removal and other common surgical procedures.",
    bg: "bg-emerald-50 border-emerald-200",
  },
  {
    icon: <FaAmbulance className="text-3xl text-orange-600" />,
    title: "Dental Treatment",
    desc: "Dental implants, root canal, teeth whitening and complete oral care solutions.",
    bg: "bg-orange-50 border-orange-200",
  },
  {
    icon: <MdHealthAndSafety className="text-3xl text-teal-600" />,
    title: "Eye Treatment",
    desc: "Cataract surgery, LASIK, glaucoma treatment and other ophthalmology services.",
    bg: "bg-teal-50 border-teal-200",
  },
];

const supportServices = [
  {
    icon: <FaHospital className="text-xl text-[#0369a1]" />,
    title: "Hospital Appointment Booking",
    points: [
      "Access to top hospitals in India",
      "Specialist doctor appointments",
      "Fast scheduling support",
      "Second opinion consultations",
    ],
  },
  {
    icon: <MdLocalHospital className="text-xl text-[#0369a1]" />,
    title: "Medical Visa Support",
    points: [
      "Medical visa guidance",
      "Invitation letter from hospital",
      "Supporting document help",
      "Travel coordination",
    ],
  },
  {
    icon: <MdSupportAgent className="text-xl text-[#0369a1]" />,
    title: "Patient Care Support",
    points: [
      "Arabic / English interpreter",
      "Follow-up appointments",
      "Pharmacy assistance",
      "24/7 patient helpline",
    ],
  },
  {
    icon: <MdTranslate className="text-xl text-[#0369a1]" />,
    title: "Translation Services",
    points: [
      "Medical report translation",
      "Doctor-patient communication",
      "Insurance document help",
      "Report summary in Arabic",
    ],
  },
];

const topHospitals = [
  "AIIMS (All India Institute of Medical Sciences)",
  "Apollo Hospitals",
  "Fortis Healthcare",
  "Max Healthcare",
  "Medanta – The Medicity",
  "Narayana Health",
  "Manipal Hospitals",
  "Kokilaben Dhirubhai Ambani Hospital",
];

export default function MedicalTreatmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#065f46] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-emerald-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Medical Treatment in India</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <MdLocalHospital className="text-4xl text-emerald-300" />
              <h1 className="text-4xl font-bold">Trusted Medical Treatment in India for Gulf Patients</h1>
            </div>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Helping Gulf patients receive quality and affordable treatment in India with complete
              support — from hospital booking to travel, accommodation and patient care.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 bg-[#047857] px-4 py-2 rounded-lg text-sm">
                <FaStar className="text-yellow-400" />
                <span>Top Hospitals</span>
              </div>
              <div className="flex items-center gap-2 bg-[#047857] px-4 py-2 rounded-lg text-sm">
                <MdTranslate className="text-emerald-300" />
                <span>Arabic Interpreter</span>
              </div>
              <div className="flex items-center gap-2 bg-[#047857] px-4 py-2 rounded-lg text-sm">
                <FaCheckCircle className="text-emerald-300" />
                <span>End-to-End Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-6 px-4 bg-[#047857] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-semibold text-emerald-100">
            🇮🇳 Healthcare &amp; Treatment Assistance for Gulf Visitors in India
          </p>
          <p className="text-sm text-emerald-200 mt-1">
            We bridge the gap between Gulf patients and world-class Indian healthcare.
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Treatment Assistance</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We connect Gulf patients with top specialists for a wide range of medical conditions
              at India's most trusted hospitals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((t) => (
              <div
                key={t.title}
                className={`rounded-xl border p-6 ${t.bg} hover:shadow-md transition-shadow`}
              >
                <div className="mb-3">{t.icon}</div>
                <h3 className="font-bold text-[#0c4a6e] text-base mb-2">{t.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Our Support Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Complete assistance from the moment you decide to travel to India for treatment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-[#0c4a6e] mb-3">{s.title}</h3>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-slate-600 text-sm">
                      <FaCheckCircle className="text-[#059669] shrink-0 text-xs" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-4">Top Hospitals in India</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We have partnerships and working relationships with India's most reputed hospitals,
              ensuring our Gulf patients get access to the best doctors and facilities.
            </p>
            <div className="space-y-3">
              {topHospitals.map((hospital, i) => (
                <div key={hospital} className="flex items-center gap-3 bg-slate-50 rounded-lg px-4 py-3">
                  <div className="w-7 h-7 bg-[#0c4a6e] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{hospital}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-[#065f46] text-white rounded-2xl p-8">
              <FaHeartbeat className="text-5xl text-emerald-300 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Why Choose India for Treatment?</h3>
              <ul className="space-y-3">
                {[
                  "World-class hospitals with latest technology",
                  "Cost 60–80% lower than Gulf & Western countries",
                  "Highly qualified English-speaking doctors",
                  "Shorter waiting times for procedures",
                  "No language barrier with our interpreter support",
                  "Warm and personalized patient care",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-emerald-100 text-sm">
                    <FaCheckCircle className="text-emerald-300 shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#0c4a6e] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#082f49] transition-colors w-full"
            >
              Book Hospital Appointment <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#065f46] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <MdHealthAndSafety className="text-5xl text-emerald-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Need Medical Treatment Assistance?</h2>
          <p className="text-emerald-100 mb-6">
            Contact our medical support team today. We'll guide you through every step.
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
