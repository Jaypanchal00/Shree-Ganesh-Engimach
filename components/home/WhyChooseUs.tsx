"use client";
import { useRef, useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaIndustry, FaBullseye, FaRocket, FaTools, FaHandshake, FaClipboardCheck, FaStar, FaCheckCircle } from "react-icons/fa";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

const features = [
  {
    icon: <FaIndustry />,
    title: "High Quality Machines",
    description: "Every machine undergoes strict quality control and testing before dispatch, ensuring premium performance and longevity.",
    color: "linear-gradient(135deg, #111827, #374151)",
  },
  {
    icon: <FaBullseye />,
    title: "Custom Manufacturing",
    description: "We tailor machines to your specific production requirements, bottle sizes, filling volumes, and industry standards.",
    color: "linear-gradient(135deg, #2563EB, #60A5FA)",
  },
  {
    icon: <FaRocket />,
    title: "Fast Delivery",
    description: "Streamlined manufacturing processes enable us to deliver standard machines within 30 days, ensuring minimal downtime.",
    color: "linear-gradient(135deg, #7c3aed, #a855f7)",
  },
  {
    icon: <FaTools />,
    title: "After Sales Support",
    description: "24/7 technical support, on-site commissioning, and preventive maintenance services to keep your production running.",
    color: "linear-gradient(135deg, #0891b2, #06b6d4)",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted By Businesses",
    description: "200+ satisfied clients across pharmaceuticals, food & beverage, chemicals, and FMCG sectors across India.",
    color: "linear-gradient(135deg, #059669, #10b981)",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Turnkey Solutions",
    description: "Complete end-to-end packaging line solutions from concept design to installation, training, and ongoing support.",
    color: "linear-gradient(135deg, #d97706, #f59e0b)",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section className="section-padding" style={{ background: "white" }} ref={sectionRef}>
      <div className="container-custom">
        <div className="responsive-grid-900" style={{ display: "grid", gap: "clamp(32px, 5vw, 80px)", alignItems: "center" }}>
          {/* Left */}
          <div>
            <span className="section-badge"><FaStar style={{ marginRight: "6px", color: "var(--secondary)" }} /> Why Choose Us</span>
            <h2 className="section-title">
              Engineering You Can
              <br />
              <span style={{ color: "var(--secondary)" }}>Trust & Rely On</span>
            </h2>
            <div className="red-line" />
            <p className="section-subtitle" style={{ marginBottom: "32px" }}>
              Years of manufacturing excellence have made Shree Ganesh Engimach the preferred partner for bottle packaging solutions across industries.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Premium Grade Manufacturing",
                "In-house R&D and Design Team",
                "Precision Engineering with CNC Machining",
                "Strict Pre-delivery Quality Testing",
                "Pan India Installation & Service Network",
                "Competitive Pricing with No Compromise on Quality",
                "GST Invoice & Complete Documentation",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <FiCheckCircle size={18} style={{ color: "var(--secondary)", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>{point}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div style={{ display: "flex", gap: "16px", marginTop: "36px", flexWrap: "wrap" }}>
              {["Make in India", "MSME Reg.", "Premium Quality"].map((cert) => (
                <div key={cert} style={{
                  padding: "10px 18px",
                  background: "linear-gradient(135deg, #f0f4f8, #e8f0fa)",
                  borderRadius: "10px",
                  border: "1px solid rgba(17,24,39,0.15)",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  color: "var(--primary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                  <FaCheckCircle style={{ color: "#25D366" }} /> {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Feature Grid */}
          <div className="responsive-grid-auto" style={{ gap: "clamp(12px, 2vw, 20px)", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
                  padding: "clamp(16px, 3vw, 28px) clamp(12px, 2vw, 22px)",
                  background: "white",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  transition: "all 0.35s ease",
                  cursor: "default",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${i * 0.08}s`,
                  transitionProperty: "all",
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 40px rgba(17,24,39,0.12)";
                  el.style.borderColor = "var(--primary)";
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                  el.style.borderColor = "var(--border)";
                }}
              >
                <div style={{
                  width: "44px", height: "44px",
                  background: feature.color,
                  borderRadius: "12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem",
                  color: "white",
                  marginBottom: "12px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                }}>
                  {feature.icon}
                </div>
                <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "var(--primary)", marginBottom: "6px", lineHeight: 1.3 }}>
                  {feature.title}
                </h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", lineHeight: 1.5 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
