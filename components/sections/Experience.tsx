"use client";

import { EXPERIENCE } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24 px-6" style={{ background: "var(--color-surface)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p style={{ fontSize: "0.72rem", color: "#6c63ff", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Where I&apos;ve worked
        </p>
        <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--color-text)", marginBottom: "4rem", letterSpacing: "-0.01em" }}>
          Experience
        </h2>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 6, top: 8, bottom: 8, width: 1, background: "linear-gradient(to bottom, #6c63ff, transparent)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem", paddingLeft: "2rem" }}>
            {EXPERIENCE.map((job, idx) => (
              <div key={idx} style={{ position: "relative" }}>
                {/* Dot */}
                <div style={{ position: "absolute", left: "-2rem", top: 8, width: 12, height: 12, borderRadius: "50%", background: "#6c63ff", border: "2px solid var(--color-bg)", boxShadow: "0 0 14px rgba(108,99,255,0.6)" }} />

                {/* Card */}
                <div
                  style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "1.5rem", transition: "all 0.25s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.45)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.05rem", color: "var(--color-text)" }}>
                      {job.title}
                    </h3>
                    <span style={{ fontSize: "0.72rem", color: "#6c63ff", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.25)", borderRadius: 100, padding: "4px 12px", fontWeight: 500, whiteSpace: "nowrap" }}>
                      {job.period}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#43e97b", marginBottom: "1.25rem" }}>
                    {job.emoji} {job.company}
                  </p>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {job.bullets.map((b, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                        <span style={{ color: "#6c63ff", fontSize: "0.75rem", marginTop: 2, flexShrink: 0 }}>→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
