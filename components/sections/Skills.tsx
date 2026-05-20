"use client";

import { SKILLS } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-24 px-6">
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p style={{ fontSize: "0.72rem", color: "#6c63ff", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          What I know
        </p>
        <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--color-text)", marginBottom: "3rem", letterSpacing: "-0.01em" }}>
          Skills & Technologies
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              style={{
                position: "relative",
                padding: "0.5rem 1rem",
                borderRadius: 8,
                border: skill.featured ? "1px solid rgba(108,99,255,0.5)" : "1px solid var(--color-border)",
                background: skill.featured ? "rgba(108,99,255,0.08)" : "var(--color-surface)",
                color: skill.featured ? "#6c63ff" : "var(--color-muted)",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "default",
                transition: "all 0.2s",
                transitionDelay: `${i * 30}ms`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-3px)";
                el.style.borderColor = "#6c63ff";
                el.style.color = "#6c63ff";
                el.style.background = "rgba(108,99,255,0.12)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.borderColor = skill.featured ? "rgba(108,99,255,0.5)" : "var(--color-border)";
                el.style.color = skill.featured ? "#6c63ff" : "var(--color-muted)";
                el.style.background = skill.featured ? "rgba(108,99,255,0.08)" : "var(--color-surface)";
              }}
            >
              {skill.featured && (
                <span style={{ position: "absolute", top: -5, right: -5, width: 10, height: 10, borderRadius: "50%", background: "#6c63ff", border: "2px solid var(--color-bg)" }} />
              )}
              {skill.name}
            </div>
          ))}
        </div>

        <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "1.5rem", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ display: "inline-block", width: 10, height: 10, borderRadius: "50%", background: "#6c63ff", border: "2px solid var(--color-bg)" }} />
          Highlighted = core specializations
        </p>
      </div>
    </AnimatedSection>
  );
}
