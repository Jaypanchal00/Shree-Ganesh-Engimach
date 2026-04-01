"use client";
import Link from "next/link";

export default function Terms() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="container-custom" style={{ maxWidth: "900px", background: "white", padding: "clamp(30px, 6vw, 60px)", borderRadius: "32px", boxShadow: "0 20px 50px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "#0f172a", marginBottom: "30px", borderBottom: "4px solid #e63946", display: "inline-block" }}>
          Terms and Conditions
        </h1>
        
        <div style={{ color: "#475569", lineHeight: 1.8, fontSize: "1.05rem" }}>
          <p style={{ marginBottom: "20px" }}>By accessing or using the website of <strong>Shree Ganesh Engimach</strong> (<Link href="https://shreeganeshengimach.com" style={{ color: "#e63946" }}>shreeganeshengimach.com</Link>), you agree to be bound by these terms and conditions.</p>

          <h3 style={{ color: "#0f172a", fontWeight: 700, marginTop: "40px", marginBottom: "15px" }}>1. Quotations and Service</h3>
          <p style={{ marginBottom: "20px" }}>
            All quotations provided through this website or contact forms are for general estimation. Final machine prices and specifications are subject to technical confirmation and final agreement between the buyer and Shree Ganesh Engimach.
          </p>

          <h3 style={{ color: "#0f172a", fontWeight: 700, marginTop: "40px", marginBottom: "15px" }}>2. Machine Designs</h3>
          <p style={{ marginBottom: "20px" }}>
            The machine designs and technical specifications listed on our website are our intellectual property and may be subject to changes as we continuously improve our engineering processes. Any reproduction of machine designs without prior written permission is strictly prohibited.
          </p>

          <h3 style={{ color: "#0f172a", fontWeight: 700, marginTop: "40px", marginBottom: "15px" }}>3. Order Cancellation and Refunds</h3>
          <p style={{ marginBottom: "20px" }}>
            As we manufacture custom-built industrial machinery, order cancellation and refund policies will be governed by the specific contract signed at the time of order placement.
          </p>

          <h3 style={{ color: "#0f172a", fontWeight: 700, marginTop: "40px", marginBottom: "15px" }}>4. Governing Law</h3>
          <p style={{ marginBottom: "20px" }}>
            Any disputes or legal proceedings relating to our manufacturing services or this website shall be governed by the laws of India and subject to the exclusive jurisdiction of courts in <strong>Ahmedabad, Gujarat</strong>.
          </p>

          <h3 style={{ color: "#0f172a", fontWeight: 700, marginTop: "40px", marginBottom: "15px" }}>5. Modification of Terms</h3>
          <p style={{ marginBottom: "20px" }}>
            Shree Ganesh Engimach reserves the right to modify these terms and conditions at any time. Your continued use of the website after such modifications will constitute your acknowledgment of the modified terms.
          </p>
        </div>
        
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <Link href="/" style={{ color: "#e63946", fontWeight: 700, textDecoration: "none" }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
