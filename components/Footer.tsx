import { PERSONAL } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid var(--color-border)", background: "var(--color-surface)", padding: "2rem 1.5rem" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.1rem", background: "linear-gradient(135deg, #6c63ff, #ff6584)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          NA
        </div>
        <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", textAlign: "center" }}>
          © {year} {PERSONAL.name} · Karachi, Pakistan
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#43e97b", display: "inline-block", animation: "pulse2 2s ease-in-out infinite" }} />
          <span style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>Open to work</span>
        </div>
      </div>
    </footer>
  );
}
