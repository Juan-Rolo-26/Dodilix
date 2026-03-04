"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LiquidEther = dynamic(() => import("./LiquidEther"), { ssr: false });

const WA_NUMBER = "543518131093";
const WA_URL = `https://wa.me/${WA_NUMBER}`;

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "120px 24px 80px",
      background: "#060612",
    }}>
      {/* LiquidEther background */}
      <LiquidEther
        colors={["#7c3aed", "#a855f7", "#ec4899", "#6d28d9"]}
        mouseForce={25}
        cursorSize={120}
        resolution={0.5}
        autoDemo={true}
        autoSpeed={0.4}
        autoIntensity={2.0}
        autoResumeDelay={1200}
      />

      {/* Dark overlay for text legibility */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(6,6,18,0.45) 0%, rgba(6,6,18,0.3) 50%, rgba(6,6,18,0.55) 100%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "860px" }}>
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: "clamp(36px, 6vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            marginBottom: "28px",
            color: "white",
          }}
        >
          Soluciones inteligentes para transformar la{" "}
          <span style={{
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            gestión de siniestros
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(196, 181, 253, 0.8)",
            lineHeight: 1.6,
            maxWidth: "680px",
            margin: "0 auto 44px",
          }}
        >
          <p style={{ marginBottom: "14px" }}>
            Optimizamos el ciclo completo del siniestro o parte del proceso mediante nuestra
            plataforma especializada con inteligencia artificial y comunicación omnicanal.
          </p>
          <p>
            Reducí tiempos, costos y problemas en tu operación.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "60px" }}
        >
          <button
            onClick={scrollToContact}
            style={{
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              color: "white",
              padding: "16px 32px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 8px 30px rgba(124, 58, 237, 0.5)",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(124, 58, 237, 0.7)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(124, 58, 237, 0.5)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Solicitar demo
          </button>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent",
              color: "white",
              padding: "16px 32px",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: 600,
              border: "1.5px solid rgba(255,255,255,0.25)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.7)";
              e.currentTarget.style.background = "rgba(124, 58, 237, 0.1)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96A16 16 0 0 0 15.04 16.09l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2"/>
            </svg>
            Hablar con un experto
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "rgba(196, 181, 253, 0.4)",
          fontSize: "12px",
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
