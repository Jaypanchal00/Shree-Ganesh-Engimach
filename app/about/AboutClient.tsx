"use client";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { FaTrophy, FaIndustry, FaHardHat, FaGlobe, FaBullseye, FaLightbulb, FaGem, FaCalendarAlt } from "react-icons/fa";

const timeline = [
  { year: "2019", title: "Company Founded", desc: "Shree Ganesh Engimach was founded with a vision to manufacture quality bottle packaging machines." },
  { year: "2021", title: "Expanded Facility", desc: "Moved to a larger manufacturing unit with advanced CNC machinery to meet growing demand." },
  { year: "2023", title: "Digital Transformation", desc: "Launched smart HMI controls, IoT-enabled machines, and launched our digital presence." },
  { year: "2024", title: "200+ Clients & Growing", desc: "Proud to serve 200+ businesses with 500+ machines delivered across all major industries." },
];

const achievements = [
  { icon: <FaTrophy />, title: "ISO 9001:2015", desc: "Certified Quality Management" },
  { icon: <FaIndustry />, title: "20,000 sq.ft", desc: "Manufacturing Facility" },
  { icon: <FaHardHat />, title: "50+ Skilled", desc: "Engineers & Technicians" },
  { icon: <FaGlobe />, title: "Pan India", desc: "Service Network" },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: "12px", fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "white" }}>About Us</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, fontFamily: "'Poppins', sans-serif", marginBottom: "16px" }}>
            Our Story & Vision
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
            Years of engineering excellence in bottle packaging machinery.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-custom">
          <div className="responsive-grid-900" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "70px", alignItems: "center" }}>
            <div>
              <span className="section-badge"><FaIndustry style={{ marginRight: "6px", color: "var(--secondary)" }} /> About Us</span>
              <h2 className="section-title">
                Engineering Your Success
                <br />
                <span style={{ color: "var(--secondary)" }}>Since 2019</span>
              </h2>
              <div className="red-line" />
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "20px" }}>
                Shree Ganesh Engimach is a premier manufacturer of bottle packaging machines and spare parts, headquartered in Ahmedabad, Gujarat. Founded in 2019 by a team of passionate engineers, we have grown to become one of India&apos;s most trusted names in packaging machinery.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "32px" }}>
                Our state-of-the-art manufacturing facility spans 20,000 sq.ft and houses advanced CNC machining centers, a quality control lab, and an experienced team of 50+ engineers and technicians dedicated to delivering machines that exceed expectations.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {["In-house design and R&D team", "Advanced CNC machining capabilities", "Strict 5-stage quality control process", "Pan-India service and support network"].map((pt, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <FiCheckCircle size={18} style={{ color: "var(--secondary)", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <div style={{ display: "grid", gap: "10px" }}>
                <Image src="/Factory1.jpeg" alt="Factory Floor" width={300} height={400} style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }} />
                <Image src="/Factory3.jpeg" alt="Assembly Unit" width={300} height={200} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }} />
              </div>
              <div style={{ display: "grid", gap: "10px", paddingTop: "30px" }}>
                <Image src="/Factory2.jpeg" alt="Machinery" width={300} height={200} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }} />
                <Image src="/Factory4.jpeg" alt="Dispatch Area" width={300} height={400} style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }} />
              </div>
            </div>
              {/* Badge overlay */}
              <div style={{ position: "absolute", bottom: "-20px", left: "-20px", background: "var(--secondary)", color: "white", padding: "20px 24px", borderRadius: "16px", boxShadow: "0 8px 30px rgba(230,57,70,0.3)" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "2.5rem", lineHeight: 1 }}>5+</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.875rem" }}>Years of<br />Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section style={{ background: "var(--bg-secondary)", padding: "60px 0" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {achievements.map((ach, i) => (
              <div key={i} style={{ background: "white", borderRadius: "16px", padding: "28px 24px", textAlign: "center", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", transition: "all 0.3s ease" }}
                onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"; }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "12px", color: "var(--secondary)" }}>{ach.icon}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "var(--primary)", marginBottom: "6px" }}>{ach.title}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{ach.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="section-badge"><FaBullseye style={{ marginRight: "6px" }} /> Our Values</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Mission & Vision</h2>
            <div className="red-line-center" />
          </div>
          <div className="responsive-grid-900" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
            {[
              { icon: <FaBullseye />, title: "Our Mission", color: "var(--primary)", bg: "rgba(15,61,94,0.06)", text: "To design, manufacture, and deliver world-class bottle packaging machines that enhance our clients' production efficiency, reduce costs, and build long-term profitable partnerships." },
              { icon: <FaLightbulb />, title: "Our Vision", color: "var(--secondary)", bg: "rgba(230,57,70,0.06)", text: "To be recognized as India's leading packaging machinery brand by 2030, known globally for quality, innovation, and customer-first service that sets industry benchmarks." },
              { icon: <FaGem />, title: "Our Values", color: "#7c3aed", bg: "rgba(124,58,237,0.06)", text: "Quality without compromise. We believe every machine we build should outlast our clients' expectations and every relationship we build should outlast our machines." },
            ].map((item, i) => (
              <div key={i} style={{ background: item.bg, borderRadius: "20px", padding: "36px 28px", border: `1px solid ${item.color}20`, textAlign: "center" }}
                onMouseOver={(e) => (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px ${item.color}15`}
                onMouseOut={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
              >
                <div style={{ fontSize: "3rem", marginBottom: "20px", color: item.color }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: item.color, marginBottom: "16px" }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.9rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span className="section-badge"><FaCalendarAlt style={{ marginRight: "6px", color: "var(--secondary)" }} /> Our Journey</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Company Timeline</h2>
            <div className="red-line-center" />
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-line" />
                <div className="timeline-dot" style={{ background: i % 2 === 0 ? "var(--gradient-primary)" : "var(--gradient-secondary)" }}>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800 }}>{item.year.slice(2)}</span>
                </div>
                <div style={{ flex: 1, background: "white", borderRadius: "14px", padding: "clamp(16px, 4vw, 26px)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid var(--border)", marginBottom: "4px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <span style={{ background: "var(--secondary)", color: "white", padding: "3px 12px", borderRadius: "50px", fontSize: "0.78rem", fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
                      {item.year}
                    </span>
                    <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--primary)" }}>{item.title}</h4>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--primary)", padding: "70px 0", textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "2rem", marginBottom: "16px" }}>
            Ready to Partner With Us?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
            Join 200+ businesses that trust Shree Ganesh Engimach for their packaging solutions.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us Today <FiArrowRight size={16} />
          </Link>
        </div>
      </section>

    </>
  );
}
