"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiArrowRight, FiCheck } from "react-icons/fi";
import { FaWhatsapp, FaWrench, FaTint, FaCogs, FaTags, FaShower, FaClipboardList, FaSearch } from "react-icons/fa";
import { products } from "@/constants/products";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

const categories = [
  { id: "all", label: "All Products", icon: <FaWrench /> },
  { id: "filling", label: "Filling Machines", icon: <FaTint /> },
  { id: "capping", label: "Capping Machines", icon: <FaCogs /> },
  { id: "sealing", label: "Sealing Machines", icon: <FaTags /> },
  { id: "washing", label: "Washing Machines", icon: <FaShower /> },
  { id: "labeling", label: "Labeling Machines", icon: <FaClipboardList /> },
  { id: "spare-parts", label: "Spare Parts", icon: <FaCogs /> },
];


export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: "12px", fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "white" }}>Products</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, fontFamily: "'Poppins', sans-serif", marginBottom: "16px" }}>
            Our Product Range
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto" }}>
            Complete bottle packaging machinery — filling, capping, sealing, washing, labeling, and spare parts.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ background: "white", padding: "32px 0", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", position: "sticky", top: "80px", zIndex: 100 }}>
        <div className="container-custom">
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            {/* Search */}
            <div style={{ position: "relative", flex: "1 1 280px" }}>
              <FiSearch style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} size={16} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: "44px" }}
              />
            </div>

            {/* Category Filters */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "50px",
                    border: `2px solid ${activeCategory === cat.id ? "var(--primary)" : "var(--border)"}`,
                    background: activeCategory === cat.id ? "var(--primary)" : "white",
                    color: activeCategory === cat.id ? "white" : "var(--text-secondary)",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ background: "var(--bg-secondary)", padding: "60px 0" }} ref={sectionRef}>
        <div className="container-custom">
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "32px", fontFamily: "'Poppins', sans-serif" }}>
            Showing <strong>{filtered.length}</strong> products
            {activeCategory !== "all" && ` in "${categories.find((c) => c.id === activeCategory)?.label}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <div style={{ fontSize: "3rem", marginBottom: "16px", color: "var(--primary)" }}><FaSearch /></div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "var(--primary)", marginBottom: "8px" }}>No Products Found</h3>
              <p style={{ color: "var(--text-muted)" }}>Try adjusting your search or filter criteria.</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("all"); }} className="btn-primary" style={{ marginTop: "20px", border: "none" }}>
                Show All Products
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {filtered.map((product, i) => (
                <div
                  key={product.id}
                  className="product-card"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.4s ease ${i * 0.07}s`,
                  }}
                >
                  <div className="card-image-wrap">
                    <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain", padding: "20px" }} loading="lazy" />
                    {product.badge && (
                      <div style={{ position: "absolute", top: "14px", left: "14px", background: product.badgeColor, color: "white", padding: "4px 12px", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <div style={{ padding: "24px" }}>
                    <div style={{ display: "inline-block", background: "rgba(15,61,94,0.08)", color: "var(--primary)", padding: "3px 10px", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 600, fontFamily: "'Poppins', sans-serif", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "10px" }}>
                      {categories.find((c) => c.id === product.category)?.label}
                    </div>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--primary)", marginBottom: "10px" }}>
                      {product.name}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "16px" }}>
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div style={{ background: "var(--bg-secondary)", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                        {Object.entries(product.specs).slice(0, 4).map(([key, val]) => (
                          <div key={key}>
                            <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.5px" }}>{key}</div>
                            <div style={{ fontSize: "0.82rem", color: "var(--primary)", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>{val}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Industries */}
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "18px" }}>
                      {product.industries.map((ind) => (
                        <span key={ind} style={{ display: "flex", alignItems: "center", gap: "4px", background: "rgba(230,57,70,0.08)", color: "var(--secondary)", padding: "3px 10px", borderRadius: "50px", fontSize: "0.72rem", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}>
                          <FiCheck size={10} /> {ind}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <Link href={`/products/${product.id}`} className="btn-blue" style={{ padding: "10px 18px", fontSize: "0.85rem", flex: 1, justifyContent: "center" }}>
                        View Details
                      </Link>
                      <a
                        href={`https://wa.me/919725397262?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#25D366", color: "white", width: "42px", borderRadius: "10px", textDecoration: "none", fontSize: "1.2rem", flexShrink: 0, transition: "all 0.3s ease" }}
                        onMouseOver={(e) => (e.currentTarget as HTMLElement).style.background = "#1db954"}
                        onMouseOut={(e) => (e.currentTarget as HTMLElement).style.background = "#25D366"}
                      >
                        <FaWhatsapp />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "white", padding: "60px 0", textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.8rem", color: "var(--primary)", marginBottom: "12px" }}>
            Need a Custom Machine?
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "28px", maxWidth: "500px", margin: "0 auto 28px" }}>
            We design and manufacture machines tailored to your specific production requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Custom Quote <FiArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
