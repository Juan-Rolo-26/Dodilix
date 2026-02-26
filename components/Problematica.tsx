"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Problematica() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !bgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = rect.top / window.innerHeight;
      bgRef.current.style.transform = `translateY(${progress * 40}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} style={{
      padding: "80px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background image — parallax */}
      <div ref={bgRef} style={{
        position: "absolute",
        top: "-60px",
        left: 0,
        right: 0,
        bottom: "-60px",
        backgroundImage: "url('/problematica-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        willChange: "transform",
      }} />
      {/* Subtle dark tint so the card pops */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(4, 2, 16, 0.52)",
        pointerEvents: "none",
      }} />

      {/* "Cartel" card — compacto */}
      <div style={{ maxWidth: "680px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 18 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: "rgba(7, 4, 26, 0.90)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(124, 58, 237, 0.28)",
            borderRadius: "24px",
            padding: "clamp(24px, 4vw, 44px)",
          }}
        >

          <AnimatedSection delay={0.1}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(236, 72, 153, 0.18)",
              border: "1px solid rgba(236, 72, 153, 0.45)",
              color: "#f9a8d4",
              padding: "6px 14px",
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}>
              Problemática
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 style={{
              fontSize: "clamp(24px, 3.5vw, 40px)",
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
            <div style={{ display: "flex", flexDirection: "column", gap: "11px", marginBottom: "20px" }}>
              {[
                "Altos volúmenes de casos",
                "Tareas manuales y reprocesos que generan demoras",
                "Información dispersa y comunicación fragmentada",
                "Inconsistencias y falta de control",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{
                    width: "20px",
                    height: "20px",
                    minWidth: "20px",
                    borderRadius: "50%",
                    background: "rgba(236, 72, 153, 0.22)",
                    border: "1px solid rgba(236, 72, 153, 0.55)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                  }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{ color: "rgba(255, 255, 255, 0.95)", fontSize: "clamp(13px, 1.4vw, 15px)", lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.45}>
            <div style={{
              borderTop: "1px solid rgba(124, 58, 237, 0.3)",
              paddingTop: "18px",
            }}>
              <p style={{
                fontSize: "clamp(14px, 1.6vw, 17px)",
                fontWeight: 700,
                lineHeight: 1.5,
                background: "linear-gradient(135deg, #c4b5fd, #f9a8d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Las organizaciones necesitan ordenar, automatizar y escalar sin perder trazabilidad ni calidad.
              </p>
            </div>
          </AnimatedSection>

        </motion.div>
      </div>
    </section>
  );
}
