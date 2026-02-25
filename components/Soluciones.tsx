"use client";

import AnimatedSection from "./AnimatedSection";

const plataformaItems = [
  "Apertura y registro de siniestros.",
  "Asignación y reasignación de casos.",
  "Seguimiento del estado y plazos.",
  "Gestión de documentación y evidencia.",
  "Registro trazable de todas las acciones.",
  "Generación automática de la planilla de liquidación.",
  "Generación de informes parciales y finales.",
  "Monitoreo y control de la operación.",
];

const iaItems = [
  "Analizar denuncias, documentación y evidencia.",
  "Realizar pre-análisis del siniestro.",
  "Realizar análisis integral cuando el caso está completo.",
  "Detectar inconsistencias, alertas y faltantes.",
  "Proponer próximos pasos y recomendaciones.",
  "Generar automáticamente la liquidación y los informes.",
  "Solicitar documentación adicional cuando es necesario.",
];

function CheckItem({ text }: { text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
      <div style={{
        width: "20px",
        height: "20px",
        minWidth: "20px",
        borderRadius: "50%",
        background: "rgba(124, 58, 237, 0.15)",
        border: "1px solid rgba(124, 58, 237, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2px",
      }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span style={{ color: "rgba(196, 181, 253, 0.8)", fontSize: "14px", lineHeight: 1.55 }}>
        {text}
      </span>
    </div>
  );
}

export default function Soluciones() {
  return (
    <section id="soluciones" style={{
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #09041f 60%, #060612 100%)",
    }}>
      {/* Orbs */}
      <div style={{
        position: "absolute",
        top: "30%",
        left: "-100px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "20%",
        right: "-100px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
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
              Soluciones
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 style={{
              fontSize: "clamp(28px, 4.5vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}>
              Soluciones Dodilix para la{" "}
              <span style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                gestión de siniestros
              </span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
          gap: "28px",
        }}>
          {/* Column 1: Platform */}
          <AnimatedSection direction="left" delay={0.1}>
            <div style={{
              background: "rgba(13, 13, 43, 0.8)",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              borderRadius: "20px",
              padding: "36px",
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Top accent */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #7c3aed, #a855f7, transparent)",
                borderRadius: "20px 20px 0 0",
              }} />

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "28px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  minWidth: "48px",
                  borderRadius: "12px",
                  background: "rgba(124, 58, 237, 0.15)",
                  border: "1px solid rgba(124, 58, 237, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#a855f7" strokeWidth="1.8"/>
                    <path d="M8 21h8M12 17v4" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ color: "white", fontSize: "17px", fontWeight: 700, lineHeight: 1.3, marginBottom: "4px" }}>
                    Plataforma integral de gestión de siniestros
                  </h3>
                  <span style={{ color: "rgba(124, 58, 237, 0.8)", fontSize: "12px", fontWeight: 600 }}>
                    Pilar 01
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                {plataformaItems.map((item, i) => (
                  <CheckItem key={i} text={item} />
                ))}
              </div>

              {/* Benefit card */}
              <div style={{
                background: "rgba(124, 58, 237, 0.08)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                borderRadius: "12px",
                padding: "16px",
              }}>
                <div style={{ color: "#c4b5fd", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "6px" }}>
                  ✦ BENEFICIO CLAVE
                </div>
                <p style={{ color: "rgba(196, 181, 253, 0.75)", fontSize: "13px", lineHeight: 1.55 }}>
                  Orden y control total del proceso, reduciendo el tiempo promedio de gestión
                  y eliminando errores por información fragmentada.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Column 2: AI */}
          <AnimatedSection direction="right" delay={0.15}>
            <div style={{
              background: "rgba(13, 13, 43, 0.8)",
              border: "1px solid rgba(236, 72, 153, 0.2)",
              borderRadius: "20px",
              padding: "36px",
              height: "100%",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Top accent */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, #ec4899, #f43f5e, transparent)",
                borderRadius: "20px 20px 0 0",
              }} />

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "28px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  minWidth: "48px",
                  borderRadius: "12px",
                  background: "rgba(236, 72, 153, 0.12)",
                  border: "1px solid rgba(236, 72, 153, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14z" stroke="#ec4899" strokeWidth="1.8"/>
                    <path d="M9 12l2 2 4-4" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ color: "white", fontSize: "17px", fontWeight: 700, lineHeight: 1.3, marginBottom: "4px" }}>
                    Agentes de IA para análisis y automatización de siniestros
                  </h3>
                  <span style={{ color: "rgba(236, 72, 153, 0.8)", fontSize: "12px", fontWeight: 600 }}>
                    Pilar 02
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: "14px" }}>
                <p style={{ color: "rgba(196, 181, 253, 0.65)", fontSize: "13px", marginBottom: "14px" }}>
                  Los agentes de IA de Dodilix pueden:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {iaItems.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <div style={{
                        width: "20px",
                        height: "20px",
                        minWidth: "20px",
                        borderRadius: "50%",
                        background: "rgba(236, 72, 153, 0.12)",
                        border: "1px solid rgba(236, 72, 153, 0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "2px",
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span style={{ color: "rgba(196, 181, 253, 0.8)", fontSize: "14px", lineHeight: 1.55 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefit card */}
              <div style={{
                background: "rgba(236, 72, 153, 0.06)",
                border: "1px solid rgba(236, 72, 153, 0.2)",
                borderRadius: "12px",
                padding: "16px",
              }}>
                <div style={{ color: "#f9a8d4", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "6px" }}>
                  ✦ BENEFICIO CLAVE
                </div>
                <p style={{ color: "rgba(196, 181, 253, 0.75)", fontSize: "13px", lineHeight: 1.55 }}>
                  Mayor velocidad y consistencia en el análisis, con menor carga manual
                  para el equipo de liquidadores y analistas.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
