"use client";
import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { FaIndustry, FaCogs, FaMicroscope, FaWrench, FaBuilding, FaTruck } from "react-icons/fa";

const infrastructure = [
  { icon: <FaIndustry />, title: "20,000 Sq.Ft Facility", desc: "Our main manufacturing plant" },
  { icon: <FaCogs />, title: "CNC Machining Centers", desc: "12 state-of-the-art CNC machining centers" },
  { icon: <FaMicroscope />, title: "Quality Control Lab", desc: "In-house metrology" },
  { icon: <FaWrench />, title: "Fabrication Workshop", desc: "Fully equipped fabrication shop" },
  { icon: <FaBuilding />, title: "Assembly Area", desc: "Clean, organized assembly floor" },
  { icon: <FaTruck />, title: "Dispatch & Logistics", desc: "Dedicated packaging and dispatch zone" },
];

export default function InfrastructureClient() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: "12px", fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "white" }}>Infrastructure</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, fontFamily: "'Poppins', sans-serif", marginBottom: "16px" }}>
            Our Infrastructure
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
            State-of-the-art manufacturing facility built for precision, quality, and scale.
          </p>
        </div>
      </section>

      {/* Main Image + Overview */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-custom">
          <div className="infra-hero-grid" style={{ marginBottom: "80px" }}>
            <div>
              <span className="section-badge"><FaIndustry style={{ marginRight: "6px" }} /> Our Facility</span>
              <h2 className="section-title">World-Class Manufacturing<br /><span style={{ color: "var(--secondary)" }}>Infrastructure</span></h2>
              <div className="red-line" />
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px" }}>
                Our manufacturing facility in Ahmedabad&apos;s GIDC industrial area is equipped with the latest machinery and technology to ensure every machine we produce meets international quality standards.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "20,000 sq.ft main manufacturing plant",
                  "12 CNC machining centers + 5 lathes",
                  "Full fabrication and welding shop",
                  "In-house quality control laboratory",
                  "Overhead crane capacity up to 5 tons",
                  "Dedicated training and demonstration area",
                ].map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FiCheckCircle size={16} style={{ color: "var(--secondary)", flexShrink: 0 }} />
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="factory-image-grid">
              <div style={{ display: "grid", gap: "10px" }}>
                <Image src="/Factory1.jpeg" alt="Factory Floor" width={400} height={300} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
                <Image src="/Factory2.jpeg" alt="Assembly Unit" width={400} height={300} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
              </div>
              <div style={{ display: "grid", gap: "10px" }}>
                <Image src="/Factory3.jpeg" alt="Machinery" width={400} height={300} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
                <Image src="/Factory4.jpeg" alt="Dispatch Area" width={400} height={300} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
              </div>
            </div>
          </div>

          {/* Infrastructure Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {infrastructure.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg-secondary)",
                  borderRadius: "16px",
                  padding: "28px",
                  border: "1px solid var(--border)",
                  transition: "all 0.35s ease",
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "white";
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 40px rgba(15,61,94,0.1)";
                  el.style.borderColor = "var(--primary)";
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--bg-secondary)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = "var(--border)";
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "16px", color: "var(--secondary)" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--primary)", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Gallery */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-custom">
          <div className="precision-grid" style={{ marginBottom: "60px" }}>
            <div className="infra-side-gallery" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ display: "grid", gap: "16px" }}>
                <div style={{ position: "relative", height: "clamp(180px, 30vw, 300px)", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", padding: "12px" }}>
                  <Image src={encodeURI("/New 3.jpeg")} alt="Precision Component" fill style={{ objectFit: "contain" }} />
                </div>
                <div style={{ position: "relative", height: "clamp(120px, 20vw, 200px)", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", padding: "12px" }}>
                  <Image src={encodeURI("/New 5.jpeg")} alt="Machined Part" fill style={{ objectFit: "contain" }} />
                </div>
              </div>
              <div style={{ display: "grid", gap: "16px", paddingTop: "clamp(0px, 5vw, 40px)" }}>
                <div style={{ position: "relative", height: "clamp(120px, 20vw, 200px)", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", padding: "12px" }}>
                  <Image src={encodeURI("/New 7.jpeg")} alt="High Quality Spares" fill style={{ objectFit: "contain" }} />
                </div>
                <div style={{ position: "relative", height: "clamp(180px, 30vw, 300px)", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)", background: "white", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", padding: "12px" }}>
                  <Image src={encodeURI("/New 4.jpeg")} alt="Technical Spare" fill style={{ objectFit: "contain" }} />
                </div>
              </div>
            </div>
            <div>
              <span className="section-badge"><FaCogs style={{ marginRight: "6px" }} /> Precision Engineering</span>
              <h2 className="section-title">Superior Quality<br /><span style={{ color: "var(--secondary)" }}>Spare Parts</span></h2>
              <div className="red-line" />
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "24px" }}>
                Beyond building complete machines, we specialize in manufacturing high-precision spare parts and assemblies. Our CNC machining capabilities allow us to maintain tolerances within microns.
              </p>
              <div className="inner-spec-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div style={{ background: "var(--bg-secondary)", padding: "16px", borderRadius: "12px", borderLeft: "4px solid var(--secondary)" }}>
                  <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.9rem" }}>Surface Finish</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Superior Ra value for food grade</div>
                </div>
                <div style={{ background: "var(--bg-secondary)", padding: "16px", borderRadius: "12px", borderLeft: "4px solid var(--secondary)" }}>
                  <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.9rem" }}>Interchangeability</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>100% standard fitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--primary)", padding: "70px 0", textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "2rem", marginBottom: "16px" }}>
            Visit Our Factory
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
            We welcome clients to visit our manufacturing facility for a live demonstration.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Visit <FiArrowRight size={16} />
          </Link>
        </div>
      </section>

      <style jsx>{`
        .infra-hero-grid, .precision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .factory-image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        @media (max-width: 1024px) {
          .infra-hero-grid, .precision-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .precision-grid {
            display: flex !important;
            flex-direction: column-reverse;
          }

          .infra-side-gallery {
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
          }

          .infra-hero-grid > div:first-child, .precision-grid > div:last-child {
            order: 2;
          }
          
          .infra-hero-grid > div:last-child, .precision-grid > div:first-child {
            order: 1;
          }

          .infra-hero-grid .red-line {
            margin: 16px auto 24px !important;
          }

          .infra-hero-grid div[style*="flexDirection: column"] {
            align-items: center;
          }
        }

        @media (max-width: 640px) {
          .factory-image-grid, .inner-spec-grid, .infra-side-gallery {
            grid-template-columns: 1fr !important;
          }
          
          .infra-side-gallery > div {
            padding-top: 0 !important;
            gap: 16px !important;
          }

          .infra-side-gallery div[style*="height"] {
            height: 250px !important;
          }

          .factory-image-grid div[style*="height"] {
            height: 200px !important;
          }
          
          .section-padding {
            padding: 60px 0 !important;
          }

          h1 {
            font-size: 2.2rem !important;
          }

          h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </>
  );
}
