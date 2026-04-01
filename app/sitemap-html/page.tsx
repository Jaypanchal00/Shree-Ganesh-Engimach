"use client";
import Link from "next/link";
import { FiGrid, FiInfo, FiLayers, FiCamera, FiPhone, FiHome, FiShield, FiFileText } from "react-icons/fi";

export default function HTMLSitemap() {
  const sections = [
    {
      title: "Main Pages",
      items: [
        { label: "Home Page", href: "/", icon: <FiHome /> },
        { label: "About Our Company", href: "/about", icon: <FiInfo /> },
        { label: "Our Products", href: "/products", icon: <FiLayers /> },
        { label: "Our Infrastructure", href: "/infrastructure", icon: <FiGrid /> },
        { label: "Photo Gallery", href: "/gallery", icon: <FiCamera /> },
        { label: "Contact Us", href: "/contact", icon: <FiPhone /> },
      ]
    },
    {
      title: "Product Categories",
      items: [
        { label: "Filling Machines", href: "/products#filling", icon: <FiLayers /> },
        { label: "Capping Machines", href: "/products#capping", icon: <FiLayers /> },
        { label: "Washing Machines", href: "/products#washing", icon: <FiLayers /> },
        { label: "Spare Parts", href: "/products#spare-parts", icon: <FiLayers /> },
      ]
    },
    {
      title: "Legal & Information",
      items: [
        { label: "Privacy Policy", href: "/privacy-policy", icon: <FiShield /> },
        { label: "Terms & Conditions", href: "/terms", icon: <FiFileText /> },
        { label: "XML Sitemap", href: "/sitemap.xml", icon: <FiFileText /> },
      ]
    }
  ];

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="container-custom" style={{ maxWidth: "1000px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0f172a", marginBottom: "20px" }}>
            Website Sitemap
          </h1>
          <p style={{ color: "#475569", fontSize: "1.1rem" }}>A complete guide to all sections of our digital presence.</p>
          <div style={{ width: "80px", height: "4px", background: "#42a5f5", margin: "20px auto", borderRadius: "2px" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          {sections.map((section, idx) => (
            <div key={idx} style={{ background: "white", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.03)", border: "1px solid #f1f5f9" }}>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.35rem", color: "#0f172a", marginBottom: "25px", display: "flex", alignItems: "center", gap: "10px" }}>
                {section.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "12px", 
                      color: "#475569", 
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: 500,
                      transition: "0.3s",
                      padding: "4px 0"
                    }}
                    onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = "#42a5f5"}
                    onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = "#475569"}
                    >
                      <span style={{ color: "#42a5f5", fontSize: "1.2rem" }}>{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <Link href="/" style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: "10px", 
            background: "#0f172a", 
            color: "white", 
            padding: "16px 32px", 
            borderRadius: "50px", 
            textDecoration: "none",
            fontWeight: 700,
            transition: "0.3s",
            boxShadow: "0 10px 30px rgba(15,23,42,0.2)"
          }}
          onMouseOver={(e) => (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"}
          onMouseOut={(e) => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}
          >
            <FiHome /> Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
