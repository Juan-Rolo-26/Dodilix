"use client";

import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#a855f7" strokeWidth="1.8"/>
        <path d="M8 21h8M12 17v4" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M6 7h12M6 11h8" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Plataforma integral de gestión de siniestros",
    desc: "Gestión completa y trazable del ciclo de vida del siniestro. Desde la apertura hasta la liquidación final.",
    color: "#7c3aed",
    colorLight: "rgba(124, 58, 237, 0.15)",
    colorBorder: "rgba(124, 58, 237, 0.3)",
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14z" stroke="#ec4899" strokeWidth="1.8"/>
        <path d="M9 12l2 2 4-4" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16v6M8.5 19l3.5 3 3.5-3" stroke="#ec4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Agentes de IA para análisis y automatización",
    desc: "Análisis inteligente, generación de liquidaciones e informes. IA aplicada a cada etapa del proceso.",
    color: "#ec4899",
    colorLight: "rgba(236, 72, 153, 0.12)",
    colorBorder: "rgba(236, 72, 153, 0.3)",
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#3b82f6" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="9" cy="10" r="1" fill="#3b82f6"/>
        <circle cx="12" cy="10" r="1" fill="#3b82f6"/>
        <circle cx="15" cy="10" r="1" fill="#3b82f6"/>
      </svg>
    ),
    title: "Gestor de conversaciones omnicanal",
    desc: "Comunicación fluida, trazable e integrada al siniestro. WhatsApp, email y más en un solo lugar.",
    color: "#3b82f6",
    colorLight: "rgba(59, 130, 246, 0.12)",
    colorBorder: "rgba(59, 130, 246, 0.3)",
  },
];

export default function Arquitectura() {
  const scrollToSoluciones = () => {
    document.getElementById("soluciones")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #0c0530 60%, #060612 100%)",
    }}>
      {/* Background orbs */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "-50px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, transparent 70%)",
        filter: "blur(50px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "20%",
        left: "-50px",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)",
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
              Arquitectura
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
              Una solución integral,{" "}
              <span style={{
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                tres pilares
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p style={{
              color: "rgba(196, 181, 253, 0.7)",
              fontSize: "17px",
              maxWidth: "560px",
              margin: "0 auto",
            }}>
              Cada pilar está diseñado para funcionar de manera independiente o integrado
              con los demás, adaptándose a tu operación.
            </p>
          </AnimatedSection>
        </div>

        {/* Venn-style visual + pillars */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}>
          {/* Left: Venn diagram */}
          <AnimatedSection direction="left" delay={0.2}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "380px",
              position: "relative",
            }}>
              {/* Center glow */}
              <div style={{
                position: "absolute",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(200, 100, 255, 0.5), rgba(124, 58, 237, 0.2))",
                filter: "blur(15px)",
                zIndex: 1,
              }} />

              {/* Venn circles */}
              <svg width="360" height="340" viewBox="0 0 360 340" fill="none" style={{ position: "relative", zIndex: 2 }}>
                {/* Circle 1 - top: Platform */}
                <circle cx="180" cy="110" r="110" fill="rgba(124, 58, 237, 0.12)" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="1.5"/>
                {/* Circle 2 - bottom left: AI */}
                <circle cx="120" cy="230" r="110" fill="rgba(236, 72, 153, 0.10)" stroke="rgba(236, 72, 153, 0.35)" strokeWidth="1.5"/>
                {/* Circle 3 - bottom right: Omnichannel */}
                <circle cx="240" cy="230" r="110" fill="rgba(59, 130, 246, 0.10)" stroke="rgba(59, 130, 246, 0.35)" strokeWidth="1.5"/>

                {/* Labels */}
                <text x="180" y="55" textAnchor="middle" fill="rgba(196, 181, 253, 0.9)" fontSize="12" fontWeight="600">Plataforma</text>
                <text x="180" y="71" textAnchor="middle" fill="rgba(196, 181, 253, 0.9)" fontSize="12" fontWeight="600">de Gestión</text>

                <text x="62" y="290" textAnchor="middle" fill="rgba(249, 168, 212, 0.9)" fontSize="12" fontWeight="600">Agentes</text>
                <text x="62" y="306" textAnchor="middle" fill="rgba(249, 168, 212, 0.9)" fontSize="12" fontWeight="600">de IA</text>

                <text x="298" y="290" textAnchor="middle" fill="rgba(147, 197, 253, 0.9)" fontSize="12" fontWeight="600">Gestor</text>
                <text x="298" y="306" textAnchor="middle" fill="rgba(147, 197, 253, 0.9)" fontSize="12" fontWeight="600">Omnicanal</text>

                {/* Center label */}
                <text x="180" y="185" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Dodilix</text>
              </svg>
            </div>
          </AnimatedSection>

          {/* Right: Pillar cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {pillars.map((pillar, i) => (
              <AnimatedSection key={i} delay={0.2 + i * 0.1}>
                <div style={{
                  background: pillar.colorLight,
                  border: `1px solid ${pillar.colorBorder}`,
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${pillar.color}22`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
                >
                  <div style={{
                    width: "50px",
                    height: "50px",
                    minWidth: "50px",
                    borderRadius: "12px",
                    background: "rgba(0,0,0,0.2)",
                    border: `1px solid ${pillar.colorBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    {pillar.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: pillar.color,
                      letterSpacing: "0.06em",
                      marginBottom: "6px",
                    }}>
                      PILAR {pillar.number}
                    </div>
                    <h3 style={{ color: "white", fontSize: "15px", fontWeight: 700, marginBottom: "6px", lineHeight: 1.3 }}>
                      {pillar.title}
                    </h3>
                    <p style={{ color: "rgba(196, 181, 253, 0.65)", fontSize: "13px", lineHeight: 1.5 }}>
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.55}>
              <button
                onClick={scrollToSoluciones}
                style={{
                  background: "transparent",
                  color: "#c4b5fd",
                  padding: "14px 24px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "1px solid rgba(124, 58, 237, 0.35)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.6)";
                  e.currentTarget.style.background = "rgba(124, 58, 237, 0.1)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.35)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#c4b5fd";
                }}
              >
                Ver soluciones en detalle
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
