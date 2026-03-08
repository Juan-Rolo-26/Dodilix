"use client";

import { motion } from "framer-motion";

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
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reducción de costos operativos",
    desc: "Menos reprocesos, menor necesidad de personal adicional y optimización de recursos en toda la operación.",
  },
];

export default function Impacto() {
  return (
    <section id="beneficios" style={{
      padding: "0 24px 100px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #080420 60%, #060612 100%)",
    }}>
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
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}>
          {impactItems.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.48,
                delay: 0.04 + i * 0.06,
                ease: [0.2, 0.65, 0.25, 0.95],
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
                borderColor: "rgba(124, 58, 237, 0.5)",
                boxShadow: "0 16px 40px rgba(124, 58, 237, 0.24)",
                backgroundColor: "rgba(16, 16, 54, 0.92)",
              }}
              style={{
                gridColumn: i === impactItems.length - 1 ? "1 / -1" : "auto",
                background: "rgba(13, 13, 43, 0.78)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                borderRadius: "16px",
                padding: "28px",
                minHeight: i === impactItems.length - 1 ? "170px" : "220px",
                textAlign: i === impactItems.length - 1 ? "center" : "left",
                display: "flex",
                flexDirection: "column",
                alignItems: i === impactItems.length - 1 ? "center" : "flex-start",
                justifyContent: "center",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
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
                lineHeight: 1.35,
              }}>
                {item.title}
              </h3>
              <p style={{
                color: "rgba(196, 181, 253, 0.7)",
                fontSize: "14px",
                lineHeight: 1.65,
              }}>
                {item.desc}
              </p>
            </motion.article>
          ))}
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          flexWrap: "wrap",
          paddingTop: "34px",
        }}>
          {["Implementación progresiva", "Integración simple", "Pensado para operación real"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(196, 181, 253, 0.65)",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
