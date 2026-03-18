"use client";
import { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { FaCommentDots } from "react-icons/fa";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Rajesh Beverages Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    avatar: "RK",
    color: "var(--primary)",
    text: "We purchased 3 filling machines from Shree Ganesh Engimach and our production efficiency improved by 40%. The after-sales support is exceptional. Highly recommend!",
  },
  {
    name: "Priya Sharma",
    company: "Fresh Foods Industries",
    location: "Surat, Gujarat",
    rating: 5,
    avatar: "PS",
    color: "var(--secondary)",
    text: "The labeling machine we got is extremely precise and the team helped us integrate it perfectly with our existing line. Quality is top-notch at very competitive pricing.",
  },
  {
    name: "Mohammed Ali",
    company: "Al-Baraka Pharmaceuticals",
    location: "Mumbai, Maharashtra",
    rating: 5,
    avatar: "MA",
    color: "#7c3aed",
    text: "Outstanding build quality and the machines comply with GMP standards for pharma. Their engineers visited us for commissioning and training. Very professional team.",
  },
  {
    name: "Sunita Patel",
    company: "Patel Chemical Works",
    location: "Vadodara, Gujarat",
    rating: 5,
    avatar: "SP",
    color: "#059669",
    text: "Got a complete packaging line setup from them — washing, filling, capping, and labeling. The entire project was delivered on time and within budget. Very satisfied!",
  },
  {
    name: "Vikram Singh",
    company: "Singh Dairy Products",
    location: "Jaipur, Rajasthan",
    rating: 4,
    avatar: "VS",
    color: "#d97706",
    text: "The milk filling machine works brilliantly. Speed and accuracy are spot on. Customer support responds quickly even after warranty period. Great long-term partner.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  const visibleCount = 3;
  const maxIndex = testimonials.length - visibleCount;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  // Adjust visible items based on width (client-side only logic or simple CSS)
  // For the sake of this slider, we'll use CSS variables to control width

  return (
    <section className="section-padding" style={{ background: "var(--bg-secondary)" }} ref={sectionRef}>
      <div className="container-custom">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-badge"><FaCommentDots style={{ marginRight: "6px", color: "var(--secondary)" }} /> Testimonials</span>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            What Our Clients Say
          </h2>
          <div className="red-line-center" />
          <p className="section-subtitle" style={{ textAlign: "center", margin: "0 auto" }}>
            Real feedback from businesses that trust Shree Ganesh Engimach for their packaging needs.
          </p>
        </div>

        {/* Slider Wrapper */}
        <div style={{ overflow: "hidden" }}>
          <div
            className="testimonial-track"
            style={{
              display: "flex",
              gap: "24px",
              transform: `translateX(calc(-${current} * (var(--testimonial-width) + 24px)))`,
              transition: "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  width: "var(--testimonial-width)",
                  background: "white",
                  borderRadius: "20px",
                  padding: "clamp(20px, 4vw, 32px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  border: "1px solid var(--border)",
                  flexShrink: 0,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                  {[...Array(5)].map((_, j) => (
                    <FiStar
                      key={j}
                      size={16}
                      style={{ color: j < t.rating ? "#f59e0b" : "#d1d5db", fill: j < t.rating ? "#f59e0b" : "none" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.75, marginBottom: "28px", fontStyle: "italic" }}>
                  &quot;{t.text}&quot;
                </p>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                  <div style={{
                    width: "48px", height: "48px",
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)`,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "var(--primary)" }}>{t.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--secondary)", fontWeight: 500 }}>{t.company}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "40px" }}>
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            style={{ width: "44px", height: "44px", borderRadius: "50%", border: "2px solid var(--border)", background: "white", cursor: current === 0 ? "not-allowed" : "pointer", opacity: current === 0 ? 0.4 : 1, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", color: "var(--primary)" }}
            onMouseOver={(e) => { if (current !== 0) { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "white"; }}}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
          >
            <FiChevronLeft size={18} />
          </button>

          <div style={{ display: "flex", gap: "8px" }}>
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? "28px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  background: i === current ? "var(--secondary)" : "var(--border)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrent((c) => Math.min(maxIndex, c + 1))}
            disabled={current >= maxIndex}
            style={{ width: "44px", height: "44px", borderRadius: "50%", border: "2px solid var(--border)", background: "white", cursor: current >= maxIndex ? "not-allowed" : "pointer", opacity: current >= maxIndex ? 0.4 : 1, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease", color: "var(--primary)" }}
            onMouseOver={(e) => { if (current < maxIndex) { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "white"; }}}
            onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
      <style jsx>{`
        .testimonial-track {
          --testimonial-width: calc(33.333% - 16px);
        }
        @media (max-width: 1024px) {
          .testimonial-track {
            --testimonial-width: calc(50% - 12px);
          }
        }
        @media (max-width: 640px) {
          .testimonial-track {
            --testimonial-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
