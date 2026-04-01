"use client";
import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const productLinks = [
  { href: "/products#filling", label: "Filling Machines" },
  { href: "/products#capping", label: "Capping Machines" },
  { href: "/products#sealing", label: "Sealing Machines" },
  { href: "/products#washing", label: "Bottle Washing Machines" },
  { href: "/products#labeling", label: "Labeling Machines" },
  { href: "/products#spare-parts", label: "Spare Parts" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#050a12", color: "white", paddingTop: "80px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container-custom">
        {/* Main Footer Grid */}
        <div className="footer-main-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr", 
          gap: "40px",
          paddingBottom: "60px"
        }}>
          
          {/* Column 1: Company Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <div style={{ 
              background: "white",
              padding: "10px 14px",
              borderRadius: "10px",
              width: "fit-content",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
            }}>
              <Image 
                src="/main-logo.png" 
                alt="Shree Ganesh Engimach" 
                width={200}
                height={56}
                style={{ objectFit: "contain", display: "block" }} 
                priority
              />
            </div>
            
            <p style={{ 
              color: "rgba(255,255,255,0.7)", 
              fontSize: "0.95rem", 
              lineHeight: "1.7", 
              maxWidth: "360px",
              margin: 0
            }}>
              Premium manufacturer of bottle packaging machines and spare parts. Trusted by 500+ industries across India for quality, reliability, and engineering innovation.
            </p>

            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: <FaFacebook />, href: "#", label: "Facebook", color: "#1877f2" },
                { icon: <FaInstagram />, href: "#", label: "Instagram", color: "#e4405f" },
                { icon: <FaYoutube />, href: "#", label: "YouTube", color: "#ff0000" },
                { icon: <FaLinkedin />, href: "#", label: "LinkedIn", color: "#0077b5" },
                { icon: <FaWhatsapp />, href: "https://wa.me/919725397262", label: "WhatsApp", color: "#25D366" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "40px", height: "40px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.background = social.color;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ paddingTop: "10px" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "25px", textTransform: "uppercase", letterSpacing: "1px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ 
                      color: "rgba(255,255,255,0.65)", 
                      textDecoration: "none", 
                      fontSize: "0.92rem", 
                      transition: "0.3s",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                    onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = "#42a5f5"}
                    onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
                  >
                    <FiChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div style={{ paddingTop: "10px" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "25px", textTransform: "uppercase", letterSpacing: "1px" }}>Our Products</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ 
                      color: "rgba(255,255,255,0.65)", 
                      textDecoration: "none", 
                      fontSize: "0.92rem", 
                      transition: "0.3s",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                    onMouseOver={(e) => (e.currentTarget as HTMLElement).style.color = "#42a5f5"}
                    onMouseOut={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"}
                  >
                    <FiChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div style={{ paddingTop: "10px" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "25px", textTransform: "uppercase", letterSpacing: "1px" }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "12px" }}>
                <FiMapPin style={{ color: "#42a5f5", flexShrink: 0, marginTop: "4px" }} size={18} />
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
                  Shed No 22/A, Rameshwar Ind. Estate,<br />
                  Near Jay Chemical, Odhav,<br />
                  Ahmedabad – 382415, Gujarat
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <FiPhone style={{ color: "#42a5f5" }} size={18} />
                <a href="tel:+919725397262" style={{ color: "white", textDecoration: "none", fontSize: "1rem", fontWeight: 600 }}>
                  +91 97253 97262
                </a>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <FiMail style={{ color: "#42a5f5" }} size={18} />
                <a href="mailto:rishipanchal1999@gmail.com" style={{ color: "rgba(255,255,255,0.73)", textDecoration: "none", fontSize: "0.9rem" }}>
                  rishipanchal1999@gmail.com
                </a>
              </div>

              <a
                href="https://wa.me/919725397262"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  gap: "10px", 
                  background: "#25D366", 
                  color: "white", 
                  padding: "12px 20px", 
                  borderRadius: "8px", 
                  textDecoration: "none", 
                  fontSize: "0.95rem", 
                  fontWeight: 700, 
                  marginTop: "10px",
                  transition: "0.3s"
                }}
                onMouseOver={(e) => (e.currentTarget as HTMLElement).style.background = "#1db954"}
                onMouseOut={(e) => (e.currentTarget as HTMLElement).style.background = "#25D366"}
              >
                <FaWhatsapp size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "rgba(0,0,0,0.3)", padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-custom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", margin: 0 }}>
            © {new Date().getFullYear()} Shree Ganesh Engimach. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms", "Sitemap"].map((item) => (
              <a key={item} href="#" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textDecoration: "none" }}>{item}</a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 50px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}
