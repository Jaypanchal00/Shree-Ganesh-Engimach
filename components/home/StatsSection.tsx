"use client";
import { useEffect, useRef, useState } from "react";
import { FiSettings, FiUsers, FiHome, FiAward } from "react-icons/fi";

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
  { target: 5, suffix: "+", label: "Years Experience", icon: <FiAward />, desc: "Since 2019", color: "#F59E0B" },
  { target: 500, suffix: "+", label: "Machines Delivered", icon: <FiSettings />, desc: "Across India", color: "#3B82F6" },
  { target: 200, suffix: "+", label: "Happy Clients", icon: <FiUsers />, desc: "Trusted by industries", color: "#10B981" },
  { target: 1, suffix: "", label: "Manufacturing Unit", icon: <FiHome />, desc: "State-of-the-art", color: "#EC4899" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        opacity: 0.5,
      }} />

      {/* Blue Glows */}
      <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)" }} />
      <div style={{ position: "absolute", bottom: "-100px", right: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(40px)" }} />

      {/* Top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)" }} />

      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(clamp(140px, 45vw, 240px), 1fr))", gap: "clamp(16px, 3vw, 40px)" }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "40px 24px",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 0.15}s`,
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.02)",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-10px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 0 20px rgba(255,255,255,0.02)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                fontSize: "2.8rem", 
                marginBottom: "20px", 
                color: stat.color,
                filter: `drop-shadow(0 0 10px ${stat.color}44)`
              }}>
                {stat.icon}
              </div>
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
