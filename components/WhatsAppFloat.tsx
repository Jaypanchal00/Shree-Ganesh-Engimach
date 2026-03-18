"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919725397262?text=Hello%2C%20I%20am%20interested%20in%20your%20bottle%20packaging%20machines.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={30} />
      <span
        className="whatsapp-pulse"
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          background: "var(--secondary)",
          color: "white",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          fontSize: "0.6rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        1
      </span>
    </a>
  );
}
