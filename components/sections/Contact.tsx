"use client";

import { PERSONAL } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";

const contactItems = [
  { icon: "✉️", label: "Email",    value: PERSONAL.email,    href: `mailto:${PERSONAL.email}` },
  { icon: "📞", label: "Phone",    value: PERSONAL.phone,    href: `tel:+92${PERSONAL.phone.replace(/^0/, "")}` },
  { icon: "💼", label: "LinkedIn", value: "nawab-ali",       href: PERSONAL.linkedin },
  { icon: "📍", label: "Location", value: PERSONAL.location, href: null },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-24 px-6" style={{ position: "relative", overflow: "hidden" }}>
      {/* Glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "#6c63ff", opacity: 0.04, filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", textAlign: "center" }}>
        <p style={{ fontSize: "0.72rem", color: "#6c63ff", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Let&apos;s connect
        </p>
        <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--color-text)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
          Let&apos;s Work Together
        </h2>
        <p style={{ color: "var(--color-muted)", maxWidth: 420, margin: "0 auto 3.5rem", lineHeight: 1.8 }}>
          From frontend interfaces to full-stack solutions — I&apos;m open to serious projects and exciting opportunities.
        </p>

        {/* Contact cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
          {contactItems.map((item) => {
            const card = (
              <div
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "1.5rem 1rem", cursor: item.href ? "pointer" : "default", transition: "all 0.2s" }}
                onMouseEnter={e => { if (!item.href) return; const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "rgba(108,99,255,0.5)"; el.style.transform = "translateY(-4px)"; el.style.background = "var(--color-surface2)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = "var(--color-border)"; el.style.transform = ""; el.style.background = "var(--color-surface)"; }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                <p style={{ fontSize: "0.7rem", color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "0.25rem" }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--color-text)", fontWeight: 500, wordBreak: "break-all" }}>
                  {item.value}
                </p>
              </div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                {card}
              </a>
            ) : (
              <div key={item.label}>{card}</div>
            );
          })}
        </div>

        {/* CTA button */}
      </div>
    </AnimatedSection>
  );
}
