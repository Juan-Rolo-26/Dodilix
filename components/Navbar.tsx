"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WA_NUMBER = "543518131093";
const WA_URL = `https://wa.me/${WA_NUMBER}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 0",
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(6, 6, 18, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124, 58, 237, 0.15)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(124, 58, 237, 0.4)",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L4 7v10l8 5 8-5V7L12 2z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M12 2v20M4 7l8 5 8-5" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </div>
          <span style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.5px",
          }}>
            Dodilix
          </span>
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(196, 181, 253, 0.85)",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(124, 58, 237, 0.25)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.6)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.25)";
              e.currentTarget.style.color = "rgba(196, 181, 253, 0.85)";
            }}
          >
            Hablar con un experto
          </a>
          <button
            onClick={scrollToContact}
            style={{
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              color: "white",
              padding: "8px 18px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(124, 58, 237, 0.4)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(124, 58, 237, 0.6)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(124, 58, 237, 0.4)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Solicitar demo
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
