"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import AnimatedSection from "./AnimatedSection";

const WA_NUMBER = "543518131093";
const WA_URL = `https://wa.me/${WA_NUMBER}`;

export default function SobreDodilix() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/multitasking-nobg.json")
      .then((r) => r.json())
      .then((data) => setAnimationData(data))
      .catch(() => {});
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{
      padding: "100px 24px 80px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #0a0520 60%, #06060f 100%)",
    }}>
      {/* Orbs */}
      <div style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)",
        filter: "blur(60px)",
        transform: "translateX(-50%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "60px",
          alignItems: "start",
        }}>
          {/* Left: About text */}
          <div>
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
                marginBottom: "24px",
              }}>
                Sobre Dodilix
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 style={{
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
                marginBottom: "28px",
              }}>
                Tecnología que transforma la{" "}
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

            <AnimatedSection delay={0.25}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ color: "rgba(196, 181, 253, 0.75)", fontSize: "16px", lineHeight: 1.75 }}>
                  Dodilix es una empresa tecnológica enfocada en transformar la gestión de siniestros
                  en el sector asegurador. Nuestro propósito es optimizar procesos críticos mediante
                  una solución integral que combina plataforma especializada, inteligencia artificial
                  y comunicación omnicanal.
                </p>
                <p style={{ color: "rgba(196, 181, 253, 0.75)", fontSize: "16px", lineHeight: 1.75 }}>
                  Desarrollamos herramientas que permiten a aseguradoras y organizaciones ordenar,
                  automatizar y centralizar todo el ciclo de vida del siniestro, desde la denuncia
                  inicial hasta la liquidación final.
                </p>
                <p style={{ color: "rgba(196, 181, 253, 0.75)", fontSize: "16px", lineHeight: 1.75 }}>
                  A través de tecnología adaptable e integrable con sistemas existentes, reducimos
                  tiempos operativos, mejoramos la trazabilidad, aumentamos la consistencia en el
                  análisis y disminuimos costos. Nuestras soluciones son escalables y pensadas para
                  operaciones reales de alto volumen.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Values + CTA */}
          <div>
            <AnimatedSection delay={0.15}>
              <div style={{ marginBottom: "32px", display: "flex", justifyContent: "center" }}>
                {animationData ? (
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    style={{ width: "100%", maxWidth: "560px" }}
                  />
                ) : (
                  <div style={{ width: "560px", height: "440px" }} />
                )}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div style={{
                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.12), rgba(236, 72, 153, 0.07))",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                borderRadius: "16px",
                padding: "28px",
                textAlign: "center",
              }}>
                <h3 style={{ color: "white", fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>
                  ¿Listo para transformar tu operación?
                </h3>
                <p style={{ color: "rgba(196, 181, 253, 0.65)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                  Coordinamos una demo personalizada sin compromiso.
                </p>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button
                    onClick={scrollToContact}
                    style={{
                      background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                      color: "white",
                      padding: "12px 24px",
                      borderRadius: "10px",
                      fontSize: "14px",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 6px 20px rgba(124, 58, 237, 0.4)",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 10px 28px rgba(124, 58, 237, 0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 6px 20px rgba(124, 58, 237, 0.4)";
                    }}
                  >
                    Solicitar demo
                  </button>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "transparent",
                      color: "white",
                      padding: "12px 24px",
                      borderRadius: "10px",
                      fontSize: "14px",
                      fontWeight: 600,
                      border: "1px solid rgba(255,255,255,0.2)",
                      textDecoration: "none",
                      display: "inline-block",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.5)";
                      e.currentTarget.style.background = "rgba(124, 58, 237, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    Hablar con un experto
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer */}
        <AnimatedSection delay={0.3}>
          <div style={{
            marginTop: "80px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(124, 58, 237, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "white", fontWeight: 700, fontSize: "20px" }}>Dodilix</span>
            </div>
            <p style={{ color: "rgba(196, 181, 253, 0.4)", fontSize: "13px" }}>
              © {new Date().getFullYear()} Dodilix. Todos los derechos reservados.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
