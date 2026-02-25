"use client";

import AnimatedSection from "./AnimatedSection";

const impactItems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 3v18h18" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 16l4-6 4 4 4-5" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reducción de tiempos operativos",
    desc: "Menos esperas, resoluciones más rápidas y plazos cumplidos en todo el ciclo del siniestro.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="4" height="10" rx="1" stroke="#a855f7" strokeWidth="1.8"/>
        <rect x="10" y="7" width="4" height="14" rx="1" stroke="#a855f7" strokeWidth="1.8"/>
        <rect x="17" y="3" width="4" height="18" rx="1" stroke="#a855f7" strokeWidth="1.8"/>
        <circle cx="18" cy="2" r="2" fill="#ec4899"/>
      </svg>
    ),
    title: "Automatización de tareas repetitivas",
    desc: "Las tareas manuales y de bajo valor se automatizan para que el equipo foco en lo que importa.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#a855f7" strokeWidth="1.8"/>
        <path d="M9 12l2 2 4-4" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Mayor consistencia en el análisis y la gestión",
    desc: "Criterios unificados aplicados sistemáticamente eliminan la variabilidad del proceso.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="5" rx="8" ry="2.5" stroke="#a855f7" strokeWidth="1.8"/>
        <path d="M4 5v7c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" stroke="#a855f7" strokeWidth="1.8"/>
        <path d="M4 12v4.5c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V12" stroke="#a855f7" strokeWidth="1.8"/>
      </svg>
    ),
    title: "Centralización de información, documentación y comunicaciones",
    desc: "Todo el expediente del siniestro, en un único lugar accesible y ordenado.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#a855f7" strokeWidth="1.8"/>
        <path d="m21 21-4.35-4.35" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M11 8v3l2 2" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Mejor seguimiento y control del proceso",
    desc: "Visibilidad en tiempo real sobre el estado de cada caso y las acciones pendientes.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Escalabilidad sin aumentar estructura",
    desc: "Crecé en volumen de siniestros sin necesidad de sumar proporcionalmente personal.",
  },
];

export default function Impacto() {
  return (
    <section style={{
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #080420 60%, #060612 100%)",
    }}>
      {/* Orbs */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)",
        filter: "blur(60px)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
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
              Resultados concretos
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
              Impacto directo en la{" "}
              <span style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                operación
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p style={{
              color: "rgba(196, 181, 253, 0.7)",
              fontSize: "17px",
              maxWidth: "580px",
              margin: "0 auto",
            }}>
              Dodilix genera mejoras medibles desde el primer mes de implementación.
            </p>
          </AnimatedSection>
        </div>

        {/* Grid 2x3 */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}>
          {impactItems.map((item, i) => (
            <AnimatedSection key={i} delay={0.1 + i * 0.08}>
              <div style={{
                background: "rgba(13, 13, 43, 0.7)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                borderRadius: "16px",
                padding: "28px",
                height: "100%",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.5)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(13, 13, 43, 0.9)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(124, 58, 237, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.2)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(13, 13, 43, 0.7)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
              >
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "rgba(124, 58, 237, 0.12)",
                  border: "1px solid rgba(124, 58, 237, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: 700,
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: "rgba(196, 181, 253, 0.65)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}>
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Full-width card: cost reduction */}
        <AnimatedSection delay={0.5}>
          <div style={{
            background: "linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(236, 72, 153, 0.08))",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            borderRadius: "16px",
            padding: "32px 36px",
            display: "flex",
            alignItems: "center",
            gap: "28px",
            flexWrap: "wrap",
          }}>
            <div style={{
              width: "60px",
              height: "60px",
              minWidth: "60px",
              borderRadius: "14px",
              background: "rgba(124, 58, 237, 0.2)",
              border: "1px solid rgba(124, 58, 237, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: "white", fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>
                Reducción de costos operativos
              </h3>
              <p style={{ color: "rgba(196, 181, 253, 0.7)", fontSize: "15px", lineHeight: 1.6 }}>
                Menos reprocesos, menor necesidad de personal adicional y optimización de recursos.
                La eficiencia operativa se traduce directamente en ahorro medible para tu organización.
              </p>
            </div>
            <div style={{
              background: "rgba(124, 58, 237, 0.2)",
              border: "1px solid rgba(124, 58, 237, 0.4)",
              borderRadius: "12px",
              padding: "20px 28px",
              textAlign: "center",
              minWidth: "140px",
            }}>
              <div style={{
                fontSize: "36px",
                fontWeight: 800,
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                -40%
              </div>
              <div style={{ color: "rgba(196, 181, 253, 0.65)", fontSize: "12px", marginTop: "4px" }}>
                costos promedio
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
