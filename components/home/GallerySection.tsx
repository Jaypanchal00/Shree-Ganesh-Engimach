"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiX, FiArrowLeft, FiArrowRight, FiPlus, FiMaximize2 } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";

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

const galleryItems = [
  { src: "/real-filling-machine.jpeg", alt: "Automatic Liquid Filling Machine", label: "Automatic Liquid Filling Machine", category: "Machine" },
  { src: "/real-capping-machine.jpeg", alt: "Inline Capping Machine", label: "Automatic Inline Capping Machine", category: "Machine" },
  { src: "/real-ropp-capping.jpeg", alt: "ROPP Capping Machine", label: "Rotary ROPP Capping Machine", category: "Machine" },
  { src: "/real-screw-capping.jpeg", alt: "Screw Capping Machine", label: "Screw Cap Closing Machine", category: "Machine" },
  { src: "/real-machine2.jpeg", alt: "Bottle Rinsing Machine", label: "Rotary Bottle Rinsing Machine", category: "Machine" },
  { src: "/Factory1.jpeg", alt: "Manufacturing Facility", label: "Our Manufacturing Facility", category: "Facility" },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  const closeLightbox = () => setLightboxIndex(null);
  const prev = useCallback(() => setLightboxIndex((i) => (i === null || i === 0 ? galleryItems.length - 1 : i - 1)), []);
  const next = useCallback(() => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % galleryItems.length)), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  return (
    <section className="section-padding" style={{ background: "#050a12", position: "relative", overflow: "hidden" }} ref={sectionRef}>
      {/* Decorative elements */}
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: "400px", height: "400px", background: "rgba(37,99,235,0.05)", borderRadius: "50%", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "400px", height: "400px", background: "rgba(37,99,235,0.03)", borderRadius: "50%", filter: "blur(80px)" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(66,165,245,0.1)", border: "1px solid rgba(66,165,245,0.2)", color: "#90caf9", padding: "8px 20px", borderRadius: "50px", marginBottom: "20px", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
            <FaCamera /> Gallery Showcase
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", fontFamily: "'Poppins', sans-serif", marginBottom: "20px" }}>
            Our Factory & Products
          </h2>
          <div style={{ width: "80px", height: "4px", background: "#42a5f5", margin: "0 auto 24px", borderRadius: "2px" }} />
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
            A glimpse inside our world-class manufacturing facility and high-performance product showcase.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "24px",
          }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setLightboxIndex(i)}
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                height: "300px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s cubic-bezier(0.2, 1, 0.3, 1) ${i * 0.1}s`,
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.05)",
                background: "#f8f9fa"
              }}
              className="group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: i === 0 ? "cover" : "contain", padding: i === 0 ? "0" : "15px", transition: "transform 0.8s cubic-bezier(0.2, 1, 0.3, 1)" }}
                loading="lazy"
                className="gallery-img"
              />
              
              {/* Overlay Content */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(5,10,18,0.9) 0%, rgba(5,10,18,0.4) 50%, transparent 100%)",
                opacity: 0,
                transition: "all 0.4s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "30px",
              }} className="gallery-overlay">
                <div style={{ transform: "translateY(20px)", transition: "all 0.4s ease" }} className="overlay-text">
                  <span style={{ 
                    display: "inline-block",
                    padding: "4px 12px",
                    background: "#42a5f5",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    marginBottom: "10px"
                  }}>
                    {item.category}
                  </span>
                  <h3 style={{ color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.25rem", margin: 0 }}>
                    {item.label}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
                    <FiMaximize2 /> Click to enlarge
                  </div>
                </div>
              </div>

              {/* Hover icon */}
              <div style={{
                position: "absolute", top: "20px", right: "20px",
                width: "44px", height: "44px",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "white",
                opacity: 0,
                transform: "scale(0.8)",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255,255,255,0.1)"
              }} className="plus-icon">
                <FiPlus size={20} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <Link href="/gallery" className="btn-primary" style={{ padding: "16px 40px" }}>
            View All Showcase
            <FiArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div style={{ 
          position: "fixed", inset: 0, background: "rgba(3,7,18,0.98)", 
          zIndex: 10000, display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px", backdropFilter: "blur(10px)"
        }} onClick={closeLightbox}>
          <div style={{ position: "relative", width: "100%", maxWidth: "1100px", height: "80vh" }} onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              fill
              style={{ objectFit: "contain" }}
            />
            
            {/* Controls */}
            <button onClick={closeLightbox} style={{ position: "absolute", top: "-50px", right: "0", background: "none", color: "white", border: "none", cursor: "pointer", fontSize: "2rem" }}>
              <FiX />
            </button>
            <button onClick={prev} style={{ position: "absolute", left: "-60px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", width: "50px", height: "50px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "0.3s" }} onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")} onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
              <FiArrowLeft size={24} />
            </button>
            <button onClick={next} style={{ position: "absolute", right: "-60px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", width: "50px", height: "50px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "0.3s" }} onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")} onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
              <FiArrowRight size={24} />
            </button>
            
            <div style={{ position: "absolute", bottom: "-50px", left: 0, right: 0, textAlign: "center" }}>
              <h4 style={{ color: "white", fontSize: "1.1rem", margin: "0 0 5px" }}>{galleryItems[lightboxIndex].label}</h4>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>{lightboxIndex + 1} / {galleryItems.length}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .group:hover .gallery-img { transform: scale(1.1); }
        .group:hover .gallery-overlay { opacity: 1; }
        .group:hover .overlay-text { transform: translateY(0); }
        .group:hover .plus-icon { opacity: 1; transform: scale(1); }
        @media (max-width: 1200px) {
          button[onClick*="prev"], button[onClick*="next"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
