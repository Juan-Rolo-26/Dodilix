"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import AnimatedSection from "./AnimatedSection";
import SplitText from "./SplitText";

const WA_NUMBER = "543518131093";
const WA_URL = `https://wa.me/${WA_NUMBER}`;

export default function QueEsDodilix() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/live-chatbot.json")
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
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, #060612 0%, #0a0620 60%, #060612 100%)",
    }}>
      {/* Purple orb */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "-120px",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.18) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          marginBottom: "8px",
        }}>

          {/* Left: title + text */}
          <div>
            <h2 style={{
              fontSize: "clamp(38px, 5vw, 64px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1.05,
              marginBottom: "36px",
              color: "white",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: "0.22em",
            }}>
              <SplitText
                text="¿Qué es"
                tag="span"
                splitType="chars"
                delay={38}
                duration={1.1}
                textAlign="left"
                className="title-left-split"
              />
              <SplitText
                text="Dodilix?"
                tag="span"
                splitType="chars"
                delay={38}
                duration={1.1}
                textAlign="left"
                className="title-brand-split"
              />
            </h2>

            <AnimatedSection direction="left" delay={0.12}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{
                  color: "rgba(196, 181, 253, 0.8)",
                  fontSize: "clamp(15px, 1.4vw, 17px)",
                  lineHeight: 1.8,
                }}>
                  Dodilix es una solución tecnológica diseñada para aseguradoras y organizaciones
                  que necesitan ordenar, automatizar y centralizar todo el ciclo de vida del siniestro.
                </p>
                <p style={{
                  color: "rgba(196, 181, 253, 0.8)",
                  fontSize: "clamp(15px, 1.4vw, 17px)",
                  lineHeight: 1.8,
                }}>
                  Desde la denuncia inicial hasta la liquidación final, cada etapa queda registrada,
                  analizada y gestionada dentro de un único ecosistema integrado.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: robot animation + CTA */}
          <AnimatedSection direction="right" delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
              <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                {animationData ? (
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    style={{ width: "100%", maxWidth: "460px" }}
                  />
                ) : (
                  <div style={{ width: "460px", height: "360px" }} />
                )}
              </div>

              <div style={{
                width: "100%",
                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.12), rgba(236, 72, 153, 0.07))",
                border: "1px solid rgba(124, 58, 237, 0.25)",
                borderRadius: "16px",
                padding: "28px",
                textAlign: "center",
              }}>
                <h3 style={{ color: "white", fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>
                  ¿Listo para transformar tu operación?
                </h3>
                <p style={{
                  color: "rgba(196, 181, 253, 0.65)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}>
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
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
