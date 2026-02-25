"use client";

import AnimatedSection from "./AnimatedSection";

const integrations = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Integración vía API",
    desc: "Conectate a Dodilix desde cualquier sistema con nuestra API REST documentada.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#a855f7" strokeWidth="1.8"/>
        <path d="M8 21h8M12 17v4" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Conexión con core y sistemas internos",
    desc: "Integración fluida con tus sistemas de gestión, core asegurador y herramientas existentes.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polyline points="8 17 12 21 16 17" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="12" x2="12" y2="21" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Importación y exportación de información",
    desc: "Migrá datos existentes y exportá reportes en los formatos que necesitás.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#a855f7" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Integración con canales de comunicación",
    desc: "WhatsApp Business API, email, y más canales integrados al flujo del siniestro.",
  },
];

const security = [
  {
    icon: "🔐",
    title: "Control de accesos y roles",
    desc: "Permisos granulares por usuario y equipo, con auditoría completa.",
  },
  {
    icon: "📋",
    title: "Registro trazable de acciones",
    desc: "Cada acción queda registrada con timestamp y usuario responsable.",
  },
  {
    icon: "📁",
    title: "Gestión segura de documentación",
    desc: "Almacenamiento encriptado con acceso controlado a evidencias y expedientes.",
  },
  {
    icon: "✅",
    title: "Buenas prácticas de operación y continuidad",
    desc: "Infraestructura diseñada para alta disponibilidad y recuperación ante fallos.",
  },
];

export default function TecnologiaSeguridad() {
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
        top: "20%",
        right: "-80px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section: Integrations */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
                Tecnología
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 style={{
                fontSize: "clamp(26px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}>
                Integración simple con tu{" "}
                <span style={{
                  background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  ecosistema
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p style={{
                color: "rgba(196, 181, 253, 0.7)",
                fontSize: "16px",
                maxWidth: "520px",
                margin: "0 auto",
              }}>
                Dodilix se adapta a tu infraestructura existente, sin migraciones disruptivas.
              </p>
            </AnimatedSection>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}>
            {integrations.map((item, i) => (
              <AnimatedSection key={i} delay={0.1 + i * 0.08}>
                <div style={{
                  background: "rgba(13, 13, 43, 0.7)",
                  border: "1px solid rgba(124, 58, 237, 0.2)",
                  borderRadius: "16px",
                  padding: "28px",
                  transition: "all 0.3s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.45)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 35px rgba(124, 58, 237, 0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124, 58, 237, 0.2)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
                >
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(124, 58, 237, 0.12)",
                    border: "1px solid rgba(124, 58, 237, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ color: "white", fontSize: "15px", fontWeight: 700, marginBottom: "8px", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(196, 181, 253, 0.65)", fontSize: "13px", lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Divider */}
        <AnimatedSection>
          <div style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.4), transparent)",
            marginBottom: "80px",
          }} />
        </AnimatedSection>

        {/* Section: Security */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <AnimatedSection delay={0.05}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(34, 197, 94, 0.08)",
                border: "1px solid rgba(34, 197, 94, 0.25)",
                color: "#86efac",
                padding: "7px 16px",
                borderRadius: "100px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}>
                Seguridad
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 style={{
                fontSize: "clamp(26px, 4vw, 44px)",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                lineHeight: 1.15,
                marginBottom: "16px",
              }}>
                Seguridad y{" "}
                <span style={{
                  background: "linear-gradient(135deg, #22c55e, #16a34a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  trazabilidad
                </span>{" "}
                en cada acción
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <p style={{
                color: "rgba(196, 181, 253, 0.7)",
                fontSize: "16px",
                maxWidth: "500px",
                margin: "0 auto",
              }}>
                Diseñado para cumplir con los estándares del sector asegurador.
              </p>
            </AnimatedSection>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}>
            {security.map((item, i) => (
              <AnimatedSection key={i} delay={0.1 + i * 0.08}>
                <div style={{
                  background: "rgba(13, 13, 43, 0.7)",
                  border: "1px solid rgba(34, 197, 94, 0.15)",
                  borderRadius: "16px",
                  padding: "28px",
                  transition: "all 0.3s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(34, 197, 94, 0.35)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 35px rgba(34, 197, 94, 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(34, 197, 94, 0.15)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "16px" }}>{item.icon}</div>
                  <h3 style={{ color: "white", fontSize: "15px", fontWeight: 700, marginBottom: "8px", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(196, 181, 253, 0.65)", fontSize: "13px", lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
