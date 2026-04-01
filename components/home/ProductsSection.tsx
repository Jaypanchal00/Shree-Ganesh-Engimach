"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaWrench, FaWhatsapp } from "react-icons/fa";
import { products } from "@/constants/products";

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

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  // Show only featured products on home page (e.g. first 6)
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="section-padding" style={{ background: "var(--bg-secondary)" }} ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-badge"><FaWrench style={{ marginRight: "6px" }} /> Our Products</span>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Featured Product Range
          </h2>
          <div className="red-line-center" />
          <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto" }}>
            From single machines to complete turnkey packaging lines — engineered for reliability, precision, and maximum output.
          </p>
        </div>

        {/* Product Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", 
          gap: "40px" 
        }}>
          {featuredProducts.map((product, i) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(50px)",
                transition: `all 0.8s cubic-bezier(0.2, 1, 0.3, 1) ${i * 0.15}s`,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                background: "white",
                borderRadius: "32px",
                overflow: "hidden",
                border: "1px solid rgba(15,61,94,0.06)",
                boxShadow: "0 25px 80px rgba(15,61,94,0.08)",
                position: "relative"
              }}
            >
              {/* Image Section - Framed Look */}
              <div style={{ padding: "16px" }}>
                <div style={{
                  position: "relative",
                  height: "300px",
                  background: "linear-gradient(135deg, #f8faff 0%, #ffffff 100%)",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(15,61,94,0.1)",
                  boxShadow: "inset 0 0 40px rgba(15,61,94,0.03)"
                }}>
                  <div style={{ 
                    position: "relative", 
                    width: "100%", 
                    height: "100%", 
                    transition: "all 0.6s cubic-bezier(0.2, 1, 0.3, 1)" 
                  }} className="product-image-container">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 33vw" 
                      style={{ objectFit: "contain", filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.12))" }} 
                    />
                  </div>
                  
                  {/* Badge */}
                  {product.badge && (
                    <div style={{
                      position: "absolute", top: "16px", right: "16px",
                      background: i % 2 === 0 ? "var(--secondary)" : "#0f172a",
                      color: "white",
                      padding: "6px 14px",
                      borderRadius: "10px",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      fontFamily: "'Poppins', sans-serif",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      zIndex: 2,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>
                      {product.badge}
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "rgba(15,23,42,0.6)",
                    backdropFilter: "blur(6px)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: 0, transition: "all 0.4s ease",
                    zIndex: 3
                  }} className="card-overlay-btn">
                    <Link href={`/products/${product.id}`} className="btn-primary" style={{ padding: "12px 24px", fontSize: "0.95rem" }}>
                      See Full Specs <FiArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div style={{ padding: "0 40px 40px", display: "flex", flexDirection: "column", flex: 1, gap: "20px" }}>
                <div>
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--secondary)",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "16px",
                    fontFamily: "'Poppins', sans-serif"
                  }}>
                    <span style={{ width: "20px", height: "2px", background: "currentColor" }} />
                    {product.category}
                  </div>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.5rem",
                    color: "var(--primary)",
                    lineHeight: "1.25",
                    margin: 0,
                    height: "3.75rem",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical"
                  }}>
                    {product.name}
                  </h3>
                </div>

                <p style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  margin: 0,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  flex: 1,
                  opacity: 0.85
                }}>
                  {product.description}
                </p>

                {/* Specs Pill */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {Object.entries(product.specs).slice(0, 3).map(([key, val], j) => (
                    <div key={j} style={{
                      background: "rgba(37,99,235,0.06)",
                      color: "var(--secondary)",
                      padding: "8px 14px",
                      borderRadius: "10px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      fontFamily: "'Inter', sans-serif",
                      border: "1px solid rgba(37,99,235,0.1)"
                    }}>
                      {val}
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                  <Link href={`/products/${product.id}`} className="btn-blue" style={{ flex: 2, justifyContent: "center", height: "54px", borderRadius: "14px", fontSize: "0.95rem", fontWeight: 700 }}>
                    Details
                  </Link>
                  <a
                    href={`https://wa.me/919725397262?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn-hover"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "#25D366",
                      color: "white",
                      width: "54px", borderRadius: "14px",
                      textDecoration: "none",
                      fontSize: "1.6rem",
                      flexShrink: 0,
                      boxShadow: "0 10px 25px rgba(37,211,102,0.3)"
                    }}
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Precision Spares Highlight */}
        <div className="precision-spares-card" style={{ marginTop: "100px", padding: "clamp(30px, 6vw, 60px)", background: "white", borderRadius: "40px", border: "1px solid rgba(15,61,94,0.06)", boxShadow: "0 40px 100px rgba(15,61,94,0.05)" }}>
          <div className="precision-main-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 2fr", gap: " clamp(30px, 5vw, 60px)", alignItems: "center" }}>
            <div>
              <span className="section-badge" style={{ background: "rgba(15,61,94,0.05)", color: "var(--primary)" }}>Engineering Spares</span>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "var(--primary)", marginTop: "16px", marginBottom: "20px" }}>
                High-Precision <span style={{ color: "var(--secondary)" }}>Components</span>
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "30px", fontSize: "1.05rem" }}>
                We don&apos;t just build machines; we engineer the precision components that power them. Our range of ROPP capping heads and machinery spares are built to OEM standards for maximum reliability.
              </p>
              <Link href="/products?category=spare-parts" className="btn-blue" style={{ display: "inline-flex", gap: "10px", padding: "14px 28px" }}>
                Browse All Spares <FiArrowRight size={18} />
              </Link>
            </div>
            <div className="precision-gallery-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {[
                { src: encodeURI("/New 8.jpeg"), title: "Quality Manufacturing", fit: "contain" },
                { src: encodeURI("/Factory5.jpeg"), title: "Quality Lab", fit: "cover" },
              ].map((img, idx) => (
                <div key={idx} style={{ position: "relative", height: "clamp(120px, 20vw, 180px)", borderRadius: "16px", overflow: "hidden", background: "white", border: "1px solid var(--border)", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}>
                  <Image src={img.src} alt={img.title} fill style={{ objectFit: img.fit as any, padding: img.fit === "contain" ? "10px" : "0" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px", background: "rgba(15,23,42,0.7)", backdropFilter: "blur(4px)", color: "white", fontSize: "0.75rem", fontWeight: 700, textAlign: "center" }}>
                    {img.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <Link href="/products" className="btn-primary" style={{ fontSize: "1.1rem", padding: "16px 40px" }}>
            Explore Full Catalog
            <FiArrowRight size={20} />
          </Link>
        </div>
      </div>
      <style jsx>{`
        .product-card:hover .product-image-container {
          transform: scale(1.1);
        }
        .product-card:hover .card-overlay-btn {
          opacity: 1 !important;
        }
        .product-card:hover .card-overlay-btn :global(.btn-primary) {
          transform: translateY(0) !important;
        }
        @media (max-width: 900px) {
          .precision-main-grid {
            grid-template-columns: 1fr !important;
          }
          .precision-spares-card {
            margin-top: 60px !important;
            padding: 30px !important;
          }
        }
        @media (max-width: 600px) {
          .precision-gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
