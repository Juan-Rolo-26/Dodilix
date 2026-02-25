"use client";

import AnimatedSection from "./AnimatedSection";

export default function Problematica() {
  return (
    <section style={{
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #10062a 50%, #060612 100%)",
    }}>
      {/* Background orb */}
      <div style={{
        position: "absolute",
        top: "50%",
        right: "-100px",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)",
        filter: "blur(50px)",
        transform: "translateY(-50%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}>
          {/* Left: Illustration */}
          <AnimatedSection direction="left">
            <div style={{
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.08))",
              border: "1px solid rgba(124, 58, 237, 0.2)",
              borderRadius: "24px",
              padding: "48px",
              position: "relative",
              overflow: "hidden",
              minHeight: "380px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
              {/* Decorative bg */}
              <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(rgba(124, 58, 237, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.06) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }} />

              {/* Illustration: stacked problem cards */}
              <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "280px" }}>
                {[
                  { icon: "⏱", text: "Tiempos operativos elevados", color: "#ec4899" },
                  { icon: "🔀", text: "Procesos fragmentados y manuales", color: "#f59e0b" },
                  { icon: "📋", text: "Falta de trazabilidad", color: "#ef4444" },
                  { icon: "💰", text: "Costos operativos altos", color: "#8b5cf6" },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: "rgba(6, 6, 18, 0.7)",
                    border: `1px solid ${item.color}33`,
                    borderRadius: "12px",
                    padding: "14px 18px",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    backdropFilter: "blur(8px)",
                  }}>
                    <span style={{ fontSize: "22px" }}>{item.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", fontWeight: 500 }}>
                      {item.text}
                    </span>
                    <div style={{
                      marginLeft: "auto",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: item.color,
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <div>
            <AnimatedSection delay={0.1}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(236, 72, 153, 0.1)",
                border: "1px solid rgba(236, 72, 153, 0.3)",
                color: "#f9a8d4",
                padding: "6px 14px",
                borderRadius: "100px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}>
                Problemática
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 style={{
                fontSize: "clamp(26px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                marginBottom: "24px",
                color: "white",
              }}>
                La gestión de siniestros se volvió un proceso{" "}
                <span style={{
                  background: "linear-gradient(135deg, #ec4899, #f43f5e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  complejo y costoso
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p style={{
                color: "rgba(196, 181, 253, 0.75)",
                fontSize: "16px",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}>
                Las aseguradoras enfrentan operaciones fragmentadas, herramientas desconectadas
                y procesos manuales que generan demoras, inconsistencias y pérdida de control.
                El volumen creciente de casos amplifica cada ineficiencia.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Información dispersa en múltiples sistemas y herramientas",
                  "Análisis inconsistente por falta de criterios unificados",
                  "Comunicación desorganizada con asegurados y peritos",
                  "Dificultad para escalar operaciones sin aumentar costos",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{
                      width: "22px",
                      height: "22px",
                      minWidth: "22px",
                      borderRadius: "50%",
                      background: "rgba(236, 72, 153, 0.15)",
                      border: "1px solid rgba(236, 72, 153, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2px",
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span style={{ color: "rgba(196, 181, 253, 0.8)", fontSize: "15px", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
