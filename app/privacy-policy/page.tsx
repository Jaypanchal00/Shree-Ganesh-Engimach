"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px" }}>
      <div className="container-custom" style={{ maxWidth: "900px", background: "white", padding: "clamp(30px, 6vw, 60px)", borderRadius: "32px", boxShadow: "0 20px 50px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "#0f172a", marginBottom: "30px", borderBottom: "4px solid #42a5f5", display: "inline-block" }}>
          Privacy Policy
        </h1>
        
        <div style={{ color: "#475569", lineHeight: 1.8, fontSize: "1.05rem" }}>
          <p style={{ marginBottom: "20px" }}>Effective Date: April 1, 2026</p>
          
          <p style={{ marginBottom: "30px" }}>
            At <strong>Shree Ganesh Engimach</strong>, accessible from <Link href="https://shreeganeshengimach.com" style={{ color: "#42a5f5" }}>shreeganeshengimach.com</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Shree Ganesh Engimach and how we use it.
          </p>

          <h3 style={{ color: "#0f172a", fontWeight: 700, marginTop: "40px", marginBottom: "15px" }}>1. Information We Collect</h3>
          <p style={{ marginBottom: "20px" }}>
            When you visit our website, you may provide us with two types of information: personal information you knowingly choose to disclose (like through our contact or inquiry forms) and website-use information collected on an aggregate basis as you and others browse our website.
          </p>

          <h3 style={{ color: "#0f172a", fontWeight: 700, marginTop: "40px", marginBottom: "15px" }}>2. How We Use Your Information</h3>
          <ul style={{ marginBottom: "20px", marginLeft: "20px" }}>
            <li>To respond to your manufacturing inquiries and provide product quotations.</li>
            <li>To improve our website functionality and provide a better user experience.</li>
            <li>To send you updates regarding your order or technical maintenance of your machines.</li>
            <li>For internal record keeping as required by industrial compliance.</li>
          </ul>

          <h3 style={{ color: "#0f172a", fontWeight: 700, marginTop: "40px", marginBottom: "15px" }}>3. Data Protection</h3>
          <p style={{ marginBottom: "20px" }}>
            We implement a variety of security measures to maintain the safety of your personal information. Your personal identifiable information is never sold, traded, or otherwise transferred to outside parties without your consent.
          </p>

          <h3 style={{ color: "#0f172a", fontWeight: 700, marginTop: "40px", marginBottom: "15px" }}>4. Cookies</h3>
          <p style={{ marginBottom: "20px" }}>
            Our website uses &apos;cookies&apos; to enhance your browsing experience. Cookies are small files stored on your hard drive for record-keeping purposes. You can choose to set your web browser to refuse cookies, though some parts of the site may not function properly.
          </p>

          <h3 style={{ color: "#0f172a", fontWeight: 700, marginTop: "40px", marginBottom: "15px" }}>5. Contact Information</h3>
          <p style={{ marginBottom: "20px" }}>
            If you have any questions about this Privacy Policy, please contact us at:<br />
            <strong>Shree Ganesh Engimach</strong><br />
            Shed No 22/A, Rameshwar Ind. Estate, Odhav, Ahmedabad<br />
            Email: rishipanchal1999@gmail.com<br />
            Phone: +91 97253 97262
          </p>
        </div>
        
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <Link href="/" style={{ color: "#42a5f5", fontWeight: 700, textDecoration: "none" }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
