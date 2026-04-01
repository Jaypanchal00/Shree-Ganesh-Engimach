"use client";
import { useRef, useState, useEffect } from "react";
import { FaDraftingCompass, FaCogs, FaScrewdriver, FaMicroscope, FaTruck, FaIndustry } from "react-icons/fa";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

const steps = [
  {
    number: "01",
    title: "Design & Engineering",
    icon: <FaDraftingCompass />,
    description: "Our expert engineers create detailed CAD designs and production drawings tailored to your specifications and production requirements.",
    color: "var(--primary)",
  },
  {
    number: "02",
    title: "Precision Machining",
    icon: <FaCogs />,
    description: "CNC machining centers and precision lathes ensure every component meets exact tolerances for optimal performance.",
    color: "var(--secondary)",
  },
  {
    number: "03",
    title: "Assembly",
    icon: <FaScrewdriver />,
    description: "Skilled technicians assemble machines in our clean room environment following strict SOPs and quality guidelines.",
    color: "#7c3aed",
  },
  {
    number: "04",
    title: "Testing & QC",
    icon: <FaMicroscope />,
    description: "Each machine undergoes comprehensive factory acceptance tests including performance, speed, and accuracy validation.",
    color: "#0891b2",
  },
  {
    number: "05",
    title: "Delivery & Commissioning",
    icon: <FaTruck />,
    description: "Safe packaging, nationwide delivery, on-site installation, operator training, and post-installation support included.",
    color: "#059669",
  },
];

export default function ManufacturingProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section
      style={{ background: "linear-gradient(135deg, #f0f4f8 0%, #e8f0f8 100%)", padding: "100px 0", position: "relative", overflow: "hidden" }}
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute", right: "-100px", top: "50%", transform: "translateY(-50%)",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(15,61,94,0.05) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span className="section-badge"><FaIndustry style={{ marginRight: "6px", color: "var(--secondary)" }} /> Our Process</span>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Manufacturing Excellence
          </h2>
          <div className="red-line-center" />
          <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto" }}>
            From concept to delivery — our proven 5-step process ensures every machine meets the highest standards.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="timeline-item"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.5s ease-out",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="timeline-line" />
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{ background: step.color, boxShadow: `0 4px 15px ${step.color}44` }}
              >
                {step.number}
              </div>

              {/* Content */}
              <div
                style={{
                  flex: 1,
                  background: "white",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  zIndex: 2
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-5px)";
                  el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.1)";
                  el.style.borderColor = step.color;
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 10px 40px rgba(0,0,0,0.04)";
                  el.style.borderColor = "rgba(0,0,0,0.06)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
                  <div style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "12px", 
                    background: `${step.color}15`, 
                    color: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem"
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--primary)", margin: 0 }}>
                      {step.title}
                    </h3>
                  </div>
                  <div style={{
                    background: `${step.color}10`,
                    color: step.color,
                    padding: "6px 14px",
                    borderRadius: "50px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                    border: `1px solid ${step.color}20`
                  }}>
                    Step {step.number}
                  </div>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
