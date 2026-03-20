"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiX, FiArrowLeft, FiArrowRight, FiGrid, FiList } from "react-icons/fi";

const categories = ["All", "Factory Photos", "Manufacturing Unit", "Machinery", "Product Showcase"];

const galleryData = [
  { src: "/real-filling-machine.jpeg", alt: "Automatic Liquid Filling Machine", category: "Product Showcase", title: "Automatic Liquid Filling Machine" },
  { src: "/real-capping-machine.jpeg", alt: "Inline Capping Machine", category: "Product Showcase", title: "Automatic Inline Capping Machine" },
  { src: "/real-ropp-capping.jpeg", alt: "ROPP Capping Machine", category: "Machinery", title: "Rotary ROPP Capping Machine" },
  { src: "/real-screw-capping.jpeg", alt: "Screw Capping Machine", category: "Machinery", title: "Screw Cap Closing Machine" },
  { src: "/real-capping-assembly.jpeg", alt: "Capping Assembly", category: "Manufacturing Unit", title: "Capping Head Assembly" },
  { src: "/real-machine1.jpeg", alt: "Volumetric Filling Machine", category: "Product Showcase", title: "Volumetric Piston Filling Machine" },
  { src: "/real-machine2.jpeg", alt: "Bottle Rinsing Machine", category: "Machinery", title: "Rotary Bottle Rinsing Machine" },
  { src: "/real-giva-assembly.jpeg", alt: "Machine Assembly", category: "Manufacturing Unit", title: "Assembly & Fabrication Unit" },
  { src: "/real-assembly.jpeg", alt: "Parts Assembly", category: "Manufacturing Unit", title: "Precision Parts Assembly" },
  { src: "/real-capping-head.jpeg", alt: "Capping Head", category: "Machinery", title: "ROPP Capping Head Detail" },
  { src: "/real-star-plate.jpeg", alt: "Star Wheel", category: "Machinery", title: "Star Wheel & Neck Guide" },
  { src: "/factory-interior.png", alt: "Factory Interior", category: "Factory Photos", title: "Manufacturing Facility" },
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [layout, setLayout] = useState<"masonry" | "grid">("masonry");

  const filtered = galleryData.filter((item) => activeCategory === "All" || item.category === activeCategory);

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
  }, [filtered.length]);

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
            A visual tour of our manufacturing facility and product range.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ background: "white", padding: "28px 0", borderBottom: "1px solid var(--border)", position: "sticky", top: "80px", zIndex: 100, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <div className="container-custom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 18px", borderRadius: "50px",
                  border: `2px solid ${activeCategory === cat ? "var(--primary)" : "var(--border)"}`,
                  background: activeCategory === cat ? "var(--primary)" : "white",
                  color: activeCategory === cat ? "white" : "var(--text-secondary)",
                  fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.82rem",
                  cursor: "pointer", transition: "all 0.3s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { icon: <FiGrid />, value: "grid" as const },
              { icon: <FiList />, value: "masonry" as const },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setLayout(btn.value)}
                style={{
                  width: "38px", height: "38px",
                  background: layout === btn.value ? "var(--primary)" : "var(--bg-secondary)",
                  color: layout === btn.value ? "white" : "var(--text-muted)",
                  border: "1px solid var(--border)", borderRadius: "8px",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
              >
                {btn.icon}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ background: "var(--bg-secondary)", padding: "60px 0" }}>
        <div className="container-custom">
          {layout === "masonry" ? (
            <div style={{ columns: "2 140px", gap: "12px" }}>
              {filtered.map((item, i) => (
                <div
                  key={i}
                  className="gallery-item"
                  onClick={() => setLightboxIndex(i)}
                  style={{
                    position: "relative",
                    borderRadius: "14px",
                    overflow: "hidden",
                    cursor: "pointer",
                    marginBottom: "16px",
                    breakInside: "avoid",
                    background: "var(--border)",
                  }}
                >
                  <Image src={item.src} alt={item.alt} width={500} height={300} style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.4s ease" }} loading="lazy" />
                  <div
                    style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(9,45,70,0.85) 0%, transparent 60%)",
                      opacity: 0, transition: "opacity 0.3s ease",
                      display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "20px",
                    }}
                    className="gallery-hover-overlay"
                  >
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem", fontFamily: "'Poppins', sans-serif", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>{item.category}</div>
                    <div style={{ color: "white", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
              {filtered.map((item, i) => (
                <div
                  key={i}
                  className="gallery-item"
                  onClick={() => setLightboxIndex(i)}
                  style={{
                    borderRadius: "14px", overflow: "hidden", cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)", background: "white", border: "1px solid var(--border)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; }}
                >
                  <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                    <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover", transition: "transform 0.4s ease" }} loading="lazy" />
                  </div>
                  <div style={{ padding: "16px" }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--secondary)", fontFamily: "'Poppins', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>{item.category}</div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "var(--primary)", fontSize: "0.9rem" }}>{item.title}</div>
                  </div>
                  <div
                    style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(9,45,70,0.4) 0%, transparent 60%)",
                      opacity: 0, transition: "opacity 0.3s ease",
                    }}
                    className="gallery-hover-overlay"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div style={{ position: "relative", maxWidth: "90vw" }} onClick={(e) => e.stopPropagation()}>
            <Image src={filtered[lightboxIndex].src} alt={filtered[lightboxIndex].alt} width={1000} height={700} style={{ objectFit: "contain", maxHeight: "80vh", borderRadius: "12px" }} />
            <button onClick={closeLightbox} style={{ position: "absolute", top: "-16px", right: "-16px", background: "var(--secondary)", color: "white", border: "none", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FiX />
            </button>
            <button onClick={prev} style={{ position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FiArrowLeft />
            </button>
            <button onClick={next} style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FiArrowRight />
            </button>
            <div style={{ textAlign: "center", marginTop: "12px" }}>
              <span style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
                {filtered[lightboxIndex].title} — {lightboxIndex + 1}/{filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
