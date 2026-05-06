import Link from "next/link";
import {
  FaPlane,
  FaHotel,
  FaShuttleVan,
  FaFileContract,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaShieldAlt,
  FaMedkit,
} from "react-icons/fa";
import { MdAirplaneTicket, MdSupportAgent, MdLocationOn } from "react-icons/md";

const travelServices = [
  {
    icon: <MdAirplaneTicket className="text-3xl text-sky-600" />,
    title: "Flight Ticket Booking",
    desc: "We arrange affordable and convenient flight bookings for workers and patients — both one-way and round trip.",
    color: "border-sky-200 bg-sky-50",
    points: [
      "Economy & business class options",
      "Direct and connecting flights",
      "Group travel arrangements",
      "Last-minute bookings",
    ],
  },
  {
    icon: <FaHotel className="text-3xl text-amber-600" />,
    title: "Hotel & Apartment Booking",
    desc: "Budget to premium accommodation near hospitals and work sites, tailored to your requirements.",
    color: "border-amber-200 bg-amber-50",
    points: [
      "Near-hospital accommodations",
      "Long & short-stay options",
      "Affordable budget rooms",
      "Family-friendly facilities",
    ],
  },
  {
    icon: <FaShuttleVan className="text-3xl text-green-600" />,
    title: "Airport Pickup & Transfer",
    desc: "Reliable airport pickup and local transport arrangements so you reach your destination safely.",
    color: "border-green-200 bg-green-50",
    points: [
      "Airport pickup on arrival",
      "Hospital-to-hotel transfers",
      "Local city transportation",
      "24/7 availability",
    ],
  },
  {
    icon: <FaShieldAlt className="text-3xl text-purple-600" />,
    title: "Insurance Help",
    desc: "Guidance on travel insurance and health insurance to ensure you are protected throughout your journey.",
    color: "border-purple-200 bg-purple-50",
    points: [
      "Travel insurance guidance",
      "Medical insurance support",
      "Policy document help",
      "Claim assistance",
    ],
  },
  {
    icon: <FaMedkit className="text-3xl text-red-500" />,
    title: "Medical Assistance",
    desc: "Medical fitness certificates, pre-departure health checks and emergency medical contact support.",
    color: "border-red-200 bg-red-50",
    points: [
      "Medical fitness certificate",
      "Pre-travel health check",
      "Emergency contact support",
      "Pharmacy assistance",
    ],
  },
  {
    icon: <MdSupportAgent className="text-3xl text-teal-600" />,
    title: "Departure Support",
    desc: "Complete pre-departure guidance including documentation, airport check-in support and joining instructions.",
    color: "border-teal-200 bg-teal-50",
    points: [
      "Pre-departure orientation",
      "Document checklist",
      "Airport assistance",
      "Joining instructions",
    ],
  },
];

const patientTravelServices = [
  {
    icon: <MdLocationOn className="text-xl text-[#0369a1]" />,
    title: "Airport Pickup",
    desc: "Our team receives patients and families at the airport and takes them directly to hospital or hotel.",
  },
  {
    icon: <FaHotel className="text-xl text-[#0369a1]" />,
    title: "Hotel / Apartment Booking",
    desc: "Comfortable and affordable accommodation options near major Indian hospitals.",
  },
  {
    icon: <FaHeadset className="text-xl text-[#0369a1]" />,
    title: "Translator Assistance",
    desc: "Arabic-English interpreters available to assist during doctor consultations and hospital procedures.",
  },
  {
    icon: <FaShuttleVan className="text-xl text-[#0369a1]" />,
    title: "Local Transport Help",
    desc: "Dedicated transport for hospital visits, diagnostic centers and local travel throughout the stay.",
  },
];

export default function TravelSupportPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#0c4a6e] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sky-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span>Travel Support</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <FaPlane className="text-4xl text-sky-300" />
              <h1 className="text-4xl font-bold">Travel &amp; Joining Support</h1>
            </div>
            <p className="text-sky-100 text-lg leading-relaxed">
              Comprehensive travel support for Gulf-bound workers and Gulf patients visiting India
              for medical treatment. We handle flights, hotels, transfers and all travel logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Travel Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Our Travel Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Everything you need for a smooth and hassle-free journey — whether you are heading to
              the Gulf for work or coming to India for medical treatment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelServices.map((service) => (
              <div
                key={service.title}
                className={`rounded-xl border p-6 ${service.color} hover:shadow-md transition-shadow`}
              >
                <div className="mb-3">{service.icon}</div>
                <h3 className="font-bold text-[#0c4a6e] text-lg mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-1.5">
                  {service.points.map((p) => (
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

      {/* Patient Travel Support */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4a6e] mb-3">Travel &amp; Stay Support for Medical Patients</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              For Gulf patients traveling to India for treatment, we provide door-to-door support
              throughout their medical journey.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {patientTravelServices.map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-[#0c4a6e] mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* For Workers */}
          <div className="bg-[#0c4a6e] text-white rounded-2xl p-8">
            <FaPlane className="text-4xl text-sky-300 mb-4" />
            <h3 className="text-2xl font-bold mb-4">For Gulf-Bound Workers</h3>
            <p className="text-sky-100 leading-relaxed mb-4 text-sm">
              We ensure workers travel safely and confidently to their Gulf destination with all
              required documents and a clear plan for their first few days.
            </p>
            <ul className="space-y-3">
              {[
                "Flight booking with best available fares",
                "Travel document verification pre-departure",
                "Employer contact and reporting instructions",
                "Insurance enrollment before departure",
                "Emergency contact in destination country",
                "Ongoing support during initial settlement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sky-100 text-sm">
                  <FaCheckCircle className="text-sky-300 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Patients */}
          <div className="bg-[#065f46] text-white rounded-2xl p-8">
            <FaMedkit className="text-4xl text-emerald-300 mb-4" />
            <h3 className="text-2xl font-bold mb-4">For Gulf Patients Visiting India</h3>
            <p className="text-emerald-100 leading-relaxed mb-4 text-sm">
              Our patient travel team makes sure Gulf patients and their families feel comfortable
              and well-supported during their entire stay in India.
            </p>
            <ul className="space-y-3">
              {[
                "Flight & accommodation booking",
                "Airport pickup and drop",
                "Hospital appointment coordination",
                "Arabic interpreter during consultations",
                "Local sightseeing & dining support",
                "Return travel arrangement after discharge",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-emerald-100 text-sm">
                  <FaCheckCircle className="text-emerald-300 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-[#0369a1] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FaFileContract className="text-5xl text-sky-200 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Need Travel Assistance?</h2>
          <p className="text-sky-100 mb-6">
            Get in touch and we will plan every aspect of your travel — from tickets to accommodation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919953889465"
              className="flex items-center gap-2 bg-white text-[#0369a1] px-5 py-2.5 rounded-lg font-semibold hover:bg-sky-50 transition-colors"
            >
              <FaPhone /> +91 9953889465
            </a>
            <a
              href="mailto:ashhar.info1@gmail.com"
              className="flex items-center gap-2 border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#0c4a6e] transition-colors"
            >
              <FaEnvelope /> Email Us
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#065f46] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#047857] transition-colors"
            >
              Contact Form <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
