"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPackage } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";
import { FaIndustry, FaBullseye, FaStar, FaCheckCircle, FaBolt } from "react-icons/fa";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; size: number; left: number; top: number; duration: number; delay: number; isPrimary: boolean }>>([]);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure true client-side mount without sync state update issues
    const timer = setTimeout(() => setLoaded(true), 50);
    
    // Generate random values for particles only on client to prevent hydration mismatch
    const generatedParticles = [...Array(12)].map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
      isPrimary: i % 3 === 0,
    }));
    setParticles(generatedParticles);

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#080e1a" }}>
      {/* Background Image with Parallax */}
      <div ref={parallaxRef} style={{ position: "absolute", inset: 0, willChange: "transform" }}>
        <Image
          src="/hero-bg.png"
          alt="Industrial Factory"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", opacity: 0.35 }}
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(8,14,26,0.95) 0%, rgba(15,61,94,0.85) 40%, rgba(8,14,26,0.6) 100%)",
      }} />

      {/* Animated Particles */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {particles.map((p) => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.isPrimary ? "var(--secondary)" : "rgba(255,255,255,0.3)",
              borderRadius: "50%",
              left: `${p.left}%`,
              top: `${p.top}%`,
              animation: `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Content */}
      <div className="container-custom" style={{ position: "relative", zIndex: 2, paddingTop: "clamp(60px, 10vh, 120px)", paddingBottom: "60px" }}>
        <div className="responsive-grid-900" style={{ display: "grid", gap: "40px", alignItems: "center" }}>
          {/* Left Column */}
          <div style={{ 
            opacity: loaded ? 1 : 0, 
            transform: loaded ? "translateY(0)" : "translateY(30px)", 
            transition: "all 0.8s ease",
            textAlign: "inherit" // Handled by CSS for mobile
          }} className="hero-text-container">
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(230,57,70,0.15)", border: "1px solid rgba(230,57,70,0.3)",
              color: "#ff8589", padding: "8px 18px", borderRadius: "50px", marginBottom: "24px",
              fontSize: "0.8rem", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase",
              fontFamily: "'Poppins', sans-serif",
            }}>
              <MdOutlineVerified size={14} />
              Premium Machinery Manufacturer • Est. 2019
            </div>

            {/* Heading */}
            <h1 style={{ color: "white", fontSize: "clamp(1.75rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px", fontFamily: "'Poppins', sans-serif" }}>
              Premium{" "}
              <span style={{ color: "var(--secondary)" }}>Bottle Packaging</span>
              <br className="hidden-mobile" />
              Machines &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #90caf9, #42a5f5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Spare Parts
              </span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: 1.6, marginBottom: "32px", maxWidth: "520px" }}>
              Engineering excellence since 2019. We design, manufacture, and supply state-of-the-art bottle packaging machines trusted by 500+ businesses across India.
            </p>

            {/* CTA Buttons */}
            <div className="btn-group-responsive" style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/products" className="btn-primary" style={{ fontSize: "0.95rem" }}>
                <FiPackage size={18} />
                View Products
              </Link>
              <Link href="/contact" className="btn-outline" style={{ fontSize: "0.95rem" }}>
                Get Free Quote
                <FiArrowRight size={18} />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust-badges">
              {[
                { icon: <FaIndustry />, label: "500+ Machines", sub: "Delivered" },
                { icon: <FaBullseye />, label: "5+ Years", sub: "Experience" },
                { icon: <FaStar />, label: "200+ Clients", sub: "Satisfied" },
              ].map((badge, i) => (
                <div key={i} className="trust-badge-item">
                  <div className="trust-badge-icon">
                    {badge.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div className="trust-badge-label" style={{ whiteSpace: "nowrap" }}>{badge.label}</div>
                    <div className="trust-badge-sub">{badge.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Machine Visual */}
          <div
            style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease 0.3s",
            }}
            className="hero-visual-container"
          >
            <div style={{ position: "relative", width: "480px", maxWidth: "100%" }}>
              {/* Glow */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "350px", height: "350px",
                background: "radial-gradient(circle, rgba(230,57,70,0.15) 0%, transparent 70%)",
                borderRadius: "50%",
              }} />

              {/* Machine Image */}
              <div
                className="animate-float"
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "24px",
                  padding: "30px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Image
                  src="/filling-machine.png"
                  alt="Bottle Filling Machine"
                  width={420}
                  height={380}
                  style={{ objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(230,57,70,0.2))" }}
                />
              </div>

              {/* Floating Cards */}


              <div
                style={{
                  position: "absolute", bottom: "30px", left: "-20px",
                  background: "rgba(230,57,70,0.95)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  display: "flex", alignItems: "center", gap: "10px",
                  animation: "float 3.5s ease-in-out infinite 0.5s",
                  boxShadow: "0 8px 32px rgba(230,57,70,0.3)",
                }}
              >
                <div style={{ fontSize: "1.4rem", color: "#ffd700", display: "flex", alignItems: "center" }}>
                  <FaBolt />
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "0.85rem", fontFamily: "'Poppins', sans-serif" }}>Fast Delivery</div>
                  <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.72rem" }}>30-Day Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
