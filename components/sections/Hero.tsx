"use client";

import { useEffect, useRef } from "react";
import { PERSONAL, STATS } from "@/lib/data";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section
        ref={heroRef}
        style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6rem 1.5rem 4rem", maxWidth: 960, margin: "0 auto", overflow: "hidden" }}
      >
        {/* Orbs */}
        <div style={{ position: "absolute", top: "20%", right: 0, width: 400, height: 400, borderRadius: "50%", background: "#6c63ff", opacity: 0.08, filter: "blur(80px)", pointerEvents: "none", animation: "float 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "20%", left: 0, width: 300, height: 300, borderRadius: "50%", background: "#ff6584", opacity: 0.08, filter: "blur(80px)", pointerEvents: "none", animation: "float 10s ease-in-out infinite reverse" }} />

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.3)", borderRadius: 100, padding: "6px 16px", width: "fit-content", marginBottom: "2rem" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#43e97b", display: "inline-block", animation: "pulse2 2s ease-in-out infinite" }} />
          <span style={{ color: "#6c63ff", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {PERSONAL.tagline}
          </span>
        </div>

        {/* Heading */}
        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
          <span style={{ display: "block", fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "var(--color-text)" }}>
            {PERSONAL.name.split(" ")[0]}
          </span>
          <span style={{ display: "block", fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "var(--color-text)" }}>
            {PERSONAL.name.split(" ")[1]}
          </span>
          <span style={{ display: "block", fontSize: "clamp(2rem, 5vw, 4rem)", background: "linear-gradient(135deg, #6c63ff, #ff6584)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginTop: "0.25rem" }}>
            {PERSONAL.role}
          </span>
        </h1>

        {/* Bio */}
        <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 580, marginBottom: "2.5rem", fontWeight: 300 }}>
          {PERSONAL.bio}
        </p>

        {/* Actions */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <button
            onClick={() => scrollTo("#contact")}
            style={{ background: "#6c63ff", color: "#fff", border: "none", padding: "0.75rem 1.75rem", borderRadius: 8, fontSize: "0.9rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 32px rgba(108,99,255,0.35)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = ""; (e.currentTarget as HTMLButtonElement).style.boxShadow = ""; }}
          >
            Get In Touch →
          </button>
          <button
            onClick={() => scrollTo("#experience")}
            style={{ background: "transparent", color: "var(--color-text)", border: "1px solid var(--color-border)", padding: "0.75rem 1.75rem", borderRadius: 8, fontSize: "0.9rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#6c63ff"; (e.currentTarget as HTMLButtonElement).style.background = "rgba(108,99,255,0.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
          >
            View Experience
          </button>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.35 }}>
          <span style={{ fontSize: "0.65rem", color: "var(--color-muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>scroll</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--color-muted), transparent)", animation: "pulse2 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "1.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", textAlign: "center" }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ padding: "0.5rem 1rem", borderRight: i < STATS.length - 1 ? "1px solid var(--color-border)" : "none" }}>
              <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "2.25rem", color: "var(--color-text)" }}>
                {s.num}
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--color-muted)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse2 {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </>
  );
}
