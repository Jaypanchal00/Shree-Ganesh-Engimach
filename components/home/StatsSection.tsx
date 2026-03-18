"use client";
import { useEffect, useRef, useState } from "react";
import { FaTrophy, FaCogs, FaSmile, FaIndustry } from "react-icons/fa";

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="stat-number">
      {prefix}{count}{suffix}
    </div>
  );
}

const stats = [
  { target: 5, suffix: "+", label: "Years Experience", icon: <FaTrophy />, desc: "Serving the industry since 2019" },
  { target: 500, suffix: "+", label: "Machines Delivered", icon: <FaCogs />, desc: "Across all major industries" },
  { target: 200, suffix: "+", label: "Happy Clients", icon: <FaSmile />, desc: "Businesses trust our quality" },
  { target: 1, suffix: "", label: "Manufacturing Unit", icon: <FaIndustry />, desc: "State-of-the-art facility" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, #1a5a8a 100%)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      {/* Red accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, var(--secondary), transparent, var(--secondary))" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(140px, 45vw, 240px), 1fr))", gap: "clamp(16px, 3vw, 40px)" }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "32px 24px",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                transition: "all 0.35s ease",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 0.15}s`,
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", fontSize: "2.5rem", marginBottom: "16px", color: "var(--secondary)" }}>{stat.icon}</div>
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <div style={{
                color: "white",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                marginTop: "8px",
                marginBottom: "6px",
              }}>
                {stat.label}
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
