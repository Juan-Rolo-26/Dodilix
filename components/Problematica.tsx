"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const PARAGRAPH = "paragraph";
const BULLETS = "bullets";

const bulletItems = [
  "Tareas manuales enfrentando altos volumenes de casos",
  "Información dispersa en múltiples sistemas y herramientas",
  "Análisis inconsistente por falta de criterios unificados",
  "Comunicación desorganizada con asegurados y peritos",
  "Dificultad para escalar operaciones sin aumentar costos",
];

const CAROUSEL_IMAGES = [
  "carousel-1.avif",
  "carousel-2.avif",
  "carousel-3.avif",
  "carousel-4.jpg",
  "carousel-5.jpg",
];

export default function Problematica() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-120px" });

  const [hasStarted, setHasStarted] = useState(false);
  const [activeContent, setActiveContent] = useState<"paragraph" | "bullets">(PARAGRAPH);
  const [contentOpacity, setContentOpacity] = useState(1);

  // Carousel state
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Start the loop the first time the section enters the viewport
  useEffect(() => {
    if (sectionInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [sectionInView, hasStarted]);

  // Cycle: 9s visible → 1s fade out → switch → 1s fade in → repeat
  useEffect(() => {
    if (!hasStarted) return;

    const displayTimer = setTimeout(() => {
      // Fade out (1s)
      setContentOpacity(0);

      const switchTimer = setTimeout(() => {
        // Switch content and fade in (1s)
        setActiveContent((prev) => (prev === PARAGRAPH ? BULLETS : PARAGRAPH));
        setContentOpacity(1);
      }, 1000);

      return () => clearTimeout(switchTimer);
    }, 9000);

    return () => clearTimeout(displayTimer);
  }, [hasStarted, activeContent]);

  // Carousel auto-advance: 5s per image with crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #020208 0%, #04041a 50%, #020208 100%)",
      }}
    >
      {/* Background orb */}
      <div style={{
        position: "absolute",
        top: "30%",
        right: "-80px",
        width: "450px",
        height: "450px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="grid-2col" style={{
          display: "grid",
          gridTemplateColumns: "0.82fr 1.18fr",
          gap: "48px",
          alignItems: "center",
        }}>

          {/* Left: carousel */}
          <AnimatedSection direction="left" delay={0.05}>
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "4/5",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(124, 58, 237, 0.15)",
            }}>
              {/* All images stacked — CSS crossfade via opacity */}
              {CAROUSEL_IMAGES.map((img, i) => (
                <img
                  key={img}
                  src={`${basePath}/${img}`}
                  alt="Gestión de siniestros"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    opacity: i === carouselIndex ? 1 : 0,
                    transition: "opacity 1s ease-in-out",
                    zIndex: i === carouselIndex ? 1 : 0,
                  }}
                />
              ))}
              {/* Subtle dark gradient overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(6,6,18,0.5) 100%)",
                pointerEvents: "none",
                zIndex: 1,
              }} />
            </div>
          </AnimatedSection>

          {/* Right: content */}
          <div>
            <AnimatedSection delay={0.1}>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(236, 72, 153, 0.1)",
                border: "1px solid rgba(236, 72, 153, 0.35)",
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
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                marginBottom: "32px",
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

            {/* Rotating content area */}
            <AnimatedSection delay={0.3}>
              <div style={{ minHeight: "200px", position: "relative" }}>
                <div
                  style={{
                    opacity: contentOpacity,
                    transition: "opacity 1s ease",
                  }}
                >
                  {activeContent === PARAGRAPH ? (
                    <p style={{
                      color: "rgba(196, 181, 253, 0.85)",
                      fontSize: "clamp(19px, 1.8vw, 22px)",
                      lineHeight: 1.8,
                    }}>
                      Las aseguradoras enfrentan operaciones fragmentadas, herramientas desconectadas
                      y procesos manuales que generan demoras, inconsistencias y pérdida de control.
                      El volumen creciente de casos amplifica cada ineficiencia.
                    </p>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                      {bulletItems.map((item, i) => (
                        <motion.div
                          key={`${activeContent}-${i}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: 0.06 + i * 0.08,
                            ease: [0.2, 0.65, 0.25, 0.95],
                          }}
                          style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
                        >
                          <div style={{
                            width: "24px",
                            height: "24px",
                            minWidth: "24px",
                            borderRadius: "50%",
                            background: "rgba(236, 72, 153, 0.12)",
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
                          <span style={{
                            color: "rgba(196, 181, 253, 0.85)",
                            fontSize: "clamp(18px, 1.7vw, 21px)",
                            lineHeight: 1.6,
                            whiteSpace: "nowrap",
                          }}>
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
