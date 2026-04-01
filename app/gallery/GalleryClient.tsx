"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiX, FiArrowLeft, FiArrowRight, FiGrid, FiList } from "react-icons/fi";

const categories = ["All", "Factory Photos", "Machinery", "Spare Parts"];

const galleryData = [
  { id: 1, src: "/Factory1.jpeg", alt: "Main Production Floor", category: "Factory Photos", title: "Main Manufacturing Unit" },
  { id: 2, src: "/Factory2.jpeg", alt: "Production Line Area", category: "Factory Photos", title: "Industrial Production Area" },
  { id: 3, src: "/Factory3.jpeg", alt: "Machining Workstation", category: "Factory Photos", title: "Heavy Duty Machining Unit" },
  { id: 4, src: "/Factory4.jpeg", alt: "Fabrication Unit", category: "Factory Photos", title: "Fabrication & Welding Setup" },
  { id: 5, src: "/Factory5.jpeg", alt: "Quality Control Lab", category: "Factory Photos", title: "Final Quality Check Zone" },
  { id: 6, src: "/real-filling-machine.jpeg", alt: "Automatic Liquid Filling Machine", category: "Machinery", title: "Automatic Liquid Filling Machine" },
  { id: 7, src: "/real-capping-machine.jpeg", alt: "Inline Capping Machine", category: "Machinery", title: "Automatic Inline Capping Machine" },
  { id: 8, src: "/real-ropp-capping.jpeg", alt: "ROPP Capping Machine", category: "Machinery", title: "Rotary ROPP Capping Machine" },
  { id: 9, src: "/real-screw-capping.jpeg", alt: "Screw Capping Machine", category: "Machinery", title: "Screw Cap Closing Machine" },
  { id: 10, src: "/real-machine1.jpeg", alt: "Volumetric Filling Machine", category: "Machinery", title: "Volumetric Piston Filling Machine" },
  { id: 11, src: "/real-machine2.jpeg", alt: "Bottle Rinsing Machine", category: "Machinery", title: "Rotary Bottle Rinsing Machine" },
  { id: 12, src: "/New 1jpeg.jpeg", alt: "ROPP Capping Head", category: "Spare Parts", title: "High-Precision Capping Head" },
  { id: 13, src: "/New2.jpeg", alt: "Machine Component", category: "Spare Parts", title: "Precision Machined Component" },
  { id: 14, src: "/New 3.jpeg", alt: "Shop Environment", category: "Factory Photos", title: "In-House Assembly Line" },
  { id: 15, src: "/New 4.jpeg", alt: "Engineering Unit", category: "Factory Photos", title: "Precision Engineering Shop" },
  { id: 16, src: "/New 5.jpeg", alt: "Tool Setup", category: "Spare Parts", title: "Machined Part Setup" },
  { id: 17, src: "/New 6.jpeg", alt: "Spindle Assembly", category: "Spare Parts", title: "Main Spindle Component" },
  { id: 18, src: "/New 7.jpeg", alt: "Machined Gear", category: "Spare Parts", title: "Custom Machined Gear" },
  { id: 19, src: "/New 8.jpeg", alt: "Technical Assembly", category: "Spare Parts", title: "Advanced Spare Assembly" },
  { id: 20, src: "/real-star-plate.jpeg", alt: "Star Wheel", category: "Spare Parts", title: "Star Wheel & Neck Guide" },
  { id: 21, src: "/real-capping-assembly.jpeg", alt: "Capping Assembly", category: "Spare Parts", title: "Capping Head Assembly" },
  { id: 22, src: "/real-giva-assembly.jpeg", alt: "Machine Assembly", category: "Machinery", title: "Assembly & Fabrication Unit" },
  { id: 23, src: "/real-assembly.jpeg", alt: "Parts Assembly", category: "Machinery", title: "Precision Parts Assembly" },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryData.filter((item) => activeCategory === "All" || item.category === activeCategory);

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeCategory]);

  const closeLightbox = () => setLightboxIndex(null);
  const prev = useCallback(() => setLightboxIndex((i) => (i === null || i === 0 ? filtered.length - 1 : i - 1)), [filtered.length]);
  const next = useCallback(() => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length)), [filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [filtered.length, prev, next]);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: "12px", fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "white" }}>Gallery</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, fontFamily: "'Poppins', sans-serif", marginBottom: "16px" }}>
            Photo Gallery
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
            A visual tour of our manufacturing facility and machinery.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ background: "white", padding: "24px 0", borderBottom: "1px solid var(--border)", position: "sticky", top: "80px", zIndex: 100, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <div className="container-custom" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "10px 24px", borderRadius: "50px",
                  border: `2px solid ${activeCategory === cat ? "var(--primary)" : "var(--border)"}`,
                  background: activeCategory === cat ? "var(--primary)" : "white",
                  color: activeCategory === cat ? "white" : "var(--text-secondary)",
                  fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.85rem",
                  cursor: "pointer", transition: "all 0.3s ease",
                  boxShadow: activeCategory === cat ? "0 4px 12px rgba(15,23,42,0.2)" : "none"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ background: "var(--bg-secondary)", padding: "60px 0" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="gallery-item-card"
                onClick={() => setLightboxIndex(i)}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  border: "1px solid var(--border)",
                  transition: "all 0.4s ease",
                  position: "relative"
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.12)";
                  el.style.borderColor = "var(--primary)";
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
                  el.style.borderColor = "var(--border)";
                }}
              >
                <div style={{ 
                  position: "relative", 
                  width: "100%", 
                  height: "300px", 
                  overflow: "hidden", 
                  background: item.category !== "Factory Photos" ? "linear-gradient(135deg, #f1f5f9 0%, #ffffff 100%)" : "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: item.category !== "Factory Photos" ? "20px" : "0"
                }}>
                  <Image 
                    src={encodeURI(item.src)} 
                    alt={item.alt} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    style={{ 
                      objectFit: item.category !== "Factory Photos" ? "contain" : "cover", 
                      transition: "transform 0.6s ease",
                      filter: item.category !== "Factory Photos" ? "drop-shadow(0 10px 25px rgba(15,61,94,0.12))" : "none"
                    }} 
                    loading="lazy" 
                  />
                  <div className="card-overlay" style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
                    opacity: 0, transition: "opacity 0.3s ease"
                  }} />
                </div>
                <div style={{ padding: "20px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--secondary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{item.category}</div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "var(--primary)", fontSize: "1rem", margin: 0 }}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div style={{ position: "relative", maxWidth: "90vw", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
              <Image 
                src={encodeURI(filtered[lightboxIndex].src)} 
                alt={filtered[lightboxIndex].alt} 
                width={1200} 
                height={800} 
                style={{ objectFit: "contain", maxHeight: "75vh", borderRadius: "16px", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }} 
              />
              <button 
                onClick={closeLightbox} 
                style={{ position: "absolute", top: "-20px", right: "-20px", background: "white", color: "var(--primary)", border: "none", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", zIndex: 10 }}
              >
                <FiX size={24} />
              </button>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "24px" }}>
              <button onClick={prev} style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: "50px", height: "50px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(10px)" }}>
                <FiArrowLeft size={24} />
              </button>
              <div style={{ textAlign: "center" }}>
                <div style={{ color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}>{filtered[lightboxIndex].title}</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{lightboxIndex + 1} / {filtered.length}</div>
              </div>
              <button onClick={next} style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: "50px", height: "50px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(10px)" }}>
                <FiArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-item-card:hover .card-overlay { opacity: 1; }
        .gallery-item-card:hover img { transform: scale(1.05); }
      `}</style>
    </>
  );
}
