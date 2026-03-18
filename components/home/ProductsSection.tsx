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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "28px" }}>
          {featuredProducts.map((product, i) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="card-image-wrap">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain", padding: "20px" }} />
                <div className="card-overlay">
                  <Link
                    href={`/products/${product.id}`}
                    style={{
                      background: "white",
                      color: "var(--primary)",
                      padding: "10px 24px",
                      borderRadius: "50px",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    View Details <FiArrowRight size={14} />
                  </Link>
                </div>
                {product.badge && (
                  <div style={{
                    position: "absolute", top: "14px", left: "14px",
                    background: product.badgeColor,
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "50px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "0.5px",
                  }}>
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <div style={{
                  display: "inline-block",
                  background: "rgba(15,61,94,0.08)",
                  color: "var(--primary)",
                  padding: "3px 10px",
                  borderRadius: "50px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}>
                  {product.category}
                </div>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "var(--primary)",
                  marginBottom: "10px",
                }}>
                  {product.name}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "16px" }}>
                  {product.description}
                </p>

                {/* Specs */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {Object.entries(product.specs).slice(0, 3).map(([key, val], j) => (
                    <span key={j} style={{
                      background: "var(--bg-secondary)",
                      color: "var(--text-secondary)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontFamily: "'Inter', sans-serif",
                      border: "1px solid var(--border)",
                    }}>
                      {key}: {val}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <Link href={`/products/${product.id}`} className="btn-blue" style={{ padding: "10px 20px", fontSize: "0.85rem", flex: 1, justifyContent: "center" }}>
                    View Details
                  </Link>
                  <a
                    href={`https://wa.me/919725397262?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "#25D366",
                      color: "white",
                      width: "42px", borderRadius: "10px",
                      textDecoration: "none",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget as HTMLElement).style.background = "#1db954"}
                    onMouseOut={(e) => (e.currentTarget as HTMLElement).style.background = "#25D366"}
                  >
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/products" className="btn-primary" style={{ fontSize: "1rem" }}>
            View All Products
            <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
