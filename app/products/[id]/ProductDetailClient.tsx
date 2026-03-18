"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCheck, FiMessageSquare, FiSettings, FiActivity, FiShield } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Product } from "@/constants/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  return (
    <>
      {/* Breadcrumb & Back */}
      <section style={{ background: "white", padding: "20px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-custom">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "16px" }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
            <span>›</span>
            <Link href="/products" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Products</Link>
            <span>›</span>
            <span style={{ color: "var(--primary)", fontWeight: 600 }}>{product.name}</span>
          </div>
          <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--primary)", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem" }}>
            <FiArrowLeft /> Back to Products
          </Link>
        </div>
      </section>

      {/* Main product info */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-custom">
          <div className="product-detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            {/* Left: Image */}
            <div className="product-detail-image-sticky" style={{ position: "sticky", top: "120px" }}>
              <div style={{ background: "var(--bg-secondary)", borderRadius: "24px", padding: "40px", border: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={600} 
                  height={500} 
                  style={{ width: "100%", height: "auto", objectFit: "contain" }} 
                  priority 
                />
                {product.badge && (
                  <div style={{ position: "absolute", top: "24px", left: "24px", background: product.badgeColor, color: "white", padding: "6px 16px", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 700, fontFamily: "'Poppins', sans-serif", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                    {product.badge}
                  </div>
                )}
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "24px" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", background: "rgba(15,61,94,0.04)", borderRadius: "16px", border: "1px solid rgba(15,61,94,0.08)" }}>
                    <FiShield size={24} style={{ color: "var(--primary)" }} />
                    <div>
                        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)" }}>1 Year Warranty</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>On all spare parts</div>
                    </div>
                 </div>
                 <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px", background: "rgba(230,57,70,0.04)", borderRadius: "16px", border: "1px solid rgba(230,57,70,0.08)" }}>
                    <FiSettings size={24} style={{ color: "var(--secondary)" }} />
                    <div>
                        <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--secondary)" }}>Free Installation</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Pan India service</div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right: Details */}
            <div>
              <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(15,61,94,0.08)", color: "var(--primary)", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
                {product.category}
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "var(--primary)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.1 }}>
                {product.name}
              </h1>
              <div className="red-line" />
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "32px" }}>
                {product.description}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "40px" }}>
                 {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "4px" }}>{key}</div>
                        <div style={{ fontSize: "1rem", color: "var(--primary)", fontWeight: 700 }}>{val}</div>
                    </div>
                 ))}
              </div>

              {product.features && (
                <div style={{ marginBottom: "40px" }}>
                    <h3 style={{ fontSize: "1.2rem", color: "var(--primary)", fontWeight: 700, marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                        <FiActivity style={{ color: "var(--secondary)" }} /> Key Features
                    </h3>
                    <div style={{ display: "grid", gap: "12px" }}>
                        {product.features.map((feat, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <FiCheck style={{ color: "var(--secondary)", flexShrink: 0 }} />
                                <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{feat}</span>
                            </div>
                        ))}
                    </div>
                </div>
              )}

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn-primary" style={{ padding: "16px 40px", flex: 1, justifyContent: "center" }}>
                    <FiMessageSquare size={18} /> Get Price Quote
                </Link>
                <a 
                  href={`https://wa.me/919725397262?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-blue" 
                  style={{ background: "#25D366", border: "none", flex: 1, justifyContent: "center", padding: "16px 40px" }}
                >
                    <FaWhatsapp size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended products */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
          <div className="container-custom">
            <h2 style={{ fontSize: "1.8rem", color: "var(--primary)", fontWeight: 700, marginBottom: "32px" }}>Related Solutions</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
                {/* Simplified related products logic could go here */}
                <p style={{ color: "var(--text-muted)" }}>Explore our other high-performance packaging machines designed for synchronization with this unit.</p>
            </div>
          </div>
      </section>
    </>
  );
}
