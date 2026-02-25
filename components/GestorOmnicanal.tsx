"use client";

import AnimatedSection from "./AnimatedSection";

const features = [
  "Comunicación fluida asociada al siniestro.",
  "Gestión de conversaciones por WhatsApp, email y redes.",
  "Registro completo del historial de comunicaciones.",
  "Envío y recepción de documentación dentro del contexto del caso.",
  "Uso de la información de las conversaciones como insumo para el análisis.",
];

export default function GestorOmnicanal() {
  return (
    <section style={{
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #060818 60%, #060612 100%)",
    }}>
      {/* Orb */}
      <div style={{
        position: "absolute",
        top: "50%",
        right: "-80px",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
        filter: "blur(60px)",
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
          {/* Left: Content */}
          <div>
            <AnimatedSection delay={0.05}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(59, 130, 246, 0.1)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                color: "#93c5fd",
                padding: "7px 16px",
                borderRadius: "100px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}>
                Pilar 03
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 style={{
                fontSize: "clamp(26px, 4vw, 42px)",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}>
                Gestor de conversaciones{" "}
                <span style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  omnicanal para siniestros
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
                {features.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{
                      width: "20px",
                      height: "20px",
                      minWidth: "20px",
                      borderRadius: "50%",
                      background: "rgba(59, 130, 246, 0.12)",
                      border: "1px solid rgba(59, 130, 246, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2px",
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ color: "rgba(196, 181, 253, 0.8)", fontSize: "15px", lineHeight: 1.55 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              {/* Benefit */}
              <div style={{
                background: "rgba(59, 130, 246, 0.07)",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                borderRadius: "14px",
                padding: "20px 24px",
                marginBottom: "28px",
              }}>
                <div style={{ color: "#93c5fd", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "8px" }}>
                  ✦ BENEFICIO CLAVE
                </div>
                <p style={{ color: "rgba(196, 181, 253, 0.75)", fontSize: "14px", lineHeight: 1.6 }}>
                  Menos reprocesos, mejor experiencia del asegurado y mayor claridad operativa.
                  Cada conversación queda asociada al expediente del siniestro.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.45}>
              <div style={{
                background: "rgba(124, 58, 237, 0.06)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                borderRadius: "14px",
                padding: "20px 24px",
              }}>
                <div style={{ color: "#c4b5fd", fontSize: "13px", fontWeight: 600, marginBottom: "6px" }}>
                  Una solución flexible y escalable
                </div>
                <p style={{ color: "rgba(196, 181, 253, 0.65)", fontSize: "13px", lineHeight: 1.55 }}>
                  Cada pilar funciona de manera independiente o en conjunto, permitiendo
                  una implementación progresiva adaptada a tu organización.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Visual chat mockup */}
          <AnimatedSection direction="right" delay={0.2}>
            <div style={{
              background: "rgba(13, 13, 43, 0.85)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}>
              {/* Header */}
              <div style={{
                padding: "16px 20px",
                borderBottom: "1px solid rgba(59, 130, 246, 0.15)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(59, 130, 246, 0.05)",
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                  </svg>
                </div>
                <div>
                  <div style={{ color: "white", fontWeight: 600, fontSize: "14px" }}>
                    Siniestro #4892 – María López
                  </div>
                  <div style={{ color: "rgba(196, 181, 253, 0.5)", fontSize: "12px" }}>
                    WhatsApp · Email · Activo
                  </div>
                </div>
                <div style={{
                  marginLeft: "auto",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#25D366",
                  boxShadow: "0 0 6px #25D366",
                }} />
              </div>

              {/* Messages */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { from: "user", text: "Buenas, adjunto la documentación del accidente.", time: "10:24" },
                  { from: "bot", text: "Recibido. Procesando documentación del siniestro. Le notificaremos el resultado en breve.", time: "10:24" },
                  { from: "user", text: "¿Cuándo tendré respuesta?", time: "10:31" },
                  { from: "bot", text: "El análisis IA detectó toda la información. Su caso está en etapa de liquidación. Estimado: 48hs.", time: "10:32" },
                ].map((msg, i) => (
                  <div key={i} style={{
                    display: "flex",
                    justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                  }}>
                    <div style={{
                      maxWidth: "75%",
                      background: msg.from === "user"
                        ? "rgba(59, 130, 246, 0.2)"
                        : "rgba(124, 58, 237, 0.15)",
                      border: `1px solid ${msg.from === "user" ? "rgba(59, 130, 246, 0.25)" : "rgba(124, 58, 237, 0.2)"}`,
                      borderRadius: msg.from === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                      padding: "10px 14px",
                    }}>
                      <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", lineHeight: 1.5 }}>
                        {msg.text}
                      </p>
                      <p style={{ color: "rgba(196, 181, 253, 0.4)", fontSize: "11px", marginTop: "4px", textAlign: "right" }}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input bar */}
              <div style={{
                padding: "12px 16px",
                borderTop: "1px solid rgba(59, 130, 246, 0.1)",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}>
                <div style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  color: "rgba(196, 181, 253, 0.4)",
                  fontSize: "13px",
                }}>
                  Escribir mensaje...
                </div>
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(59, 130, 246, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
