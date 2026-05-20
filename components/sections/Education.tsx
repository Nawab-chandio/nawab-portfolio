"use client";

import { EDUCATION, PERSONAL } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Education() {
  return (
    <AnimatedSection className="py-16 px-6" style={{ background: "var(--color-surface)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p style={{ fontSize: "0.72rem", color: "#6c63ff", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Academic background
        </p>
        <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--color-text)", marginBottom: "2.5rem", letterSpacing: "-0.01em" }}>
          Education
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.25rem", flex: "1 1 260px", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.4)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)"}
            >
              <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(108,99,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.75rem", flexShrink: 0 }}>
                {edu.emoji}
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "var(--color-text)", fontSize: "1rem", lineHeight: 1.3 }}>
                  {edu.degree}
                </h3>
                <p style={{ fontSize: "0.875rem", fontWeight: 500, color: "#43e97b", marginTop: 3 }}>
                  {edu.institution}
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--color-muted)", marginTop: 3 }}>
                  {edu.period}
                </p>
              </div>
            </div>
          ))}

          {/* Languages card */}
          <div style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "1.5rem", flex: "1 1 260px", transition: "border-color 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.4)"}
            onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)"}
          >
            <p style={{ fontSize: "0.72rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "0.875rem" }}>
              Languages
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {PERSONAL.languages.map(lang => (
                <span key={lang} style={{ background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.25)", color: "#6c63ff", fontSize: "0.875rem", padding: "6px 14px", borderRadius: 8, fontWeight: 500 }}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
