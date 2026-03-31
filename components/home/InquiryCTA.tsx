"use client";
import Link from "next/link";
import { FiArrowRight, FiPhone, FiMail, FiCheckCircle, FiClipboard } from "react-icons/fi";
import { FaWhatsapp, FaRocket, FaWrench } from "react-icons/fa";

export default function InquiryCTA() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)",
      }}
    >
      {/* Pattern */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.07) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      {/* Glow effects */}
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white", padding: "8px 20px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'Poppins', sans-serif", marginBottom: "24px" }}>
          <FiMail style={{ marginRight: "4px" }} /> Get In Touch
        </div>

        <h2 style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, fontFamily: "'Poppins', sans-serif", marginBottom: "20px", lineHeight: 1.1 }}>
          Ready to Upgrade Your
          <br />
          <span style={{ color: "#fbbf24" }}>Packaging Line?</span>
        </h2>

        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "620px", margin: "0 auto 48px", fontFamily: "'Inter', sans-serif" }}>
          Get a free consultation and custom quote for your production requirements. Our experts will design the perfect packaging solution for your business.
        </p>

        {/* CTA Buttons */}
        <div className="btn-group-responsive" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "white",
              color: "var(--primary)",
              padding: "16px 36px",
              borderRadius: "50px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)"; }}
          >
            <FiArrowRight size={20} />
            Send Inquiry Now
          </Link>

          <a
            href="https://wa.me/919725397262?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20machines."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#25D366",
              color: "white",
              padding: "16px 36px",
              borderRadius: "50px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 30px rgba(37,211,102,0.3)",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.background = "#1db954"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.background = "#25D366"; }}
          >
            <FaWhatsapp size={22} />
            WhatsApp Us
          </a>

          <a
            href="tel:+919725397262"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "rgba(255,255,255,0.12)",
              color: "white",
              padding: "16px 36px",
              borderRadius: "50px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
            onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)"; }}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
          >
            <FiPhone size={18} />
            Call Us Now
          </a>
        </div>

        {/* Features Strip */}
        <div style={{ display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { icon: <FiCheckCircle style={{ color: "#25D366" }} />, text: "Free Consultation" },
            { icon: <FiClipboard style={{ color: "#fbb034" }} />, text: "Custom Quotes" },
            { icon: <FaRocket style={{ color: "#ff4757" }} />, text: "Quick Response" },
            { icon: <FaWrench style={{ color: "#1e90ff" }} />, text: "After Sales Support" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1rem" }}>{item.icon}</span>
              <span style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
