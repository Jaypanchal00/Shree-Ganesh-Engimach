"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaIndustry, FaBullseye, FaStar, FaCheckCircle, FaBolt, FaHandshake } from "react-icons/fa";
import { FiArrowRight, FiPackage, FiSettings, FiAward, FiUsers, FiClock } from "react-icons/fi";
import { MdOutlineVerified } from "react-icons/md";

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
    <section style={{ 
      position: "relative", 
      minHeight: "100dvh", 
      display: "flex", 
      alignItems: "center", 
      overflow: "hidden", 
      background: "#010409",
      padding: "80px 0"
    }}>
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
        background: "radial-gradient(circle at 20% 50%, rgba(30, 58, 138, 0.4) 0%, transparent 60%), linear-gradient(135deg, rgba(8,14,26,0.98) 0%, rgba(15,23,42,0.95) 50%, rgba(30,58,138,0.4) 100%)",
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
      <div className="container-custom" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-main-grid">
          {/* Left Column */}
          <div style={{ 
            opacity: loaded ? 1 : 0, 
            transform: loaded ? "translateY(0)" : "translateY(30px)", 
            transition: "all 0.8s ease",
          }} className="hero-text-container">
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(230,57,70,0.15)", border: "1px solid rgba(230,57,70,0.3)",
              color: "#ff8589", padding: "8px 18px", borderRadius: "50px", marginBottom: "24px",
              fontSize: "0.75rem", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase",
              fontFamily: "'Poppins', sans-serif",
            }}>
              <MdOutlineVerified size={14} />
              Premium Machinery Manufacturer • Est. 2019
            </div>

            {/* Heading */}
            <h1 style={{ color: "white", fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px", fontFamily: "'Poppins', sans-serif" }}>
              Premium{" "}
              <span style={{ color: "var(--secondary)" }}>Bottle Packaging</span>
              <br className="hide-on-mobile" />
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

            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: 1.6, marginBottom: "32px", maxWidth: "550px" }}>
              Engineering excellence since 2019. We design, manufacture, and supply state-of-the-art bottle packaging machines trusted by 500+ businesses across India.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <Link href="/products" className="btn-primary">
                <FiPackage size={18} />
                View Products
              </Link>
              <Link href="/contact" className="btn-outline">
                Get Free Quote
                <FiArrowRight size={18} />
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust-grid">
              {[
                { icon: <FiSettings />, label: "500+ Machines", sub: "Delivered", color: "#3B82F6" },
                { icon: <FiAward />, label: "5+ Years", sub: "Experience", color: "#F59E0B" },
                { icon: <FiUsers />, label: "200+ Clients", sub: "Satisfied", color: "#10B981" },
              ].map((badge, i) => (
                <div 
                  key={i} 
                  className="hero-badge-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    background: "rgba(255,255,255,0.03)",
                    padding: "16px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.4s ease",
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${i * 0.15 + 0.5}s`,
                  }}
                  onMouseOver={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.07)";
                    el.style.borderColor = badge.color + "55";
                    el.style.transform = "translateY(-5px)";
                  }}
                  onMouseOut={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.03)";
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    width: "40px", height: "40px",
                    background: `${badge.color}15`,
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.2rem", color: badge.color,
                    border: `1px solid ${badge.color}30`,
                    flexShrink: 0
                  }}>
                    {badge.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ 
                      color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.85rem",
                      lineHeight: "1.2", whiteSpace: "nowrap"
                    }}>
                      {badge.label}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {badge.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Machine Visual */}
          <div
            style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              opacity: loaded ? 1 : 0, transform: loaded ? "scale(1)" : "scale(0.9)",
              transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
            }}
            className="hero-visual-container"
          >
            <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
              {/* Glow */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%", height: "80%",
                background: "radial-gradient(circle, rgba(230,57,70,0.15) 0%, transparent 70%)",
                borderRadius: "50%",
              }} />

              {/* Machine Image */}
              <div
                className="animate-float"
                style={{
                  position: "relative",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "32px",
                  padding: "clamp(15px, 5vw, 40px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <Image
                  src="/real-filling-machine.jpeg"
                  alt="Automatic Liquid Filling Machine"
                  width={450}
                  height={400}
                  style={{ width: "100%", height: "auto", objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(230,57,70,0.2))" }}
                />
              </div>

              {/* Floating Feature Card */}
              <div
                style={{
                  position: "absolute", bottom: "10%", left: "-5%",
                  background: "rgba(37, 99, 235, 0.95)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "16px",
                  padding: "12px 20px",
                  display: "flex", alignItems: "center", gap: "12px",
                  animation: "float 4s ease-in-out infinite 1s",
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)",
                  zIndex: 5
                }}
                className="floating-card-mobile"
              >
                <div style={{ fontSize: "1.5rem", color: "#ffd700", display: "flex", alignItems: "center" }}>
                  <FaBolt />
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif" }}>Fast Delivery</div>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem" }}>Worldwide Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-main-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .hero-trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
        }

        @media (max-width: 1100px) {
          .hero-main-grid {
            gap: 40px;
          }
        }

        @media (max-width: 992px) {
          .hero-main-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 80px;
          }
          .hero-text-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .hero-trust-grid {
            max-width: 650px;
          }
          .hero-visual-container {
            order: -1;
          }
          .hide-on-mobile {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .hero-trust-grid {
            grid-template-columns: 1fr;
          }
          .hero-badge-item {
            width: 100%;
          }
          .floating-card-mobile {
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            justify-content: center;
            animation: float 4s ease-in-out infinite 1s;
          }
          @keyframes float-mobile {
            0%, 100% { transform: translate(-50%, 0px); }
            50% { transform: translate(-50%, -10px); }
          }
        }

        @media (max-width: 480px) {
          .hero-cta-group > * {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
