"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { FaIndustry } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div style={{ background: "var(--primary)", padding: "4px 0" }}>
        <div className="container-custom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.75rem", fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: "6px" }}>
            <FaIndustry />
            Premium Packaging Machines — Made in India
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="tel:+919725397262" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
              <FiPhone size={12} />
              +91 97253 97262
            </a>
            <a href="mailto:rishipanchal1999@gmail.com" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.75rem", textDecoration: "none" }}>
              rishipanchal1999@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          background: scrolled ? "rgba(255,255,255,0.97)" : "white",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.1)" : "0 2px 10px rgba(0,0,0,0.06)",
          transition: "all 0.3s ease",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px clamp(12px, 4vw, 24px)" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <div style={{ position: "relative", width: "clamp(200px, 50vw, 320px)", height: "70px", overflow: "visible" }}>
              <Image
                src="/main-logo.png"
                alt="Shree Ganesh Engimach Logo"
                fill
                sizes="(max-width: 768px) 200px, 320px"
                style={{ objectFit: "contain", transform: "scale(1.6)" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                style={{ padding: "6px 14px" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="hidden-mobile">
            <Link href="/contact" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.875rem" }}>
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--primary)", fontSize: "1.4rem", display: "none" }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            style={{
              background: "white",
              borderTop: "1px solid var(--border)",
              padding: "20px clamp(12px, 4vw, 24px)",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
                style={{ padding: "12px 0", borderBottom: "1px solid var(--border)", display: "block" }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary" onClick={() => setIsOpen(false)} style={{ marginTop: "12px", justifyContent: "center" }}>
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
