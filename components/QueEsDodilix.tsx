"use client";

import AnimatedSection from "./AnimatedSection";

export default function QueEsDodilix() {
  return (
    <section style={{
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #0a0620 60%, #060612 100%)",
    }}>
      {/* Purple orb left */}
      <div style={{
        position: "absolute",
        top: "30%",
        left: "-100px",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <AnimatedSection delay={0.05}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(124, 58, 237, 0.12)",
              border: "1px solid rgba(124, 58, 237, 0.35)",
              color: "#c4b5fd",
              padding: "7px 16px",
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Nuestra Solución
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 style={{
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}>
              ¿Qué es{" "}
              <span style={{
                background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Dodilix?
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p style={{
              color: "rgba(196, 181, 253, 0.75)",
              fontSize: "17px",
              lineHeight: 1.7,
              maxWidth: "680px",
              margin: "0 auto",
            }}>
              Una plataforma integral que combina gestión especializada, inteligencia artificial
              y comunicación omnicanal para transformar el ciclo completo del siniestro.
            </p>
          </AnimatedSection>
        </div>

        {/* Main card */}
        <AnimatedSection delay={0.2}>
          <div style={{
            background: "linear-gradient(135deg, rgba(13, 13, 43, 0.9), rgba(10, 6, 32, 0.95))",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            borderRadius: "24px",
            padding: "48px",
            position: "relative",
            overflow: "hidden",
            marginBottom: "32px",
          }}>
            {/* Glow top */}
            <div style={{
              position: "absolute",
              top: "-1px",
              left: "15%",
              right: "15%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.8), transparent)",
            }} />

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}>
              <div>
                <p style={{
                  color: "rgba(196, 181, 253, 0.8)",
                  fontSize: "16px",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                }}>
                  Dodilix es una solución tecnológica diseñada para aseguradoras y organizaciones
                  que necesitan ordenar, automatizar y centralizar todo el ciclo de vida del siniestro.
                </p>
                <p style={{
                  color: "rgba(196, 181, 253, 0.8)",
                  fontSize: "16px",
                  lineHeight: 1.75,
                }}>
                  Desde la denuncia inicial hasta la liquidación final, cada etapa queda registrada,
                  analizada y gestionada dentro de un único ecosistema integrado.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  {
                    icon: "🎯",
                    title: "Ciclo completo",
                    desc: "De la denuncia a la liquidación en una sola plataforma",
                  },
                  {
                    icon: "🤖",
                    title: "IA aplicada",
                    desc: "Análisis automatizado, alertas y generación de informes",
                  },
                  {
                    icon: "💬",
                    title: "Omnicanal",
                    desc: "WhatsApp, email y más, todo asociado al siniestro",
                  },
                  {
                    icon: "🔌",
                    title: "Integrable",
                    desc: "Conecta con tus sistemas actuales vía API",
                  },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    padding: "16px",
                    background: "rgba(124, 58, 237, 0.07)",
                    border: "1px solid rgba(124, 58, 237, 0.15)",
                    borderRadius: "12px",
                  }}>
                    <span style={{ fontSize: "24px" }}>{item.icon}</span>
                    <div>
                      <div style={{ color: "white", fontWeight: 600, fontSize: "14px", marginBottom: "4px" }}>
                        {item.title}
                      </div>
                      <div style={{ color: "rgba(196, 181, 253, 0.65)", fontSize: "13px", lineHeight: 1.5 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
