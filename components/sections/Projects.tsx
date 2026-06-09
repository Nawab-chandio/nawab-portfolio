"use client";

import { PROJECTS } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="py-24 px-6">
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <p style={{ fontSize: "0.72rem", color: "#6c63ff", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          What I&apos;ve built
        </p>
        <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--color-text)", marginBottom: "3rem", letterSpacing: "-0.01em" }}>
          Projects
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {PROJECTS.map((project, idx) => (
            <a
              key={idx}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{ position: "relative", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "1.75rem", overflow: "hidden", transition: "all 0.3s", cursor: "pointer", height: "100%" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-6px)"; el.style.borderColor = "rgba(108,99,255,0.5)"; el.style.boxShadow = "0 24px 48px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ""; el.style.borderColor = "var(--color-border)"; el.style.boxShadow = ""; }}
              >
                {/* Top accent line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(135deg, #6c63ff, #ff6584)" }} />

                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(108,99,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1rem" }}>
                  {project.emoji}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.2rem", color: "var(--color-text)" }}>
                    {project.name}
                  </h3>
                  <span style={{ fontSize: "0.72rem", color: "var(--color-muted)", whiteSpace: "nowrap", marginTop: 4 }}>
                    {project.period}
                  </span>
                </div>

                <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ background: "var(--color-surface2)", border: "1px solid var(--color-border)", borderRadius: 6, padding: "3px 10px", fontSize: "0.72rem", color: "var(--color-muted)", fontWeight: 500 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}

          {/* Placeholder card */}
          <div style={{ border: "1px dashed var(--color-border)", borderRadius: 16, padding: "1.75rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 200, transition: "border-color 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(108,99,255,0.4)"}
            onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)"}
          >
            <div style={{ width: 48, height: 48, borderRadius: 12, border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "var(--color-muted)", marginBottom: "0.75rem" }}>+</div>
            <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", fontWeight: 500 }}>More projects coming soon</p>
            <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", opacity: 0.6, marginTop: 4 }}>Check back or see GitHub</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
