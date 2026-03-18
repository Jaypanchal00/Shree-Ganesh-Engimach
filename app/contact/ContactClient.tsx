"use client";
import { useState } from "react";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", product: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Send Automatic Email via API
      await axios.post("/api/contact", form);
    } catch (error) {
      console.error("API Email Error:", error);
      // We don't stop here, we still allow WhatsApp redirect as fallback
    }

    // 2. Construct WhatsApp message for manual notify
    const waMsg = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Company:* ${form.company || "N/A"}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Product:* ${form.product || "General Inquiry"}%0A` +
      `*Message:* ${form.message}`;

    const whatsappUrl = `https://wa.me/919725397262?text=${waMsg}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: <FiPhone size={22} />, label: "Phone", value: "+91 97253 97262", href: "tel:+919725397262", color: "var(--primary)" },
    { icon: <FaWhatsapp size={22} />, label: "WhatsApp", value: "+91 97253 97262", href: "https://wa.me/919725397262", color: "#25D366" },
    { icon: <FiMail size={22} />, label: "Email", value: "rishipanchal1999@gmail.com", href: "mailto:rishipanchal1999@gmail.com", color: "var(--secondary)" },
    { icon: <FiMapPin size={22} />, label: "Address", value: "Shed No 22/A, Rameshwar Ind. Estate, Odhav, Ahmedabad-382415", href: "https://www.google.co.in/maps/dir//23.02705,72.64902/@23.0588416,72.6663168,14z", color: "#7c3aed" },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", padding: "80px 0 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: "12px", fontFamily: "'Poppins', sans-serif" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "white" }}>Contact</span>
          </div>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, fontFamily: "'Poppins', sans-serif", marginBottom: "16px" }}>
            Get In Touch
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
            Ready to discuss your packaging requirements? We&apos;re here to help with a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ background: "var(--bg-secondary)", padding: "60px 0" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "60px" }}>
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "all 0.35s ease",
                  display: "block",
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
                  el.style.borderColor = item.color;
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                  el.style.borderColor = "var(--border)";
                }}
              >
                <div style={{ width: "52px", height: "52px", background: `${item.color}15`, borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: item.color, marginBottom: "16px" }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: "0.78rem", fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>{item.label}</div>
                <div style={{ color: "var(--primary)", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.9rem", lineHeight: 1.5 }}>{item.value}</div>
              </a>
            ))}
          </div>

          {/* Form + Map */}
          <div className="responsive-grid-900" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
            {/* Form */}
            <div style={{ background: "white", borderRadius: "24px", padding: "40px", boxShadow: "0 8px 40px rgba(0,0,0,0.08)", border: "1px solid var(--border)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <FiCheckCircle size={60} style={{ color: "#059669", marginBottom: "20px" }} />
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "var(--primary)", marginBottom: "12px" }}>
                    Inquiry Received!
                  </h3>
                  <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
                    Thank you! We have sent a copy of your inquiry to your WhatsApp. Our team will review and contact you shortly.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", product: "", message: "" }); }} className="btn-primary" style={{ border: "none", cursor: "pointer" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "var(--primary)", marginBottom: "8px" }}>
                    Send an Inquiry
                  </h2>
                  <div className="red-line" />

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input required className="form-input" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="form-label">Company Name</label>
                        <input className="form-input" placeholder="Your Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label className="form-label">Email Address *</label>
                        <input required type="email" className="form-input" placeholder="email@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input required className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Product Interest</label>
                      <select className="form-input" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}>
                        <option value="">Select a product...</option>
                        <option>Filling Machine</option>
                        <option>Capping Machine</option>
                        <option>Sealing Machine</option>
                        <option>Bottle Washing Machine</option>
                        <option>Labeling Machine</option>
                        <option>Spare Parts</option>
                        <option>Complete Packaging Line</option>
                        <option>Custom Machine</option>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Message / Requirements *</label>
                      <textarea
                        required
                        rows={4}
                        className="form-input"
                        placeholder="Please describe your production requirements, bottle type, fill volume, expected output, etc."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        style={{ resize: "vertical" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary"
                      style={{ border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.8 : 1, justifyContent: "center", padding: "16px" }}
                    >
                      {loading ? "Processing..." : (
                        <>
                          <FiSend size={18} />
                          Send Inquiry Now
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Map + Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Google Map Embed */}
              <div id="map" style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14688.0863001716!2d72.63902!3d23.02705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzM3LjQiTiA3MsKwMzgnNTkuNiJF!5e0!3m2!1sen!2sin!4v1710250000000!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Ganesh Engimach Location"
                />
              </div>

              {/* Business Hours */}
              <div style={{ background: "white", borderRadius: "16px", padding: "28px", border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--primary)", marginBottom: "16px" }}>
                  <FiClock style={{ display: "inline-block", verticalAlign: "middle", marginRight: "6px" }} /> Business Hours
                </h3>
                {[
                  { day: "Monday – Saturday", hours: "9:00 AM – 6:00 PM", open: true },
                  { day: "Sunday", hours: "Closed", open: false },
                ].map((h, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i === 0 ? "1px solid var(--border)" : "none" }}>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{h.day}</span>
                    <span style={{ color: h.open ? "var(--primary)" : "var(--secondary)", fontWeight: 600, fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif" }}>{h.hours}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919725397262?text=Hello%2C%20I%20want%20a%20quote%20for%20your%20bottle%20packaging%20machines."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  color: "white", padding: "24px 28px", borderRadius: "16px",
                  textDecoration: "none", transition: "all 0.3s ease",
                  boxShadow: "0 8px 30px rgba(37,211,102,0.25)",
                }}
                onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 15px 40px rgba(37,211,102,0.4)"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(37,211,102,0.25)"; }}
              >
                <FaWhatsapp size={40} />
                <div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.05rem" }}>Chat on WhatsApp</div>
                  <div style={{ fontSize: "0.875rem", opacity: 0.85 }}>Get instant response from our team</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
