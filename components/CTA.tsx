"use client";

import AnimatedSection from "./AnimatedSection";

const WA_NUMBER = "543518131093";
const WA_URL = `https://wa.me/${WA_NUMBER}`;

export default function CTA() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{
      padding: "80px 24px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #0e0530 50%, #060612 100%)",
    }}>
      {/* Orbs */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "700px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.2) 0%, transparent 70%)",
        filter: "blur(60px)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{
            background: "linear-gradient(135deg, rgba(13, 13, 43, 0.9), rgba(10, 5, 30, 0.95))",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            borderRadius: "28px",
            padding: "64px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Top border glow */}
            <div style={{
              position: "absolute",
              top: "-1px",
              left: "20%",
              right: "20%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.9), rgba(236, 72, 153, 0.6), transparent)",
            }} />

            {/* Corner decorations */}
            <div style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "80px",
              height: "80px",
              borderTop: "1px solid rgba(124, 58, 237, 0.3)",
              borderRight: "1px solid rgba(124, 58, 237, 0.3)",
              borderRadius: "0 12px 0 0",
            }} />
            <div style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              width: "80px",
              height: "80px",
              borderBottom: "1px solid rgba(124, 58, 237, 0.3)",
              borderLeft: "1px solid rgba(124, 58, 237, 0.3)",
              borderRadius: "0 0 0 12px",
            }} />

            <AnimatedSection delay={0.1}>
              <div style={{
                width: "70px",
                height: "70px",
                borderRadius: "18px",
                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.2))",
                border: "1px solid rgba(124, 58, 237, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 28px",
              }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 style={{
                fontSize: "clamp(24px, 4vw, 42px)",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
                marginBottom: "20px",
                color: "white",
              }}>
                ¿Querés conocer cómo Dodilix puede mejorar{" "}
                <span style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  tu gestión de siniestros?
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p style={{
                color: "rgba(196, 181, 253, 0.7)",
                fontSize: "17px",
                lineHeight: 1.65,
                marginBottom: "44px",
                maxWidth: "560px",
                margin: "0 auto 44px",
              }}>
                Coordinamos una demo personalizada enfocada en tu proceso y te mostramos
                el impacto real en tu operación.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  onClick={scrollToContact}
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                    color: "white",
                    padding: "16px 36px",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 8px 30px rgba(124, 58, 237, 0.5)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(124, 58, 237, 0.7)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(124, 58, 237, 0.5)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Solicitar demo
                </button>

                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "transparent",
                    color: "white",
                    padding: "16px 36px",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: 600,
                    border: "1.5px solid rgba(255,255,255,0.2)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.6)";
                    e.currentTarget.style.background = "rgba(124, 58, 237, 0.1)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Hablar con un experto
                </a>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
