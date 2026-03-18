"use client";
import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, var(--bg-secondary) 0%, white 100%)",
      padding: "40px 20px",
    }}>
      <div style={{ textAlign: "center", maxWidth: "500px" }}>
        {/* 404 Text */}
        <div style={{
          fontSize: "clamp(6rem, 15vw, 10rem)",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          background: "linear-gradient(135deg, var(--primary), var(--secondary))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1,
          marginBottom: "20px",
        }}>
          404
        </div>

        <div style={{ fontSize: "3rem", marginBottom: "16px" }}>⚙️</div>

        <h1 style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: "1.8rem",
          color: "var(--primary)",
          marginBottom: "12px",
        }}>
          Page Not Found
        </h1>

        <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "40px" }}>
          Looks like this page took a wrong turn on the production line! The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            <FiHome size={16} />
            Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-blue" style={{ border: "none", cursor: "pointer" }}>
            <FiArrowLeft size={16} />
            Go Back
          </button>
        </div>

        {/* Quick links */}
        <div style={{ marginTop: "48px" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "16px" }}>You might be looking for:</p>
          <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { href: "/products", label: "Products" },
              { href: "/about", label: "About Us" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "6px 16px", borderRadius: "50px",
                  background: "rgba(15,61,94,0.08)", color: "var(--primary)",
                  textDecoration: "none", fontSize: "0.85rem",
                  fontFamily: "'Poppins', sans-serif", fontWeight: 500,
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(15,61,94,0.15)",
                }}
                onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(15,61,94,0.08)"; (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
