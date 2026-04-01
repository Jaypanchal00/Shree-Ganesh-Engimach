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

  // Filter based on URL hash (to make footer links work properly)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (categories.some(c => c.id === hash)) {
        setActiveCategory(hash);
        // Page load ke baad halka sa scroll karna taaki header se chhup na jaye
        setTimeout(() => {
          window.scrollTo({ top: 400, behavior: "smooth" });
        }, 100);
      }
    };

    handleHashChange(); // initial page load par check
    window.addEventListener("hashchange", handleHashChange); // same page navigation pe check
    
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
      <section style={{ background: "#f8fafc", padding: "80px 0" }} ref={sectionRef}>
        <div className="container-custom">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px" }}>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif", margin: 0 }}>
              Showing <strong>{filtered.length}</strong> high-performance machines
            </p>
            <div style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem" }}>
              {activeCategory !== "all" && categories.find(c => c.id === activeCategory)?.label}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "100px 20px", background: "white", borderRadius: "32px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "4rem", marginBottom: "20px", color: "var(--primary-light)", opacity: 0.5 }}><FaSearch /></div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", color: "var(--primary)", fontSize: "1.5rem", marginBottom: "12px" }}>No Precision Matches</h3>
              <p style={{ color: "var(--text-muted)", maxWidth: "400px", margin: "0 auto" }}>We couldn&apos;t find any products matching your current filters. Try resetting your search.</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("all"); }} className="btn-blue" style={{ marginTop: "24px" }}>
                Reset All Filters
              </button>
            </div>
          ) : (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", 
              gap: "40px" 
            }}>
              {filtered.map((product, i) => (
                <div
                  key={product.id}
                  className="product-card"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(40px)",
                    transition: `all 0.6s cubic-bezier(0.2, 1, 0.3, 1) ${i * 0.08}s`,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: "white",
                    borderRadius: "28px",
                    overflow: "hidden",
                    border: "1px solid rgba(15,61,94,0.06)",
                    boxShadow: "0 20px 50px rgba(15,61,94,0.05)",
                    position: "relative"
                  }}
                >
                  {/* Image Frame */}
                  <div style={{ padding: "12px" }}>
                    <div style={{
                      position: "relative",
                      height: "280px",
                      background: "linear-gradient(180deg, #f1f5f9 0%, #ffffff 100%)",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "24px",
                      overflow: "hidden",
                      border: "1px solid rgba(15,61,94,0.05)"
                    }}>
                      <div style={{ position: "relative", width: "100%", height: "100%", transition: "transform 0.6s ease" }} className="product-image-container">
                        <Image 
                          src={product.image} 
                          alt={product.name} 
                          fill 
                          sizes="(max-width: 768px) 100vw, 33vw" 
                          style={{ objectFit: "contain", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.12))" }} 
                        />
                      </div>
                      
                      {product.badge && (
                        <div style={{
                          position: "absolute", top: "16px", left: "16px",
                          background: product.badgeColor || "var(--secondary)",
                          color: "white",
                          padding: "6px 14px",
                          borderRadius: "10px",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          fontFamily: "'Poppins', sans-serif",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          zIndex: 2,
                          textTransform: "uppercase"
                        }}>
                          {product.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1, gap: "16px" }}>
                    <div>
                      <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "var(--secondary)",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "12px",
                        fontFamily: "'Poppins', sans-serif"
                      }}>
                        <span style={{ width: "15px", height: "2px", background: "currentColor" }} />
                        {categories.find(c => c.id === product.category)?.label}
                      </div>
                      <h3 style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        color: "var(--primary)",
                        lineHeight: "1.3",
                        margin: 0,
                        height: "3.6rem",
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
                      fontSize: "0.9rem",
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

                    {/* Technical Specs Grid */}
                    <div style={{ 
                      display: "grid", 
                      gridTemplateColumns: "1fr 1fr", 
                      gap: "12px",
                      background: "rgba(15,61,94,0.03)",
                      padding: "16px",
                      borderRadius: "16px",
                      marginTop: "10px"
                    }}>
                      {Object.entries(product.specs).slice(0, 4).map(([key, val]) => (
                        <div key={key}>
                          <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.5px" }}>{key}</div>
                          <div style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 700 }}>{val}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                      <Link href={`/products/${product.id}`} className="btn-blue" style={{ flex: 1, justifyContent: "center", height: "52px", borderRadius: "12px", fontSize: "0.9rem", fontWeight: 700 }}>
                        Technical Specs
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
                          width: "52px", borderRadius: "12px",
                          fontSize: "1.4rem",
                          flexShrink: 0,
                          boxShadow: "0 8px 16px rgba(37,211,102,0.2)"
                        }}
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
        <style jsx>{`
          .product-card {
            transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1) !important;
          }
          .product-card:hover {
            transform: translateY(-12px) scale(1.02) !important;
            box-shadow: 0 40px 80px rgba(15,61,94,0.12) !important;
            border-color: rgba(15,61,94,0.1) !important;
          }
          .product-card:hover .product-image-container {
            transform: scale(1.08);
          }
        `}</style>
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
